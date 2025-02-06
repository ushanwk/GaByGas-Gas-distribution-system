const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

console.log("🔍 MongoDB URI:", process.env.MONGO_URI); // Debugging

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Stop app if DB connection fails
  }
};

// Import models here
require("../model/HeadOfficeStaff");
require("../model/EndCustomer");
require("../model/Business");
require("../model/DeliverySchedule");
require("../model/GasInvetory");
require("../model/GasRequestOrder");
require("../model/Outlet");
require("../model/Token");
require("../model/User");

module.exports = connectDB;
