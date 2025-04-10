import React, { useState, useEffect } from 'react';

const AdminBuses = () => {
  const [buses, setBuses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBus, setCurrentBus] = useState(null);
  const [formData, setFormData] = useState({
    busNumber: '',
    busName: '',
    seatsAvailable: '',
    type: 'Regular',
    source: '',
    destination: '',
    departureTime: '',
    arrivalTime: '',
    price: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Dummy data - replace with actual API calls in production
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBuses([
        { id: 1, busNumber: 'BUS001', busName: 'Express Voyager', seatsAvailable: 45, type: 'AC', source: 'New York', destination: 'Washington DC', departureTime: '08:00', arrivalTime: '12:30', price: 35.99 },
        { id: 2, busNumber: 'BUS002', busName: 'City Hopper', seatsAvailable: 36, type: 'Non-AC', source: 'Boston', destination: 'Providence', departureTime: '10:15', arrivalTime: '12:00', price: 22.50 },
        { id: 3, busNumber: 'BUS003', busName: 'Night Rider', seatsAvailable: 40, type: 'Sleeper', source: 'Chicago', destination: 'Detroit', departureTime: '22:00', arrivalTime: '06:00', price: 75.00 },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({
      busNumber: '',
      busName: '',
      seatsAvailable: '',
      type: 'Regular',
      source: '',
      destination: '',
      departureTime: '',
      arrivalTime: '',
      price: ''
    });
  };

  const handleAddBus = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.busNumber || !formData.busName || !formData.seatsAvailable || 
        !formData.source || !formData.destination || !formData.departureTime || 
        !formData.arrivalTime || !formData.price) {
      setError('All fields are required');
      return;
    }

    // Add new bus
    const newBus = {
      id: buses.length + 1,
      ...formData,
      seatsAvailable: parseInt(formData.seatsAvailable),
      price: parseFloat(formData.price)
    };

    setBuses([...buses, newBus]);
    setSuccess('Bus added successfully');
    resetForm();
    setIsAdding(false);
    
    // Clear success message after 3 seconds
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleEditBus = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.busNumber || !formData.busName || !formData.seatsAvailable || 
        !formData.source || !formData.destination || !formData.departureTime || 
        !formData.arrivalTime || !formData.price) {
      setError('All fields are required');
      return;
    }

    // Update bus
    const updatedBuses = buses.map(bus => 
      bus.id === currentBus.id 
        ? {
            ...bus,
            busNumber: formData.busNumber,
            busName: formData.busName,
            seatsAvailable: parseInt(formData.seatsAvailable),
            type: formData.type,
            source: formData.source,
            destination: formData.destination,
            departureTime: formData.departureTime,
            arrivalTime: formData.arrivalTime,
            price: parseFloat(formData.price)
          } 
        : bus
    );

    setBuses(updatedBuses);
    setSuccess('Bus updated successfully');
    resetForm();
    setIsEditing(false);
    setCurrentBus(null);
    
    // Clear success message after 3 seconds
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this bus?')) {
      setBuses(buses.filter(bus => bus.id !== id));
      setSuccess('Bus deleted successfully');
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  const startEdit = (bus) => {
    setCurrentBus(bus);
    setFormData({
      busNumber: bus.busNumber,
      busName: bus.busName,
      seatsAvailable: bus.seatsAvailable.toString(),
      type: bus.type,
      source: bus.source,
      destination: bus.destination,
      departureTime: bus.departureTime,
      arrivalTime: bus.arrivalTime,
      price: bus.price.toString()
    });
    setIsEditing(true);
  };

  const cancelAction = () => {
    resetForm();
    setIsAdding(false);
    setIsEditing(false);
    setCurrentBus(null);
    setError('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Buses</h1>
      
      {/* Success and Error Messages */}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Action Buttons */}
      <div className="mb-6">
        {!isAdding && !isEditing && (
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => setIsAdding(true)}
          >
            Add New Bus
          </button>
        )}
      </div>

      {/* Add/Edit Form */}
      {(isAdding || isEditing) && (
        <div className="bg-white shadow-md rounded p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {isAdding ? 'Add New Bus' : 'Edit Bus'}
          </h2>
          <form onSubmit={isAdding ? handleAddBus : handleEditBus}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Bus Number
                </label>
                <input
                  type="text"
                  name="busNumber"
                  value={formData.busNumber}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Bus Name
                </label>
                <input
                  type="text"
                  name="busName"
                  value={formData.busName}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Seats Available
                </label>
                <input
                  type="number"
                  name="seatsAvailable"
                  value={formData.seatsAvailable}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Bus Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Regular">Regular</option>
                  <option value="AC">AC</option>
                  <option value="Non-AC">Non-AC</option>
                  <option value="Sleeper">Sleeper</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Source
                </label>
                <input
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Departure Time
                </label>
                <input
                  type="time"
                  name="departureTime"
                  value={formData.departureTime}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Arrival Time
                </label>
                <input
                  type="time"
                  name="arrivalTime"
                  value={formData.arrivalTime}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mr-2"
                onClick={cancelAction}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
              >
                {isAdding ? 'Add Bus' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Bus List */}
      {isLoading ? (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-2">Loading buses...</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seats</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {buses.length === 0 ? (
                <tr>
                  <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                    No buses found. Add a new bus to get started.
                  </td>
                </tr>
              ) : (
                buses.map((bus) => (
                  <tr key={bus.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{bus.busNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{bus.busName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${bus.type === 'AC' ? 'bg-blue-100 text-blue-800' : 
                          bus.type === 'Non-AC' ? 'bg-yellow-100 text-yellow-800' : 
                          bus.type === 'Sleeper' ? 'bg-purple-100 text-purple-800' :
                          bus.type === 'Luxury' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800'}`}
                      >
                        {bus.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{bus.seatsAvailable}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{bus.source} to {bus.destination}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{bus.departureTime} - {bus.arrivalTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${bus.price.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        onClick={() => startEdit(bus)}
                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(bus.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminBuses;