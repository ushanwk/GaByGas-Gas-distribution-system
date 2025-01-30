const express = require("express");
const app = express();

const PORT = process.env.PORT || 8089;

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "🔥 GasByGas API is running..." });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
