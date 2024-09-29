import { Like } from "@prisma/client";
import prismaClient from "../../prisma/prisma.client";
import { CreateLikeDto } from "../interfaces/like.interface";

export const fetchLikes = async (): Promise<Like[]> => {
    return await prismaClient.like.findMany({
        include: {
            post: true,
            user: true,
        },
    });
};

export const createLike = async (likeData: CreateLikeDto): Promise<Like> => {
    // Check if the like already exists
    const existingLike = await prismaClient.like.findUnique({
        where: {
            postID_userID: {
                postID: likeData.postID,
                userID: likeData.userID,
            },
        },
    });

    if (existingLike) {
        throw new Error("You have already liked this post.");
    }

    return await prismaClient.like.create({
        data: likeData,
    });
};

export const deleteLike = async (likeID: number): Promise<void> => {
    await prismaClient.like.delete({
        where: { likeID },
    });
};
