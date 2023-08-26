import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js"

const app = express();

// using middleware
app.use(express.json());
app.use(userRouter);

// DATABASE CONNECTION

const DB =
  "mongodb+srv://ananya:pandathedon@database01.3djalcx.mongodb.net/contact?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Database Successfully connected");
  })
  .catch((err) => console.log(err));



// CREATING ROUTES

app.get("/", (req, res) => {
  res.send("Hello World");
});



app.listen(5000, () => {
  console.log("Server is working");
});
