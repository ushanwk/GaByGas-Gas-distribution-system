const User = require("../model/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

const getUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findOne({ Username: userId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

const addUser = async (req, res) => {
  const { Username, Password, Role } = req.body;
  try {
    const user = await User.create({ Username, Password, Role });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Failed to create user" });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updates = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { Username: userId },
      updates,
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: "Failed to update user" });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findOneAndDelete({ Username: userId });
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
