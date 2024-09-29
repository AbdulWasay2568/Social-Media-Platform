import { Request, Response } from "express";
import { fetchLikes, createLike, deleteLike } from "../services/like.service";
import { CreateLikeDto } from "../interfaces/like.interface";

export const fetchLikesController = async (req: Request, res: Response): Promise<void> => {
    try {
        const likes = await fetchLikes();
        res.status(200).json(likes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch likes" });
    }
};

export const createLikeController = async (req: Request, res: Response): Promise<void> => {
    try {
        const likeData: CreateLikeDto = req.body;
        const newLike = await createLike(likeData);
        res.status(201).json(newLike);
    } catch (error) {
        res.status(500).json({ error: "Failed to create post" });
    }
};

export const deleteLikeController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { likeID } = req.params;
        await deleteLike(Number(likeID));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete like" });
    }
};
