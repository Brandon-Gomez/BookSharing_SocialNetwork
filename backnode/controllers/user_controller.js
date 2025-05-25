import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { userModel } from "../models/user_model.js";
import { postModel } from "../models/post_model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password, termsAccepted } = req.body;

    // Verificar si el usuario aceptó los términos
    if (!termsAccepted) {
      return res
        .status(400)
        .json({ ok: false, msg: "DEBES ACEPTAR LOS TÉRMINOS Y CONDICIONES" });
    }

    //verificar condiciones de la contraseña
    const isValidPassword = userModel.validatePassword(password);
    if (!isValidPassword) {
      return res
        .status(400)
        .json({ error: "PASSWORD DOES NOT MEET REQUIREMENTS" });
    }

    //verificar si hay campos incompletos
    if (!username || !password || !email) {
      return res.status(400).json({ ok: false, msg: "CAMPOS INCOMPLETOS" });
    }

    //verificar si el correo ya existe
    const existingEmail = await userModel.findUserByEmail(email);
    if (existingEmail) {
      return res
        .status(400)
        .json({ ok: false, msg: "EL CORREO YA ESTÁ REGISTRADO" });
    }

    //verificar si el usuario ya existe
    const existingUsername = await userModel.findUserByUsername(username);
    if (existingUsername) {
      return res
        .status(400)
        .json({ ok: false, msg: "EL NOMBRE DE USUARIO YA ESTÁ REGISTRADO" });
    }

    //encriptar contraseña
    const salt = await bcryptjs.genSalt(7);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //crear usuario
    const newUser = await userModel.createUser({
      email,
      password: hashedPassword,
      username,
      termsAccepted,
    });

    //crear token
    const token = jwt.sign(
      { username: newUser.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );

    return res.status(201).json({ ok: true, msg: "USUARIO REGISTRADO", token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: "ERROR SERVER REGISTER" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // console.log("SOLICITUD", codigo)

    //verificar si hay campos incompletos
    if (!email || !password) {
      return res.status(400).json({ error: "CAMPOS INCOMPLETOS" });
    }

    //verificar si el usuario existe
    const user = await userModel.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: "USER NOT FOUND" });
    }

    //verificar que la contraseña es correcta
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "INVALID CREDENTIALS" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );

    return res.json({
      ok: true,
      msg: "LOGIN CORRECTO",
      token,
      username: user.username,
      is_admin: user.is_admin,
      userData: {
        // id: user.id,
        // email: user.email,
        // username: user.username,
        // name: user.name,
        // birthdate: user.birthdate,
        // description: user.description,
        profile_picture: user.profile_picture,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: "ERROR SERVER LOGIN" });
  }
};

// const logoutUser = async (req, res) => {
//     try {
//         // En caso de que estés usando una cookie para almacenar el token, puedes borrarla aquí.
//         //res.clearCookie('token'); // Si es que el JWT está en una cookie

//         // Si el token se gestiona en el frontend (en localStorage, por ejemplo), sólo respondemos con un éxito
//         return res.status(200).json({ ok: true, msg: 'Sesión cerrada correctamente' });

//     } catch (error) {
//         console.error("Error en logout:", error);
//         return res.status(500).json({ ok: false, msg: 'Error en el servidor al cerrar la sesión' });
//     }
// };

const profile = async (req, res) => {
  try {
    const { username } = req.params;

    // Buscar el usuario por el username en la URL
    const user = await userModel.findUserByUsername(username);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verificar si req.username existe

    // Comparar con el usuario autenticado
    const isCurrentUser = req.email === user.email;

    // res.json({
    //     user,
    //     isCurrentUser
    // });

    res.json({
      user: { ...user, userId: user.id }, // Incluir el userId
      isCurrentUser,
    });
  } catch (error) {
    console.error("Error en profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Generar el token de restablecimiento de contraseña
const generateResetToken = async (req, res) => {
  try {
    const { email } = req.body;

    // Verificar si el correo existe
    const user = await userModel.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: "EMAIL NOT FOUND" });
    }

    // Generar el token de restablecimiento, con expiración de 1 hora
    const resetToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });

    // Guardar el token y la expiración en la base de datos (para poder invalidarlo más tarde)
    await userModel.saveResetToken(email, resetToken);

    return res.status(200).json({
      message: "Token de restablecimiento generado con éxito",
      resetToken, // Enviar el token al frontend para que el usuario lo use
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "ERROR SERVER TOKEN" });
  }
};

// Restablecer la contraseña
const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    console.log("Received token:", token); // Verifica si el token es recibido
    console.log("New password:", newPassword); // Verifica la nueva contraseña

    // Verificar si el token es válido
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica el token
    const user = await userModel.findUserByEmail(decoded.email);
    if (!user) {
      return res.status(400).json({ error: "INVALID OR EXPIRED TOKEN" });
    }

    // Verificar que la nueva contraseña cumpla con los requisitos
    const isValidPassword = userModel.validatePassword(newPassword);
    if (!isValidPassword) {
      return res
        .status(400)
        .json({ error: "PASSWORD DOES NOT MEET REQUIREMENTS" });
    }

    // Encriptar la nueva contraseña antes de guardarla
    const salt = await bcryptjs.genSalt(7);
    const hashedPassword = await bcryptjs.hash(newPassword, salt);

    // Actualizar la contraseña del usuario
    const isUpdated = await userModel.updatePassword(
      user.email,
      hashedPassword
    );
    if (!isUpdated) {
      return res.status(500).json({ error: "ERROR UPDATING PASSWORD" });
    }

    // Limpiar el token de restablecimiento
    await userModel.clearResetToken(user.email);

    return res.status(200).json({ message: "PASSWORD UPDATE SUCCESSFULLY" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "ERROR SERVER PASSWORD" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const {
      id,
      name,
      username,
      description,
      gender,
      profile_picture,
      password,
    } = req.body;

    // Si se quiere cambiar el username, validar que no exista
    if (username && username !== req.params.username) {
      const existingUser = await userModel.findUserByUsername(username);
      if (existingUser) {
        return res
          .status(400)
          .json({ ok: false, msg: "EL NOMBRE DE USUARIO YA ESTÁ REGISTRADO" });
      }
    }

    // Construir solo los campos que llegan
    const updateFields = { name, gender, description };
    if (birthdate !== undefined) updateFields.birthdate = birthdate;
    if (profile_picture) updateFields.profile_picture = profile_picture;
    if (password) {
      const salt = await bcryptjs.genSalt(7);
      const hashedPassword = await bcryptjs.hash(password, salt);
      updateFields.password = hashedPassword;
    }

    if (username && username !== req.params.username)
      updateFields.username = username;

    // Realizar la actualización
    const updatedUser = await userModel.updateUserByUsername(
      req.params.username,
      updateFields
    );

    if (!updatedUser || updatedUser.rowCount === 0) {
      return res
        .status(404)
        .json({ ok: false, msg: "Usuario no encontrado para actualizar" });
    }

    return res.json({
      ok: true,
      msg: "Perfil actualizado",
      user: updatedUser.rows ? updatedUser.rows[0] : updatedUser,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ ok: false, msg: "Error al actualizar el perfil" });
  }
};

const searchUserBy = async (req, res) => {
  const { query } = req.query;
  console.log("Parámetro recibido:", query);

  try {
    const users = await userModel.searchUsers(query);
    console.log("Usuarios encontrados:", users);
    res.status(200).json(users);
  } catch (err) {
    console.error("Error en la búsqueda de usuarios:", err);
    res.status(500).json({ error: "Error en la búsqueda de usuarios" });
  }
};

const getUserProfileWithPostCount = async (req, res) => {
  const userId = req.params.userId;

  try {
    const userProfile = await userModel.getUserById(userId); // Método que obtiene datos básicos del usuario
    const postCount = await postModel.countPostsByUser(userId); // Método que cuenta las publicaciones del usuario

    if (!userProfile) {
      return res.status(404).json({ message: "User not found" });
    }

    // Incluye el conteo de publicaciones en la respuesta del perfil del usuario
    res.status(200).json({ ...userProfile, postCount });
  } catch (error) {
    console.error("Error fetching user profile with post count:", error);
    res.status(500).json({ message: "Error fetching user profile" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

const createUser = async (req, res) => {
  try {
    const {
      email,
      password,
      username,
      name,
      birthdate,
      description,
      is_admin,
    } = req.body;

    // Encriptar contraseña
    const salt = await bcryptjs.genSalt(7);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Crear usuario
    const newUser = await userModel.createUserWithDetails({
      email,
      password: hashedPassword,
      username,
      name,
      birthdate,
      description,
      is_admin,
    });

    return res
      .status(201)
      .json({ ok: true, msg: "USUARIO CREADO", userId: newUser.id });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: "ERROR SERVER CREATE USER" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const deletedUser = await userModel.deleteUser(userId);
    return res
      .status(200)
      .json({ ok: true, msg: "USUARIO ELIMINADO", userId: deletedUser });
    if (!deletedUser) {
      return res.status(404).json({ ok: false, msg: "USUARIO NO ENCONTRADO" });
    }

    return res.status(200).json({ ok: true, msg: "USUARIO ELIMINADO" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: "ERROR SERVER DELETE USER" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    // Obtener usuario por ID
    const user = await userModel.getUserById(userId);

    if (!user) {
      return res.status(404).json({ ok: false, msg: "USUARIO NO ENCONTRADO" });
    }

    return res.status(200).json({ ok: true, msg: "USUARIO ENCONTRADO", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: "ERROR SERVER GET USER" });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    let { email, password, username, name, birthdate, description, is_admin } =
      req.body;

    // Solo encripta y agrega la contraseña si viene en el body
    let dataToUpdate = {
      email,
      username,
      name,
      birthdate,
      description,
      is_admin,
    };

    if (password && password.trim() !== "") {
      const salt = await bcryptjs.genSalt(7);
      const hashedPassword = await bcryptjs.hash(password, salt);
      dataToUpdate.password = hashedPassword;
    }

    // Actualizar usuario
    const updatedUser = await userModel.updateUserById(userId, dataToUpdate);

    if (!updatedUser) {
      return res.status(404).json({ ok: false, msg: "USUARIO NO ENCONTRADO" });
    }

    return res.status(200).json({ ok: true, msg: "USUARIO ACTUALIZADO" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: "ERROR SERVER UPDATE USER" });
  }
};

const updateProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, password, gender, username } = req.body;

    let hashedPassword = null;
    if (password && password.trim() !== "") {
      const salt = await bcryptjs.genSalt(7);
      hashedPassword = await bcryptjs.hash(password, salt);
    } else {
      const user = await userModel.getUserById(id);
      if (!user) {
        return res.status(404).json({ ok: false, msg: "Usuario no encontrado" });
      }
      hashedPassword = user.password;
    }

    const updatedUser = await userModel.updateProfileById(
      id,
      name,
      description,
      hashedPassword,
      gender,
      username
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ ok: false, msg: "Usuario no encontrado para actualizar" });
    }

    return res
      .status(200)
      .json({ ok: true, msg: "Nombre actualizado", user: updatedUser });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ ok: false, msg: "Error al actualizar el nombre" });
  }
};

const getUsersPaginated = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const offset = (page - 1) * limit;

  try {
    const users = await userModel.getUsersPaginated(offset, limit);
    const total = await userModel.countTotalUsers();
    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      page,
      totalPages,
      total,
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const userController = {
  registerUser,
  loginUser,
  // logoutUser,
  profile,
  generateResetToken,
  resetPassword,
  updateProfileById,
  searchUserBy,
  getUserProfileWithPostCount,
  getAllUsers,
  createUser,
  deleteUser,
  getUserById,
  updateUserById,
  getUsersPaginated,
};
