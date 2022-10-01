
const express = require("express");

const { addProduct, getProduct,OneProduct,editProduct} = require("../controllers/productControl");


const router = express.Router();
router.route("/").get(getProduct).post(addProduct);
router.route('/:id/getbook').get(OneProduct)
router.route("/:id/edit").post(editProduct);



module.exports = router;
