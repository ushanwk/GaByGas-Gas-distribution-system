const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    Token_Id: { type: String, required: true, unique: true },
    GRO_Id: { type: String, required: true },
    DS_Id: { type: String, required: true },
    Status: { type: String, required: true }
})

module.exports = mongoose.model('Toekn', TokenSchema);