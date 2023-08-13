// staff model with name , email and id

const mongoose = require('mongoose');

const staffSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
}

);

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;