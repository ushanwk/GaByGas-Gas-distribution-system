const Outlet = require("../model/Outlet");

const getAllOutlets = async (req, res) => {
  try {
    const outlets = await Outlet.find();
    res.status(200).json(outlets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch outlets" });
  }
};

const getOutlet = async (req, res) => {
  const outletId = req.params.id; 
  try {
    const outlet = await Outlet.findOne({ Outlet_Id: outletId });
    if (!outlet) {
      return res.status(404).json({ error: "Outlet not found" });
    }
    res.status(200).json(outlet);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch outlet" });
  }
};

const addOutlet = async (req, res) => {
  const { Name, Location } = req.body;
  try {
    const outlet = await Outlet.create({ Name, Location });
    res.status(201).json(outlet);
  } catch (error) {
    res.status(400).json({ error: "Failed to create outlet" });
  }
};

const updateOutlet = async (req, res) => {
  const outletId = req.params.id; 
  const updates = req.body; 
  try {
    const updatedOutlet = await Outlet.findOneAndUpdate(
      { Outlet_Id: outletId },
      updates,
      { new: true, runValidators: true } 
    );
    if (!updatedOutlet) {
      return res.status(404).json({ error: "Outlet not found" });
    }
    res.status(200).json(updatedOutlet);
  } catch (error) {
    res.status(400).json({ error: "Failed to update outlet" });
  }
};

const deleteOutlet = async (req, res) => {
  const outletId = req.params.id; 
  try {
    const deletedOutlet = await Outlet.findOneAndDelete({ Outlet_Id: outletId });
    if (!deletedOutlet) {
      return res.status(404).json({ error: "Outlet not found" });
    }
    res.status(200).json({ message: "Outlet deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete outlet" });
  }
};

module.exports = {
  getAllOutlets,
  getOutlet,
  addOutlet,
  updateOutlet,
  deleteOutlet,
};
