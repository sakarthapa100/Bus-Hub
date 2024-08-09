import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';

const BusTicketSearch = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const navigate = useNavigate();

  const cities = [ "Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur", "Biratnagar", "Bharatpur", "Birgunj", "Dharan", "Butwal", "Hetauda", "Nepalgunj", "Janakpur", "Itahari", "Dhangadhi", "Ghorahi", "Tulsipur", "Bhimdatta", "Siddharthanagar", "Kalaiya", "Jitpur Simara", "Madhyapur Thimi", "Mechinagar", "Gorkha", "Baglung", "Bhadrapur", "Dipayal-Silgadhi", "Putalibazar", "Lekhnath", "Rajbiraj", "Lahan", "Siraha", "Gaighat", "Damak", "Triyuga", "Kirtipur", "Kohalpur", "Birtamod"];

  const handleInputChange = (e, type) => {
    const value = e.target.value;
    if (type === 'origin') {
      setOrigin(value);
      setOriginSuggestions(filterSuggestions(value));
    } else {
      setDestination(value);
      setDestinationSuggestions(filterSuggestions(value));
    }
  };

  const filterSuggestions = (input) => {
    return cities.filter(city => 
      city.toLowerCase().startsWith(input.toLowerCase())
    );
  };

  const handleSuggestionClick = (suggestion, type) => {
    if (type === 'origin') {
      setOrigin(suggestion);
      setOriginSuggestions([]);
    } else {
      setDestination(suggestion);
      setDestinationSuggestions([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (origin && destination && date) {
      navigate(`/search-results?origin=${origin}&destination=${destination}&date=${date}`);
    } else {
      alert("Please fill in all fields before searching.");
    }
  };

  return (
    <div className="bg-cover bg-center h-screen" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
      <div className="bg-black bg-opacity-50 h-full p-8 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Making Travel <span className='text-green-500'>Easy</span> and  
            <span className='text-yellow-500'> Affordable</span>
          </h1>
          <p className="text-white text-xl mb-8 text-center">Search Bus Ticket Online</p>
          
          <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <FaMapMarkerAlt className="absolute top-4 left-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Origin" 
                  className="w-full p-3 pl-10 border rounded"
                  value={origin}
                  onChange={(e) => handleInputChange(e, 'origin')}
                />
                {originSuggestions.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
                    {originSuggestions.map((suggestion, index) => (
                      <li 
                        key={index} 
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSuggestionClick(suggestion, 'origin')}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative">
                <FaMapMarkerAlt className="absolute top-4 left-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Destination" 
                  className="w-full p-3 pl-10 border rounded"
                  value={destination}
                  onChange={(e) => handleInputChange(e, 'destination')}
                />
                {destinationSuggestions.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
                    {destinationSuggestions.map((suggestion, index) => (
                      <li 
                        key={index} 
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSuggestionClick(suggestion, 'destination')}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative">
                <FaCalendarAlt className="absolute top-4 left-3 text-gray-400" />
                <input 
                  type="date" 
                  placeholder="Depart Date" 
                  className="w-full p-3 pl-10 border rounded text-gray-400"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <button type="submit" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded hover:from-orange-600 hover:to-orange-700 transition duration-300 font-semibold flex items-center justify-center">
                <FaSearch className="mr-2" />
                SEARCH BUS
              </button>
            </div>
          </form>

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