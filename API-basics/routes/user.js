import express from "express";
import { User } from "../models/user.js";

const router = express.Router();

router.get("/users/all", async (req, res) => {
  const users = await User.find({});

  res.json({
    success: true,
    users,
  });
});

router.post("/users/new", async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(req.body);

  await User.create({
    name,
    email,
    password,
  });

  res.status(201).cookie("temp", "lool").json({
    success: true,
    message: "Registered Successfully",
  });
});

router.get("/userid", async (req, res) => {
  const { id } = req.query.id;

  await User.findById(id);
});

export default router;
