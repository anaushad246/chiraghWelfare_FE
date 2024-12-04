import React from 'react';

const events = [
  {
    title: 'BLANKET DISTRIBUTION CAMP',
    date: '25-12-2024',
    time: '10:00 AM - 03:00 PM',
    location: 'Flood effected area and in slums',
    
  },
  
];

const Events = () => {
  return (
    <section className="py-8 text-center bg-[#FFC107]  ">
      <h2 className="text-2xl font-bold text-center mb-8">Upcoming Events</h2>
      <div className="grid grid-cols-1 gap-6 ">
        {events.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

const Event = ({ event }) => {
  return (
    <div className="bg-[#F7DC6F] rounded-lg shadow-md  hover:shadow-lg transition-shadow duration-300 p-4">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
      <p className="text-gray-600"><strong>Date:</strong> {event.date}</p>
      <p className="text-gray-600"><strong>Time:</strong> {event.time}</p>
      <p className="text-gray-600"><strong>Location:</strong> {event.location}</p>
      <p className="text-gray-600">{event.description}</p>
    </div>
  );
};

export default Events;
