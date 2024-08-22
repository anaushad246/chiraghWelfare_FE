import React from 'react';

const messages = [
  {
    name: 'John Doe',
    role: 'Founder, ABC Foundation',
    message: 'We are deeply grateful for the support of Chiragh Welfare Foundation in our community development projects.',
  },
  {
    name: 'Jane Smith',
    role: 'Volunteer',
    message: 'Working with Chiragh Welfare Foundation has been a rewarding experience, making a real difference in people’s lives.',
  },
  // Add more messages as needed
];

const Messages = () => {
  return (
    <section className="py-12 bg-gray-100 " id='messages'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Messages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((message, index) => (
            <MessageCard key={index} message={message} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MessageCard = ({ message }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-lg text-gray-700 mb-4">"{message.message}"</p>
      <div className="text-right">
        <h4 className="text-md font-semibold text-gray-800">{message.name}</h4>
        <p className="text-sm text-gray-600">{message.role}</p>
      </div>
    </div>
  );
};

export default Messages;
