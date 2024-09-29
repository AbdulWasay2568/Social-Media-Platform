import { Router } from "express";
import {
    fetchLikesController,
    createLikeController,
    deleteLikeController
} from "../controllers/like.controller";

const router = Router();

router.get("/", fetchLikesController);
router.post("/", createLikeController);
router.delete("/:likeID", deleteLikeController);

export default router;
