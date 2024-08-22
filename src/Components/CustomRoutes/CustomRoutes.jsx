import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from '../Home/Home'
import AboutUs from '../About Us/aboutUs'
import GetInvolved from '../GetInvolved/GetInvolved'
import ContactUs from '../ContactUs/ContactUs'
import Donate from '../Donate/Donate'
import MyGallery from '../Gallery/Gallery'
import WhoWeAreCard from '../About Us/WhoWeAre'



function CustomRoutes() {
  return (
    
<Router>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/getInvolved' element={<GetInvolved />} />
        <Route path='/gallery' element={<MyGallery />} />
        <Route path='/Donate' element={<Donate />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/WhoWeAre' element={<WhoWeAreCard />} />
    </Routes> 
          </Router>  
  )
}

export default CustomRoutes