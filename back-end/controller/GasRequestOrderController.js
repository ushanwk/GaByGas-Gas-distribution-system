const GasRequestOrder = require("../model/GasRequestOrder");

// Get all gas request orders
const getAllGasRequestOrders = async (req, res) => {
  try {
    const gasRequestOrders = await GasRequestOrder.find();
    res.status(200).json(gasRequestOrders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gas request orders" });
  }
};

// Get a specific gas request order by GRO_Id
const getGasRequestOrder = async (req, res) => {
  const gasRequestOrderId = req.params.id;
  try {
    const gasRequestOrder = await GasRequestOrder.findOne({ GRO_Id: gasRequestOrderId });
    if (!gasRequestOrder) {
      return res.status(404).json({ error: "Gas request order not found" });
    }
    res.status(200).json(gasRequestOrder);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gas request order" });
  }
};

// Add a new gas request order
const addGasRequestOrder = async (req, res) => {
  const { GRO_Id, Username, Amount, Outlet_Id } = req.body;
  try {
    const newGasRequestOrder = await GasRequestOrder.create({ GRO_Id, Username, Amount, Outlet_Id });
    res.status(201).json(newGasRequestOrder);
  } catch (error) {
    res.status(400).json({ error: "Failed to add gas request order" });
  }
};

// Update an existing gas request order
const updateGasRequestOrder = async (req, res) => {
  const gasRequestOrderId = req.params.id;
  const updates = req.body;
  try {
    const updatedGasRequestOrder = await GasRequestOrder.findOneAndUpdate(
      { GRO_Id: gasRequestOrderId },
      updates,
      { new: true, runValidators: true }
    );
    if (!updatedGasRequestOrder) {
      return res.status(404).json({ error: "Gas request order not found" });
    }
    res.status(200).json(updatedGasRequestOrder);
  } catch (error) {
    res.status(400).json({ error: "Failed to update gas request order" });
  }
};

// Delete a gas request order
const deleteGasRequestOrder = async (req, res) => {
  const gasRequestOrderId = req.params.id;
  try {
    const deletedGasRequestOrder = await GasRequestOrder.findOneAndDelete({ GRO_Id: gasRequestOrderId });
    if (!deletedGasRequestOrder) {
      return res.status(404).json({ error: "Gas request order not found" });
    }
    res.status(200).json({ message: "Gas request order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete gas request order" });
  }
};

// Export the CRUD operations
module.exports = {
  getAllGasRequestOrders,
  getGasRequestOrder,
  addGasRequestOrder,
  updateGasRequestOrder,
  deleteGasRequestOrder,
};
