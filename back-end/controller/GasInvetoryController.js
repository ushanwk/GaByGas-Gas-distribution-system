const GasInventory=require("../model/GasInvetory");


const getAllGasInvetory = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
      }
};

const getGasInvetory = async (req, res) => {};
const addGasInvetory = async (req, res) => {};
const updateGasInvetory = async (req, res) => {};
const deleteGasInvetory = async (req, res) => {};
