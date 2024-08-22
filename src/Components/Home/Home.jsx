import React from 'react';
import Quote from '../Quote/Quote';
import WelcomeNote from '../WelcomeNote/WelcomeNote';
import GetInvolved from '../GetInvolved/GetInvolved';
import { Link } from 'react-router-dom';
import OurPrograms from '../OurProgram/OurPrograms';
import UpdateSection from '../Updates/Updates';
import Marquee from 'react-fast-marquee';
import NewsSlider from '../NewsSlider/NewsSlider';
import Events from '../Events/Events';

function Home() {
  return (
    
      <div className=" bg-gray-100  ">
        <Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>
      <Quote />
      <WelcomeNote />
      <UpdateSection />
      <Events />
      <OurPrograms />
      <NewsSlider />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">
              <Link to="/getInvolved" className="text-blue-600 hover:text-blue-800">
                Get Involved
              </Link>
            </h2>
            <p className="text-base text-gray-700">Join us in our mission by volunteering, donating, or spreading the word about our cause.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">
              <Link to="/donate" className="text-blue-600 hover:text-blue-800">
                Donate Now
              </Link>
            </h2>
            <p className="text-base text-gray-700">“No matter how big or small, your donation can make a difference.”</p>
          </div>
        </div>
        
      </div>
    
  );
}

export default Home;