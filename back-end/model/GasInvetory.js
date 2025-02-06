const mongoose = require('mongoose');

const GasInventorySchema = new mongoose.Schema({
    GI_Id: { type: String, required: true, unique: true },
    S_Amount: { type: Number, required: true },
    L_Amount: { type: Number, required: true }
})

module.exports = mongoose.model('GasInventory', GasInventorySchema);