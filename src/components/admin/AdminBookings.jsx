import  { useState } from 'react';
import { Search, Filter, Download, Calendar, Clock, MapPin, User, Edit, Trash2, Eye, ChevronLeft, ChevronRight, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const AdminBooking = () => {
  // State management
  const [selectedBookings, setSelectedBookings] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('all'); // 'all', 'today', 'upcoming', 'completed', 'cancelled'
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedBookingDetails, setSelectedBookingDetails] = useState(null);

  // Mock booking data
  const bookings = [
    { id: 'BK-1001', customer: 'John Doe', email: 'john@example.com', phone: '9845632475', route: 'Pkr to Ktm', bus: 'Express 201', seats: '12A, 12B', date: '2025-04-15', time: '08:30 AM', amount: 'Rs85.00', status: 'confirmed', payment: 'Credit Card' },
    { id: 'BK-1002', customer: 'Jane Smith', email: 'jane@example.com', phone: '9845632475', route: 'Ktm to Pkr', bus: 'City Liner 305', seats: '8C', date: '2025-04-14', time: '10:15 AM', amount: 'Rs65.00', status: 'pending', payment: 'PayPal' },
    { id: 'BK-1003', customer: 'Robert Johnson', email: 'robert@example.com', phone: '9845632475', route: 'Birgung to Chitwan', bus: 'Coastal 110', seats: '3D, 3E, 3F', date: '2025-04-16', time: '09:00 AM', amount: 'Rs-135.00', status: 'confirmed', payment: 'Debit Card' },
    { id: 'BK-1004', customer: 'Emily Davis', email: 'emily@example.com', phone: '9845632475', route: 'Bharatput  to kathmandu ', bus: 'Northwest 405', seats: '15A', date: '2025-04-13', time: '07:45 AM', amount: 'Rs-55.00', status: 'cancelled', payment: 'Credit Card' },
    { id: 'BK-1005', customer: 'Michael Brown', email: 'michael@example.com', phone: '9845632475', route: 'Nepalgung to Pkr', bus: 'Texas Express 505', seats: '6B', date: '2025-04-10', time: '12:30 PM', amount: 'Rs-75.00', status: 'completed', payment: 'Credit Card' },
    { id: 'BK-1006', customer: 'Sarah Wilson', email: 'sarah@example.com', phone: '9845632475', route: 'Chitwan to Pkr', bus: 'Florida Line 602', seats: '9C, 9D', date: '2025-04-17', time: '11:00 AM', amount: 'Rs-95.00', status: 'confirmed', payment: 'Bank Transfer' },
    { id: 'BK-1007', customer: 'David Lee', email: 'david@example.com', phone: '9845632475', route: 'Synga to Ktm', bus: 'Mountain 303', seats: '4F', date: '2025-04-11', time: '06:30 AM', amount: 'Rs45.00', status: 'completed', payment: 'PayPal' },
    { id: 'BK-1008', customer: 'Lisa Taylor', email: 'lisa@example.com', phone: '9845632475', route: 'Rampur to dheli', bus: 'Desert Link 202', seats: '10A, 10B', date: '2025-04-20', time: '03:15 PM', amount: 'Rs-65.00', status: 'pending', payment: 'Credit Card' }
  ];

  // Filter bookings based on current view mode and search query
  const filteredBookings = bookings.filter(booking => {
    // Filter by view mode
    if (viewMode === 'today') {
      const today = new Date().toISOString().split('T')[0];
      if (booking.date !== today) return false;
    } else if (viewMode === 'upcoming') {
      const today = new Date().toISOString().split('T')[0];
      if (booking.date <= today || booking.status === 'cancelled' || booking.status === 'completed') return false;
    } else if (viewMode === 'completed') {
      if (booking.status !== 'completed') return false;
    } else if (viewMode === 'cancelled') {
      if (booking.status !== 'cancelled') return false;
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        booking.id.toLowerCase().includes(query) ||
        booking.customer.toLowerCase().includes(query) ||
        booking.route.toLowerCase().includes(query) ||
        booking.email.toLowerCase().includes(query) ||
        booking.phone.toLowerCase().includes(query)
      );
    }

    return true;
  });

  // Sort filtered bookings
  const sortedBookings = [...filteredBookings].sort((a, b) => {
    if (sortBy === 'date') {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    } else if (sortBy === 'amount') {
      const amountA = parseFloat(a.amount.replace('Rs', ''));
      const amountB = parseFloat(b.amount.replace('Rs', ''));
      return sortOrder === 'asc' ? amountA - amountB : amountB - amountA;
    } else {
      // Sort by ID, customer name, etc.
      const valA = a[sortBy].toString().toLowerCase();
      const valB = b[sortBy].toString().toLowerCase();
      return sortOrder === 'asc' 
        ? valA.localeCompare(valB) 
        : valB.localeCompare(valA);
    }
  });

  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(sortedBookings.length / itemsPerPage);
  const currentBookings = sortedBookings.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  // Handle checkbox selection
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedBookings(currentBookings.map(booking => booking.id));
    } else {
      setSelectedBookings([]);
    }
  };

  const handleSelectBooking = (id) => {
    if (selectedBookings.includes(id)) {
      setSelectedBookings(selectedBookings.filter(bookingId => bookingId !== id));
    } else {
      setSelectedBookings([...selectedBookings, id]);
    }
  };

  // Actions
  const handleViewDetails = (booking) => {
    setSelectedBookingDetails(booking);
  };

  const handleCloseDetails = () => {
    setSelectedBookingDetails(null);
  };

  const handleUpdateStatus = (id, newStatus) => {
    // In a real app, this would make an API call
    console.log(`Updating booking ${id} to status: ${newStatus}`);
    // Here you would update your state or make an API call
  };

  const handleExportData = () => {
    // In a real app, this would generate and download a CSV/Excel file
    console.log('Exporting booking data...');
  };

  // Generate status badge based on status
  const getStatusBadge = (status) => {
    switch(status) {
      case 'confirmed':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Confirmed</span>;
      case 'pending':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Pending</span>;
      case 'cancelled':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Cancelled</span>;
      case 'completed':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">Completed</span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Booking Management</h1>
        <p className="text-gray-600">Manage and track all bus bookings</p>
      </div>

      {/* Action bar */}
      <div className="bg-white rounded-xl shadow mb-6">
        <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by ID, customer, route..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter buttons */}
          <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
            <button 
              className={`px-3 py-2 text-sm font-medium rounded-md ${viewMode === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setViewMode('all')}
            >
              All Bookings
            </button>
            <button 
              className={`px-3 py-2 text-sm font-medium rounded-md ${viewMode === 'today' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setViewMode('today')}
            >
              Today
            </button>
            <button 
              className={`px-3 py-2 text-sm font-medium rounded-md ${viewMode === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setViewMode('upcoming')}
            >
              Upcoming
            </button>
            <button 
              className="p-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter className="h-5 w-5" />
            </button>
            <button 
              className="p-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              onClick={handleExportData}
            >
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Advanced filters (hidden by default) */}
        {filterOpen && (
          <div className="p-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select className="w-full p-2 border rounded-md">
                <option value="">All Statuses</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <div className="flex space-x-2">
                <input type="date" className="w-full p-2 border rounded-md" />
                <span className="flex items-center text-gray-500">to</span>
                <input type="date" className="w-full p-2 border rounded-md" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Route</label>
              <select className="w-full p-2 border rounded-md">
                <option value="">All Routes</option>
                <option value="New York to Boston">New York to Boston</option>
                <option value="Chicago to Detroit">Chicago to Detroit</option>
                <option value="Los Angeles to San Francisco">Los Angeles to San Francisco</option>
                <option value="Seattle to Portland">Seattle to Portland</option>
                <option value="Dallas to Houston">Dallas to Houston</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="p-3 rounded-full bg-blue-100 mr-4">
            <Calendar className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Bookings</p>
            <p className="text-xl font-bold">{bookings.length}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="p-3 rounded-full bg-green-100 mr-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Confirmed</p>
            <p className="text-xl font-bold">{bookings.filter(b => b.status === 'confirmed').length}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="p-3 rounded-full bg-yellow-100 mr-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Pending</p>
            <p className="text-xl font-bold">{bookings.filter(b => b.status === 'pending').length}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="p-3 rounded-full bg-red-100 mr-4">
            <XCircle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Cancelled</p>
            <p className="text-xl font-bold">{bookings.filter(b => b.status === 'cancelled').length}</p>
          </div>
        </div>
      </div>

      {/* Bookings table */}
      <div className="bg-white rounded-xl shadow overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Bookings</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 text-blue-600 rounded"
                      onChange={handleSelectAll}
                      checked={selectedBookings.length === currentBookings.length && currentBookings.length > 0}
                    />
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => {
                  setSortBy('id');
                  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                }}>
                  <div className="flex items-center">
                    Booking ID
                    {sortBy === 'id' && (
                      <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => {
                  setSortBy('customer');
                  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                }}>
                  <div className="flex items-center">
                    Customer
                    {sortBy === 'customer' && (
                      <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Route
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => {
                  setSortBy('date');
                  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                }}>
                  <div className="flex items-center">
                    Date & Time
                    {sortBy === 'date' && (
                      <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => {
                  setSortBy('amount');
                  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                }}>
                  <div className="flex items-center">
                    Amount
                    {sortBy === 'amount' && (
                      <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-3 py-4 whitespace-nowrap">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 text-blue-600 rounded"
                      checked={selectedBookings.includes(booking.id)}
                      onChange={() => handleSelectBooking(booking.id)}
                    />
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600">
                      {booking.id}
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {booking.customer}
                    </div>
                    <div className="text-xs text-gray-500">
                      {booking.email}
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.route}</div>
                    <div className="text-xs text-gray-500">Bus: {booking.bus}</div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(booking.date).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {booking.time}
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {booking.amount}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    {getStatusBadge(booking.status)}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        className="p-1 text-blue-600 hover:text-blue-900"
                        onClick={() => handleViewDetails(booking)}
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="p-1 text-green-600 hover:text-green-900">
                        <Edit className="h-5 w-5" />
                      </button>
                      <button className="p-1 text-red-600 hover:text-red-900">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {currentBookings.length === 0 && (
                <tr>
                  <td colSpan="8" className="px-6 py-10 text-center text-gray-500">
                    No bookings found. Try adjusting your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                <span className="font-medium">
                  {Math.min(currentPage * itemsPerPage, sortedBookings.length)}
                </span>{' '}
                of <span className="font-medium">{sortedBookings.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`relative inline-flex items-center px-4 py-2 border ${
                      currentPage === page
                        ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                        : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                    } text-sm font-medium`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Booking Details Modal */}
      {selectedBookingDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Booking Details</h3>
              <button 
                onClick={handleCloseDetails}
                className="text-gray-400 hover:text-gray-500"
              >
                <XCircle className="h-5 w-5" />
              </button>
            </div>
            <div className="px-6 py-4">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {selectedBookingDetails.id}
                  </h4>
                  <div className="mt-1">
                    {getStatusBadge(selectedBookingDetails.status)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Amount</div>
                  <div className="text-xl font-bold text-gray-900">
                    {selectedBookingDetails.amount}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="text-sm font-medium text-gray-500 mb-2">Customer Information</h5>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start mb-3">
                      <User className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                      <div>
                        <div className="font-medium">{selectedBookingDetails.customer}</div>
                        <div className="text-sm text-gray-500">{selectedBookingDetails.email}</div>
                        <div className="text-sm text-gray-500">{selectedBookingDetails.phone}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-gray-500 mb-2">Journey Details</h5>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start mb-3">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                      <div>
                        <div className="font-medium">Route</div>
                        <div className="text-sm text-gray-500">{selectedBookingDetails.route}</div>
                        <div className="text-sm text-gray-500">Bus: {selectedBookingDetails.bus}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-3">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                      <div>
                        <div className="font-medium">Date</div>
                        <div className="text-sm text-gray-500">
                          {new Date(selectedBookingDetails.date).toLocaleDateString(undefined, {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                      <div>
                        <div className="font-medium">Time</div>
                        <div className="text-sm text-gray-500">{selectedBookingDetails.time}</div>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
              
              <div className="mb-6">
                <h5 className="text-sm font-medium text-gray-500 mb-2">Booking Details</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Seat(s)</div>
                      <div className="font-medium">{selectedBookingDetails.seats}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Payment Method</div>
                      <div className="font-medium">{selectedBookingDetails.payment}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Booking Date</div>
                      <div className="font-medium">Apr 5, 2025</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Last Updated</div>
                      <div className="font-medium">Apr 6, 2025</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="text-sm font-medium text-gray-500 mb-2">Update Status</h5>
                <div className="flex flex-wrap gap-2">
                  <button 
                    className="px-3 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-md hover:bg-green-200"
                    onClick={() => handleUpdateStatus(selectedBookingDetails.id, 'confirmed')}
                  >
                    Confirm
                  </button>
                  <button 
                    className="px-3 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-md hover:bg-blue-200"
                    onClick={() => handleUpdateStatus(selectedBookingDetails.id, 'completed')}
                  >
                    Mark as Completed
                  </button>
                  <button 
                    className="px-3 py-2 bg-red-100 text-red-700 text-sm font-medium rounded-md hover:bg-red-200"
                    onClick={() => handleUpdateStatus(selectedBookingDetails.id, 'cancelled')}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="text-sm font-medium text-gray-500 mb-2">Activity Log</h5>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div className="flex">
                    <div className="w-10 flex-shrink-0 text-gray-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm">
                        <span className="font-medium">Booking created</span>
                      </div>
                      <div className="text-xs text-gray-500">Apr 5, 2025 - 10:23 AM</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-10 flex-shrink-0 text-green-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm">
                        <span className="font-medium">Payment confirmed</span>
                      </div>
                      <div className="text-xs text-gray-500">Apr 5, 2025 - 10:25 AM</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-10 flex-shrink-0 text-blue-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm">
                        <span className="font-medium">Booking confirmed</span>
                      </div>
                      <div className="text-xs text-gray-500">Apr 6, 2025 - 09:15 AM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 text-right space-x-2">
              <button 
                onClick={handleCloseDetails}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700">
                Send Ticket
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                Print Details
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Bulk actions (visible when bookings are selected) */}
      {selectedBookings.length > 0 && (
        <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="p-2 rounded-lg bg-blue-600 shadow-lg sm:p-3">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <span className="flex p-2 rounded-lg bg-blue-800">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </span>
                  <p className="ml-3 font-medium text-white truncate">
                    <span>{selectedBookings.length} bookings selected</span>
                  </p>
                </div>
                <div className="flex-shrink-0 sm:ml-3">
                  <button
                    type="button"
                    className="mr-2 bg-blue-500 px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Export Selected
                  </button>
                  <button
                    type="button"
                    className="mr-2 bg-blue-500 px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Send Email
                  </button>
                  <button
                    type="button"
                    className="bg-blue-500 px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => setSelectedBookings([])}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBooking;