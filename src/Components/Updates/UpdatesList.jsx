import React from 'react';
import Marquee from 'react-fast-marquee';

function UpdatesList() {
  const updates = [
    "Distributed 500 food packages this month",
    "Launched new educational program for underprivileged children",
    "Upcoming medical camp in rural areas",
    "Partnership with local businesses for community support",
    "Annual charity event scheduled for next month",
  ];

  return (
    <div className="h-60 overflow-auto w-fit">
      {/* <Marquee gradient={false} direction="up" speed={40}> */}
        <ul className="">
          {updates.map((update, index) => (
            <li
              key={index}
              className="bg-yellow-50 p-3 rounded-md mb-2 hover:bg-yellow-100"
            >
              <span className="text-gray-700 text-md font-medium">{update}</span>
            </li>
          ))}
        </ul>
      {/* </Marquee> */}
    </div>
  );
}

export default UpdatesList;
