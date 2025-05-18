import { db } from "../database/connection_db.js";

const getAllCategories = async () => {
  const result = await db.query("SELECT * FROM categories ORDER BY id ASC");
  console.log(result);
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

export const categoryModel = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};