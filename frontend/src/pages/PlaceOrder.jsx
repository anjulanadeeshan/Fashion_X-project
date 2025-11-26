import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const { navigate } = useContext(ShopContext); // Or use useNavigate directly
  const navigation = useNavigate(); // Standard hook
  
  const [method, setMethod] = useState('cod');

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
      {/* ------------- Left Side: Delivery Information ------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
      
        <div className='text-xl sm:text-2xl my-3'>
            <div className='inline-flex items-center gap-2 mb-3'>
                <p className='text-gray-500'>DELIVERY <span className='text-gray-700 font-medium'>INFORMATION</span></p>
                <p className='w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700'></p>
            </div>
        </div>

        <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        
        <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        
        <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
        
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
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
                <button onClick={()=>navigation('/orders')} className='bg-black text-white px-16 py-3 text-sm active:bg-gray-700'>
                    PLACE ORDER
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder