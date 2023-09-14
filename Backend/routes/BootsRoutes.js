const express = require('express');
const router = express.Router();
const bootsController = require('../controllers/BootsController');

router.get('/',bootsController.getAllBoots);

module.exports = router;