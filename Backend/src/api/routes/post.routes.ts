// src/routes/postRoutes.ts
import { Router } from "express";
import {
    fetchPostsController,
    createPostController,
    readPostController,
    updatePostController,
    deletePostController
} from "../controllers/post.controller";

const router = Router();

router.get("/", fetchPostsController);
router.post("/", createPostController);
router.get("/:postID", readPostController);
router.put("/:postID", updatePostController);
router.delete("/:postID", deletePostController);

export default router;
