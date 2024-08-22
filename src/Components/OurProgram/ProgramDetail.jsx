import React from 'react';
import { useParams } from 'react-router-dom';
import programs from './Programs'; // Import the array of programs from the data file

const ProgramDetail = () => {
  const { id } = useParams(); // Get the program id from the URL
  const program = programs.find(p => p.id === parseInt(id)); // Find the program by id

  if (!program) {
    return <p>Program not found</p>;
  }

  return (
    <div className="bg-[#005467] text-[#FFFFFF] py-4 px-2 flex flex-col justify-center items-center text-center w-[100vw]">
      <h2 className="text-2xl font-bold p-4">{program.name}</h2>
      <img
        src={program.image}
        alt={program.name}
        className="w-full  object-cover mb-4"
      />
      <p className="">{program.content}</p>
    </div>
  );
};

export default ProgramDetail;
