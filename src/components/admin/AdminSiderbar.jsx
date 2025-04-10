// src/components/AdminSidebar.jsx

import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4 text-xl font-bold border-b border-gray-600">Admin Panel</div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li><Link to="/admin" className="hover:text-yellow-400">Dashboard</Link></li>
          <li><Link to="/admin/bookings" className="hover:text-yellow-400">Bookings</Link></li>
          <li><Link to="/admin/buses" className="hover:text-yellow-400">Manage Buses</Link></li>
          <li><Link to="/admin/users" className="hover:text-yellow-400">Users</Link></li>
          <li><Link to="/admin/settings" className="hover:text-yellow-400">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
