import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Product from './Product'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className='px-4 sm:px-[5vw] md:px-[7vh] lg:px-[9vh]'>
        <LatestCollection/>
        <BestSeller/>
        <OurPolicy/>
        <NewsLetter/>
      </div>
    </div>
  )
}

export default Home