import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const getAllUsers = async (req, res) => {};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  // finding user
  let user = await User.findOne({ email });

  // if exists
  if (user)
    return res.status(404).json({
      success: false,
      message: "User already exists",
    });

  // else if not exists

  const hashedPassword = await bcrypt.hash(password, 10);
  user = await User.create({ name, email, password: hashedPassword });

  // create token
  const token = jwt.sign({_id: user._id});

  res.status(201).cookie("token").json({
    success: true,
    message: "Registration successful",
  });
};

export const login = async (req, res, next) => {};

export const getUserDetails = async (req, res) => {};
