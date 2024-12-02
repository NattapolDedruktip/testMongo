const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const userModel = new mogoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { collection: "user", timestamps: true }
);

//create collection
module.exports = mongoose.model("user", userModel);
