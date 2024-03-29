const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    userName: { type: String, required: true },
    contactNo: { type: Number, required: true, unique: true},
    regdId: {type: String, required: true, unique: true},
    location: { type: String},
    accessToken: {type: String, require: true, unique: true},

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema, 'users');