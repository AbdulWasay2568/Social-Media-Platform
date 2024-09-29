import { Comment } from "@prisma/client";
import prismaClient from "../../prisma/prisma.client";
import { CreateCommentDto, UpdateCommentDto } from "../interfaces/comment.interface";

export const fetchComments = async (postID: number): Promise<Comment[]> => {
    return await prismaClient.comment.findMany({
        where: { postID },
        include: {
            user: true,
        },
    });
};

export const createComment = async (commentData: CreateCommentDto): Promise<Comment> => {
    return await prismaClient.comment.create({
        data: commentData,
    });
};

export const updateComment = async (commentID: number, commentData: UpdateCommentDto): Promise<Comment> => {
    return await prismaClient.comment.update({
        where: { commentID },
        data: commentData,
    });
};

export const deleteComment = async (commentID: number): Promise<void> => {
    await prismaClient.comment.delete({
        where: { commentID },
    });
};
