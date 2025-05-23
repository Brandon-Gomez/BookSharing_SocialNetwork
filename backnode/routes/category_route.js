import { Router } from "express";
import { categoryController } from "../controllers/category_controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/categories", verifyToken, categoryController.getAllCategories);
router.get("/admin/categories", verifyToken, categoryController.getAllCategories);
router.get("/admin/categories/:id", verifyToken, categoryController.getCategoryById);
router.post("/admin/categories", verifyToken, categoryController.createCategory);
router.put("/admin/categories/:id", verifyToken, categoryController.updateCategory);
router.delete("/admin/categories/:id", verifyToken, categoryController.deleteCategory);

export default router;