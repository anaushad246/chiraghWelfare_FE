import React from 'react';
import OurHistory from './OurHistory';

const WhoWeAreCard = () => {
  return (
    <div id='WhoWeAre' className='flex flex-col items-center pt-6 '>

        {/* <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg> */}
        <h2 className="text-2xl font-bold p-2">Who We Are</h2>
      <div className=" shadow-md p-2 pt-4 h-64 overflow-scroll">
      <p className="text-lg ">
        Chiragh Welfare Foundation exists to address the imbalance and inequality amongst India's poorest, needy, and suffering people. We invest heavily in marginalized sections, especially in backward areas, for comprehensive development and advancement of society. We aim to instill confidence in the hearts of disheartened people to live with dignity, pride, and self-respect.
      </p> </div>
      <OurHistory />
    </div>
 
  );
};

export default WhoWeAreCard;