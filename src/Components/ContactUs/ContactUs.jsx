import React, { useState } from 'react';
import axios from 'axios';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, message };

    try {
      const response = await axios.post('https://chiraghwelfare-be.onrender.com/api/submit-contactUs', formData);

      if (response.status === 200) {  // Adjusted to check for status 200
        console.log('Form submitted successfully');
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error.response?.data || error.message);
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-3xl bg-white rounded-lg shadow-lg">
  <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Get in Touch</h1>
  <p className="text-lg text-center mb-8 text-gray-600">Contact us to learn more about our initiatives.</p>
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <textarea
      placeholder="Message"
      className="w-full p-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    ></textarea>
    <div className="text-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
        Send
      </button>
    </div>
  </form>
</div>

  );
}

export default ContactUs;
