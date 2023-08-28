import express from "express";
import { User } from "../models/user.js";
import { getAllUsers, getUserDetails, newUser } from "../controllers/user.js";

const router = express.Router();

router.get("/users/all", getAllUsers);

router.post("/users/new", newUser);

router
    .route("/userid/:id")
    .get(getUserDetails);

export default router;
