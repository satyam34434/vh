const express = require("express");
const App = express();
const USER_ROUTER = require("./routes/userRoutes");
const Data = require("./config/Data");
const cors = require("cors");

App.use(cors());
App.use(express.json());
Data();
App.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something went wrong");
});

App.use("/user", USER_ROUTER);

App.post("/", (req, res) => {
  res.send("the post");
});

App.listen(7001, () => {
  console.log("server is started");
});
