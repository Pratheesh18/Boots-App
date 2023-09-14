const Boot = require('../models/BootModel');
const Cart  = require('../models/CartModel');

const addItemToCart = async(req,res) => {
    try{
        const {userId} = req.user;
        const bootId = req.params.bootId;


        const boot = await Boot.findById(bootId);
        if(!boot){
            return res.status(404).json({message :  'Boot not found'});

        }
        let userCart = await Cart.findOne({userId});
        if(!userCart){
            userCart = new Cart({userId});
        }

        const existingCartItem = userCart.items.find((item) => item.bootId.toString() === bootId);
        if(existingCartItem){
            existingCartItem.quanity += 1;
        }else{
            userCart.items.push({bootId , quantity:1});
        }

        await userCart.save();
        res.status(200).json({message : 'Item added to Cart'});
    }catch(error){
        console.error(error);
        res.status(500).json({message : "server error"});
    }
};


const removeItemCart = async(req,res) => {
    try{
        const {userId} = req.user;
        const bootId = req.params.bootId;

        const userCart = await Cart.findOne({userId});

        if(!userCart){
            return res.status(404).json({message : "User cart not found"});
        }

        userCart.items = userCart.items.filter((item) => item.bootId.toString() !== bootId);
        await userCart.save();
        res.status(200).json({message : "Item removed from cart"});
    }catch (error){
        console.error(error);
        res.status(500).json({message : "Server error"});
    }
};


module.exports = {
    addItemToCart,
    removeItemCart,
};