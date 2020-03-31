const express = require("express");

const router = express.Router();

const productController = require("../controller/productController");

router.post("/create", productController.addProduct);
router.post("/:id/update_quantity", productController.updateProduct);

module.exports = router;