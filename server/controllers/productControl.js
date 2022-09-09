const productModel = require('../models/productModal')

const addProduct = async (req, res) => { 
    console.log(req.body)
    const { bookname, author, description, image, launch, price, catagory } = req.body;
    // if (!author || !bookname || !description || !image || !launch || !price || !catagory) {
    //     throw new Error ('all inputs not found')
    // }
    try {
        const products = await productModel.create({
            author,
            bookname,
            image,
            description,
            launch,
            price,
            catagory
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
        throw new Error ('product not found')
    }
}


module.exports = { getProduct, addProduct, updateProduct }