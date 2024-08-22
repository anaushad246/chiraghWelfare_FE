import React from 'react';
import './Updates.css';
import UpdatesList from './UpdatesList';

const Updates = () => {
  

  return (
  
       <div className="bg-whit flex flex-col items-center justify-center w-[100vw] pt-8 " >
      <h2 className="text-2xl font-bold text-gray-800 "> Updates</h2>
      
  <a href="#" className="text-blue-600 font-bold blink">
    Join us today to help the cause.
  </a>

   <div className='p-4'><UpdatesList /></div>




      {/* <div className="mt-4 text-right">
        <span className="text-sm font-medium text-yellow-600 animate-pulse">More updates available!</span>
      </div> */}
    </div>
  );
};

export default Updates;
