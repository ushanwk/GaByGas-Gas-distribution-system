const mongoose = require('mongoose');

const GasRequestOrder = new mongoose.Schema({
    GRO_Id: { type: String, required: true, unique: true },
    Username: { type: String, required: true },
    Amount: { type: Number, required: true },
    Outlet_Id: { type: String, required: true }
})

module.exports = mongoose.model('GasRequestOrder', GasRequestOrder);