import React from 'react'
import NewsLetter from '../components/NewsLetter'
import { assets } from '../assets/frontend_assets/assets'

const Contact = () => {
  return (
    <div className="min-h-screen">
      
      {/* ----------------- Hero Section with Background Image ----------------- */}
      <div className='relative h-[400px] mt-[100px] overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10'></div>
        <img 
          className='absolute inset-0 w-full h-full object-cover object-center' 
          src={assets.charming_lady} 
          alt="Contact Fashion_X" 
        />
        <div className='relative z-20 h-full flex flex-col justify-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-white'>
          <h1 className='text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg'>Get in Touch</h1>
          <p className='text-xl md:text-2xl font-light max-w-xl drop-shadow-md'>We'd love to hear from you. Reach out and let's create something beautiful together.</p>
        </div>
      </div>

      {/* ----------------- Contact Content ----------------- */}
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16 bg-gradient-to-b from-gray-50 to-white'>
        
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16'>
          
          {/* Left Side: Contact Form */}
          <div className='bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>Send us a Message</h2>
            <form className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Your Name</label>
                <input 
                  type='text' 
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300'
                  placeholder='John Doe'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
                <input 
                  type='email' 
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300'
                  placeholder='you@example.com'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                <input 
                  type='tel' 
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300'
                  placeholder='+1 (555) 000-0000'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Your Message</label>
                <textarea 
                  rows='5' 
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none'
                  placeholder='Tell us what you need...'
                ></textarea>
              </div>
              <button className='w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-300 shadow-lg'>
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Information Cards */}
          <div className='space-y-6'>
            
            {/* Headquarters Card */}
            <div className='bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-xl'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='bg-white/20 p-3 rounded-full'>
                  <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold'>Our Headquarters</h3>
              </div>
              <p className='text-gray-200 leading-relaxed'>
                1247 Fashion Avenue<br />
                SoHo District, New York<br />
                NY 10012, United States
              </p>
            </div>

            {/* Contact Details Card */}
            <div className='bg-white rounded-2xl p-8 shadow-xl border border-gray-100'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='bg-black p-3 rounded-full'>
                  <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-gray-800'>Contact Details</h3>
              </div>
              <div className='space-y-3 text-gray-600'>
                <p className='flex items-center gap-2'>
                  <span className='font-semibold'>Phone:</span>
                  <a href='tel:+16468924100' className='hover:text-black transition-colors'>+1 (646) 892-4100</a>
                </p>
                <p className='flex items-center gap-2'>
                  <span className='font-semibold'>Email:</span>
                  <a href='mailto:support@fashionx.com' className='hover:text-black transition-colors'>support@fashionx.com</a>
                </p>
                <p className='flex items-center gap-2'>
                  <span className='font-semibold'>Hours:</span>
                  <span>Mon-Fri: 9AM - 6PM EST</span>
                </p>
              </div>
            </div>

            {/* Careers Card */}
            <div className='bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='bg-black p-3 rounded-full'>
                  <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-gray-800'>Join Our Team</h3>
              </div>
              <p className='text-gray-600 mb-6 leading-relaxed'>
                Passionate about fashion and innovation? Explore exciting career opportunities and become part of our growing family.
              </p>
              <button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md'>
                View Open Positions →
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* ----------------- Newsletter Subscription ----------------- */}
      <NewsLetter />

    </div>
  )
}

export default Contact