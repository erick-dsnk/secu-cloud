import { Router } from "express";
import postUploadsController from "./controllers/uploads/postUploadsController";
import uploadWithErrors from "./middleware/uploadWithErrors";
import upload from "./storage";

const router = Router();

router.post("/uploads", uploadWithErrors, postUploadsController);

export default router;
