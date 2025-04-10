import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Calendar, DollarSign, MapPin, Clock, ArrowUp, ArrowDown } from 'lucide-react';

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState('week');

  // Mock data for charts
  const revenueData = [
    { name: 'Mon', revenue: 12500 },
    { name: 'Tue', revenue: 14800 },
    { name: 'Wed', revenue: 10900 },
    { name: 'Thu', revenue: 15600 },
    { name: 'Fri', revenue: 19200 },
    { name: 'Sat', revenue: 22400 },
    { name: 'Sun', revenue: 18300 }
  ];

  const bookingsData = [
    { name: 'Jan', bookings: 1200 },
    { name: 'Feb', bookings: 1450 },
    { name: 'Mar', bookings: 1680 },
    { name: 'Apr', bookings: 1400 },
    { name: 'May', bookings: 1780 },
    { name: 'Jun', bookings: 1620 }
  ];

  const routePopularityData = [
    { name: 'New York - Boston', value: 35 },
    { name: 'Chicago - Detroit', value: 25 },
    { name: 'Los Angeles - San Francisco', value: 20 },
    { name: 'Seattle - Portland', value: 15 },
    { name: 'Other Routes', value: 5 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9370DB'];

  // Recent bookings data
  const recentBookings = [
    { id: '#00001', customer: 'John Doe', route: 'New York to Boston', date: '2025-04-10', amount: '$85', status: 'Completed' },
    { id: '#00002', customer: 'Jane Smith', route: 'Chicago to Detroit', date: '2025-04-10', amount: '$65', status: 'Pending' },
    { id: '#00003', customer: 'Robert Johnson', route: 'Los Angeles to San Francisco', date: '2025-04-09', amount: '$95', status: 'Completed' },
    { id: '#00004', customer: 'Emily Davis', route: 'Seattle to Portland', date: '2025-04-09', amount: '$55', status: 'Cancelled' },
    { id: '#00005', customer: 'Michael Brown', route: 'Dallas to Houston', date: '2025-04-08', amount: '$75', status: 'Completed' }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Bus Ticket System Dashboard</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => setTimeRange('week')}
            className={`px-4 py-2 rounded-md ${timeRange === 'week' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
          >
            Week
          </button>
          <button 
            onClick={() => setTimeRange('month')}
            className={`px-4 py-2 rounded-md ${timeRange === 'month' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
          >
            Month
          </button>
          <button 
            onClick={() => setTimeRange('year')}
            className={`px-4 py-2 rounded-md ${timeRange === 'year' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
          >
            Year
          </button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
          <div className="flex justify-between">
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Total Bookings</h3>
              <p className="text-2xl font-bold text-gray-800">8,547</p>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <ArrowUp size={14} className="mr-1" />
                <span>12% from last period</span>
              </div>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
          <div className="flex justify-between">
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Total Revenue</h3>
              <p className="text-2xl font-bold text-gray-800">$542,680</p>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <ArrowUp size={14} className="mr-1" />
                <span>8.3% from last period</span>
              </div>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
          <div className="flex justify-between">
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Active Users</h3>
              <p className="text-2xl font-bold text-gray-800">3,254</p>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <ArrowUp size={14} className="mr-1" />
                <span>5.1% from last period</span>
              </div>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-purple-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
          <div className="flex justify-between">
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Avg. Ticket Price</h3>
              <p className="text-2xl font-bold text-gray-800">$63.50</p>
              <div className="flex items-center mt-2 text-red-500 text-sm">
                <ArrowDown size={14} className="mr-1" />
                <span>2.4% from last period</span>
              </div>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Revenue Overview</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={revenueData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Route Popularity Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Popular Routes</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={routePopularityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {routePopularityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Monthly Bookings */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Booking Trends</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={bookingsData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Legend />
                <Bar dataKey="bookings" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Stats</h2>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <div className="p-2 bg-blue-100 rounded-full mr-4">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Most Popular Route</p>
                <p className="font-medium">New York to Boston</p>
              </div>
              <div className="ml-auto">
                <span className="text-blue-600 font-semibold">35%</span>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <div className="p-2 bg-green-100 rounded-full mr-4">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Busiest Day</p>
                <p className="font-medium">Saturday</p>
              </div>
              <div className="ml-auto">
                <span className="text-green-600 font-semibold">22% traffic</span>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
              <div className="p-2 bg-yellow-100 rounded-full mr-4">
                <Users className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Customer Satisfaction</p>
                <p className="font-medium">4.8/5.0</p>
              </div>
              <div className="ml-auto">
                <span className="text-yellow-600 font-semibold">+0.3</span>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-purple-50 rounded-lg">
              <div className="p-2 bg-purple-100 rounded-full mr-4">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Advance Bookings</p>
                <p className="font-medium">72% of total</p>
              </div>
              <div className="ml-auto">
                <span className="text-purple-600 font-semibold">+5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Recent Bookings</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentBookings.map((booking, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.route}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${booking.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;