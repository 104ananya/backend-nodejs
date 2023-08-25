import express from "express";
import mongoose from "mongoose";

const app = express();

// using middleware
app.use(express.json());

// DATABASE CONNECTION

const DB =
  "mongodb+srv://ananya:pandathedon@database01.3djalcx.mongodb.net/contact?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Database Successfully connected");
  })
  .catch((err) => console.log(err));

// CREATING SCHEMA

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("BackendAPI", userSchema);

// CREATING ROUTES

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users/all", async (req, res) => {
  const users = await User.find({});

  res.json({
    success: true,
    users,
  });
});

app.post("/users/new", async (req, res) => {

  const {name, email, password} = req.body;
  // console.log(req.body);


  await User.create({
    name,
    email,
    password,
  });

  res.status(201).cookie("temp", "lool").json({
    success: true,
    message: "Registered Successfully"
  });
});

app.get("/userid", async (req, res) => {
  const {id} = req.query.id;

  await User.findById(id);
});

app.listen(5000, () => {
  console.log("Server is working");
});
