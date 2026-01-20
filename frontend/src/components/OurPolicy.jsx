import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='py-20'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        
        {/* Effortless Exchange */}
        <div className='group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
          <div className='relative inline-block mb-6'>
            <div className='absolute inset-0 bg-black/5 rounded-full blur-xl group-hover:bg-black/10 transition-all duration-500'></div>
            <div className='relative bg-gradient-to-br from-gray-900 to-gray-700 w-20 h-20 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500'>
              <img src={assets.exchange_icon} alt="Exchange" className='w-10 h-10 brightness-0 invert'/>
            </div>
          </div>
          <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors'>Effortless Exchange</h3>
          <p className='text-gray-500 leading-relaxed'>Simple returns and exchanges within 30 days</p>
        </div>

        {/* Premium Quality */}
        <div className='group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
          <div className='relative inline-block mb-6'>
            <div className='absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500'></div>
            <div className='relative bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500'>
              <img src={assets.quality_icon} alt="Quality" className='w-10 h-10'/>
            </div>
          </div>
          <h3 className='text-xl font-bold text-white mb-3'>Premium Quality</h3>
          <p className='text-gray-300 leading-relaxed'>Curated collections with verified authenticity</p>
        </div>

        {/* 24/7 Support */}
        <div className='group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
          <div className='relative inline-block mb-6'>
            <div className='absolute inset-0 bg-black/5 rounded-full blur-xl group-hover:bg-black/10 transition-all duration-500'></div>
            <div className='relative bg-gradient-to-br from-gray-900 to-gray-700 w-20 h-20 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500'>
              <img src={assets.support_img} alt="Support" className='w-10 h-10 brightness-0 invert'/>
            </div>
          </div>
          <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors'>24/7 Support</h3>
          <p className='text-gray-500 leading-relaxed'>Dedicated style experts always ready to help</p>
        </div>

      </div>
    </div>
  )
}

export default OurPolicy