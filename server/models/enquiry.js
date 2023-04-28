const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enquirySchema = new Schema({
    
    enquiryId: { type: String, required: true, unique: true },
    parentRegdId: {type: String, required: true},
    type: {type: String, required: true},
    enquiry: {type: String, required: true},

}, { timestamps: true });


module.exports = mongoose.model('Enquiry', enquirySchema, 'enquiries');