const userModel = require("../model/patient");
const asyncHandler = require("express-async-handler");

// const nodemailer = require("nodemailer");

const REGISTER_USER = asyncHandler(async (req, res) => {
  const { name, age, date, gender, number, disease, address, email } = req.body;

  const isUserExist = await userModel.findOne({ email: email });

  if (isUserExist) {
    res.status(400).send("Can't use the same email");
  }

  const createUser = await userModel.create({
    name,
    age,
    date,
    gender,
    number,
    disease,
    address,
    email,
  });

  if (createUser) {
    res.send(createUser);
  } else throw new Error();
});

module.exports = {
  REGISTER_USER,
};
