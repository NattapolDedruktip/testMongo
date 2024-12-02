const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const taskModel = new mogoose.Schema(
  {
    taskname: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { collection: "task", timestamps: true }
);

//create collection
module.exports = mongoose.model("task", taskModel);
