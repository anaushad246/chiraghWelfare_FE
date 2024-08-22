// NewsSlider.js

// Import React and necessary packages
import React from 'react';

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import the Slider component from react-slick
import Slider from "react-slick";

const NewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // Ensures no margin around the slide
    swipeToSlide: true,
        }
      }
    ]
  };
  const images = [
    {
       src: "/src/assets/HelpingHand.jpg",
       width: 320,
       height: 174,
       isSelected: true,
       caption: "After Rain ",
    },
    {
       src: "/src/assets/Counselling.jpg",
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "src/assets/DarUlFalah.jpg",
       width: 320,
       height: 212,
    },
    {
      src: "src/assets/Disaster.jpg",
       width: 320,
       height: 212,
    },
    {src: "src/assets/HandPump.jpg",
      width: 320,
      height: 212,},
    {src: "src/assets/HealthCare.jpg",
      width: 320,
      height: 212,},
    {src: "src/assets/HelpingHand.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "HelpingHand", title: "Ocean" },
        { value: "People", title: "People" },
     ]},
  ];
  return (
    <div className=" bg-[#E5E5E5] text-[#333333] mb-6 ">
        <h1 className="text-3xl font-bold p-4 text-center ">News</h1>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className=" bg-white shadow-lg rounded-lg p-4">
            
            <div className=" relative overflow-hidden rounded-md mb-3 flex flex-col items-center justify-center">
              <img 
                src={item.src} 
                alt="Post"
                className="w-fit h-52 px-1  transition-transform duration-200 transform scale-100 hover:scale-110"
              />
              {/* <a href="#" className="over-layer p-4 absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 hover:opacity-75 flex justify-center items-center transition-opacity duration-500">
                <i className="fa fa-link text-red-900 text-2xl"></i>
              </a> */}
            </div>
            <div className="post-content px-5 pb-10">
              <h3 className="post-title text-lg font-bold uppercase mb-2">
                <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">Lorem ipsum dolor sit amet.</a>
              </h3>
              <p className="post-description text-gray-600 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <span className="post-date text-gray-500 text-sm flex items-center">
                <i className="fa fa-clock-o text-gray-300 mr-2"></i>Out 27, 2019
              </span>
              <a href="#" className="read-more bg-blue-600 text-white text-xs px-4 py-2 rounded-full float-right hover:bg-blue-700 transition-colors shadow-md">Read more</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
