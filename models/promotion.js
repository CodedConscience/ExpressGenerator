const { stringify } = require('jade/lib/utils');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose); //importing mongoose currency from mongoose
const Currency = mongoose.Types.Currency

const promotionSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    cost: {
        type: Currency,
        min: 0,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{ timestamp: true  
});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;