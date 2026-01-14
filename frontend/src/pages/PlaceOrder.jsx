import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { useNavigate } from 'react-router-dom'
import { placeOrder } from '../services/orderService'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const { cartItems, products, getCartAmount, navigate } = useContext(ShopContext);
  const navigation = useNavigate();
  
  const [method, setMethod] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = async () => {
    try {
      setLoading(true);

      // Validate form
      if (!formData.firstName || !formData.email || !formData.street || !formData.city) {
        toast.error('Please fill all required fields');
        setLoading(false);
        return;
      }

      // Get user data
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        toast.error('Please login to place an order');
        navigate('/login');
        return;
      }

      // Prepare order items from cart
      const orderItems = [];
      for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
          if (cartItems[itemId][size] > 0) {
            const product = products.find(p => p._id === itemId);
            if (product) {
              orderItems.push({
                productId: product._id,
                name: product.name,
                price: product.price,
                quantity: cartItems[itemId][size],
                size: size,
                image: product.image[0]
              });
            }
          }
        }
      }

      if (orderItems.length === 0) {
        toast.error('Your cart is empty');
        setLoading(false);
        return;
      }

      // Prepare order data
      const orderData = {
        userId: user.id,
        items: orderItems,
        amount: getCartAmount() + 10, // Including delivery fee
        address: formData,
        paymentMethod: method.toUpperCase()
      };

      // Place order
      const response = await placeOrder(orderData);

      if (response.success) {
        toast.success('Order placed successfully!');
        // Clear cart (you may need to implement this in context)
        navigation('/orders');
      } else {
        toast.error(response.message || 'Failed to place order');
      }

      setLoading(false);
    } catch (error) {
      console.error('Place order error:', error);
      toast.error('Failed to place order. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vh] lg:px-[9vh] flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
      {/* ------------- Left Side: Delivery Information ------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
      
        <div className='text-xl sm:text-2xl my-3'>
            <div className='inline-flex items-center gap-2 mb-3'>
                <p className='text-gray-500'>DELIVERY <span className='text-gray-700 font-medium'>INFORMATION</span></p>
                <p className='w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700'></p>
            </div>
        </div>

        <div className='flex gap-3'>
            <input 
              className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
              type="text" 
              name="firstName"
              placeholder='First name'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input 
              className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
              type="text" 
              name="lastName"
              placeholder='Last name'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
        </div>
        <input 
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="email" 
          name="email"
          placeholder='Email address'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input 
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="text" 
          name="street"
          placeholder='Street'
          value={formData.street}
          onChange={handleChange}
          required
        />
        
        <div className='flex gap-3'>
            <input 
              className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
              type="text" 
              name="city"
              placeholder='City'
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input 
              className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
              type="text" 
              name="state"
              placeholder='State'
              value={formData.state}
              onChange={handleChange}
            />
        </div>
        
        <div className='flex gap-3'>
            <input 
              className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
              type="text" 
              name="zipcode"
              placeholder='Zipcode'
              value={formData.zipcode}
              onChange={handleChange}
            />
            <input 
              className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
              type="text" 
              name="country"
              placeholder='Country'
              value={formData.country}
              onChange={handleChange}
            />
        </div>
        
        <input 
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="tel" 
          name="phone"
          placeholder='Phone'
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* ------------- Right Side: Cart Total & Payment ------------- */}
      <div className='mt-8'>
        
        <div className='mt-8 min-w-80'>
            <CartTotal />
        </div>

        <div className='mt-12'>
            <div className='text-xl sm:text-2xl my-3'>
                <div className='inline-flex items-center gap-2 mb-3'>
                    <p className='text-gray-500'>PAYMENT <span className='text-gray-700 font-medium'>METHOD</span></p>
                    <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
                </div>
            </div>

            {/* Payment Method Selection */}
            <div className='flex gap-3 flex-col lg:flex-row'>
                
                {/* Stripe */}
                <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                    <img className='h-5 mx-4' src={assets.stripe_logo} alt="Stripe" />
                </div>

                {/* Razorpay */}
                <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                    <img className='h-5 mx-4' src={assets.razorpay_logo} alt="Razorpay" />
                </div>

                {/* Cash on Delivery */}
                <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                    <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                </div>

            </div>

            <div className='w-full text-end mt-8'>
                <button 
                  onClick={handlePlaceOrder} 
                  disabled={loading}
                  className='bg-black text-white px-16 py-3 text-sm active:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed'
                >
                    {loading ? 'PLACING ORDER...' : 'PLACE ORDER'}
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder