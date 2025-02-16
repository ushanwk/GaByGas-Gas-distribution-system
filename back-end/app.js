const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
const gasInventoryRoutes = require('./routes/gasInventoryRoutes');
const businessRoutes = require('./routes/BusinessRoutes');
const userRoutes = require('./routes/UserRoutes');
const headOfficeStaffRoutes = require('./routes/HeadOfficeStaffRoutes');
const outletRoutes = require('./routes/outletRoutes');
const endCustomerRoutes = require('./routes/EndCustomerRoutes');
const tokenRoutes = require('./routes/TokenRoutes');
const gasRequestOrderRoutes = require('./routes/GasRequestOrderRoutes');
const deliveryScheduleRoutes = require('./routes/DeliveryScheduleRoutes');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();


// Middleware
app.use(express.json());
app.use(cors());


app.use('/api/gasInventory', gasInventoryRoutes);
app.use('/api/business', businessRoutes);
app.use('/api/users', userRoutes);
app.use('/api/headOfficeStaff', headOfficeStaffRoutes);
app.use('/api/outlets', outletRoutes);
app.use('/api/endCustomers', endCustomerRoutes);
app.use('/api/tokens', tokenRoutes);
app.use('/api/gasRequestOders', gasRequestOrderRoutes);
app.use('/api/deliverySchedules', deliveryScheduleRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("GasByGas API is running...");
});

// Export app
module.exports = app;
