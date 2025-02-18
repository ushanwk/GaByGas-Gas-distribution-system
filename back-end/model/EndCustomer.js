const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import UUID

const EndCustomerSchema = new mongoose.Schema({
    C_Id: { type: String, required: true, unique: true, default: uuidv4 },
    C_Name: { type: String, required: true },
    NIC: { type: String, required: true },
    Tel_No: { type: Number, required: true },
    Email: { type: String, required: true }
})

module.exports = mongoose.model('EndCustomer', EndCustomerSchema);