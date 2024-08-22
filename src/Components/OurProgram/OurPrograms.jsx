import React from 'react';
import counsellingImage from '/src/assets/Counselling.jpg';
import DarUlFalahImage from '/src/assets/DarUlFalah.jpg';



const programs = [
  {
    id: 1,
    name: 'Kalam Scholarship',
    image: "/src/assets/kalam-scholarship.jpg",
    content: `This scholarship aims to support students in their pursuit of higher education and provide them direct enrollment in several colleges and universities throughout India and selections are made based on factors such as annual family income and academic performance.`,
  },
  {
    id: 2,
    name: 'Dar-ul-Falah',
    image: DarUlFalahImage,
    content: 'This is the content for Program 2',
  },
  {
    id: 3,
    name: 'Counselling',
    image: counsellingImage,
    content: 'This is the content for Program 3',
  },
  {
    id: 4,
    name: 'Health Care',
    image: '/src/assets/HealthCare.jpg',
    content: 'This is the content for Program 4',
  },
  {
    id: 5,
    name: 'Home Industries',
    image: 'https://via.placeholder.com/150',
    content: 'This is the content for Program 5',
  },
  {
    id: 6,
    name: 'Hand Pump Project',
    image: '/src/assets/HandPump.jpg',
    content: 'This is the content for Program 6',
  },
  {
    id: 7,
    name: 'Vocational Training',
    image: '/src/assets/VocationalTraining.jpg',
    content: 'This is the content for Program 7',
  },
  {
    id: 8,
    name: 'Disaster Project',
    image: '/src/assets/Disaster.jpg',
    content: 'This is the content for Program 8',
  },
  {
    id: 9,
    name: 'Helping Hand ',
    image: '/src/assets/HelpingHand.jpg',
    content: 'This is the content for Program 9',
  },
  {
    id: 10,
    name: 'Orphan Scholarship',
    image: '/src/assets/OrphanScholarship.jpg',
    content: 'This is the content for Program 10',
  },
];

const OurPrograms = () => {
  const [activeProgram, setActiveProgram] = React.useState(null);

  return (
    <div className=" bg-[#005467] text-[#CCCCCC] py-4 px-2 flex flex-col  justify-center items-center w-[100vw]">
      <h2 className="text-3xl font-bold p-4">Our Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        {programs.map((program) => (
          <div key={program.id} className="cursor-pointer ">
            <img
              src={program.image}
              alt={program.name}
              className="w-full h-52 object-cover"
            />
            <h3
              className="text-lg font-bold"
              onClick={() => setActiveProgram(program.id)}
            >
              {program.name}
            </h3>
            {activeProgram === program.id && (
              <p className="text-gray-600">{program.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPrograms;