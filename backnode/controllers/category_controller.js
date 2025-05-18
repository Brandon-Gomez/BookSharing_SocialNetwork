import { categoryModel } from "../models/category_model.js";

const getAllCategories = async (req, res) => {
  const categories = await categoryModel.getAllCategories();
  if (!categories) return res.status(404).json({ message: "Error fetching categories" });
  res.json(categories);
};

const getCategoryById = async (req, res) => {
  const category = await categoryModel.getCategoryById(req.params.id);
  if (!category) return res.status(404).json({ message: "No encontrada" });
  res.json(category);
};

const createCategory = async (req, res) => {
  const { name, description } = req.body;
  const category = await categoryModel.createCategory(name, description);
  res.status(201).json(category);
};

const updateCategory = async (req, res) => {
  const { name, description } = req.body;
  const category = await categoryModel.updateCategory(
    req.params.id,
    name,
    description
  );
  res.json(category);
};

const deleteCategory = async (req, res) => {
  await categoryModel.deleteCategory(req.params.id);
  res.json({ message: "Categoría eliminada" });
};

export const categoryController = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
