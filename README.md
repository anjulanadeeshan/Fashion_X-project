# Forever - E-Commerce Web Application

A modern, responsive, and functional e-commerce frontend built using **React.js** and **Tailwind CSS**. This application features a seamless shopping experience including product browsing, cart management, checkout processes, and order history visualization.

## 🚀 Live Demo
*(Optional: Add a link here if you deploy it to Vercel/Netlify)*
[View Demo](https://your-project-link.com)

## 🛠️ Tech Stack

**Frontend:**
- **React.js**: Component-based UI architecture.
- **Tailwind CSS**: Utility-first CSS framework for rapid and responsive styling.
- **React Router DOM**: Client-side routing for seamless navigation.
- **Context API**: Global state management (Cart, Authentication, Search).
- **React Toastify**: For elegant notification popups.

**Assets:**
- Custom icon set and responsive image handling.

---

## ✨ Features

### 🛒 Shopping Experience
- **Product Listing:** Browse products with filter options (Category, Sub-category) and sorting logic.
- **Search Functionality:** Real-time search bar to find products instantly.
- **Product Details:** Detailed view with image gallery, size selection, and description.
- **Related Products:** Smart suggestions based on the current product's category.

### 👜 Cart & Checkout
- **Dynamic Cart:** Add items, update quantities, and remove items with instant total calculation.
- **Checkout Form:** Responsive delivery information form.
- **Payment UI:** Interface for selecting payment methods (Stripe, Razorpay, COD).

### 📱 User Interface
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop screens.
- **Navigation:** clean Navbar with cart count badge and mobile drawer menu.
- **Static Pages:** informative About Us and Contact pages.
- **Orders:** Order history simulation with status tracking.

---

## 📂 Project Structure

```bash
src/
├── assets/            # Images and icons
├── components/        # Reusable components (Navbar, Footer, ProductItem, etc.)
├── context/           # Context API (ShopContext.jsx) for global state
├── pages/             # Main Route Pages
│   ├── Home.jsx
│   ├── Collection.jsx
│   ├── Product.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   ├── PlaceOrder.jsx
│   ├── Orders.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx            # Main App entry point with Routes
└── index.css          # Tailwind directives and global styles
