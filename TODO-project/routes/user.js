import express from "express";
import {
  getAllUsers,
  getUserDetails,
  login,
  register,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/register", register);

router.post("/login", login);

router.route("/userid/:id").get(getUserDetails);

export default router;
