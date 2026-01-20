import React from 'react'

const NewsLetter = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return ( 
    <div className='my-20 text-center py-12'>
      {/* Icon */}
      <div className='inline-block mb-6'>
        <div className='bg-gradient-to-br from-gray-900 to-gray-700 p-5 rounded-2xl shadow-xl'>
          <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'/>
            <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'/>
          </svg>
        </div>
      </div>
      
      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
        Join Our Style Community
      </h2>
      <p className='text-gray-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto'>
        Subscribe to receive exclusive offers, early access to new collections, and personalized style tips delivered to your inbox.
      </p>
      
      <form onSubmit={onSubmitHandler} className='max-w-2xl mx-auto'>
        <div className='flex flex-col sm:flex-row gap-4 items-center'>
          <input 
            className='flex-1 w-full px-6 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 shadow-sm' 
            type="email" 
            placeholder='Enter your email' 
            required
          />
          <button 
            type='submit' 
            className='w-full sm:w-auto bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold px-10 py-4 rounded-xl hover:from-gray-800 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap'
          >
            SUBSCRIBE
          </button>
        </div>
      </form>
      
      
    </div>
  )
}

export default NewsLetter