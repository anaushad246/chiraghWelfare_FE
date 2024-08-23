import React from 'react';
import { Gallery } from "react-grid-gallery";
import Events from '../Events/Events';

function MyGallery() {
  const images = [
    {
       src: "/HelpingHand.jpg",
       width: 320,
       height: 174,
       isSelected: true,
       caption: "After Rain ",
    },
    {
       src: "/Counselling.jpg",
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "/DarUlFalah.jpg",
       width: 320,
       height: 212,
    },
    {
      src: "/Disaster.jpg",
       width: 320,
       height: 212,
    },
    {src: "/HandPump.jpg",
      width: 320,
      height: 212,},
    {src: "/HealthCare.jpg",
      width: 320,
      height: 212,},
    {src: "/HelpingHand.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "HelpingHand", title: "Ocean" },
        { value: "People", title: "People" },
     ]},
  ];

  return (
    <section className="text-center py-4 bg-gray-100 rounded-lg shadow-md">
      <div><h2 className="text-2xl font-bold text-gray-800 mb-4">Image Gallery</h2>
      <Gallery images={images} /></div>
      <div><Events /></div>
    </section>
  );
}

export default MyGallery;
