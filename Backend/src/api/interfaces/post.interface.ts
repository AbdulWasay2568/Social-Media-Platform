export interface CreatePostDto {
    userID: number;
    content: string;
    imageURL?: string;
}

export interface UpdatePostDto {
    content?: string;
    imageURL?: string;
}

export interface CreateLikeDto {
    postID: number;
    userId: number;
}

export interface CreateCommentDto {
    userID: number;
    postID: number;
    content: string;
}

export interface UpdateCommentDto {
    content: string;
}