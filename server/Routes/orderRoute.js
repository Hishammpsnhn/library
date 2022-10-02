const express = require("express");
const { addOrderItem, getMyOrders  } = require("../controllers/orderItem");
const { protect } = require("../middleware/protect");

const router = express.Router();

router.route('/').post(protect,addOrderItem);
router.route('/myorders').get(protect,getMyOrders);

module.exports = router;
