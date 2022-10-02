const productModal = require('../models/productModal')
const orderModal = require("../models/orderModal")


// @desc   Create a new order
// @route  POST /api/orders/
// @access Private

const addOrderItem = async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order Items')
    } else {
        orderItems.forEach(async (item) => {
            const product = await productModal.findById(item.product)
            if (product.countInStock <= 0) {
                res.status(400).json({ message: "out of stock" })
            } else {
                product.countInStock -= 1
                await product.save()
                const order = await orderModal.create({
                    orderItems,
                    user: req.user._id,
                    shippingAddress,
                    paymentMethod,
                    itemsPrice,
                    shippingPrice,
                    totalPrice,
                    status: paymentMethod === 'COD' ? 'Placed' : 'Pending',
                })
                res.status(201).json(order)
            }
        })
    }

}

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = async (req, res) => {
    const orders = await orderModal.find({ user: req.user._id }).sort('-createdAt')
    res.json(orders)
}

module.exports = { addOrderItem, getMyOrders }