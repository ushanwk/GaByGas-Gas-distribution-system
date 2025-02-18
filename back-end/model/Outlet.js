const mongoose = require('mongoose');
const {v4: uuidv4} = require("uuid");

const OutletSchema = new mongoose.Schema({
    Outlet_Id: { type: String, required: true, unique: true, default: uuidv4 },
    Name: { type: String, required: true },
    Location: { type: String, required: true }
})

module.exports = mongoose.model('Outlet', OutletSchema);