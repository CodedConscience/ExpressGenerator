const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    name:{
    type: String,
    require: true,
    unique: true,
    },
    image:{
        type: String,
        require: true,
    },
    featured:{
        type: String,
        default: false
    },
    description:{
        type: String,
        require: true,
        required: true,
    },
},{
    timestamps: true
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;