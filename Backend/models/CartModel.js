const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    items : [
        {
            bootId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Boot',
                required : true,
            },
            quantity : {
                type : Number,
                default : 1,
            }
        }
    ]
});

const Cart = mongoose.model('Cart' , cartSchema);


module.exports = Cart;