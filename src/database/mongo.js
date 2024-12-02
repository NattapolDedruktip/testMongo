const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const MONGODB_URL = "mongodb://localhost:27017/test";

module.exports = async function mongodbConnect() {
  try {
    await mogoose.connect(MONGODB_URL);
    console.log("connect success!");
  } catch (error) {
    mongoose.disconnect();
    console.log("Fail to connect mongo db ", error);
  }
};
