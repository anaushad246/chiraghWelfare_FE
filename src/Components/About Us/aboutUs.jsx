import React from 'react';
import { Link } from 'react-router-dom';
import WhoWeAreCard from './WhoWeAre';
import OurTeam from './OurTeam';
import OurHistory from './OurHistory';
import Ourvision from './Ourvision';
import Objectives from './Objectives';

const AboutUs = () => {
  return (
    <div className=" flex flex-col  container mx-auto  text-center ">

      {/* Navigation */}
      {/* Vertical Navigation */}
      <nav className="bg-gray-800 p-4  shadow-md flex flex-col">
        <ul className="flex flex-col justify-center text-white border">
          <li className="border">
            <a href="#WhoWeAre" className="hover:text-yellow-400 transition-colors duration-300 p-2 block">Who We Are</a>
          </li>
          <li className="border">
            <a href="#OurHistory" className="hover:text-yellow-400 transition-colors duration-300 p-2 block">Our History</a>
          </li>
          <li className="border">
            <a href="#OurVision" className="hover:text-yellow-400 transition-colors duration-300 p-2 block">Our Vision</a>
          </li>
          <li className="border">
            <a href="#Objectives" className="hover:text-yellow-400 transition-colors duration-300 p-2 block">Our Objectives</a>
          </li>
          <li className="border">
            <a href="#OurTeam" className="hover:text-yellow-400 transition-colors duration-300 p-2 block">Our Team</a>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="WhoWeAre" className="">
        <WhoWeAreCard />
      </section>

      {/* <section id="OurHistory" className=" ">
        <OurHistory />
      </section> */}

      <section id="OurVision" className="">
        <Ourvision />
      </section>

      <section id="Objectives" className=" ">
        <Objectives />
      </section>

      <section id="OurTeam" className=" ">
        <OurTeam />
      </section>

    </div>
  );
};

export default AboutUs;
