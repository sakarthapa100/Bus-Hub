import './App.css';
import  { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import HelpSupport from './pages/HelpSupport';
import BookTicket from './pages/BookTicket';
import Signup from './pages/Signup';
import BusSearchResults from './components/BusSearchResult';
import BookingDetails from './components/BookingDetails';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminBooking from './components/admin/AdminBookings';
import AdminBuses from './components/admin/AdminBuses';

function LayoutWrapper() {
  const location = useLocation();

  // Check if the route is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Header />}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/help" element={<HelpSupport />} />
        <Route path="/book" element={<BookTicket />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search-results" element={<BusSearchResults />} />
        <Route path="/booking-details" element={<BookingDetails />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="bookings" element={<AdminBooking />} />
          <Route path="buses" element={<AdminBuses />} />
          {/* <Route path="users" element={<AdminUsers  />
          <Route path="settings" element={<AdminSettings />} /> */}
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {


  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}

export default App;
