import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'

import Home from './Components/Home/Home'
import GetInvolved from './Components/GetInvolved/GetInvolved'
import ContactUs from './Components/ContactUs/ContactUs'
import WelcomeNote from './Components/WelcomeNote/WelcomeNote'
import Quote from './Components/Quote/Quote'
import Header from './Components/Header/Header'
import AboutUs from './Components/About Us/aboutUs'
import Donate from './Components/Donate/Donate'
import Footer from './Components/Footer/Footer'
import Gallery from './Components/Gallery/Gallery'
import GetConnected from './Components/Footer/GetConnected'
import WhoWeAreCard from './Components/About Us/WhoWeAre'

import MyGallery from './Components/Gallery/Gallery'



function App() {
  return (
    
      <Router>
     {/* <div className='p-2 bg-black flex justify-center '> <GetConnected /></div> */}
      <Header />
      

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/getInvolved' element={<GetInvolved />} />
        <Route path='/gallery' element={<MyGallery />} />
        <Route path='/Donate' element={<Donate />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/WhoWeAre' element={<WhoWeAreCard />} />
      </Routes>
      <Footer />
      </Router>
      

      
      
      
    
  )
}

export default App