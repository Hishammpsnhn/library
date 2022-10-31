const productModal = require('../models/productModal')
const orderModal = require("../models/orderModal")

// @desc    Get All orders for admin
// @route   GET /api/orders
// @access  Private
const allOrders = async (req, res) => {

    try {
        const allOrder = await orderModal.find()
            .populate('ProductId')
        res.status(200).json(allOrder)
    } catch (error) {
        throw new Error(error)
    }
}

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
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    const returnDate = addDays(currentDate, 7);
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
                returnLastDate: returnDate,
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

// @desc    Get one order details
// @route   GET /api/orders/:id/getoneorder
// @access  Private
const oneOrderProduct = async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        const order = await orderModal.findById(id)
        .populate('ProductId')
        console.log(order)
        const product = await productModal.findById(order.ProductId);
        console.log(product)
        if(product){
            console.log("product found",product)
            res.status(200).json(order)
        }else{
            res.status(404).json({message:"product not found"})
        }
    } catch (error) {
        throw new Error(error)
    }
}


// @desc    returning Product
// @route   GET /api/orders/:id/return
// @access  Private
const returnProduct = async (req, res) => {
    const { id } = req.params
    try {
        const order = await orderModal.findByIdAndUpdate(id, {
            isReturned: true,
            returnedAt: new Date(),
        })
        console.log(order)
        if (order) {
            const productId = order.ProductId
            console.log(productId)
            const product = await productModal.findByIdAndUpdate(productId, {
                countInStock: + 1
            })
        }
        const orders = await orderModal.find()
            .populate('ProductId')
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
    }

}

module.exports = { addOrderItem, getMyOrders, oneOrderProduct, allOrders, returnProduct }