const Order = require('../models/orderModel');
const User = require('../models/userModel');

// Place order - User
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address, paymentMethod } = req.body;

        // Validate required fields
        if (!userId || !items || !amount || !address || !paymentMethod) {
            return res.json({ success: false, message: 'All fields are required' });
        }

        // Create order
        const order = new Order({
            userId,
            items,
            amount,
            address,
            paymentMethod,
            payment: paymentMethod === 'COD' ? false : true, // COD is unpaid initially
            date: Date.now()
        });

        await order.save();

        // Clear user's cart after order is placed
        await User.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ 
            success: true, 
            message: 'Order placed successfully',
            orderId: order._id
        });

    } catch (error) {
        console.error('Place Order Error:', error);
        res.json({ success: false, message: error.message });
    }
};

// Get user orders - User
const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.body;

        const orders = await Order.find({ userId }).sort({ date: -1 });
        
        res.json({ success: true, orders });

    } catch (error) {
        console.error('Get User Orders Error:', error);
        res.json({ success: false, message: error.message });
    }
};

// Get all orders - Admin
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
            .populate('userId', 'name email')
            .sort({ date: -1 });
        
        res.json({ success: true, orders });

    } catch (error) {
        console.error('Get All Orders Error:', error);
        res.json({ success: false, message: error.message });
    }
};

// Update order status - Admin
const updateOrderStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;

        await Order.findByIdAndUpdate(orderId, { status });

        res.json({ success: true, message: 'Order status updated' });

    } catch (error) {
        console.error('Update Order Status Error:', error);
        res.json({ success: false, message: error.message });
    }
};

// Update payment status - Admin
const updatePaymentStatus = async (req, res) => {
    try {
        const { orderId, payment } = req.body;

        await Order.findByIdAndUpdate(orderId, { payment });

        res.json({ success: true, message: 'Payment status updated' });

    } catch (error) {
        console.error('Update Payment Status Error:', error);
        res.json({ success: false, message: error.message });
    }
};

// Get order statistics - Admin
const getOrderStats = async (req, res) => {
    try {
        const totalOrders = await Order.countDocuments();
        
        const totalRevenue = await Order.aggregate([
            { $match: { payment: true } },
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);

        const recentOrders = await Order.find({})
            .populate('userId', 'name email')
            .sort({ date: -1 })
            .limit(5);

        res.json({ 
            success: true, 
            stats: {
                totalOrders,
                totalRevenue: totalRevenue[0]?.total || 0,
                recentOrders
            }
        });

    } catch (error) {
        console.error('Get Order Stats Error:', error);
        res.json({ success: false, message: error.message });
    }
};

module.exports = {
    placeOrder,
    getUserOrders,
    getAllOrders,
    updateOrderStatus,
    updatePaymentStatus,
    getOrderStats
};
