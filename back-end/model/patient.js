const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    date: {
      type: String,
      lastActiveAt: Date,
    },
    gender: {
      type: String,
    },
    number: {
      type: Number,
    },
    disease: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model("patients", userModel);
module.exports = user;
