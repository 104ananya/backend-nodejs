import mongoose from "mongoose";

// CREATING SCHEMA

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export const User = mongoose.model("BackendAPI", userSchema);
