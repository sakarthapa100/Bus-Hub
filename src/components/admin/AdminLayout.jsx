// src/pages/admin/AdminLayout.jsx

import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSiderbar';

const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-64 p-6 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
