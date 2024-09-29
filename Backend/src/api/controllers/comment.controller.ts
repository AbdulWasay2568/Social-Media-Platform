import { Request, Response } from "express";
import {
    fetchComments,
    createComment,
    updateComment,
    deleteComment
} from "../services/comment.service";
import { CreateCommentDto, UpdateCommentDto } from "../interfaces/comment.interface";

export const fetchCommentsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { postID } = req.params;
        const comments = await fetchComments(Number(postID));
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
};

export const createCommentController = async (req: Request, res: Response): Promise<void> => {
    try {
        const commentData: CreateCommentDto = req.body;
        const newComment = await createComment(commentData);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: "Failed to create comments" });
    }
};

export const updateCommentController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { commentID } = req.params;
        const commentData: UpdateCommentDto = req.body;
        const updatedComment = await updateComment(Number(commentID), commentData);
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ error: "Failed to update comment" });
    }
};

export const deleteCommentController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { commentID } = req.params;
        await deleteComment(Number(commentID));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
};
