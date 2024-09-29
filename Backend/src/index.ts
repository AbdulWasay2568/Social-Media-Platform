import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

// Import route modules
import { userRouter, postRouter, commentRouter, likeRouter} from './api/routes';

// Load environment variables from .env file
dotenv.config({ path: '.env' });

// Initialize express application
const app: Express = express();

// Enable CORS for all routes (with specific origin or open to all)
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests only from this origin
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Allowed HTTP methods
    credentials: true // Enable if you're using cookies or authentication headers
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize Prisma Client and log queries
export const prismaClient = new PrismaClient({
    log: ['query'],
});

// Simple route to test if backend is running
app.get('/', (req: Request, res: Response) => {
    res.send('Social Media Platform Backend is running!');
});

// Define the API routes
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/likes', likeRouter);
app.use('/comments', commentRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
