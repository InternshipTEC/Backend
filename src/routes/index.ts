import express from "express";
import { router as userRoutes } from "./user/userRoutes";
import { router as authRoutes } from "./auth/authRoutes";

const router = express.Router();

router.use("/user", userRoutes);
router.use("/auth", authRoutes);

export { router };
