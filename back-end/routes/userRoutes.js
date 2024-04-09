const express = require("express");
const ROUTER = express.Router();

const { REGISTER_USER } = require("../controllers/UserControllers");

ROUTER.route("/register").post(REGISTER_USER);

module.exports = ROUTER;
