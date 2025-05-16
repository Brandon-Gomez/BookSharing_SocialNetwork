/** @format */

import { db } from "../database/connection_db.js";
import bcryptjs from "bcryptjs";

const createUser = async ({ email, password, username, termsAccepted }) => {
  const query = {
    text: `
        INSERT INTO users (email, password, username, terms_accepted)
        VALUES ($1, $2, $3, $4)
        RETURNING email, username, id
        `,
    values: [email, password, username, termsAccepted],
  };

  const { rows } = await db.query(query);
  return rows[0];
};



const findUserByEmail = async (email) => {
  const query = {
    text: `
        SELECT * FROM users
        WHERE EMAIL = $1
        `,
    values: [email],
  };
  const { rows } = await db.query(query);
  return rows[0];
};

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return passwordRegex.test(password);
};

// Guardar el token de restablecimiento y su expiración
const saveResetToken = async (email, resetToken) => {
  const query = {
    text: `
        UPDATE users
        SET reset_token = $1, reset_token_expiry = NOW() + INTERVAL '1 hour'
        WHERE email = $2
        `,
    values: [resetToken, email],
  };
  await db.query(query);
};

// Limpiar el token de restablecimiento
const clearResetToken = async (email) => {
  const query = {
    text: `
        UPDATE users
        SET reset_token = NULL, reset_token_expiry = NULL
        WHERE email = $1
        `,
    values: [email],
  };

  await db.query(query);
};

// Actualizar la contraseña
const updatePassword = async (email, hashedPassword) => {
  const query = {
    text: `
        UPDATE users
        SET password = $1
        WHERE email = $2
        `,
    values: [hashedPassword, email],
  };

  try {
    const result = await db.query(query);
    return result.rowCount > 0;
  } catch (error) {
    console.error("Error updating password:", error);
    return false;
  }
};

const findUserByUsername = async (username) => {
  const result = await db.query(
    `
        SELECT * FROM users WHERE username = $1
        `,
    [username]
  );

  if (result.rows.length > 0) {
    return result.rows[0]; // Devuelve el primer usuario encontrado
  }
  return null;
};

const updateUserByUsername = async (username, data) => {
  try {
    const result = await db.query(
      "UPDATE users SET name = $1, birthdate = $2, gender = $3, description = $4 WHERE username = $5 RETURNING *",
      [data.name, data.birthdate, data.gender, data.description, username]
    );

    // Verificar si se ha actualizado algún registro
    if (result.rowCount === 0) {
      throw new Error("Usuario no encontrado para actualización");
    }

    return result;
  } catch (error) {
    console.error("Error en la actualización del usuario:", error);
    throw error; // Propagar el error para que sea capturado en el controlador
  }
};

const updatePhotoByUsername = async (username, photo) => {
  try {
    const result = await db.query(
      "UPDATE users SET PROFILE_PICTURE = $1 WHERE username = $2 RETURNING *",
      [photo, username]
    );

    // Verificar si se ha actualizado algún registro
    if (result.rowCount === 0) {
      throw new Error("Usuario no encontrado para actualización");
    }

    return result;
  } catch (error) {
    console.error("Error en la actualización del usuario:", error);
    throw error; // Propagar el error para que sea capturado en el controlador
  }
};

const searchUsers = async (query) => {
  try {
    console.log("Consulta SQL para:", query); // Log para ver el query
    const result = await db.query(
      "SELECT id, username, name, email FROM users WHERE username ILIKE $1 OR name ILIKE $1 OR email ILIKE $1",
      [`%${query}%`] // Interpolación para la búsqueda
    );
    console.log("Resultado SQL:", result.rows); // Verifica los resultados SQL
    return result.rows; // Devuelve las filas encontradas
  } catch (err) {
    console.error("Error en el modelo:", err); // Loguea el error
    throw err;
  }
};

const getUserById = async (userId) => {
  const query = `
    SELECT *
    FROM users
    WHERE id = $1;
  `;
  const result = await db.query(query, [userId]);
  return result.rows[0];
};

const isAdmin = async (userId) => {
  const query = `
    SELECT is_admin = TRUE AS is_admin
    FROM users
    WHERE id = $1;
  `;
  const result = await db.query(query, [userId]);
  return result.rows[0].is_admin;
}

const getAllUsers = async () => {
  const query = "SELECT * FROM users;";
  const result = await db.query(query);
  return result.rows;
}

const createUserWithDetails = async ({
 email, password, username, name, birthdate, description, is_admin
}) => {
  const query = {
    text: `
        INSERT INTO users (email, password, username, name, birthdate, description, is_admin)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING email, username, id
        `,
    values: [email, password, username, name, birthdate, description, is_admin],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

const deleteUser = async (userId) => {
  const query = {
    text: `
        DELETE FROM users
        WHERE id = $1
        `,
    values: [userId],
  };

  const { rowCount } = await db.query(query);
  return rowCount > 0; 
}

const updateUserById = async (userId, data) => {
  try {
    // Construir dinámicamente la consulta y los valores
    let fields = [];
    let values = [];
    let idx = 1;

    if (data.email) {
      fields.push(`email = $${idx++}`);
      values.push(data.email);
    }
    if (data.password) {
      fields.push(`password = $${idx++}`);
      values.push(data.password);
    }
    if (data.username) {
      fields.push(`username = $${idx++}`);
      values.push(data.username);
    }
    if (data.name) {
      fields.push(`name = $${idx++}`);
      values.push(data.name);
    }
    if (data.birthdate) {
      fields.push(`birthdate = $${idx++}`);
      values.push(data.birthdate);
    }
    if (data.description) {
      fields.push(`description = $${idx++}`);
      values.push(data.description);
    }

    if (fields.length === 0) {
      throw new Error("No hay campos para actualizar");
    }

    values.push(userId);

    const query = `
      UPDATE users SET ${fields.join(", ")}
      WHERE id = $${idx}
      RETURNING *
    `;

    const result = await db.query(query, values);

    if (result.rowCount === 0) {
      throw new Error("Usuario no encontrado para actualización");
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error en la actualización del usuario:", error);
    throw error;
  }
};
  

export const userModel = {
  createUser,
  findUserByEmail,
  validatePassword,
  saveResetToken,
  clearResetToken,
  updatePassword,
  //updateUserByEmail,
  findUserByUsername,
  updateUserByUsername,
  searchUsers,
  updatePhotoByUsername,
  getUserById,
  isAdmin,
  getAllUsers,
  createUserWithDetails,
  deleteUser,
  updateUserById
};
