const { getRounds } = require("bcrypt");
const express = require("express");

const { addProduct, getProduct } = require("../controllers/productControl");

const router = express.Router();
router.route("/").get(getProduct).post(addProduct);

module.exports = router;
