import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch, FaBus, FaClock, FaWifi, FaPlug, FaSnowflake } from 'react-icons/fa';

const BookTickets = () => {
  const [bookingData, setBookingData] = useState({
    from: '',
    to: '',
    date: '',
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for buses:', bookingData);
    // Here you would typically fetch bus options based on the search criteria
  };

  const popularRoutes = [
    { from: 'New York', to: 'Boston' },
    { from: 'Los Angeles', to: 'San Francisco' },
    { from: 'Chicago', to: 'Detroit' },
    { from: 'Miami', to: 'Orlando' },
  ];

  const busOptions = [
    { id: 1, operator: 'Express Lines', departure: '08:00 AM', arrival: '02:00 PM', price: 45, amenities: ['wifi', 'power', 'ac'] },
    { id: 2, operator: 'Comfort Travels', departure: '10:30 AM', arrival: '04:30 PM', price: 40, amenities: ['wifi', 'ac'] },
    { id: 3, operator: 'Luxury Coaches', departure: '12:00 PM', arrival: '06:00 PM', price: 55, amenities: ['wifi', 'power', 'ac'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-900 mb-12">Book Your Bus Tickets</h1>

        {/* Search Form */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
              <div>
                <label htmlFor="from" className="block text-sm font-medium text-gray-700">From</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="text-gray-400" />
                  </div>
                  <input type="text" name="from" id="from" required
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Departure City"
                    onChange={handleChange} />
                </div>
              </div>
              <div>
                <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="text-gray-400" />
                  </div>
                  <input type="text" name="to" id="to" required
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Arrival City"
                    onChange={handleChange} />
                </div>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="text-gray-400" />
                  </div>
                  <input type="date" name="date" id="date" required
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    onChange={handleChange} />
                </div>
              </div>
              <div className="flex items-end">
                <button type="submit" className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center">
                  <FaSearch className="mr-2" />
                  Search Buses
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">Popular Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRoutes.map((route, index) => (
              <button key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
                <div className="flex items-center justify-between">
                  <span className="text-indigo-600 font-medium">{route.from}</span>
                  <FaBus className="text-gray-400 mx-2" />
                  <span className="text-indigo-600 font-medium">{route.to}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bus Options */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">Available Buses</h2>
          <div className="space-y-6">
            {busOptions.map((bus) => (
              <div key={bus.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-indigo-900">{bus.operator}</h3>
                    <span className="text-2xl font-bold text-indigo-600">${bus.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-gray-600"><FaClock className="inline mr-2" />{bus.departure} - {bus.arrival}</p>
                    </div>
                    <div className="flex space-x-2">
                      {bus.amenities.includes('wifi') && <FaWifi className="text-indigo-500" title="Wi-Fi" />}
                      {bus.amenities.includes('power') && <FaPlug className="text-indigo-500" title="Power Outlets" />}
                      {bus.amenities.includes('ac') && <FaSnowflake className="text-indigo-500" title="Air Conditioning" />}
                    </div>
                  </div>
                  <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors">
                    Select Seats
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTickets;