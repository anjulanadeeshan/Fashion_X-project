const jwt = require('jsonwebtoken');

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.json({ success: false, message: 'Not Authorized. Please login again' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if admin (based on email or role in token)
        if (decoded.role !== 'admin' && decoded.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: 'Not Authorized. Admin access required' });
        }

        req.user = decoded;
        next();

    } catch (error) {
        console.error('Auth Error:', error);
        res.json({ success: false, message: error.message });
    }
};

module.exports = adminAuth;
