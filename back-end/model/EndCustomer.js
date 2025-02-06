const mongoose = require('mongoose');

const EndCustomerSchema = new mongoose.Schema({
    C_Id: { type: String, required: true, unique: true },
    C_Name: { type: String, required: true },
    NIC: { type: String, required: true },
    Tel_No: { type: Number, required: true },
    Email: { type: String, required: true }
})

module.exports = mongoose.model('EndCustomer', EndCustomerSchema);