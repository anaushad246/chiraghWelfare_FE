import React, { useState } from 'react';
import axios from 'axios';

function GetInvolved() {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    mobile: '',
    email: '',
    DOB: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to the backend
      const response = await axios.post('/api/submit-getInvolved', formData);

      console.log('Form submitted successfully:', response.data);
      // Optionally, handle successful submission (e.g., show a success message)
    } catch (error) {
      console.error('Error submitting the form:', error);
      // Optionally, handle error (e.g., show an error message)
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Get Involved</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="fatherName" className="block text-lg font-medium text-gray-700">Father's Name:</label>
          <input
            type="text"
            name="fatherName"
            id="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="mobile" className="block text-lg font-medium text-gray-700">Mobile:</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* <div>
          <label htmlFor="DOB" className="block text-lg font-medium text-gray-700">Date of Birth:</label>
          <input
            type="date"
            name="DOB"
            id="DOB"
            value={formData.DOB}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div> */}
        <div>
          <label htmlFor="address" className="block text-lg font-medium text-gray-700">Address:</label>
          <textarea
            name="address"
            id="address"
            rows={5}
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Membership Charge:</label>
          <p className="mt-1 text-gray-600">Rs.100/- (Via Debit Card, Credit Card etc.)</p>
        </div>
        <div className="text-center">
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default GetInvolved;
