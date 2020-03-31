const mongoose = require('mongoose');

const Product = require('../models/product');


module.exports.addProduct = function(req,res){
    // Add Product to Database
    Product.create(req.body, function(err, product){
        if(err){
            console.error(err);
            return  res.redirect('/')
        }
        return  res.json({product})
    });
};