
const { response, request } = require('express');
const { Product } = require('../models/product.model');

// create new product
module.exports.createProduct = (req, res) => {
    const { productName, productPrice, productDescription } = req.body;
    Product.create({
        productName,
        productPrice,
        productDescription,
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

// get all products
module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err));
}

// get One product
module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

// update one product
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch (err => res.json(err));
}