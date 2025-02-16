const EndCustomer = require("../model/EndCustomer");

// Get all customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await EndCustomer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch customers" });
  }
};

// Get a specific customer by C_Id
const getCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    const customer = await EndCustomer.findOne({ C_Id: customerId });
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch customer" });
  }
};

// Add a new customer
const addCustomer = async (req, res) => {
  const { C_Id, C_Name, NIC, Tel_No, Email } = req.body;
  try {
    const newCustomer = await EndCustomer.create({ C_Id, C_Name, NIC, Tel_No, Email });
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ error: "Failed to add customer" });
  }
};

// Update a customer's details
const updateCustomer = async (req, res) => {
  const customerId = req.params.id;
  const updates = req.body;
  try {
    const updatedCustomer = await EndCustomer.findOneAndUpdate(
      { C_Id: customerId },
      updates,
      { new: true, runValidators: true }
    );
    if (!updatedCustomer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(400).json({ error: "Failed to update customer" });
  }
};

// Delete a customer
const deleteCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    const deletedCustomer = await EndCustomer.findOneAndDelete({ C_Id: customerId });
    if (!deletedCustomer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete customer" });
  }
};

// Export the CRUD functions
module.exports = {
  getAllCustomers,
  getCustomer,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
