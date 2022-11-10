const express = require("express");
const { addOrderItem, getMyOrders,oneOrderProduct,allOrders,returnProduct } = require("../controllers/orderItem");
const { protect } = require("../middleware/protect");

const router = express.Router();

router.route('/').get(allOrders).post(protect,addOrderItem);
router.route('/myorders').get(protect,getMyOrders);
router.route('/:id/getoneorder').get(oneOrderProduct);
router.route('/:id/return').get(returnProduct);


module.exports = router;