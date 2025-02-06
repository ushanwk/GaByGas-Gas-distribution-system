const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
    B_Id: {type: String, required: true, unique: true},
    B_Name: { type: String, required: true },
    Certificate: { type: String, required: true },
    Tel_No: { type: Number, required: true },
    Email: { type: String, required: true },
    O_NIC: {type: String, required: true},
})

module.exports = mongoose.model('Business', BusinessSchema);