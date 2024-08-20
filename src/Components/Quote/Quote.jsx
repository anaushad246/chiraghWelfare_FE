// src/Components/HomePage/HeroSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';


// src/Components/HomePage/HeroSection.jsx



function Quote() {
  const bgImage = "https://cdn.pixabay.com/photo/2020/12/17/14/51/donate-5839666_640.png";
  

  return (
    <main
  className="w-[100vw]  pt-6 bg-contain bg-center bg-no-repeat flex items-center justify-center text-center text-white font-sans p-4"
  style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
>
  
    <div className="bg-gray-800 bg-opacity-50 pt-8 px-4 rounded-lg shadow-2xl ">
      <blockquote className="text-2xl font-bold text-yellow-100">
        <p>“The charity you give will be your shade on the ‘Day of Judgment’”</p>
        <footer className="text-lg font-semibold text-white">- Al-Quran</footer>
        <button>
          <Link to="/donate" className="text-lg text-white bg-blue-600 hover:bg-blue-800 border-none p-2 rounded-lg">
            Donate Now
          </Link>
        </button>
      </blockquote>
    </div>
  
</main>
  );
}

export default Quote;
