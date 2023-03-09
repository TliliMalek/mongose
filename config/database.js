const mongoose = require("mongoose");
const database = () => {
  try {
    mongoose.connect(process.env.mongourl);
    console.log("database connected successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = database;
