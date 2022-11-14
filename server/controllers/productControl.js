const { default: mongoose } = require('mongoose');
const productModel = require('../models/productModal')


// @desc   Create a new Product in admini
// @route  POST /api/product
// @access Private
const addProduct = async (req, res) => {
    const { bookname, author, description, image, launch, price, catagory, discount } = req.body;
    try {
        const products = await productModel.create({
            author,
            bookname,
            image,
            description,
            launch,
            price,
            catagory,
            discount
        })
        if (products) res.status(201).json(products)
    } catch (error) {
        console.log(error);
    }
}

// @desc   get all Products
// @route  get /api/product
// @access Private
const getProduct = async (req, res) => {
   
}

// @desc   get one product details
// @route  get /api/product/:id/getbook
// @access Private
const OneProduct = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post in this id');
        const book = await productModel.findById(id)
        res.status(200).json(book)
    } catch (error) {
        console.log(error)
    }
}

// @desc   edit one product details
// @route  get /api/product/:id/edit
// @access Private
const editProduct = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id')
    try {
        const updatedPost = await productModel.findByIdAndUpdate(id, req.body, { new: true })
        res.json(updatedPost)
    } catch (error) {
        console.log(error);
    }

}

// @desc   add raing and comment on product
// @route  get /api/product/review
// @access Private
const review = async (req, res) => {
    const { id } = req.body;
    const { rating } = req.body;
    const { comment } = req.body;
    let exist = false;
    let product = await productModel.findById(id);
    product.reviews.forEach(async (item) => {
        if (item.user.equals(req.user._id)) {
            if (rating) item.rating = rating
            if (comment) {
                item.comment = comment;
            }
            exist = true;
        }
    });
    const updatedProduct = await productModel.findByIdAndUpdate(id, product, { new: true });
    if (!exist) {
        console.log("not exist")
        if (rating) { product.reviews.push({ rating: rating, user: req.user._id }) }
        if (comment) { product.reviews.push({ comment: comment, user: req.user._id }) }
        product.save();
    }
    const ratingCount = updatedProduct.reviews.length;
    let userRating = 0
    updatedProduct.reviews.forEach(async (item) => {
        userRating += item.rating
    })
    product.rating = userRating / ratingCount;
    const updatedProduct2 = await productModel.findByIdAndUpdate(id, product, { new: true });
    if (updatedProduct2) {
        updatedProduct2.reviews.forEach((item) => {
            if (item.user.equals(req.user.id)) {
                res.status(201).json(item)
            }
        })
    }

}

// @desc   search for products -debounce
// @route  get /api/product/search
// @access Private
const search = async (req, res) => {
    const keywords = req.query.search
        ? {
            $or: [
                { bookname: { $regex: req.query.search, $options: "1" } },
                { author: { $regex: req.query.search, $options: "1" } },
            ],
        }
        : {};

    const product = await productModel
        .find(keywords)
        .find({ _id: { $ne: req.query._id } });
    res.send(product);
}


// @desc  get sciFi catagory books
// @route  get /api/product/scibooks
// @access Private
const getSciFiProduct = async (req, res) => {
    try {
        const products = await productModel.find({
            catagory: "Comedy"
        })
        res.status(200).json(products)
    } catch (error) {
        console.log(error);
    }
}
module.exports = { getProduct, addProduct, editProduct, OneProduct, review, search, getSciFiProduct }