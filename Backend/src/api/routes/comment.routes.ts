import { Router } from "express";
import {
    fetchCommentsController,
    createCommentController,
    updateCommentController,
    deleteCommentController
} from "../controllers/comment.controller";

const router = Router();

router.get("/:postID", fetchCommentsController); // Fetch comments for a specific post
router.post("/", createCommentController); // Create a new comment
router.put("/:commentID", updateCommentController); // Update a comment
router.delete("/:commentID", deleteCommentController); // Delete a comment

export default router;
