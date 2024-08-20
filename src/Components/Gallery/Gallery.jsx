import React from 'react'

function Gallery() {
  return (
    <section className="space-y-6 p-2 pt-6 flex flex-col gap-2 items-center w-[100vw]">
        <h2 className="text-4xl font-bold text-gray-800">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className=" w-full h-48 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src="path_to_image1.jpg" alt="Gallery Image 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
          </div>
          <div className="relative w-full h-48 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src="path_to_image2.jpg" alt="Gallery Image 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
          </div>
          <div className="relative w-full h-48 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src="path_to_image3.jpg" alt="Gallery Image 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
          </div>
          <div className="relative w-full h-48 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src="path_to_image4.jpg" alt="Gallery Image 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
          </div>
        </div>
      </section>
  )
}

export default Gallery