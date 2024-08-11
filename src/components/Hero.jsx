import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
         
      <span > Fast , </span>   
          
          <span className='text-yellow-500'>Affordable Bus </span> 
           Tickets at Your Fingertips
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl animate-fade-in-up">
          Book your journey with ease. Enjoy seamless reservations, competitive prices, and a wide network of routes.
        </p>
        <div className="flex space-x-4 animate-fade-in">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Book Now
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;