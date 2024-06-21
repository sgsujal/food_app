const mongooose =require('mongoose')

const {Schema } = mongooose;
const OrderSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    order_data: {
        type: Array,
        required: true,
    },

});
module.exports = mongooose.model('order',OrderSchema)