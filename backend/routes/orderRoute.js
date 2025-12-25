const express = require('express');
const { 
    placeOrder, 
    getUserOrders, 
    getAllOrders, 
    updateOrderStatus,
    updatePaymentStatus,
    getOrderStats 
} = require('../controllers/orderController');
const userAuth = require('../middleware/userAuth');
const adminAuth = require('../middleware/adminAuth');

const router = express.Router();

// User routes
router.post('/place', userAuth, placeOrder);
router.post('/user', userAuth, getUserOrders);

// Admin routes
router.post('/list', adminAuth, getAllOrders);
router.post('/status', adminAuth, updateOrderStatus);
router.post('/payment-status', adminAuth, updatePaymentStatus);
router.get('/stats', adminAuth, getOrderStats);

module.exports = router;
