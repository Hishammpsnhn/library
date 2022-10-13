const { default: mongoose } = require('mongoose');
const productModel = require('../models/productModal')
const userModel = require('../models/userModel');

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

const getProduct = async (req, res) => {
    try {
        const allProducts = await productModel.find()
        res.status(200).json(allProducts)
    } catch (error) {
        console.log(error);
    }

}
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
const updateProduct = async (req, res) => {
    const {
        bookname,
        author,
        description,
        image,
        launch,
        price,
        catagory,
        discount,
        countInStock,
        reviews,
        rating,
        numReviews,
    } = req.body;
    const product = productModel.findById(req.params.id)
    if (product) {
        product.name = bookname
        product.author = author
        product.description = description
        product.image = image
        product.launch = launch
        product.price = price
        product.catagory = catagory
        product.discount = discount
        product.countInStock = countInStock
        product.reviews = reviews
        product.rating = rating
        product.numReviews = numReviews

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(404)
        throw new Error('product not found')
    }
}


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

const review = async (req, res) => {
    const { id } = req.body;
    const { rating } = req.body;
    const {comment}= req.body;
   console.log(rating)
    let exist = false;
    let product = await productModel.findById(id);
    product.reviews.every(async (item) => {
        if (item.user.equals(req.user._id)) {
            if(rating) item.rating = rating
            if(comment) {
                 item.comment = comment;
                console.log(product);
               // await productModel.findByIdAndUpdate(id, product, { new: true });
            }
            exist = true;
        }
    });
    const updatedProduct = await productModel.findByIdAndUpdate(id, product, { new: true });
    //res.josn
    
    if (!exist) {
        console.log("not exist")
        if(rating){product.reviews.push({rating: rating, user: req.user._id })}
        if(comment){product.reviews.push({comment: comment, user: req.user._id })}
        product.save();
        //  res.status(201).json({ messgae: "add new" })

    }
    const ratingCount = updatedProduct.reviews.length;
    let userRating = 0
    updatedProduct.reviews.forEach(async (item) => {
        userRating += item.rating
    })
    product.rating = userRating / ratingCount;
    const updatedProduct2 = await productModel.findByIdAndUpdate(id, product, { new: true });
    res.status(201).json(updatedProduct2)

}

module.exports = { getProduct, addProduct, updateProduct, editProduct, OneProduct, review }