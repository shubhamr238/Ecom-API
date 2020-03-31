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

module.exports.updateProduct = function(req,res){
    const qty = parseInt(req.query.number);
    console.log("params:", req.params.id, req.query.number);
    Product.findByIdAndUpdate(req.params.id, {$set:{quantity:qty}},{new:true}, function(err, newProduct){
      if(err){
        console.error("Error",err);
        return res.redirect("/");
      }
        console.log(newProduct);
        // newProduct.quantity=qty;
        // newProduct.save();
        return res.json({data:{
            product: newProduct,
            message: "updated succesfully"
        }});
        
    });  
};

module.exports.getProduct = function(req,res){
    Product.find({},function(err, products){
      if(err){
        console.log(err);
        return  res.redirect('/');
      }
      return  res.json({data:{
        products: products
      }});
    });
};

module.exports.deleteProduct = function(req, res) {

    Product.findByIdAndRemove(req.params.id, function(err) {
      if (err){
        console.error("Error in Deleting Product",err);
        return res.redirect("/");
      }else{
        return res.json({data:{message:"product deleted"}});
      }
    });
};