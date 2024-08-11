import React from 'react'
import BusSearch from '../components/BusSearch'
import FAQSection from '../components/FAQSection'
import ReviewsAndRatings from '../components/ReviewandRatings'
import BusCarousel from '../components/BusCarousel'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <BusSearch /> 
     
      <Hero />
      <FAQSection />

         <BusCarousel />
      
      
     
      <ReviewsAndRatings />
    </div>
  )
}

export default Home