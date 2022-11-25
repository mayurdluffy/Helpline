const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    name: { type: String, required: true },
    contact: { type: Number, required: true, unique: true},
    //address: { type: String},
    longitude: { type: String},
    lattitude: { type: String}

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema, 'users');