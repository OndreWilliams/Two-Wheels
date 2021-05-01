const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const db = require("../../db/models");
const { Product } = db;


router.get('/', asyncHandler(async (req, res) => {
  const products = await db.Product.findAll();
  // console.log("*********************");
  // console.log(products);
  // console.log("*********************");

  res.json({products});
}));

router.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findByPk(productId);
  console.log("*********************");
  console.log(product);
  console.log("*********************");
  if (product) {
    return res.json({
      product,
    });
  } else {
      next(productNotFoundError(productId));
  }
}));

const productNotFoundError = (productId) => {
  const productError = new Error("Product ID could not be found.");
  productError.title = "Product not found.";
  productError.status = 404;
  return productError;
}

module.exports = router;
