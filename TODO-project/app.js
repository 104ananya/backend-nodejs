import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

export const app = express();

config({
  // path: __dirname + "/.env",
  path: "./data/config.env"
})

// using middleware
app.use(express.json());
app.use(userRouter);

// CREATING ROUTES

app.get("/", (req, res) => {
  res.send("Hello World");
});
