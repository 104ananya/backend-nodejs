import express from "express";
import { User } from "../models/user.js";
import { getAllUsers, idFunct, newUser } from "../controllers/user.js";

const router = express.Router();

router.get("/users/all", getAllUsers);

router.post("/users/new", newUser);

router.get("/userid", idFunct);

export default router;
