import api from '../config/api';

// User Registration
export const registerUser = async (name, email, password) => {
    try {
        const response = await api.post('/api/user/register', {
            name,
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Registration Error:', error);
        throw error;
    }
};

// User Login
export const loginUser = async (email, password) => {
    try {
        const response = await api.post('/api/user/login', {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Login Error:', error);
        throw error;
    }
};

// Admin Login
export const adminLogin = async (email, password) => {
    try {
        console.log('Admin login attempt:', { email });
        console.log('API URL:', api.defaults.baseURL);
        
        const response = await api.post('/api/user/admin', {
            email,
            password
        });
        
        console.log('Admin login response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Admin Login Error:', error);
        console.error('Error details:', {
            message: error.message,
            response: error.response,
            request: error.request
        });
        throw error;
    }
};

// Get current user from localStorage
export const getCurrentUser = () => {
    try {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    } catch (error) {
        return null;
    }
};

// Save user and token to localStorage
export const saveAuthData = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
};

// Clear auth data
export const clearAuthData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

// Check if user is authenticated
export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

// Request Password Reset
export const requestPasswordReset = async (email) => {
    try {
        const response = await api.post('/api/user/forgot-password', { email });
        return response.data;
    } catch (error) {
        console.error('Password Reset Request Error:', error);
        throw error;
    }
};

// Reset Password with Token
export const resetPassword = async (email, resetToken, newPassword) => {
    try {
        const response = await api.post('/api/user/reset-password', {
            email,
            resetToken,
            newPassword
        });
        return response.data;
    } catch (error) {
        console.error('Reset Password Error:', error);
        throw error;
    }
};
