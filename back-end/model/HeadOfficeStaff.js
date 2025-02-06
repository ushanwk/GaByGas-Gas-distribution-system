const mongoose = require('mongoose');

const HeadOfficeStaffSchema = new mongoose.Schema({
    H_Id: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    Role: { type: String, required: true }
})

module.exports = mongoose.model('HeadOfficeStaff', HeadOfficeStaffSchema);