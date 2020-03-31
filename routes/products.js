const express = require("express");

const router = express.Router();

const productController = require("../controller/productController");

//different routes
router.post("/create", productController.addProduct);
router.post("/:id/update_quantity", productController.updateProduct);
router.get("/", productController.getProduct);
router.post("/:id", productController.deleteProduct);

module.exports = router;