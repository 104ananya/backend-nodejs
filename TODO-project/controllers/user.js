import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});

  const keyword = req.query.keyword;
  console.log(keyword)

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


export const getUserDetails = async (req, res) => {
  const {id} = req.params;
  const user  = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};


