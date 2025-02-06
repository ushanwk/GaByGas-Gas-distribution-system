const mongoose = require('mongoose');

const OutletSchema = new mongoose.Schema({
    Outlet_Id: { type: String, required: true, unique: true },
    Location: { type: String, required: true }
})

module.exports = mongoose.model('Toekn', OutletSchema);