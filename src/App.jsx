import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'

import Home from './Components/Home/Home'
import GetInvolved from './Components/GetInvolved/GetInvolved'
import ContactUs from './Components/ContactUs/ContactUs'
import Header from './Components/Header/Header'
import AboutUs from './Components/About Us/aboutUs'
import Donate from './Components/Donate/Donate'
import Footer from './Components/Footer/Footer'
import WhoWeAreCard from './Components/About Us/WhoWeAre'
import MyGallery from './Components/Gallery/Gallery'
import ProgramDetail from './Components/OurProgram/ProgramDetail'



function App() {
  return (
    
      <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/getInvolved' element={<GetInvolved />} />
        <Route path='/gallery' element={<MyGallery />} />
        <Route path='/Donate' element={<Donate />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/WhoWeAre' element={<WhoWeAreCard />} />
        <Route path="/programs/:id" element={<ProgramDetail />} />
      </Routes>

      <Footer />
      </Router> 
  )
}

export default App