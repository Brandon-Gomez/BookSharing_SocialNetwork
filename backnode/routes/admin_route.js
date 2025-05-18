import { Router } from "express";
import { adminController } from "../controllers/admin_controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";
import { postController } from "../controllers/post_controller.js";
import { userController } from "../controllers/user_controller.js"; // Asegúrate de importar el controlador de usuario
const router = Router()

router.get('/admin/verifyAdmin', verifyToken, adminController.verifyAdmin);
router.get('/admin/dashboard', verifyToken, adminController.dashboard);
router.get('/posts', verifyToken, postController.getAllPosts); 
router.get('/admin/post-edit/:id', verifyToken, postController.getPostById);


export default router;