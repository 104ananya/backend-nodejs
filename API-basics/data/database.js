import mongoose from "mongoose";
// DATABASE CONNECTION

const DB =
  "mongodb+srv://ananya:pandathedon@database01.3djalcx.mongodb.net/contact?retryWrites=true&w=majority";

export const connectDB = () => {
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Database Successfully connected");
    })
    .catch((err) => console.log(err));
};
