const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    jobType: { type: String, required: true },
    cv: { type: String, required: true }, // Store file path or filename
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
