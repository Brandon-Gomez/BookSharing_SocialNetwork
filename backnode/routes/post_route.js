import { Router } from "express";
import { postController } from "../controllers/post_controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post("/posts", verifyToken, upload.fields([{ name: 'images', maxCount: 5 }, { name: 'pdf', maxCount: 1 }]), postController.createMyPost);
router.get("/posts", verifyToken, postController.getPostsPaginated);
router.get("/posts/user/:userId", verifyToken, postController.getPostsByUser);
router.delete("/posts/user/:userId", verifyToken, postController.deletePostsByUserId);
// router.get('/posts/paginated', postController.getPostsPaginated);
router.get("/posts/top", verifyToken, postController.getTop5PostsOfWeek);
router.get("/posts/:id", verifyToken, postController.getPostById);
router.put("/posts/:id", verifyToken, upload.fields([{ name: 'images', maxCount: 5 }, { name: 'pdf', maxCount: 1 }]), postController.editPost);
router.delete("/posts/:id", verifyToken, postController.deletePostById);
router.post("/posts/:id/like", verifyToken, postController.likePost);
router.post("/posts/:id/comment", verifyToken, postController.commentOnPost);
router.get('/posts/count/:userId', postController.getPostCountByUser);
router.put("/posts/:id/views", postController.incrementPostViews);
router.get("/posts/:id/next", verifyToken, postController.getNextPost);
router.get("/posts/:id/prev", verifyToken, postController.getPrevPost);
router.get("/profile/:username/posts", verifyToken, postController.getPostsByUsername);

export default router;
