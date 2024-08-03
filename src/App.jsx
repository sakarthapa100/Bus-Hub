
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
    <BrowserRouter>
 <Header />
 <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
             
          </Routes>
       <Footer />
      </BrowserRouter>
  )
}

export default App
