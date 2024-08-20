import React from 'react';

function Donate() {
  return (
    <div className="container mx-auto p-2 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Donate</h1>
      <p className="text-lg mb-4 text-gray-700">“No matter how big or small, your donation can make a difference.”</p>
     
      <div className="mb-6">
  <h2 className="text-2xl font-bold text-blue-800">Ways of Donation:</h2>
  <ul className="md:flex md:flex-wrap flex flex-col gap-2">
    <li className="w-full md:w-1/2 xl:w-1/3   md:mb-0">
      <h3 className="text-lg font-semibold ">Help poor and orphans:</h3>
      <p className="text-lg font-bold text-blue-700">₹20,000 (Annual) per student</p>
    </li>
    <li className="w-full md:w-1/2 xl:w-1/3  md:mb-0">
      <h3 className="text-lg font-semibold ">Scholarship for intelligent students:</h3>
      <p className="text-lg font-bold text-blue-700">₹30,000</p>
    </li>
    
    <li className="w-full md:w-1/2 xl:w-1/3   md:mb-0">
      <h3 className="text-lg font-semibold ">Vocational Centre:</h3>
      <ul className="list-disc pl-4">
        <li className='text-lg font-bold text-blue-700'>₹20,000 per Computer</li>
        <li className='text-lg font-bold text-blue-700'>₹8,000 per Tailoring Machine</li>
      </ul>
    </li>

    <li className="w-full md:w-1/2 xl:w-1/3  md:mb-0">
      <h3 className="text-lg font-semibold ">Ambulance:</h3>
      <p className="text-lg font-bold text-blue-700">₹6,00,000</p>
    </li>

    <li className="w-full md:w-1/2 xl:w-1/3  md:mb-0">
      <h3 className="text-lg font-semibold ">Poor Girl Marriage:</h3>
      <p className="text-lg font-bold text-blue-700">₹50,000</p>
    </li>

    <li className="w-full md:w-1/2 xl:w-1/3  md:mb-0">
      <h3 className="text-lg font-semibold ">Free Medical Camp:</h3>
      <p className="text-lg font-bold text-blue-700">₹40,000</p>
    </li>
    <li className="w-full md:w-1/2 xl:w-1/3  md:mb-0">
      <h3 className="text-lg font-semibold ">Establish School, College, Hostel, Hospital, Research Centres:</h3>
      <p className="text-lg font-bold text-blue-700">₹40,00,000 to ₹1,00,00,000</p>
    </li>
  </ul>
</div>


      <div className="bg-blue-50 p-6 rounded-lg  shadow-inner mb-4 h-24 overflow-auto">
        <p className="text-gray-700 mb-4">
          As a non-profit, service-oriented voluntary organization, our services benefit the needy and suffering people. The organization relies on public donations, charitable contributions, and government grants. Our achievements and humanitarian services are made possible through donations. We sincerely request you to kindly come forward with a generous hand to strengthen our activities in serving oppressed humanity and backward areas with utmost dedication.
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Donors are requested to remit their donations via cheque/DD in favor of ‘Chiragh Welfare Foundation’ payable at ‘Delhi’ and send it to the organization’s address.</li>
          <li>Donations can also be made via direct/Net banking/NEFT to the following Bank A/C. Please send payment details to: chiraghfoundation@gmail.com</li>
        </ul>
      </div>
      {/* <div className="bg-blue-100 p-4 rounded-lg ">
        <p className="text-gray-700 mb-4">
          As the organization is a non-profit service oriented voluntary organization, its services are beneficial for the needy and the suffering people. The organization sustains on public donation, donation from the charitable organization and grant from the government. Whatever, achievements and its humanitarian services are made possible through donations. Sincerely request the viewers, to kindly come forward with a generous hand to strengthen its activities in serving the oppressed humanity and backward areas with utmost dedication.
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Donors are requested to remit their donations through cheque/DD drawn in favor of ‘Chiragh Welfare Foundation’ payable at ‘Delhi’ and send it to the organization address.</li>
          <li>The Donors may kindly also remit the donations direct/Net banking/or NEFT in the following Bank A/C. and send the payment details on this email id: chiraghfoundation@gmail.com</li>
        </ul>
      </div> */}
      <div className="mb-4 bg-gray-200 p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-2 text-gray-700">Bank Details</h2>
        <p className="text-gray-700"><strong>Bank Name:</strong> CANARA BANK</p>
        <p className="text-gray-700"><strong>A/C Name:</strong> CHIRAGH WELFARE FOUNDATION</p>
        <p className="text-gray-700"><strong>A/C. No.:</strong> 6257101000244</p>
        <p className="text-gray-700"><strong>Branch Address:</strong> Canara Bank (Delhi Inder Lok)</p>
        <p className="text-gray-700"><strong>IFSC Code:</strong> CNRB0006257</p>
        <p className="text-gray-700"><strong>MICR Code:</strong> 110015330</p>
      </div>
      <div className="text-center">
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
          Donate Now (Via Debit Card, Credit Card etc.)
        </button>
      </div>
    </div>
  );
}

export default Donate;