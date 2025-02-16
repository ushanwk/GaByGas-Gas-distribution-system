const DeliverySchedule = require("../model/DeliverySchedule");

// Get all delivery schedules
const getAllDeliverySchedules = async (req, res) => {
  try {
    const deliverySchedules = await DeliverySchedule.find();
    res.status(200).json(deliverySchedules);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch delivery schedules" });
  }
};

// Get a specific delivery schedule by DS_Id
const getDeliverySchedule = async (req, res) => {
  const deliveryScheduleId = req.params.id;
  try {
    const deliverySchedule = await DeliverySchedule.findOne({ DS_Id: deliveryScheduleId });
    if (!deliverySchedule) {
      return res.status(404).json({ error: "Delivery schedule not found" });
    }
    res.status(200).json(deliverySchedule);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch delivery schedule" });
  }
};

// Add a new delivery schedule
const addDeliverySchedule = async (req, res) => {
  const {
    DS_Id,
    Outlet_Id,
    ReleaseDate,
    ReachingDate,
    Status,
    S_Amount,
    L_Amount,
    Units_Amount,
    Latest_Updated,
  } = req.body;
  try {
    const newDeliverySchedule = await DeliverySchedule.create({
      DS_Id,
      Outlet_Id,
      ReleaseDate,
      ReachingDate,
      Status,
      S_Amount,
      L_Amount,
      Units_Amount,
      Latest_Updated,
    });
    res.status(201).json(newDeliverySchedule);
  } catch (error) {
    res.status(400).json({ error: "Failed to add delivery schedule" });
  }
};

// Update an existing delivery schedule
const updateDeliverySchedule = async (req, res) => {
  const deliveryScheduleId = req.params.id;
  const updates = req.body;
  try {
    const updatedDeliverySchedule = await DeliverySchedule.findOneAndUpdate(
      { DS_Id: deliveryScheduleId },
      updates,
      { new: true, runValidators: true }
    );
    if (!updatedDeliverySchedule) {
      return res.status(404).json({ error: "Delivery schedule not found" });
    }
    res.status(200).json(updatedDeliverySchedule);
  } catch (error) {
    res.status(400).json({ error: "Failed to update delivery schedule" });
  }
};

// Delete a delivery schedule
const deleteDeliverySchedule = async (req, res) => {
  const deliveryScheduleId = req.params.id;
  try {
    const deletedDeliverySchedule = await DeliverySchedule.findOneAndDelete({
      DS_Id: deliveryScheduleId,
    });
    if (!deletedDeliverySchedule) {
      return res.status(404).json({ error: "Delivery schedule not found" });
    }
    res.status(200).json({ message: "Delivery schedule deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete delivery schedule" });
  }
};

// Export the CRUD operations
module.exports = {
  getAllDeliverySchedules,
  getDeliverySchedule,
  addDeliverySchedule,
  updateDeliverySchedule,
  deleteDeliverySchedule,
};
