import axios from 'axios';

// Backend API base URL
export const API_URL = 'http://localhost:4000';

// Create axios instance with default config
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests if available
api.interceptors.request.use(
    (config) => {
        // Admin endpoints that require admin token
        const adminEndpoints = ['/admin', '/product', '/order/list', '/order/status', '/order/payment-status', '/order/stats', '/user/list', '/user/stats'];
        const isAdminRequest = adminEndpoints.some(endpoint => config.url?.includes(endpoint));
        
        if (isAdminRequest) {
            const adminToken = localStorage.getItem('adminToken');
            if (adminToken) {
                config.headers.token = adminToken;
            }
        } else {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.token = token;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Handle response errors
api.interceptors.response.use(
    (response) => {
        // Check if response data indicates jwt expired
        if (response.data && !response.data.success && response.data.message === 'jwt expired') {
            // Check if it's an admin request
            const adminEndpoints = ['/admin', '/product', '/order/list', '/order/status', '/order/payment-status', '/order/stats', '/user/list', '/user/stats'];
            const isAdminRequest = adminEndpoints.some(endpoint => response.config.url?.includes(endpoint));
            
            if (isAdminRequest) {
                localStorage.removeItem('adminToken');
                localStorage.removeItem('adminUser');
                window.location.href = '/admin/login';
            } else {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = '/login';
            }
        }
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            // Check if it's an admin request
            const adminEndpoints = ['/admin', '/product', '/order/list', '/order/status', '/order/payment-status', '/order/stats', '/user/list', '/user/stats'];
            const isAdminRequest = adminEndpoints.some(endpoint => error.config?.url?.includes(endpoint));
            
            if (isAdminRequest) {
                localStorage.removeItem('adminToken');
                localStorage.removeItem('adminUser');
                window.location.href = '/admin/login';
            } else {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default api;
