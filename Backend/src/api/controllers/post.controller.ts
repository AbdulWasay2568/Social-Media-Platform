import { Request, Response } from "express";
import { fetchPosts, createPost, readPost, updatePost, deletePost } from "../services/post.service";
import { CreatePostDto, UpdatePostDto } from "../interfaces/post.interface";

export const fetchPostsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const posts = await fetchPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch posts" });
    }
};

export const createPostController = async (req: Request, res: Response): Promise<void> => {
    try {
        const postData: CreatePostDto = req.body;
        const newPost = await createPost(postData);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: "Failed to create post" });
    }
};

export const readPostController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { postID } = req.params;
        const post = await readPost(Number(postID));
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ error: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch post" });
    }
};

export const updatePostController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { postID } = req.params;
        const postData: UpdatePostDto = req.body;
        const updatedPost = await updatePost(Number(postID), postData);
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: "Failed to update post" });
    }
};

export const deletePostController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { postID } = req.params;
        await deletePost(Number(postID));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete post" });
    }
};
