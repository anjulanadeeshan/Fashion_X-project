import React, { useState } from 'react'

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
          setEmail('');
          setIsSubmitted(false);
        }, 3000);
    }

  return ( 
    <div className='my-24 relative overflow-hidden'>
      {/* Background with gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl'></div>
      
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden rounded-3xl'>
        <div className='absolute -top-1/2 -left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse'></div>
        <div className='absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse' style={{animationDelay: '2s'}}></div>
      </div>

      {/* Decorative grid pattern */}
      <div className='absolute inset-0 opacity-10 rounded-3xl' style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className='relative z-10 text-center py-20 px-6 md:px-12'>
        {/* Animated Icon */}
        <div className='inline-block mb-8 relative'>
          <div className='absolute inset-0 bg-white/20 rounded-3xl blur-2xl animate-pulse'></div>
          <div className='relative bg-white/10 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-white/20 hover:scale-110 transition-transform duration-300'>
            <svg className='w-12 h-12 text-white' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'/>
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'/>
            </svg>
          </div>
        </div>
        
        {/* Badge */}
        <div className='inline-block mb-6'>
          <span className='bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-5 py-2 rounded-full tracking-wider border border-white/30'>✨ EXCLUSIVE BENEFITS</span>
        </div>

        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
          Join Our Style Community
        </h2>
        <p className='text-gray-200 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto'>
          Subscribe to receive <span className='text-white font-semibold'>exclusive offers</span>, early access to new collections, and personalized style tips delivered to your inbox.
        </p>
        
        {/* Form */}
        <form onSubmit={onSubmitHandler} className='max-w-2xl mx-auto mb-10'>
          <div className='flex flex-col sm:flex-row gap-4 items-center backdrop-blur-sm bg-white/10 p-2 rounded-2xl border border-white/20 shadow-2xl'>
            <div className='relative flex-1 w-full'>
              <svg className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
              </svg>
              <input 
                className='w-full pl-12 pr-6 py-4 rounded-xl bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all duration-300 shadow-lg font-medium' 
                type="email" 
                placeholder='Enter your email address' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button 
              type='submit' 
              disabled={isSubmitted}
              className='w-full sm:w-auto bg-white text-gray-900 font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
            >
              {isSubmitted ? (
                <span className='flex items-center justify-center gap-2'>
                  <svg className='w-5 h-5 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  SUBSCRIBED!
                </span>
              ) : (
                'SUBSCRIBE NOW'
              )}
            </button>
          </div>
        </form>

        {/* Trust Indicators */}
        <div className='flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm'>
          <div className='flex items-center gap-2'>
            <svg className='w-5 h-5 text-green-400' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
            </svg>
            <span className='font-medium'>Spam-free guarantee</span>
          </div>
          <div className='flex items-center gap-2'>
            <svg className='w-5 h-5 text-blue-400' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' clipRule='evenodd' />
            </svg>
            <span className='font-medium'>Unsubscribe anytime</span>
          </div>
          <div className='flex items-center gap-2'>
            <svg className='w-5 h-5 text-purple-400' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'/>
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'/>
            </svg>
            <span className='font-medium'>50K+ subscribers</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter