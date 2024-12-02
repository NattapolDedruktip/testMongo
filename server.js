const express = require("express");
const app = express();
require("dotenv").config();

const mongodbConnect = require("./src/database/mongo");
const userModel = require("./src/model/user.model");
const { default: mongoose } = require("mongoose");
const { mongodb } = require("./src/model/mongo.model");

// Connect to MongoDB
mongodbConnect();

// Middleware to parse JSON
app.use(express.json());

// Create data
app.post("/", async (req, res) => {
  try {
    // Your logic to create data
    const { name, age } = req.body;
    console.log(name, age);
    const data = await mongodb.user.create({ name, age });
    res.status(201).json({ message: "Data created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all data
app.get("/all", async (req, res) => {
  try {
    // Your logic to fetch data
    const data = await userModel.find({});
    res.status(200).json({ user: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//update
app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = await mongodb.user.updateOne({ _id, id }, { name });
  res.status(200).json({ data: user });
});

//delete
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await userModel.deleteOne({ _id: id });
  return res.status(204).send("delete user");
});

// Start the server
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not defined
app.listen(port, () => console.log("Server running on port", port));
