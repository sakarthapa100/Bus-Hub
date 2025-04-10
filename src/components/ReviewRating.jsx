import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const ReviewRatingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  
  // Sample review data with detailed information
  const reviews = [
    {
      id: 1,
      name: "Rajesh Sharma",
      image: "/api/placeholder/80/80",
      rating: 4.5,
      comment: "The journey from Kathmandu to Pokhara exceeded my expectations. The bus was immaculate, the seats were comfortable, and the driver was professional. The scenic views along the way were an added bonus!",
      date: "March 15, 2025",
      trip: "Kathmandu to Pokhara"
    },
    {
      id: 2,
      name: "Priya Patel",
      image: "/api/placeholder/80/80",
      rating: 5,
      comment: "Booking process was seamless and when I needed to reschedule due to an unexpected event, the customer service was incredibly helpful. I'll definitely be using this service for all my future travels.",
      date: "February 22, 2025",
      trip: "Birgunj to Kathmandu"
    },
    {
      id: 3,
      name: "Anil Kumar",
      image: "/api/placeholder/80/80",
      rating: 4,
      comment: "Excellent value for money. The bus was punctual, and the journey included well-timed rest stops. The onboard amenities made the long journey much more pleasant.",
      date: "April 3, 2025",
      trip: "Pokhara to Chitwan"
    },
    {
      id: 4,
      name: "Sita Thapa",
      image: "/api/placeholder/80/80",
      rating: 5,
      comment: "This is my go-to bus booking service. The app is intuitive, the booking confirmation is instant, and I've never had any issues with the bus operators. The loyalty program is a nice touch!",
      date: "March 30, 2025",
      trip: "Biratnagar to Dharan"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300" />);
    }
    
    return stars;
  };
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 text-gray-800">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-semibold uppercase tracking-wider mb-4">
          Traveler Testimonials
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4">
          Hear From Our Happy Travelers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Thousands have enjoyed their journeys with us — here’s what they’re saying!
        </p>
      </div>
  
      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={review.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-blue-100 relative backdrop-blur-md">
                <FaQuoteRight className="absolute top-6 right-6 text-4xl text-blue-200 opacity-30" />
                <div className="mb-4 flex items-center gap-2 text-yellow-400">
                  {renderStars(review.rating)}
                </div>
                <p className="text-lg font-medium text-gray-700 italic mb-6">
                  “{review.comment}”
                </p>
                <div className="mb-4">
                  <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {review.trip}
                  </span>
                </div>
                <div className="flex items-center gap-4 border-t pt-4 border-blue-100">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full border-2 border-blue-400 object-cover"
                  />
                  <div>
                    <p className="font-bold text-blue-800">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Slider controls */}
        <div className="mt-10 flex justify-between items-center">
          <div className="flex space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex space-x-3">
            <button
              onClick={prevSlide}
              className="bg-white border border-blue-200 hover:bg-blue-100 p-2 rounded-full shadow transition"
              aria-label="Previous review"
            >
              <FaChevronLeft className="text-blue-700" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white border border-blue-200 hover:bg-blue-100 p-2 rounded-full shadow transition"
              aria-label="Next review"
            >
              <FaChevronRight className="text-blue-700" />
            </button>
          </div>
        </div>
      </div>
  
      {/* Stats */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-blue-600">2,500+</p>
          <p className="text-gray-500 mt-1">Happy Customers</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">4.8/5</p>
          <p className="text-gray-500 mt-1">Average Rating</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">30+</p>
          <p className="text-gray-500 mt-1">Bus Partners</p>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ReviewRatingSection;