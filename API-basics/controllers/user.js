import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});

  res.json({
    success: true,
    users,
  });
};

export const newUser = async (req, res) => {
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
};

export const idFunct = async (req, res) => {
  const { id } = req.query.id;

  await User.findById(id);
};
