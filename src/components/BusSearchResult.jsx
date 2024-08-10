import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Header Component
const Header = ({ origin, destination }) => (
  <div className="bg-gray-100 p-4">
    <h1 className="text-2xl font-bold">{origin} to {destination} Bus Tickets</h1>
    <p className="text-sm text-gray-600">1495 Seats Available in 58 Buses</p>
    <div className="flex text-sm text-blue-600 mt-2">
      <span>Home</span>
      <span className="mx-2">&gt;</span>
      <span>Bus Tickets</span>
      <span className="mx-2">&gt;</span>
      <span>{origin} to {destination}</span>
    </div>
  </div>
);

// Search Bar Component
const SearchBar = ({ origin, destination, date }) => (
  <div className="flex justify-between items-center p-4 border-b">
    <div className="flex space-x-2">
      <input type="text" value={origin} className="border p-2 w-40" readOnly />
      <button className="bg-gray-200 p-2">⇌</button>
      <input type="text" value={destination} className="border p-2 w-40" readOnly />
      <input type="date" value={date} className="border p-2 w-40" readOnly />
    </div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
  </div>
);

// Filter Options Component
const FilterOptions = () => (
  <div className="flex justify-between items-center p-4">
    <button className="bg-blue-500 text-white px-8 py-2 rounded-lg">Login To Bargain</button>
    <div className="flex space-x-4">
      <button className="text-blue-500 font-semibold hover:text-blue-600 border-b-2 border-blue-500 pb-2 transition duration-300 ease-in-out">All</button>
      <button className='text-gray-600 font-semibold hover:text-blue-500 pb-2 transition duration-300 ease-in-out'>Top Rated</button>
      <button className='text-gray-600 font-semibold hover:text-blue-500 pb-2 transition duration-300 ease-in-out'>Affordable</button>
      <button className='text-gray-600 font-semibold hover:text-blue-500 pb-2 transition duration-300 ease-in-out'>Flash Sales</button>
    </div>
  </div>
);

// Sidebar Component
const Sidebar = () => (
  <div className="w-1/4 pr-4">
    <h3 className="font-bold mb-2">Departure Time</h3>
    <div className="flex flex-wrap gap-2 mb-4">
      <button className="border rounded px-3 py-1 text-sm">Before 10 AM</button>
      <button className="border rounded px-3 py-1 text-sm">10 AM - 5 PM</button>
      <button className="border rounded px-3 py-1 text-sm">5 PM - 11 PM</button>
    </div>
    <h3 className="font-bold mb-2">Bus Type</h3>
    <div className="flex flex-wrap gap-2 mb-4">
      <button className="border rounded px-3 py-1 text-sm">AC</button>
      <button className="border rounded px-3 py-1 text-sm">Sofa Seater</button>
      <button className="border rounded px-3 py-1 text-sm">Deluxe</button>
      <button className="border rounded px-3 py-1 text-sm">Tourist</button>
    </div>
    <h3 className="font-bold mb-2">Bus Operators</h3>
    <input type="text" placeholder="Search Bus Operators" className="border p-2 w-full mb-2" />
    <div className="space-y-2">
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        Holiday Adventure Tours & Travels Pvt. Ltd.
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        Open Visit Nepal Travels & Tours
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        Dhaulagiri Gandaki Yatayat Sewa Pvt. Ltd.
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        Loyal Travels Pvt. Ltd.
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        Aadhikhola Yatayat
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        Baba Adventure Travels
      </label>
    </div>
  </div>
);

// Seat Selection Modal Component
const SeatSelectionModal = ({ isOpen, onClose, busDetails }) => {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [boardingPoint, setBoardingPoint] = useState('');

  if (!isOpen) return null;

  const seats = [
    ['A1', 'A2', '', 'B1', 'B2'],
    ['A3', 'A4', '', 'B3', 'B4'],
    ['A5', 'A6', '', 'B5', 'B6'],
    ['A7', 'A8', '', 'B7', 'B8'],
    ['A9', 'A10', '', 'B9', 'B10'],
    ['A11', 'A12', '', 'B11', 'B12'],
    ['A13', 'A14', '', 'B13', 'B14'],
    ['A15', 'A16', 'A17', 'B15', 'B16'],
  ];

  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSeats) => {
      if (prevSeats.includes(seat)) {
        return prevSeats.filter((s) => s !== seat);
      } else {
        return [...prevSeats, seat];
      }
    });
  };

  const getSeatStatus = (seat) => {
    if (selectedSeats.includes(seat)) return 'selected';
    if (['A1', 'A2', 'B1', 'B2'].includes(seat)) return 'booked';
    return 'available';
  };

  const calculateFare = () => {
    const baseFare = 1200;
    return selectedSeats.length * baseFare;
  };

  const handlePayment = () => {
    navigate('/booking-details', {
      state: { selectedSeats, boardingPoint, fare: calculateFare() },
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Select Seats</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>

        <div className="flex space-x-4 mb-4">
          <button className="px-4 py-2 border rounded">All</button>
          <button className="px-4 py-2 border rounded">1100 (9)</button>
          <button className="px-4 py-2 border rounded bg-blue-500 text-white">1200 (16)</button>
        </div>

        <div className="flex space-x-8">
          <div className="w-1/2">
            <div className="border p-4 mb-4">
              <div className="grid grid-cols-5 gap-2">
                {seats.map((row, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    {row.map((seat, seatIndex) => (
                      <button
                        key={`${rowIndex}-${seatIndex}`}
                        className={`p-2 text-sm font-bold ${
                          seat
                            ? `border ${
                                getSeatStatus(seat) === 'booked'
                                  ? 'bg-gray-300 cursor-not-allowed'
                                  : getSeatStatus(seat) === 'selected'
                                  ? 'bg-orange-500 text-white'
                                  : 'bg-blue-500 text-white hover:bg-blue-600'
                              }`
                            : ''
                        }`}
                        onClick={() => seat && handleSeatClick(seat)}
                        disabled={!seat || getSeatStatus(seat) === 'booked'}
                      >
                        {seat}
                      </button>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-300 mr-2"></div>
                <span>Booked</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 mr-2"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 mr-2"></div>
                <span>Selected</span>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="mb-4">
              <label className="block mb-2">Boarding Point</label>
              <select
                className="w-full p-2 border rounded"
                value={boardingPoint}
                onChange={(e) => setBoardingPoint(e.target.value)}
              >
                <option value="">Select Boarding Points</option>
                <option value="point1">Boarding Point 1</option>
                <option value="point2">Boarding Point 2</option>
              </select>
            </div>
            <div className="mb-4">
              <p>Seat(s): {selectedSeats.join(', ') || '-'}</p>
              <p>Fare: Rs. {calculateFare()}</p>
              <p>Total Amount: Rs. {calculateFare()}</p>
            </div>
            <button
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              disabled={selectedSeats.length === 0 || !boardingPoint}
              onClick={handlePayment}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Bus Result Component
const BusResult = ({ bus, origin, destination }) => {
  const [isSeatModalOpen, setIsSeatModalOpen] = useState(false);

  return (
    <div className="border p-4 mb-4 rounded shadow">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-bold text-lg">{bus.operator}</h2>
          <p className="text-gray-600">{bus.type}</p>
        </div>
        <div className="text-right">
          <p className="text-sm">Per Seat from</p>
          <p className="text-xl font-bold text-green-600">{bus.price}</p>
          <p className="text-green-500 text-sm">Negotiable</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className="font-bold text-xl">{bus.departureTime}</p>
          <p className="text-gray-600">{origin}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500">{bus.duration}</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-xl">{bus.arrivalTime}</p>
          <p className="text-gray-600">{destination}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <span className="mr-4">🚽 💼</span>
          <button className="text-blue-500 mr-4">Amenities</button>
          <button className="text-blue-500 mr-4">Cancellation Terms</button>
          <button className="text-blue-500 mr-4">Boarding & Dropping</button>
          <button className="text-blue-500">Reviews</button>
        </div>
        <div>
          <p className="text-gray-600 mb-1">{bus.seatsAvailable} Seats Available</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setIsSeatModalOpen(true)}
          >
            View Seats
          </button>
        </div>
      </div>
      <SeatSelectionModal
        isOpen={isSeatModalOpen}
        onClose={() => setIsSeatModalOpen(false)}
        busDetails={bus}
      />
    </div>
  );
};

// Main BusSearchResults Component
const BusSearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const origin = searchParams.get('origin');
  const destination = searchParams.get('destination');
  const date = searchParams.get('date');

  // Dummy data for bus results
  const busResults = [
    {
      id: 1,
      operator: 'Holiday Adventure',
      type: 'AC Deluxe',
      departureTime: '07:00 AM',
      arrivalTime: '15:00 PM',
      duration: '8 Hours',
      price: 'NPR 1100 - 1200',
      seatsAvailable: 25,
    },
    {
      id: 3,
      operator: 'Holiday Yatra',
      type: 'AC Deluxe',
      departureTime: '10:00 AM',
      arrivalTime: '7:00 PM',
      duration: '8 Hours',
      price: 'NPR  3200',
      seatsAvailable: 25,
    },
    {
      id: 4,
      operator: 'Yatra Adventure',
      type: 'AC Deluxe',
      departureTime: '01:00 AM',
      arrivalTime: '9:00 PM',
      duration: '8 Hours',
      price: 'NPR 1100 - 1200',
      seatsAvailable: 25,
    },
    {
      id: 2,
      operator: 'Open Visit (Night Service)',
      type: 'VIP Sofa Seater',
      departureTime: '07:25 PM',
      arrivalTime: '03:25 AM',
      duration: '8 Hours',
      price: 'NPR 1600',
      seatsAvailable: 20,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header origin={origin} destination={destination} />
      <SearchBar origin={origin} destination={destination} date={date} />
      <FilterOptions />
      <div className="container mx-auto p-4 flex">
        <Sidebar />
        <div className="w-3/4">
          {busResults.map((bus) => (
            <BusResult key={bus.id} bus={bus} origin={origin} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusSearchResults;