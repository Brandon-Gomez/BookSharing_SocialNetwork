import { Router } from "express";
import { userController } from "../controllers/user_controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";
import { userModel } from "../models/user_model.js"; // Asegúrate de importar el modelo de usuario

const router = Router()

router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
// router.post('/logout', userController.logoutUser)
router.get('/profile/:username', verifyToken, userController.profile)
router.post("/forgot-password", userController.generateResetToken);
router.post("/reset-password", userController.resetPassword);
router.put('/profile/:username/edit-account', userController.updateProfile);
router.get('/search', userController.searchUserBy);
router.get('/admin/users', verifyToken, userController.getAllUsers);
router.post('/admin/users', verifyToken, userController.createUser);
router.delete('/admin/users/:userId', verifyToken, userController.deleteUser);
router.get('/admin/users/:userId', verifyToken, userController.getUserById);
router.put('/admin/users/:userId', verifyToken, userController.updateUserById);
export default router;