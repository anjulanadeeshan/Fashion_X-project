import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className='relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden mt-16 sm:mt-20 md:mt-24'>
      {/* Hero Image */}
      <img
        src={assets.hero_img}
        alt="Fashion X - Brand New Arrival"
        className='absolute inset-0 w-full h-full object-cover object-center'
      />

      {/* Gradient Overlay for better text visibility */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30'></div>

      {/* Content Overlay */}
      <div className='absolute inset-0 flex items-center justify-center sm:justify-start'>
        <div className='text-center sm:text-left px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-7xl w-full'>
          {/* Main Heading */}
          <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 drop-shadow-2xl animate-fade-in'>
            <span className='block mb-1 sm:mb-2'>Brand New</span>
            <span className='block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>Arrival</span>
          </h1>

          {/* Subheading */}
          <p className='text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-lg md:max-w-xl mb-6 sm:mb-8 md:mb-10 drop-shadow-lg leading-relaxed'>
            Discover the latest trends in fashion. Elevate your style with our exclusive collection.
          </p>

          {/* Call to Action Button */}
          <button
            onClick={() => navigate('/collection')}
            className='bg-white text-black px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl active:scale-95'
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Scroll Indicator (Desktop only) */}
      <div className='hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2'>
          <div className='w-1.5 h-3 bg-white/70 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero