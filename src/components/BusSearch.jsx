import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';

const BusTicketSearch = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
      <div className="bg-black bg-opacity-50 h-full p-8 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Making Travel <span className='text-green-500'>Easy</span> and  
            <span className='text-yellow-500'> Affordable</span>
          </h1>
          <p className="text-white text-xl mb-8 text-center">Search Bus Ticket Online</p>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <FaMapMarkerAlt className="absolute top-4 left-3 text-gray-400  " />
                <input 
                  type="text" 
                  placeholder="Origin" 
                  className="w-full p-3 pl-10 border rounded"
                />
              </div>
              <div className="relative">
                <FaMapMarkerAlt className="absolute top-4 left-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Destination" 
                  className="w-full p-3 pl-10 border rounded"
                />
              </div>
              <div className="relative">
                <FaCalendarAlt className="absolute top-4 left-3 text-gray-400" />
                <input 
                  type="date" 
                  placeholder="Depart Date" 
                  className="w-full p-3 pl-10 border rounded text-gray-400 "
                />
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded hover:from-orange-600 hover:to-orange-700 transition duration-300 font-semibold flex items-center justify-center">
                <FaSearch className="mr-2" />
                SEARCH BUS
              </button>
            </div>
          </div>

          <div className="text-white text-center">
            <h2 className="text-2xl font-semibold mb-4">Popular Destinations</h2>
            <div className="flex justify-center space-x-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded">Pokhara</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded">Kathmandu</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded">Chitwan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusTicketSearch;