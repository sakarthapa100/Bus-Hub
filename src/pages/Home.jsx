import React from 'react'
import BusSearch from '../components/BusSearch'
import FAQSection from '../components/FAQSection'
import ReviewsAndRatings from '../components/ReviewandRatings'
import BusCarousel from '../components/BusCarousel'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import ReviewRatingSection from '../components/ReviewRating'

const Home = () => {
  return (
    <div>
      <BusSearch /> 
     
      <Hero />
      

         <BusCarousel />
         <ReviewRatingSection />
         <FAQSection />
      <WhyChooseUs />
   
     
      {/* <ReviewsAndRatings /> */}
    </div>
  )
}

export default Home