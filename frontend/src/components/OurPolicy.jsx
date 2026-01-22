import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='py-24 bg-gradient-to-b from-white via-gray-50 to-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-block mb-4'>
            <span className='bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent text-sm font-bold tracking-[0.3em] uppercase'>Why Choose Us</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Experience Excellence</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 mx-auto rounded-full'></div>
        </div>

        {/* Policy Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative'>
          {/* Decorative Background Elements */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-30 pointer-events-none'>
            <div className='absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'></div>
            <div className='absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
          </div>

          {/* Effortless Exchange */}
          <div className='group relative bg-white rounded-3xl p-10 text-center border-2 border-gray-100 hover:border-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-gray-900/0 to-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='relative z-10'>
              <div className='relative inline-block mb-8'>
                <div className='absolute inset-0 bg-gray-900/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500'></div>
                <div className='relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'>
                  <img src={assets.exchange_icon} alt="Exchange" className='w-12 h-12 brightness-0 invert'/>
                </div>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors'>Effortless Exchange</h3>
              <p className='text-gray-600 leading-relaxed mb-4'>Simple returns and exchanges within 30 days</p>
              <div className='w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-900 mx-auto rounded-full group-hover:w-24 transition-all duration-500'></div>
            </div>
          </div>

          {/* Premium Quality - Featured Card */}
          <div className='group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-10 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 overflow-hidden md:scale-105'>
            {/* Animated background gradient */}
            <div className='absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            {/* Shine effect */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000'>
              <div className='absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000'></div>
            </div>
            <div className='relative z-10'>
              <div className='relative inline-block mb-8'>
                <div className='absolute inset-0 bg-white/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500'></div>
                <div className='relative bg-white w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'>
                  <img src={assets.quality_icon} alt="Quality" className='w-12 h-12'/>
                </div>
              </div>
              <div className='inline-block mb-3'>
                <span className='bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider'>FEATURED</span>
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>Premium Quality</h3>
              <p className='text-gray-200 leading-relaxed mb-4'>Curated collections with verified authenticity</p>
              <div className='w-16 h-1 bg-gradient-to-r from-white/50 to-white mx-auto rounded-full group-hover:w-24 transition-all duration-500'></div>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className='group relative bg-white rounded-3xl p-10 text-center border-2 border-gray-100 hover:border-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-gray-900/0 to-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='relative z-10'>
              <div className='relative inline-block mb-8'>
                <div className='absolute inset-0 bg-gray-900/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500'></div>
                <div className='relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'>
                  <img src={assets.support_img} alt="Support" className='w-12 h-12 brightness-0 invert'/>
                </div>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors'>24/7 Support</h3>
              <p className='text-gray-600 leading-relaxed mb-4'>Dedicated style experts always ready to help</p>
              <div className='w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-900 mx-auto rounded-full group-hover:w-24 transition-all duration-500'></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='text-center'>
            <div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2'>50K+</div>
            <div className='text-gray-600 font-medium'>Happy Customers</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2'>99%</div>
            <div className='text-gray-600 font-medium'>Satisfaction Rate</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2'>24/7</div>
            <div className='text-gray-600 font-medium'>Support Available</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2'>500+</div>
            <div className='text-gray-600 font-medium'>Premium Brands</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy