const SeatSelectionModal = ({ isOpen, onClose, busDetails }) => {
  const [selectedSeat, setSelectedSeat] = useState(null);
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
    setSelectedSeat(seat);
  };

  const getSeatStatus = (seat) => {
    if (seat === selectedSeat) return 'selected';
    if (['A1', 'A2', 'B1', 'B2'].includes(seat)) return 'booked';
    return 'available';
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
              <p>Seat(s): {selectedSeat || '-'}</p>
              <p>Fare: Rs. {selectedSeat ? '1200' : '0'}</p>
              <p>Total Amount: Rs. {selectedSeat ? '1200' : '0'}</p>
            </div>
            <button
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              disabled={!selectedSeat || !boardingPoint}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};