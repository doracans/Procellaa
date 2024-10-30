import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import LandingPages from './pages/LandingPages'
import Barang from './pages/Barang'
import Barang2 from './pages/Barang2'
import Cart from './pages/Cartbarang'
import Nopage from './pages/Nopage'
import Barang3 from './pages/Barang3'
import Barang4 from './pages/Barang4'
import Barang5 from './pages/Barang5'
import Barang6 from './pages/Barang6'
import Login from './components/Login'
import PaymentPage from './components/PaymentPage'
import SuccessPage from './components/SuccessPage'
import AboutPage from './pages/AboutPage'
import Contact from './pages/Contact'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"   element={<Login />} />
        <Route path="/Home"    element={<LandingPages />} />
        <Route path="/About Us" element={<AboutPage/>} />
        <Route path="/Barang"  element={<Barang />} />
        <Route path="/Barang2" element={<Barang2 />} />
        <Route path="/Barang3" element={<Barang3 />} />
        <Route path="/Barang4" element={<Barang4 />} />
        <Route path="/Barang5" element={<Barang5 />} />
        <Route path="/Barang6" element={<Barang6 />} />
        <Route path="/Cart"    element={<Cart />} />
        <Route path='/Payment' element={<PaymentPage />} />
        <Route path='/Success' element={<SuccessPage />} />
        <Route path="/Contact"    element={<Contact/>} />
        <Route path='/Nopage'  element={<Nopage />} />
      </Routes>
    </Router>
  )
}

export default App
