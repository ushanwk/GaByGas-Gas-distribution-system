const mongoose = require('mongoose');

const DeliveryScheduleScheme = new mongoose.Schema({
    DS_Id: { type: String, required: true, unique: true },
    Outlet_Id: { type: String, required: true },
    ReleaseDate: { type: Date, required: true },
    ReachingDate: { type: Date, required: true },
    Status: { type: String, required: true },
    S_Amount: { type: Number, required: true },
    L_Amount: { type: Number, required: true },
    Units_Amount: { type: Number, required: true },
    Latest_Updated: { type: Date, required: true },
})

module.exports = mongoose.model('DeliverySchedule', DeliveryScheduleScheme);