const Hero = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:ndifin77@gmail.com";
  };
    return (
      <div className="h-[60vh] sm:h-1/2 sm:mb-0">
        <div className="h-[80vh] bg-black bg-opacity-95 relative overflow-hidden">
        {/* Stars background effect */}
        <div className=" inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-opacity-70 bg-[length:100px_150px] animate-star-move"></div>
        </div>
  
        <div className="container mx-auto px-4 pt-4">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="text-blue-400 text-2xl font-bold">
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-0 max-w-4xl mx-auto text-center p-0">
            <h1 data-aos= "fade-up" className="text-4xl md:text-8xl font-bold mb-5">
              <span className="text-customBlue">Create your digital</span><br />
              <span className="text-white"> future</span><br />
              <span className="text-customBlue">together</span>
            </h1>
            
            <p data-aos= "fade-up" className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto">
              Innovative software solutions powered by cutting-edge technology. 
              Specializing in custom development, web applications, and 
              user-centric design.
            </p>
  
            <button  onClick={handleEmailClick} data-aos= "fade-up" className="bg-gray-200 hover:bg-blue-600 text-black font-semibold py-2 px-3 rounded-full transition-all duration-300">
              GET IN TOUCH
            </button>
          </div>
  
          {/* Decorative Globe */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-500/30 to-green-500/30 blur-xl"></div>
          </div>
        </div>
      </div>
      </div>
    )
  }
  export default Hero