import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {

  var setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
};

  const projects = [
    {
      id: 1,
      view: "Blog",
      image: "/images/blog.jpg",
      code: "https://essie-blogs.vercel.app/"
    },
    {
      id: 2,
      view: "Stories",
      image: "/images/poem.jpg",
      code: "https://poems-alpha.vercel.app/"
    },
    {
      id: 3,
      view: "Portifolio",
      image: "/images/portifolio.jpg",
      code: "https://lydiawaka.github.io/Portfolio/"
    },
    {
      id: 4,
      view: "Ecommerce",
      image: "/images/wak.jpg",
      code: "https://www.wakawears.com/"
    },
    {
      id: 5,
      view: "Store",
      image: "/images/furniture.jpg",
      code: "https://furniture-rust-nine.vercel.app/"
    },
    {
      id: 6,
      view: "Restaurant",
      image: "/images/restaurant.jpg",
      code: "https://restaurant-lydias-projects-05146ea0.vercel.app/"
    }

  ];

 

  return (
    <div className="w-full min-h-[50vh] bg-black flex items-center justify-center p-8">
      {/* Laptop Container */}
      <div className="w-full max-w-xl aspect-[16/10] relative">
        {/* Laptop Body */}
        <div className="absolute inset-0 bg-gray-800 rounded-2xl p-4 shadow-xl">
          {/* Screen */}
          <div className="relative w-full h-full bg-white rounded-lg overflow-hidden">

            {/* Content Area */}
            <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden">
              
                <Slider {...setting}>
                {projects.map(( project ) => (
                  <div 
                    key={project.id}
                    className="min-w-full h-full p-4"
                  >
                    <div className="bg-gray-50 h-full rounded-lg p-2 sm:p-4">
                      <Image
                        src={project.image} 
                        alt={project.view}
                        height={300}
                        width={600}
                        className="w-full aspect-video object-cover rounded-lg mb-2 sm:mb-2"
                      />
                      <div className="flex flex-wrap gap-2">
                        <a href={project.code} className="text-sm font-semibold hover:text-gray-600 transition-colors ">{project.view}</a>
                      </div>
                    </div>
                  </div>
                ))}
                </Slider>
              </div>
            </div>
            {/* Laptop Base */}
           <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-gray-700 rounded-b-xl"></div>
          </div>
        </div>

        
      </div>

      
    
  );
};

export default Projects;