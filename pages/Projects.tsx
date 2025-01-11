import React, { useState } from 'react';
import Image from 'next/image';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      view: "Blog",
      image: "/images/blog.jpg",
      code: "https://essie-blogs.vercel.app/"
    },
    {
      view: "Stories",
      image: "/images/poem.jpg",
      code: "https://poems-alpha.vercel.app/"
    },
    {
      view: "Portifolio",
      image: "/images/portifolio.jpg",
      code: "https://lydiawaka.github.io/Portfolio/"
    },
    {
      view: "Ecommerce",
      image: "/images/ecom.jpg",
      code: "https://www.wakawears.com/"
    },
    {
      view: "Store",
      image: "/images/furniture.jpg",
      code: "https://furniture-rust-nine.vercel.app/"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center p-8">
      {/* Laptop Container */}
      <div className="w-full max-w-xl aspect-[16/10] relative">
        {/* Laptop Body */}
        <div className="absolute inset-0 bg-gray-800 rounded-2xl p-4 shadow-xl">
          {/* Screen */}
          <div className="relative w-full h-full bg-white rounded-lg overflow-hidden">

            {/* Content Area */}
            <div className="relative h-[calc(100%-2rem)] overflow-hidden">
              <div 
                className="flex transition-transform duration-500 h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className="min-w-full h-full p-4"
                  >
                    <div className="bg-gray-50 h-full rounded-lg p-4">
                      <Image
                        src={project.image} 
                        alt={project.view}
                        height={600}
                        width={500}
                        className="w-full h-full object-cover rounded-lg mb-4"
                      />
                      
                      <div className="flex gap-2 flex-wrap">
                        <a href={project.code} className="text-s font-semibold mb-2 ">{project.view}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Base */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-gray-700 rounded-b-xl"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <button 
          onClick={prevProject}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Previous
        </button>
        <button 
          onClick={nextProject}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;