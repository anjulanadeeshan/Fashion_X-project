import api from '../config/api';

// Place order
export const placeOrder = async (orderData) => {
    try {
        const response = await api.post('/api/order/place', orderData);
        return response.data;
    } catch (error) {
        console.error('Place Order Error:', error);
        throw error;
    }
};

// Get user orders
export const getUserOrders = async (userId) => {
    try {
        const response = await api.post('/api/order/user', { userId });
        return response.data;
    } catch (error) {
        console.error('Get User Orders Error:', error);
        throw error;
    }
};

export default {
    placeOrder,
    getUserOrders
};
