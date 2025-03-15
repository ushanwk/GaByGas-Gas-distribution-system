const mongoose = require('mongoose');

const GasRequestOrder = new mongoose.Schema({
    GRO_Id: { type: String },
    Username: { type: String },
    Amount: { type: Number },
    Outlet_Id: { type: String },
    GasType: { type: String }
})

module.exports = mongoose.model('GasRequestOrder', GasRequestOrder);