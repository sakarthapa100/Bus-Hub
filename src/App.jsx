
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Aboutus from './pages/Aboutus'
import HelpSupport from './pages/HelpSupport'
import BookTicket from './pages/BookTicket'
import Signup from './pages/Signup'
import BusSearchResults from './components/BusSearchResult'
import BookingDetails from './components/BookingDetails'
function App() {


  return (
    <BrowserRouter>
 <Header />
 <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<Aboutus />} />
              <Route path='/help' element={<HelpSupport />} />
              <Route path='/book' element={<BookTicket />} />
              <Route path='/signup' element={<Signup />} />
              <Route path="/search-results" element={<BusSearchResults />} />
              <Route
  path="/booking-details"
  element={
    <BookingDetails
    
    />
  }
/>
          </Routes>
       <Footer />
      </BrowserRouter>
  )
}

export default App
