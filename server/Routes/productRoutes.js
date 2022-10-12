
const express = require("express");

const { addProduct, getProduct,OneProduct,editProduct,review} = require("../controllers/productControl");


const router = express.Router();
router.route("/").get(getProduct).post(addProduct);
router.route('/:id/getbook').get(OneProduct)
router.route("/:id/edit").post(editProduct);

router.route("/review").post(review);



module.exports = router;


