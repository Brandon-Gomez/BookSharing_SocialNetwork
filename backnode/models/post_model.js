import { db } from "../database/connection_db.js";

// Crear una nueva publicación
const addPost = async (userId, title, description, imageUrl, pdfUrl, category_id) => {
  const query = `
        INSERT INTO posts (user_id, title, description, image, pdf_file, category_id, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, NOW())
        RETURNING *;
    `;
  const values = [userId, title, description, imageUrl, pdfUrl,category_id];
  const result = await db.query(query, values);
  return result.rows[0];
};

// Editar una publicación
const editPost = async (postId, title, description, imageUrl, pdfUrl, category_id) => {
  const query = `
    UPDATE posts
    SET title = $1, description = $2, image = $3, pdf_file = $4, category_id = $5 ,updated_at = NOW()
    WHERE id = $6
    RETURNING *;
  `;
  const values = [title, description, imageUrl, pdfUrl, category_id, postId];
  const result = await db.query(query, values);
  return result;
};

// Eliminar una publicación
const deletePost = async (postId) => {
  const query = `
    DELETE FROM posts
    WHERE id = $1;
  `;
  await db.query(query, [postId]);
};

// Obtener todas las publicaciones
const getAllPosts = async () => {
  const query = `
    SELECT 
      posts.*,
      users.username, 
      categories.name AS category_name, 
      categories.description AS category_description,
      COALESCE(likes_count.total_likes, 0) AS total_likes
    FROM posts
    JOIN users ON posts.user_id = users.id
    JOIN categories ON posts.category_id = categories.id
    LEFT JOIN (
      SELECT post_id, COUNT(*) AS total_likes
      FROM likes
      GROUP BY post_id
    ) AS likes_count ON posts.id = likes_count.post_id
    ORDER BY posts.created_at DESC;
  `;
  const result = await db.query(query);
  return result.rows;
};

const getPostsByUser = async (userId) => {
  const query = `
    SELECT posts.*, users.username
    FROM posts
    JOIN users ON posts.user_id = users.id
    WHERE posts.user_id = $1
    ORDER BY posts.created_at DESC;
  `;
  const result = await db.query(query, [userId]);
  return result.rows;
};

// Obtener una publicación por ID
const getPostById = async (postId) => {
  const query = `
        SELECT posts.*, users.username
        FROM posts
        JOIN users ON posts.user_id = users.id
        WHERE posts.id = $1;
    `;
  const result = await db.query(query, [postId]);
  return result.rows[0];
};

const countPostsByUser = async (userId) => {
  const query = `
    SELECT COUNT(*) AS post_count
    FROM posts
    WHERE user_id = $1;
  `;
  const result = await db.query(query, [userId]);
  return result.rows[0].post_count; // Retorna el conteo de publicaciones
};

// Dar "me gusta" a una publicación
const likePost = async (postId, userId) => {
  const query = `
        INSERT INTO likes (post_id, user_id)
        VALUES ($1, $2)
        ON CONFLICT (post_id, user_id) DO NOTHING;
    `;
  await db.query(query, [postId, userId]);

  // Actualizar conteo de "me gusta"
  const updateQuery = `
        UPDATE posts
        SET likes_count = likes_count + 1
        WHERE id = $1
        RETURNING *;
    `;
  const result = await db.query(updateQuery, [postId]);
  return result.rows[0];
};

// Comentar una publicación
const commentOnPost = async (postId, userId, comment) => {
  const query = `
        INSERT INTO comments (post_id, user_id, comment)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;
  const result = await db.query(query, [postId, userId, comment]);
  return result.rows[0];
};

const deletePostById = async (postId) => {
  const query = `
    DELETE 
    FROM posts
    WHERE id = $1;
  `;
  await db.query(query, [postId]);
};

const deletePostsByUserId = async (userId) => {
  const query = `
    DELETE 
    FROM posts
    WHERE user_id = $1;
  `;
  await db.query(query, [userId]);
}

const incrementPostViews = async (postId) => {
  const query = `
    UPDATE posts
    SET views = views + 1
    WHERE id = $1
    RETURNING *;
  `;
  const result = await db.query(query, [postId]);
  return result.rows[0];
}

const countTotalPosts = async () => {
  const query = `
    SELECT COUNT(*) AS total_posts
    FROM posts;
  `;
  const result = await db.query
(query);
  return result.rows[0].total_posts; // Retorna el conteo total de publicaciones
}

// calcular el porcentaje sobre el total de libros que han sido leidos almenos una vez
const calculateReadPercentage = async () => {
  const query = `
    SELECT COUNT(*) AS total_read
    FROM posts
    WHERE views > 0; 
  `;
  const result = await db.query(query);
  const totalRead = result.rows[0].total_read;

  const totalPosts = await countTotalPosts();

  if (totalPosts === 0) return 0; // Evitar división por cero

  return (totalRead / totalPosts) * 100; // Retorna el porcentaje de libros leídos
}

const getPostsPerLast6Months = async () => {
  const sql = `
     WITH months AS (
      SELECT to_char(date_trunc('month', CURRENT_DATE) - INTERVAL '1 month' * (n), 'Mon') AS month,
             to_char(date_trunc('month', CURRENT_DATE) - INTERVAL '1 month' * (n), 'YYYY-MM') AS year_month,
             date_trunc('month', CURRENT_DATE) - INTERVAL '1 month' * (n) AS month_start
      FROM generate_series(0, 5) AS n
    )
    SELECT
      m.month,
      COALESCE(COUNT(p.id), 0) AS totalPosts
    FROM months m
    LEFT JOIN posts p
      ON date_trunc('month', p.created_at) = m.month_start
    GROUP BY m.month, m.year_month, m.month_start
    ORDER BY m.year_month
  `;
  const result = await db.query(sql);
  return result.rows;
};

const getPostsPaginated = async (limit, offset) => {
  const query = `
    SELECT 
      posts.id AS post_id,
      posts.title,
      posts.description,
      posts.user_id,
      posts.image,
      posts.pdf_file,
      posts.created_at,
      posts.updated_at,
      posts.views,
      posts.category_id,
      users.username,
      categories.name AS category_name,
      categories.description AS category_description,
      COALESCE(likes_count.total_likes, 0) AS total_likes
    FROM posts
    JOIN users ON posts.user_id = users.id
    JOIN categories ON posts.category_id = categories.id
    LEFT JOIN (
      SELECT post_id, COUNT(*) AS total_likes
      FROM likes
      GROUP BY post_id
    ) AS likes_count ON posts.id = likes_count.post_id
    ORDER BY posts.id ASC
    LIMIT $1 OFFSET $2
  `;
  const result = await db.query(query, [limit, offset]);
  return result.rows;
};

export const postModel = {
  addPost,
  editPost,
  deletePost,
  getAllPosts,
  getPostById,
  getPostsByUser,
  likePost,
  commentOnPost,
  countPostsByUser,
  deletePostById,
  deletePostsByUserId,
  incrementPostViews,
  countTotalPosts,
  calculateReadPercentage,
  getPostsPerLast6Months,
  getPostsPaginated
};
