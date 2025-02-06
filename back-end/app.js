const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/db");


dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();


// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("GasByGas API is running...");
});

// Export app
module.exports = app;
