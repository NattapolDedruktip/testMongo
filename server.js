const express = require("express");
const app = express();
require("dotenv").config();

const mongodbConnect = require("./src/database/mongo");
const userModel = require("./src/model/user.model");

// Connect to MongoDB
mongodbConnect();

// Middleware to parse JSON
app.use(express.json());

// Create data
app.post("/", async (req, res) => {
  try {
    // Your logic to create data
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

// Start the server
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not defined
app.listen(port, () => console.log("Server running on port", port));
