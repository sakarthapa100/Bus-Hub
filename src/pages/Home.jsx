import React from 'react'
import BusSearch from '../components/BusSearch'
import FAQSection from '../components/FAQSection'
import ReviewsAndRatings from '../components/ReviewandRatings'

const Home = () => {
  return (
    <div>
      <BusSearch />
      <FAQSection />
      <ReviewsAndRatings />
    </div>
  )
}

export default Home