const { getRounds } = require("bcrypt");
const express = require("express");

const { addProduct, getProduct,OneProduct } = require("../controllers/productControl");

const router = express.Router();
router.route("/").get(getProduct).post(addProduct);
router.route('/:id/getbook').get(OneProduct)

module.exports = router;
