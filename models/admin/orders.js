const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    orderDate: {
        type: Date,
        default: Date.now
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: Number,
        price: Number,
        product_name: String
    }],
    total: {
        type: Number
    },
    shopTotal: {
        type: Number
    },
    delivery_fee: Number,
    address: {
        latitude: Number,
        longitude: Number
    },
    orderStatus: String,
    shippingDate: {
        type: Date,
    },
    orderType: {
        type: String,
        default: 'From user'
    },
    new:{
        type: Boolean,
        default: true
    },
    processed:{
        type: Boolean,
        default: false
    },
    option: String,
    eEmail: String,
    ePhone: Number,
    eName: String,
    orderNotes: {
        type: String,
        default: ''
    }
});

const Order = mongoose.model('Order', ordersSchema);

exports.Order = Order;

