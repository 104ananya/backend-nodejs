import express from "express";
import { newTask } from "../controllers/task.js";

const router = express.Router();

// creating routes
router.post("/new", newTask)

export default router;
