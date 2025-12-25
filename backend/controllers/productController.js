const Product = require('../models/productModel');

// Add Product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller, image, date } = req.body;

        // Validate required fields
        if (!name || !description || !price || !category || !subCategory || !sizes) {
            return res.json({ success: false, message: 'All fields are required' });
        }

        if (!image || image.length === 0) {
            return res.json({ success: false, message: 'At least one product image is required' });
        }

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: Array.isArray(sizes) ? sizes : JSON.parse(sizes),
            bestseller: Boolean(bestseller),
            image: Array.isArray(image) ? image : [image], // Cloudinary URLs
            date: date || Date.now()
        };

        const product = new Product(productData);
        await product.save();

        res.json({ success: true, message: 'Product added successfully', product });

    } catch (error) {
        console.error('Add Product Error:', error);
        res.json({ success: false, message: error.message });
    }
};

// List all Products
const listProducts = async (req, res) => {
    try {
        const products = await Product.find({}).sort({ createdAt: -1 });
        res.json({ success: true, products });

    } catch (error) {
        console.error('List Products Error:', error);
        res.json({ success: false, message: error.message });
    }
};

// Remove Product
const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;

        await Product.findByIdAndDelete(id);
        res.json({ success: true, message: 'Product removed successfully' });

    } catch (error) {
        console.error('Remove Product Error:', error);
        res.json({ success: false, message: error.message });
    }
};

// Get Single Product Info
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;

        const product = await Product.findById(productId);
        res.json({ success: true, product });

    } catch (error) {
        console.error('Get Product Error:', error);
        res.json({ success: false, message: error.message });
    }
};

// Update Product
const updateProduct = async (req, res) => {
    try {
        const { id, name, description, price, category, subCategory, sizes, bestseller, image } = req.body;

        const updateData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: Array.isArray(sizes) ? sizes : JSON.parse(sizes),
            bestseller: Boolean(bestseller)
        };

        // Handle new images if provided (Cloudinary URLs)
        if (image && image.length > 0) {
            updateData.image = Array.isArray(image) ? image : [image];
        }

        const product = await Product.findByIdAndUpdate(id, updateData, { new: true });

        if (!product) {
            return res.json({ success: false, message: 'Product not found' });
        }

        res.json({ success: true, message: 'Product updated successfully', product });

    } catch (error) {
        console.error('Update Product Error:', error);
        res.json({ success: false, message: error.message });
    }
};

module.exports = { 
    addProduct, 
    listProducts, 
    removeProduct, 
    singleProduct,
    updateProduct 
};
