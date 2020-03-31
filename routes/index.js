const express = require('express');
const router = express.Router();

const productController = require("../controller/productController")

//route to /products
router.use('/products',require('./products'));


module.exports= router;