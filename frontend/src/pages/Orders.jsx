import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {

  const { products, currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>

        <div className='text-2xl'>
            <div className='inline-flex items-center gap-2 mb-3'>
                <p className='text-gray-500'>MY <span className='text-gray-700 font-medium'>ORDERS</span></p>
                <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
            </div>
        </div>

        <div>
            {
                // We are mapping products.slice(1, 4) just to display dummy data for now
                products.slice(1, 4).map((item, index) => (
                    <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                        
                        {/* Left Side: Image and Product Info */}
                        <div className='flex items-start gap-6 text-sm'>
                            <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                            <div>
                                <p className='sm:text-base font-medium'>{item.name}</p>
                                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                    <p className='text-lg'>{currency}{item.price}</p>
                                    <p>Quantity: 1</p>
                                    <p>Size: M</p>
                                </div>
                                <p className='mt-2'>Date: <span className='text-gray-400'>25, Jul, 2024</span></p>
                            </div>
                        </div>

                        {/* Middle: Order Status */}
                        <div className='md:w-1/2 flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                <p className='text-sm md:text-base'>Ready to ship</p>
                            </div>
                            
                            {/* Right: Action Button */}
                            <button className='border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-50'>
                                Track Order
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Orders