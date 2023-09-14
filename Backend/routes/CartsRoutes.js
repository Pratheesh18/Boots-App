
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/CartController');
const authenticateUser = require('../middleware/Auth');

// Add Item to Cart
router.post('/add/:bootId', authenticateUser, cartController.addItemToCart);

// Remove Item from Cart
router.delete('/remove/:bootId', authenticateUser, cartController.removeItemCart);



module.exports = router;
