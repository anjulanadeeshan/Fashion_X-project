import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetter from '../components/NewsLetter'


const About = () => {
  return (
    <div>

      {/* ----------------- About Us Section ----------------- */}
      <div className='text-2xl text-center pt-8 border-t'>
          <div className='inline-flex items-center gap-2 mb-3'>
              <p className='text-gray-500'>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
              <p className='w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700'></p>
          </div>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Us" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Forever emerged from a vision to redefine online fashion retail by blending style, quality, and accessibility. Founded by a team of fashion enthusiasts and tech innovators, we set out to create more than just a store – we built a destination where modern shoppers discover their unique style effortlessly.</p>
              <p>What started as a boutique collection has evolved into a comprehensive fashion marketplace. We partner directly with emerging designers and established brands worldwide, ensuring every piece meets our rigorous standards for quality, sustainability, and contemporary design. Our curated selections reflect current trends while honoring timeless classics.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>We exist to inspire confidence through fashion. Our commitment extends beyond transactions – we're building a community where personal style flourishes, sustainable choices matter, and every customer feels valued from first click to final delivery.</p>
          </div>
      </div>

      {/* ----------------- Why Choose Us Section ----------------- */}
      <div className='text-xl py-4'>
          <div className='inline-flex items-center gap-2 mb-3'>
              <p className='text-gray-500'>WHY <span className='text-gray-700 font-medium'>CHOOSE US</span></p>
              <p className='w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700'></p>
          </div>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Every item undergoes rigorous quality checks and material verification. We stand behind each product with confidence, ensuring premium craftsmanship in every piece we offer.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Experience seamless shopping with smart filters, personalized recommendations, and express checkout. Your perfect outfit is just a few clicks away, delivered right to your doorstep.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Our passionate style experts are available around the clock to help with sizing, styling advice, or any concern. Your complete satisfaction drives everything we do.</p>
          </div>

      </div>

      {/* ----------------- Newsletter Section ----------------- */}
      <NewsLetter />
      
    </div>
  )
}

export default About