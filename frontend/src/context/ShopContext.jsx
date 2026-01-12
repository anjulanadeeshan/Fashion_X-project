import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, saveAuthData, clearAuthData } from "../services/userService";
import api from "../config/api";
import { products as staticProducts } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  // Load user from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = getCurrentUser();
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }
    
    // Fetch products from API
    fetchProducts();
  }, []);

  // Fetch products from database
  const fetchProducts = async () => {
    try {
      const response = await api.get('/api/product/list');
      if (response.data.success && response.data.products.length > 0) {
        setProducts(response.data.products);
      } else {
        // Use static products as fallback
        setProducts(staticProducts);
      }
    } catch (error) {
      console.log('Backend not available, using static products');
      // Use static products when backend is not available
      setProducts(staticProducts);
    }
  };

  // Login function
  const login = (token, userData) => {
    saveAuthData(token, userData);
    setToken(token);
    setUser(userData);
    toast.success('Login successful!');
  };

  // Logout function
  const logout = () => {
    // Check if admin is logged in
    const adminToken = localStorage.getItem('adminToken');
    
    clearAuthData();
    
    // Clear admin token if exists
    if (adminToken) {
      localStorage.removeItem('adminToken');
    }
    
    setToken(null);
    setUser(null);
    setCartItems({});
    toast.info('Logged out successfully');
    
    // Redirect admin to home page, regular users to login
    if (adminToken) {
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const addToCart = async (ItemId, size) => {
    if (!size) {
      toast.error("Select product size");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[ItemId]) {
      if (cartData[ItemId][size]) {
        cartData[ItemId][size] += 1;
      } else {
        cartData[ItemId][size] = 1;
      }
    } else {
      cartData[ItemId] = {};
      cartData[ItemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        totalCount += cartItems[productId][size];
      }
    }

    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  }

  // --- ADD THIS FUNCTION (To calculate total price) ---
  const getCartAmount = () => {
    let totalAmount = 0;
    for(const items in cartItems){
        let itemInfo = products.find((product)=> product._id === items);
        for(const item in cartItems[items]){
            try {
                if (cartItems[items][item] > 0) {
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
            } catch (error) {}
        }
    }
    return totalAmount;
  }

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    user,
    token,
    login,
    logout
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
