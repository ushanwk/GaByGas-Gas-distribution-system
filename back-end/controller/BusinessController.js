const Business = require("../model/Business");

const getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find(); 
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch businesses" });
  }
};

const getBusiness = async (req, res) => {
  const businessID = req.params.id; 
  try {
    const business = await Business.findOne({ B_Id: businessID }); 
    if (!business) {
      return res.status(404).json({ error: "Business not found" });
    }
    res.status(200).json(business); 
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch business" });
  }
};


const addBusiness = async (req, res) => {
  const { B_Id, B_Name, Certificate, Tel_No, Email, O_NIC } = req.body;
  try {
    const business = await Business.create({ B_Id, B_Name, Certificate, Tel_No, Email, O_NIC });
    res.status(201).json(business); 
  } catch (error) {
    res.status(400).json({ error: "Failed to create business" });
  }
};


const updateBusiness = async (req, res) => {
  const businessID = req.params.id; 
  const updates = req.body; 
  try {
    const updatedBusiness = await Business.findOneAndUpdate(
      { B_Id: businessID },
      updates,
      { new: true, runValidators: true } 
    );
    if (!updatedBusiness) {
      return res.status(404).json({ error: "Business not found" });
    }
    res.status(200).json(updatedBusiness); 
  } catch (error) {
    res.status(400).json({ error: "Failed to update business" });
  }
};


const deleteBusiness = async (req, res) => {
  const businessID = req.params.id; 
  try {
    const deletedBusiness = await Business.findOneAndDelete({ B_Id: businessID });
    if (!deletedBusiness) {
      return res.status(404).json({ error: "Business not found" });
    }
    res.status(200).json({ message: "Business deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete business" });
  }
};


module.exports = {
  getAllBusinesses,
  getBusiness,
  addBusiness,
  updateBusiness,
  deleteBusiness,
};
