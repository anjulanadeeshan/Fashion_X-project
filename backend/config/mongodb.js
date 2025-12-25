const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Debug: Log the connection string (hide password for security)
        const uri = process.env.MONGODB_URI;
        console.log('MongoDB URI loaded:', uri ? 'Yes ✓' : 'No ✗');
        
        if (!uri) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        mongoose.connection.on('connected', () => {
            console.log('✓ MongoDB Connected Successfully');
        });

        mongoose.connection.on('error', (err) => {
            console.error('✗ MongoDB Connection Error:', err);
        });

        await mongoose.connect(uri);
    } catch (error) {
        console.error('✗ Failed to connect to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
