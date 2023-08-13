// rightsmodel with id , staff_id and rights
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rightsSchema = new Schema({
  
    staff_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
    }],
    rights: {
        type: String,
        required: true
    }
}, 
    {
    timestamps: true,
}
);

module.exports = mongoose.model('Rights', rightsSchema);



