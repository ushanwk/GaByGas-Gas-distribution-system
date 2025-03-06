const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import UUID

const DeliveryScheduleScheme = new mongoose.Schema({
    DS_Id: { type: String, required: true, unique: true, default: uuidv4 },
    Outlet_Id: { type: String, required: true },
    ReleaseDate: { type: Date, required: true },
    ReachingDate: { type: Date, required: true },
    Status: { type: String, required: true },
    S_Amount: { type: Number, required: true },
    L_Amount: { type: Number, required: true },
})

module.exports = mongoose.model('DeliverySchedule', DeliveryScheduleScheme);