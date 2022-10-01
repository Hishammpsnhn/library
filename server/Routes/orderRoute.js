const express = require("express");
const { addOrderItem  } = require("../controllers/orderItem");

const router = express.Router();

router.route('/').post(addOrderItem);

module.exports = router;
