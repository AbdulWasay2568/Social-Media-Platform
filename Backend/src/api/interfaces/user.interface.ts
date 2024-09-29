export interface CreateUserDto {
    name: string;
    email: string;
    password: string;
    bio?: string;
    DOB: Date;
}

export interface UpdateUserDto {
    name?: string;
    email?: string;
    password?: string;
    bio?: string;
    DOB?: Date;
}
