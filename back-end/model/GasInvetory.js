const mongoose = require('mongoose');

const GasInventorySchema = new mongoose.Schema({
    GI_Id: { type: String, required: true, unique: true },
    Gas_Type: { type: String, required: true},
    Amount: { type: Number, required: true }
})

module.exports = mongoose.model('GasInventory', GasInventorySchema);