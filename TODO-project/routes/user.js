import express from "express";
import {
  getAllUsers,
  getUserDetails,
  login,
  newUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", newUser);

router.post("/login", login);

router.route("/userid/:id").get(getUserDetails);

export default router;
