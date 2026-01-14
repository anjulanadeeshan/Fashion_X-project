import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { getUserOrders } from '../services/orderService'
import { toast } from 'react-toastify'

const Orders = () => {

  const { currency, user } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const response = await getUserOrders(user.id);
      if (response.success) {
        setOrders(response.orders);
      }
    } catch (error) {
      toast.error('Failed to fetch orders');
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      'Order Placed': 'bg-blue-500',
      'Packing': 'bg-yellow-500',
      'Shipped': 'bg-purple-500',
      'Out for delivery': 'bg-orange-500',
      'Delivered': 'bg-green-500'
    };
    return colors[status] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <div className='px-4 sm:px-[5vw] md:px-[7vh] lg:px-[9vh] border-t pt-16 min-h-[60vh] flex items-center justify-center'>
        <p className='text-xl text-gray-600'>Loading your orders...</p>
      </div>
    );
  }

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vh] lg:px-[9vh] border-t pt-16'>

        <div className='text-2xl'>
            <div className='inline-flex items-center gap-2 mb-3'>
                <p className='text-gray-500'>MY <span className='text-gray-700 font-medium'>ORDERS</span></p>
                <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
            </div>
        </div>

        <div>
            {orders.length === 0 ? (
                <div className='text-center py-12'>
                    <p className='text-gray-500 text-lg'>No orders yet</p>
                    <button 
                        onClick={() => window.location.href = '/collection'}
                        className='mt-4 bg-black text-white px-8 py-3 text-sm'
                    >
                        Start Shopping
                    </button>
                </div>
            ) : (
                orders.map((order) => (
                    <div key={order._id} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                        
                        {/* Left Side: Order Items */}
                        <div className='flex items-start gap-6 text-sm w-full md:w-1/2'>
                            <div className='flex flex-col gap-2 w-full'>
                                {order.items.map((item, idx) => (
                                    <div key={idx} className='flex items-start gap-4'>
                                        <img className='w-16 sm:w-20' src={item.image} alt={item.name} />
                                        <div className='flex-1'>
                                            <p className='sm:text-base font-medium'>{item.name}</p>
                                            <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                                <p className='text-lg'>{currency}{item.price}</p>
                                                <p>Quantity: {item.quantity}</p>
                                                <p>Size: {item.size}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className='mt-2 text-sm'>
                                    <p className='font-medium'>Total: {currency}{order.amount}</p>
                                    <p className='text-gray-500'>Payment: {order.paymentMethod} {order.payment ? '(Paid)' : '(Pending)'}</p>
                                    <p>Date: <span className='text-gray-400'>{new Date(order.date).toLocaleDateString()}</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Order Status & Actions */}
                        <div className='md:w-1/2 flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <p className={`min-w-2 h-2 rounded-full ${getStatusColor(order.status)}`}></p>
                                <p className='text-sm md:text-base'>{order.status}</p>
                            </div>
                            
                            <button 
                                onClick={fetchOrders}
                                className='border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-50'
                            >
                                Track Order
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    </div>
  )
}

export default Orders