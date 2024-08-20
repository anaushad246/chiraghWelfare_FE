// src/Components/HomePage/WelcomeNote.js

import React from 'react';

function WelcomeNote() {
  return (
    <section className="w-[100vw] flex justify-center py-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded">
      <div className="bg-white border border-gray-300 rounded-lg shadow-xl p-2 sm:p-8 max-w-2xl m-4">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Presidential Message!</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-h-48 sm:max-h-full overflow-y-auto">
            As a team, we are together like a family and we have brought together multi-skilled teams to address social, cultural, and economic inequality in backward areas and backward castes. Our teams are purposely diverse and unconventional, combining a solid organizational backbone with creative streetwise flair. Our most sincere and highly effective staff are bringing expert care and innovative strategies daily with enthusiasm, it’s incredible. Together we can face the future with confidence and optimism. Looking forward to your constructive comments, invaluable guidance, and assistance.
            <br /><br />
            <span className="block font-semibold mt-4">MOHD WAJHUL QAMAR</span>
            <span className="block text-gray-500">President</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default WelcomeNote;
