import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products])

  return (
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3'>
        <div className='inline-flex items-center gap-2 mb-3'>
            <p className='text-gray-500'>YOUR <span className='text-gray-700 font-medium'>CART</span></p>
            <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
        </div>
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                
                {/* Product Image & Details */}
                <div className='flex items-start gap-4 sm:gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                    {/* Name: Smaller font on mobile */}
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-3 sm:gap-5 mt-2'>
                      <p className='text-sm sm:text-base'>{currency}{productData.price}</p>
                      {/* Size Badge: Compact on mobile */}
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 text-xs sm:text-base'>{item.size}</p>
                    </div>
                  </div>
                </div>

                {/* Quantity Input: Smaller width on mobile */}
                <input 
                    onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} 
                    className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-center' 
                    type="number" 
                    min={1} 
                    defaultValue={item.quantity} 
                />

                {/* Delete Bin Icon: Responsive margin and size */}
                <img 
                    onClick={()=>updateQuantity(item._id, item.size, 0)} 
                    className='w-4 mr-4 sm:w-5 cursor-pointer hover:scale-110 transition-transform' 
                    src={assets.bin_icon} 
                    alt="Remove" 
                />
              </div>
            )
          })
        }
      </div>

      {/* Cart Totals Section */}
      <div className='flex justify-end my-20'>
        {/* Full width on mobile, fixed width on Desktop */}
        <div className='w-full sm:w-[450px]'>
            <CartTotal />
            <div className='w-full text-end'>
                <button 
                  onClick={()=>navigate('/place-order')} 
                  className='bg-black text-white text-sm my-8 px-8 py-3 active:bg-gray-700 w-full sm:w-auto hover:bg-gray-800 transition-colors'
                >
                    PROCEED TO CHECKOUT
                </button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Cart