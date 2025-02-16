const Token = require("../model/Token");

// Get all tokens
const getAllTokens = async (req, res) => {
  try {
    const tokens = await Token.find();
    res.status(200).json(tokens);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tokens" });
  }
};

// Get a specific token by Token_Id
const getToken = async (req, res) => {
  const tokenId = req.params.id;
  try {
    const token = await Token.findOne({ Token_Id: tokenId });
    if (!token) {
      return res.status(404).json({ error: "Token not found" });
    }
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch token" });
  }
};

// Add a new token
const addToken = async (req, res) => {
  const { Token_Id, GRO_Id, DS_Id, Status } = req.body;
  try {
    const newToken = await Token.create({ Token_Id, GRO_Id, DS_Id, Status });
    res.status(201).json(newToken);
  } catch (error) {
    res.status(400).json({ error: "Failed to add token" });
  }
};

// Update a token's details
const updateToken = async (req, res) => {
  const tokenId = req.params.id;
  const updates = req.body;
  try {
    const updatedToken = await Token.findOneAndUpdate(
      { Token_Id: tokenId },
      updates,
      { new: true, runValidators: true }
    );
    if (!updatedToken) {
      return res.status(404).json({ error: "Token not found" });
    }
    res.status(200).json(updatedToken);
  } catch (error) {
    res.status(400).json({ error: "Failed to update token" });
  }
};

// Delete a token
const deleteToken = async (req, res) => {
  const tokenId = req.params.id;
  try {
    const deletedToken = await Token.findOneAndDelete({ Token_Id: tokenId });
    if (!deletedToken) {
      return res.status(404).json({ error: "Token not found" });
    }
    res.status(200).json({ message: "Token deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete token" });
  }
};

// Export the CRUD functions
module.exports = {
  getAllTokens,
  getToken,
  addToken,
  updateToken,
  deleteToken,
};
