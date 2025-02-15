const GasInventory=require("../model/GasInvetory");


const getAllGasInvetory = async (req, res) => {
    try {
        const gasInvetory  = await GasInventory.find(); 
        res.status(200).json(gasInvetory);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch GasInventory" });
      }
};
const getGasInvetory = async (req, res) => {
    const gasInventoryID = req.params.id;
    try {
      const gasInvetory = await GasInventory.findById({GI_Id : gasInventoryID});
      if (!gasInvetory) {
        return res.status(404).json({ error: "GasInvetory not found" });
      }
      res.status(200).json(gasInvetory);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch GasInvetory" });
    }
};
const addGasInvetory = async (req, res) => {
    const { GI_Id, S_Amount, L_Amount } = req.body;
    try {
      const gasInvetory = await GasInventory.create( { GI_Id, S_Amount, L_Amount });
      res.status(201).json(gasInvetory);
    } catch (error) {
      res.status(400).json({ error: "Failed to create gasInvetory" });
    }
};
const updateGasInvetory = async (req, res) => {
    const gasInventoryID = req.params.id;
    const updates = req.body;
    try {
      const updatedGasInventory = await GasInventory.findOneAndUpdate(
        {GI_Id:gasInventoryID}, 
        updates, 
        {  new: true,runValidators: true}
    );
      if (!updatedGasInventory) {
        return res.status(404).json({ error: "GasInventory not found" });
      }
      res.status(200).json(updatedGasInventory);
    } catch (error) {
      res.status(400).json({ error: "Failed to update GasInventory" });
    }
}
const deleteGasInventory = async (req, res) => {
    const gasInventoryID = req.params.id; 
    try {
      const deletedGasInventory = await GasInventory.findOneAndDelete({ GI_Id: gasInventoryID });
      if (!deletedGasInventory) {
        return res.status(404).json({ error: "Gas Inventory not found" });
      }
      res.status(200).json({ message: "Gas Inventory deleted successfully" }); 
    } catch (error) {
      res.status(500).json({ error: "Failed to delete Gas Inventory" }); 
    }
};

module.exports = {
    getAllGasInvetory,
    getGasInvetory,
    addGasInvetory,
    updateGasInvetory,
    deleteGasInventory
  };