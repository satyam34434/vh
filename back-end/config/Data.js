const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = mongoose.connect(
      "mongodb+srv://kumarrahulsindhu:9334555698@cluster.sxxu39c.mongodb.net/"
    );

    console.log(`monogDB is connected ${(await conn).connection.host}`);
  } catch (error) {
    console.log(`Error ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
