// src/services/postService.ts
import { Post } from "@prisma/client";
import prismaClient from "../../prisma/prisma.client";
import { CreatePostDto, UpdatePostDto } from "../interfaces/post.interface";

export const fetchPosts = async (): Promise<Post[]> => {
    return await prismaClient.post.findMany({
        include: {
            user: true,
            likesList: true,
            commentsList: true,
        },
    });
};

export const createPost = async (postData: CreatePostDto): Promise<Post> => {
    return await prismaClient.post.create({
        data: postData,
    });
};

export const readPost = async (postID: number): Promise<Post | null> => {
    return await prismaClient.post.findUnique({
        where: { postID },
        include: {
            user: true,
            likesList: true,
            commentsList: true,
        },
    });
};

export const updatePost = async (postID: number, postData: UpdatePostDto): Promise<Post> => {
    return await prismaClient.post.update({
        where: { postID },
        data: postData,
    });
};

export const deletePost = async (postID: number): Promise<void> => {
    await prismaClient.post.delete({
        where: { postID },
    });
};
