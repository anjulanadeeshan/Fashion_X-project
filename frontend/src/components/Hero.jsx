import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/*Hero left section*/}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>TRENDING NOW</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-2 lg:text-5xl leading-relaxed'>Winter Collection 2025</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>DISCOVER MORE</p>
                    <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/*hero right section*/}
        <img src={assets.hero_img} alt="" className='w-full sm:w-1/2'/>
    </div>
  )
}

export default Hero