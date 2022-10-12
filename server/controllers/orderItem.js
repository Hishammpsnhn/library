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
    try {
        const product = await productModal.findById(orderItems.product)
        if (product.countInStock <= 0) {
            res.status(400).json({ message: "out of stock" })
        } else {
            const order = await orderModal.create({
                orderItems,
                user: req.user._id,
                ProductId: orderItems.product,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                shippingPrice,
                totalPrice,
                status: paymentMethod === 'COD' ? 'Placed' : 'Pending',
            })
            product.countInStock -= 1
            await product.save()
            res.status(201).json(order)
        }
    } catch (error) {
        throw new Error(error)
    }

}

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = async (req, res) => {
    const orders = await orderModal.find({ user: req.user._id }).sort('-createdAt')
    res.json(orders)
}

const oneOrderProduct = async (req, res) => {
    const { id } = req.params
    try {
        const order = await orderModal.findById(id)
            .populate('ProductId')
        res.status(200).json(order)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { addOrderItem, getMyOrders, oneOrderProduct }