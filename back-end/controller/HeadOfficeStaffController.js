const HeadOfficeStaff = require("../model/HeadOfficeStaff");

const getAllHeadOfficeStaff = async (req, res) => {
  try {
    const staff = await HeadOfficeStaff.find();
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Head Office staff" });
  }
};

const getHeadOfficeStaff = async (req, res) => {
  const staffId = req.params.id; 
  try {
    const staffMember = await HeadOfficeStaff.findOne({ H_Id: staffId });
    if (!staffMember) {
      return res.status(404).json({ error: "Head Office staff member not found" });
    }
    res.status(200).json(staffMember);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Head Office staff member" });
  }
};

const addHeadOfficeStaff = async (req, res) => {
  const { H_Id, Name, Role } = req.body;
  try {
    const staffMember = await HeadOfficeStaff.create({ H_Id, Name, Role });
    res.status(201).json(staffMember);
  } catch (error) {
    res.status(400).json({ error: "Failed to create Head Office staff member" });
  }
};

const updateHeadOfficeStaff = async (req, res) => {
  const staffId = req.params.id; 
  const updates = req.body; 
  try {
    const updatedStaff = await HeadOfficeStaff.findOneAndUpdate(
      { H_Id: staffId },
      updates,
      { new: true, runValidators: true } 
    );
    if (!updatedStaff) {
      return res.status(404).json({ error: "Head Office staff member not found" });
    }
    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(400).json({ error: "Failed to update Head Office staff member" });
  }
};

const deleteHeadOfficeStaff = async (req, res) => {
  const staffId = req.params.id; 
  try {
    const deletedStaff = await HeadOfficeStaff.findOneAndDelete({ H_Id: staffId });
    if (!deletedStaff) {
      return res.status(404).json({ error: "Head Office staff member not found" });
    }
    res.status(200).json({ message: "Head Office staff member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Head Office staff member" });
  }
};

module.exports = {
  getAllHeadOfficeStaff,
  getHeadOfficeStaff,
  addHeadOfficeStaff,
  updateHeadOfficeStaff,
  deleteHeadOfficeStaff,
};
