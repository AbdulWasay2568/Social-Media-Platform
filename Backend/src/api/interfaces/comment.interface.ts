export interface CreateCommentDto {
    userID: number;
    postID: number;
    content: string;
}

export interface UpdateCommentDto {
    content: string;
}