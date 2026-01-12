# Fashion_X - Full Stack E-Commerce Application

A modern, full-featured e-commerce platform with customer and admin interfaces, built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Features include product management, shopping cart, order processing, user authentication, dark mode, and a comprehensive admin dashboard.

[![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 🚀 Live Demo
🔗 [View Live Demo](https://fashionx-clouthing.netlify.app/)  
🔧 [Admin Dashboard](https://fashionx-clouthing.netlify.app/admin)

## 📸 Screenshots

### Customer Interface

#### Home Page
![Home Page](./frontend/src/assets/admin_assets/Fashion_x%20clouthing-homepage.png)
*Browse trending collections with Latest Collection and Best Sellers sections*

#### Collection Page
![Collection Page](./frontend/src/assets/admin_assets/Fashion_x%20clouthing-collection.png)
*Filter products by category, type, and sort by price with advanced search*

#### About Page
![About Page](./frontend/src/assets/admin_assets/Fashion_x%20clouthing-aboutus.png)
*Learn about our mission with Quality Assurance, Convenience, and Customer Service highlights*

### Admin Dashboard

#### Dashboard Overview
![Admin Dashboard](./frontend/src/assets/admin_assets/Fashion_x%20clouthing-admin_dashboard.png)
*Monitor total products, orders, users, and revenue at a glance*

#### Product Management
![Product Management](./frontend/src/assets/admin_assets/Fashion_x%20clouthing-admin_products.png)
*Add, edit, and manage products with ease*

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 👥 Customer Features
- **User Authentication**
  - Register with email verification
  - Login/Logout with JWT tokens
  - Password reset via email
  - Protected routes and persistent sessions

- **Product Browsing**
  - Browse products with advanced filtering (Category, Sub-category, Price)
  - Real-time search functionality
  - Sort by price, popularity, latest
  - Detailed product pages with image gallery
  - Related products suggestions

- **Shopping Cart**
  - Add/remove products with size selection
  - Real-time cart updates
  - Persistent cart (saved to database)
  - Cart total calculation with delivery fee

- **Checkout & Orders**
  - Delivery address form validation
  - Multiple payment methods (COD, Stripe, Razorpay)
  - Order placement and confirmation
  - Order history with status tracking
  - Order details view

### 🔐 Admin Features
- **Admin Dashboard**
  - Overview statistics (Total Products, Orders, Users, Revenue)
  - Recent orders summary
  - Quick navigation to management sections

- **Product Management**
  - Add new products with Cloudinary image upload (up to 4 images)
  - Edit existing products
  - Delete products
  - Manage product details (name, price, category, sizes, bestseller status)

- **Order Management**
  - View all orders with filtering
  - Detailed order information modal
  - Update order status (Order Placed → Packing → Shipped → Out for delivery → Delivered)
  - Update payment status (Paid/Unpaid)
  - Print invoice functionality

- **User Management**
  - View all registered users
  - User details with account information
  - Cart activity monitoring
  - User statistics

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React.js | 19.1.1 | UI Framework |
| Vite | 7.1.7 | Build tool & Dev server |
| Tailwind CSS | 4.1.17 | Styling framework |
| React Router DOM | 7.9.5 | Client-side routing |
| Axios | 1.13.2 | HTTP client |
| React Toastify | 11.0.5 | Notifications |
| Context API | Built-in | State management |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 18+ | Runtime environment |
| Express.js | 5.2.1 | Web framework |
| MongoDB | 9.0.2 (Mongoose) | Database |
| JWT | 9.0.3 | Authentication |
| Bcrypt | 6.0.0 | Password hashing |
| Validator | 13.15.26 | Input validation |
| Multer | 2.0.2 | File upload handling |
| Nodemailer | 7.0.12 | Email service |
| CORS | 2.8.5 | Cross-origin requests |

### Cloud Services
- **Cloudinary**: Image storage and optimization
- **MongoDB Atlas**: Database hosting
- **Brevo (Sendinblue)**: Email delivery service

---

## 📂 Project Structure

```bash
E_commerce/
├── frontend/                  # React frontend application
│   ├── public/               # Static assets
│   │   └── products/        # Product images
│   ├── src/
│   │   ├── assets/          # Icons and images
│   │   │   ├── admin_assets/
│   │   │   └── frontend_assets/
│   │   ├── components/      # Reusable React components
│   │   │   ├── NavBar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── ProductItem.jsx
│   │   │   ├── CartTotal.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── LatestCollection.jsx
│   │   │   ├── BestSeller.jsx
│   │   │   ├── OurPolicy.jsx
│   │   │   ├── NewsLetter.jsx
│   │   │   ├── RelatedProducts.jsx
│   │   │   ├── Title.jsx
│   │   │   ├── AdminNavbar.jsx
│   │   │   └── AdminProtectedRoute.jsx
│   │   ├── context/         # Global state management
│   │   │   └── ShopContext.jsx
│   │   ├── pages/           # Route pages
│   │   │   ├── Home.jsx
│   │   │   ├── Collection.jsx
│   │   │   ├── Product.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── PlaceOrder.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── ResetPassword.jsx
│   │   │   └── admin/       # Admin pages
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── AdminProducts.jsx
│   │   │       ├── AdminOrders.jsx
│   │   │       ├── AdminUsers.jsx
│   │   │       └── AdminLogin.jsx
│   │   ├── config/          # Configuration files
│   │   │   ├── api.js       # Axios instance
│   │   │   └── cloudinary.js # Cloudinary upload
│   │   ├── App.jsx          # Main app with routing
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── eslint.config.js
│
├── backend/                  # Node.js/Express backend
│   ├── config/              # Configuration modules
│   │   ├── mongodb.js       # MongoDB connection
│   │   └── emailService.js  # Email configuration
│   ├── controllers/         # Request handlers
│   │   ├── userController.js
│   │   ├── productController.js
│   │   └── orderController.js
│   ├── middleware/          # Custom middleware
│   │   ├── adminAuth.js     # Admin authentication
│   │   ├── userAuth.js      # User authentication
│   │   └── multer.js        # File upload config
│   ├── models/              # Mongoose schemas
│   │   ├── userModel.js
│   │   ├── productModel.js
│   │   └── orderModel.js
│   ├── routes/              # API routes
│   │   ├── userRoute.js
│   │   ├── productRoute.js
│   │   └── orderRoute.js
│   ├── scripts/             # Utility scripts
│   │   └── seedProducts.mjs # Database seeding
│   ├── .env                 # Environment variables
│   ├── server.js            # Express server
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB
- Cloudinary account
- Email service account (Brevo/SendGrid)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/fashion_X-project.git
cd fashion_X-project
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
MONGODB_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key

# Admin Credentials
ADMIN_EMAIL=admin@forever.com
ADMIN_PASSWORD=your_admin_password

# Email Service (Brevo/Sendinblue)
BREVO_API_KEY=your_brevo_api_key
BREVO_SENDER_EMAIL=your_verified_sender_email
BREVO_SENDER_NAME=Forever Store

# Cloudinary (for frontend image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

Start the backend server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

Backend will run on `http://localhost:4000`

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Update the API URL in `frontend/src/config/api.js` if needed:
```javascript
export const API_URL = 'http://localhost:4000';
```

Update Cloudinary config in `frontend/src/config/cloudinary.js`:
```javascript
export const CLOUDINARY_CONFIG = {
  cloudName: 'your_cloud_name',
  uploadPreset: 'your_upload_preset'
};
```

Start the frontend development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

### 4. Seed Database (Optional)
```bash
cd backend
node scripts/seedProducts.mjs
```

---

## 🔐 Environment Variables

### Backend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `4000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/ecommerce` |
| `JWT_SECRET` | Secret key for JWT | `your_secret_key_min_32_chars` |
| `ADMIN_EMAIL` | Admin login email | `admin@forever.com` |
| `ADMIN_PASSWORD` | Admin login password | `Admin@123` |
| `BREVO_API_KEY` | Brevo API key for emails | `xkeysib-xxx` |
| `BREVO_SENDER_EMAIL` | Verified sender email | `noreply@yourstore.com` |
| `BREVO_SENDER_NAME` | Email sender name | `Forever Store` |

### Frontend (Cloudinary Config)
Update in `frontend/src/config/cloudinary.js`:
```javascript
cloudName: 'your_cloudinary_cloud_name'
uploadPreset: 'your_unsigned_upload_preset'
```

---

## 📡 API Documentation

### Authentication Endpoints

#### User Registration
```http
POST /api/user/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### User Login
```http
POST /api/user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Admin Login
```http
POST /api/user/admin
Content-Type: application/json

{
  "email": "admin@forever.com",
  "password": "admin_password"
}
```

### Product Endpoints

#### Get All Products
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

#### Add Product (Admin)
```http
POST /api/product/add
Content-Type: application/json
token: <admin_jwt_token>

{
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "category": "Men",
  "subCategory": "Topwear",
  "sizes": ["S", "M", "L"],
  "bestseller": false,
  "image": ["url1", "url2", "url3", "url4"]
}
```

#### Update Product (Admin)
```http
POST /api/product/update
Content-Type: application/json
token: <admin_jwt_token>

{
  "id": "product_id",
  "name": "Updated Name",
  "price": 89.99
  // ... other fields
}
```

#### Delete Product (Admin)
```http
POST /api/product/remove
Content-Type: application/json
token: <admin_jwt_token>

{
  "id": "product_id"
}
```

### Order Endpoints

#### Place Order (User)
```http
POST /api/order/place
Content-Type: application/json
token: <user_jwt_token>

{
  "userId": "user_id",
  "items": [
    {
      "productId": "product_id",
      "name": "Product Name",
      "price": 99.99,
      "quantity": 2,
      "size": "M",
      "image": "image_url"
    }
  ],
  "amount": 209.98,
  "address": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipcode": "10001",
    "country": "USA",
    "phone": "+1234567890"
  },
  "paymentMethod": "COD"
}
```

#### Get User Orders
```http
POST /api/order/user
Content-Type: application/json
token: <user_jwt_token>

{
  "userId": "user_id"
}
```

#### Get All Orders (Admin)
```http
POST /api/order/list
Content-Type: application/json
token: <admin_jwt_token>
```

#### Update Order Status (Admin)
```http
POST /api/order/status
Content-Type: application/json
token: <admin_jwt_token>

{
  "orderId": "order_id",
  "status": "Shipped"
}
```

#### Update Payment Status (Admin)
```http
POST /api/order/payment-status
Content-Type: application/json
token: <admin_jwt_token>

{
  "orderId": "order_id",
  "payment": true
}
```

### User Management Endpoints (Admin)

#### Get All Users
```http
GET /api/user/list
token: <admin_jwt_token>
```

#### Get User Statistics
```http
GET /api/user/stats
token: <admin_jwt_token>
```

---

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['user', 'admin'], default: 'user'),
  cartData: Object (default: {}),
  resetToken: String,
  resetTokenExpiry: Date,
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

### Product Model
```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required),
  image: [String] (required, max 4),
  category: String (required),
  subCategory: String (required),
  sizes: [String] (required),
  bestseller: Boolean (default: false),
  date: Number (default: Date.now)
}
```

### Order Model
```javascript
{
  userId: ObjectId (ref: 'user', required),
  items: [{
    productId: ObjectId (ref: 'Product'),
    name: String,
    price: Number,
    quantity: Number,
    size: String,
    image: String
  }],
  amount: Number (required),
  address: {
    firstName: String,
    lastName: String,
    email: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
    phone: String
  },
  status: String (enum: ['Order Placed', 'Packing', 'Shipped', 'Out for delivery', 'Delivered']),
  paymentMethod: String (required),
  payment: Boolean (default: false),
  date: Date (default: Date.now),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

---

## 🎨 Key Implementation Details

### Authentication Flow
1. **User Registration**: Password hashed with bcrypt (10 salt rounds) → JWT token generated → Welcome email sent
2. **User Login**: Email validation → Password comparison → JWT token (7 days expiry)
3. **Admin Login**: Credentials checked against environment variables → Admin JWT token
4. **Protected Routes**: Middleware validates JWT token → Extracts user/admin info → Allows/denies access

### Image Upload Strategy
- **Frontend**: Direct upload to Cloudinary from browser
- **Cloudinary Config**: Unsigned upload preset, folder organization (`e-commerce`)
- **Image Management**: Up to 4 images per product, first image is primary
- **Optimization**: Automatic compression and format conversion by Cloudinary

### State Management
- **Context API**: Global state for cart, user authentication, search, filters
- **Persistent Cart**: Saved to MongoDB user document, loaded on login
- **Real-time Updates**: Cart updates immediately reflected across components

### Order Processing
1. Cart items collected from context
2. Delivery form validation
3. Order creation in database
4. Cart cleared from user document
5. Order confirmation displayed
6. Admin can track and update order status

### Admin Dashboard Features
- **Statistics**: Aggregated data from MongoDB (count, sum operations)
- **Recent Activity**: Latest 5 orders displayed
- **User Management**: View all users excluding admins
- **Product Upload**: Cloudinary integration with preview
- **Order Management**: Status tracking with 5 stages

---

## 🔒 Security Features

- **Password Hashing**: Bcrypt with 10 salt rounds
- **JWT Authentication**: Secure token-based auth with 7-day expiry
- **Input Validation**: Validator.js for email, password strength checks
- **CORS Configuration**: Restricted origins for API access
- **Protected Routes**: Middleware guards for admin and user routes
- **Environment Variables**: Sensitive data stored securely
- **MongoDB Injection Prevention**: Mongoose sanitization

---

## 📱 Responsive Design

- **Mobile First**: Tailwind CSS breakpoints (sm, md, lg, xl)
- **Navigation**: Mobile drawer menu, desktop horizontal nav
- **Product Grid**: Responsive columns (2 → 3 → 4 → 5)
- **Admin Dashboard**: Optimized for tablet/desktop use
- **Forms**: Touch-friendly inputs with proper spacing

---

## 🚀 Deployment Guide

### Frontend (Vercel)
1. Push code to GitHub
2. Import project on Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Add environment variable: `VITE_API_URL` (your backend URL)

### Backend (Railway/Render)
1. Connect GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add all environment variables from `.env`
5. Ensure MongoDB Atlas IP whitelist includes deployment server

### Database (MongoDB Atlas)
1. Create cluster
2. Create database user
3. Add IP to whitelist (0.0.0.0/0 for public access)
4. Copy connection string to backend `.env`

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Password reset flow
- [ ] Product browsing and filtering
- [ ] Search functionality
- [ ] Add to cart
- [ ] Checkout process
- [ ] Order placement
- [ ] Admin login
- [ ] Product management (CRUD)
- [ ] Order status updates
- [ ] User management view

---

## 📸 Screenshots

### Customer Interface
*(Add screenshots here)*
- Home page with hero and latest products
- Collection page with filters
- Product detail page
- Shopping cart
- Checkout page
- Order history

### Admin Dashboard
*(Add screenshots here)*
- Dashboard overview
- Product management
- Order management with modal
- User management

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Use ESLint configuration provided
- Follow React best practices
- Write meaningful commit messages
- Comment complex logic
- Update documentation for new features

---

## 📝 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Anjula Nadeeshan**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- MongoDB for the flexible database
- Cloudinary for image management
- All open-source contributors

---

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

## 🔮 Future Enhancements

- [ ] Payment gateway integration (Stripe/Razorpay)
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced analytics dashboard
- [ ] Email notifications for order updates
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Product recommendations AI
- [ ] Inventory management
- [ ] Discount/coupon system
- [ ] Social media integration
- [ ] Progressive Web App (PWA)

---

**Made with ❤️ using MERN Stack**
