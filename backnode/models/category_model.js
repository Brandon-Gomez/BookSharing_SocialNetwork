import { db } from "../database/connection_db.js";

const getAllCategories = async () => {
  const query = `
    SELECT c.*, COUNT(p.id) AS post_count
    FROM categories c
    LEFT JOIN posts p ON p.category_id = c.id
    GROUP BY c.id
    ORDER BY c.id ASC
  `;
  const result = await db.query(query);
  return result.rows;
};

const getCategoryById = async (id) => {
  const result = await db.query("SELECT * FROM categories WHERE id = $1", [id]);
  return result.rows[0];
};

const createCategory = async (name, description) => {
  const result = await db.query(
    "INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *",
    [name, description]
  );
  return result.rows[0];
};

const updateCategory = async (id, name, description) => {
  const result = await db.query(
    "UPDATE categories SET name = $1, description = $2 WHERE id = $3 RETURNING *",
    [name, description, id]
  );
  return result.rows[0];
};

const deleteCategory = async (id) => {
  await db.query("DELETE FROM categories WHERE id = $1", [id]);
};

const getPostCountByCategory = async () => {
  const query = `
    SELECT c.name AS category, COUNT(p.id) AS total
    FROM categories c
    LEFT JOIN posts p ON p.category_id = c.id
    GROUP BY c.id, c.name
    ORDER BY c.id;
  `;
  const result = await db.query(query);
  return result.rows;
};

export const categoryModel = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getPostCountByCategory

};