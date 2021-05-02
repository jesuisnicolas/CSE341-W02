const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();

// Array that will store the user's Input
const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
    // console.log("In another middleware");
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true});
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) =>{ //it has the same name, but the method changes
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.router = router;
exports.products = products;