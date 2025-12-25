# Forever E-Commerce Backend

Backend server for the Forever E-Commerce application built with Node.js, Express, and MongoDB.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas account)
- npm or yarn

### Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Update the values in `.env`:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ADMIN_EMAIL=admin@forever.com
     ADMIN_PASSWORD=your_admin_password
     ```

4. **Start the server:**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   npm start
   ```

Server will run on `http://localhost:4000`

---

## 📁 Project Structure

```
backend/
├── config/
│   └── mongodb.js          # MongoDB connection configuration
├── controllers/
│   ├── userController.js   # User authentication logic
│   └── productController.js # Product CRUD operations
├── models/
│   ├── userModel.js        # User schema
│   └── productModel.js     # Product schema
├── routes/
│   ├── userRoute.js        # User API routes
│   └── productRoute.js     # Product API routes
├── middleware/
│   ├── adminAuth.js        # Admin authentication middleware
│   ├── userAuth.js         # User authentication middleware
│   └── multer.js           # File upload configuration
├── uploads/                # Uploaded images storage
├── .env                    # Environment variables
├── .gitignore             # Git ignore rules
├── server.js              # Main server file
└── package.json           # Dependencies
```

---

## 🔐 API Endpoints

### **User Authentication**

#### Register User
```http
POST /api/user/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### User Login
```http
POST /api/user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Admin Login
```http
POST /api/user/admin
Content-Type: application/json

{
  "email": "admin@forever.com",
  "password": "Admin@123456"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

### **Product Management (Admin Only)**

All product management endpoints require admin authentication. Include the token in headers:
```
Headers: {
  "token": "your_jwt_token_here"
}
```

#### Add Product
```http
POST /api/product/add
Headers: { "token": "admin_jwt_token" }
Content-Type: multipart/form-data

Form Data:
- name: "Product Name"
- description: "Product Description"
- price: 299
- category: "Men"
- subCategory: "Topwear"
- sizes: ["S", "M", "L", "XL"]
- bestseller: true
- image1: [file]
- image2: [file]
- image3: [file]
- image4: [file]
```

#### List All Products
```http
GET /api/product/list
```

#### Get Single Product
```http
POST /api/product/single
Content-Type: application/json

{
  "productId": "product_id_here"
}
```

#### Update Product
```http
POST /api/product/update
Headers: { "token": "admin_jwt_token" }
Content-Type: multipart/form-data

Form Data:
- id: "product_id"
- name: "Updated Name"
- price: 399
- ...
```

#### Remove Product
```http
POST /api/product/remove
Headers: { "token": "admin_jwt_token" }
Content-Type: application/json

{
  "id": "product_id_here"
}
```

---

## 🛡️ Security Features

- **JWT Authentication:** Secure token-based authentication
- **Password Hashing:** bcrypt with 10 salt rounds
- **CORS:** Configured for frontend domains
- **Admin Protection:** Middleware to protect admin routes
- **Input Validation:** Email and password validation
- **File Upload Limits:** 5MB max file size
- **Image Type Filtering:** Only accepts image formats

---

## 🗄️ Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: 'user', 'admin'),
  cartData: Object,
  timestamps: true
}
```

### Product Model
```javascript
{
  name: String,
  description: String,
  price: Number,
  image: Array,
  category: String,
  subCategory: String,
  sizes: Array,
  bestseller: Boolean,
  date: Number,
  timestamps: true
}
```

---

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | 4000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/forever_ecommerce |
| `JWT_SECRET` | Secret key for JWT signing | your_secret_key |
| `ADMIN_EMAIL` | Admin login email | admin@forever.com |
| `ADMIN_PASSWORD` | Admin login password | Admin@123456 |

---

## 📦 Dependencies

### Production Dependencies
- **express** - Web framework
- **mongoose** - MongoDB ODM
- **dotenv** - Environment variables
- **cors** - Cross-Origin Resource Sharing
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT authentication
- **multer** - File upload handling
- **validator** - Input validation

### Development Dependencies
- **nodemon** - Auto-restart server on changes

---

## 🚀 Deployment

### Local MongoDB
```bash
# Make sure MongoDB is running
mongod

# Start the server
npm run dev
```

### MongoDB Atlas
1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Update `MONGODB_URI` in `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/forever_ecommerce
   ```

---

## 📝 Notes

- Default admin credentials are in `.env` - **change them in production!**
- Uploaded images are stored in the `uploads/` folder
- JWT tokens expire after 7 days
- Minimum password length: 8 characters

---

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

## 📄 License

ISC
