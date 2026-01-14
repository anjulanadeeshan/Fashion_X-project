import React from 'react'

import NewsLetter from '../components/NewsLetter'
import { assets } from '../assets/frontend_assets/assets'

const Contact = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vh] lg:px-[9vh]">

      {/* ----------------- Title Section ----------------- */}
      <div className='text-center text-2xl pt-10 border-t mt-[100px]'>
          <div className='inline-flex items-center gap-2 mb-3'>
              <p className='text-gray-500'>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
              <p className='w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700'></p>
          </div>
      </div>

      {/* ----------------- Contact Content ----------------- */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        
        {/* Left Side: Image */}
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Us" />

        {/* Right Side: Information */}
        <div className='flex flex-col justify-center items-start gap-6'>
            
            {/* Store Information */}
            <p className='font-semibold text-xl text-gray-600'>Our Headquarters</p>
            <p className='text-gray-500'>
              1247 Fashion Avenue <br /> 
              SoHo District, New York, NY 10012
            </p>
            <p className='text-gray-500'>
              Tel: +1 (646) 892-4100 <br /> 
              Email: support@forever.com
            </p>

            {/* Careers Section */}
            <p className='font-semibold text-xl text-gray-600'>Join Our Team</p>
            <p className='text-gray-500'>Discover exciting career opportunities and become part of our growing fashion family.</p>
            
            {/* Interactive Button */}
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
                Explore Jobs
            </button>
        </div>

      </div>

      {/* ----------------- Newsletter Subscription ----------------- */}
      <NewsLetter />

    </div>
  )
}

export default Contact