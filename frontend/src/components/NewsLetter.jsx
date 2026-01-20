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
      
      {/* Trust badges */}
      <div className='flex flex-wrap justify-center items-center gap-8 mt-10 text-gray-500 text-sm'>
        <div className='flex items-center gap-2'>
          <svg className='w-5 h-5 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
            <path fillRule='evenodd' d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'/>
          </svg>
          <span className='font-medium'>100% Secure</span>
        </div>
        <div className='flex items-center gap-2'>
          <svg className='w-5 h-5 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'/>
          </svg>
          <span className='font-medium'>No Spam</span>
        </div>
        <div className='flex items-center gap-2'>
          <svg className='w-5 h-5 text-red-600' fill='currentColor' viewBox='0 0 20 20'>
            <path fillRule='evenodd' d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' clipRule='evenodd'/>
          </svg>
          <span className='font-medium'>Unsubscribe Anytime</span>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter