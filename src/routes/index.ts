import express from "express";
import { router as userRoutes } from "./user/userRoutes";

const router = express.Router();

router.use("/user", userRoutes);

export { router };
