const express = require('express');
const { addProduct, listProducts, removeProduct, singleProduct, updateProduct } = require('../controllers/productController');
const adminAuth = require('../middleware/adminAuth');

const productRouter = express.Router();

// Admin routes - protected with adminAuth
productRouter.post('/add', adminAuth, addProduct);

productRouter.post('/remove', adminAuth, removeProduct);
productRouter.post('/update', adminAuth, updateProduct);

// Public routes
productRouter.get('/list', listProducts);
productRouter.post('/single', singleProduct);

module.exports = productRouter;
