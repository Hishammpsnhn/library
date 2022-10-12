const express = require("express");
const { addOrderItem, getMyOrders,oneOrderProduct  } = require("../controllers/orderItem");
const { protect } = require("../middleware/protect");

const router = express.Router();

router.route('/').post(protect,addOrderItem);
router.route('/myorders').get(protect,getMyOrders);
router.route('/:id/getoneorder').get(oneOrderProduct);

module.exports = router;
