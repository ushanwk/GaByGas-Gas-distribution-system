const mongoose = require('mongoose');
const {v4: uuidv4} = require("uuid");

const OutletSchema = new mongoose.Schema({
<<<<<<< HEAD
    Outlet_Id: { type: String, required: true, unique: true },
    Location: { type: String, required: true },
    Name: { type: String, required: true }
=======
    Outlet_Id: { type: String, required: true, unique: true, default: uuidv4 },
    Name: { type: String, required: true },
    Location: { type: String, required: true }
>>>>>>> origin/dev-sathin
})

module.exports = mongoose.model('Outlet', OutletSchema);