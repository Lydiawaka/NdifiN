import { useState } from "react";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { MdDownload, MdEmail } from "react-icons/md";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:ndifin77@gmail.com";
  };

  const handleResumeDownload = () => {
    
    window.open("/Lydia_Nduati_CV.pdf", "_blank");
  };

  return (
    <div className="h-[60vh] sm:h-1/2 sm:mb-0">
      <div className="h-auto bg-black bg-opacity-95 relative overflow-hidden">
        {/* Stars background effect */}
        <div className="inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-opacity-70 bg-[length:100px_150px] animate-star-move"></div>
        </div>

        <div className="container mx-auto px-4 pt-4">
          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center p-0">
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-8xl font-bold mb-5"
            >
              <span className="text-customBlue">Create your digital</span>
              <br />
              <span className="text-white"> future</span>
              <br />
              <span className="text-customBlue">together</span>
            </h1>

            <p
              data-aos="fade-up"
              className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto"
            >
              Innovative software solutions powered by cutting-edge technology.
              Specializing in custom development, web applications, and
              user-centric design.
            </p>

            {/* Hire Me Button */}
            <button
              onClick={() => setShowModal(true)}
              data-aos="fade-up"
              className="bg-gray-200 cursor-pointer hover:bg-teal-500 text-black font-semibold py-2 px-3 rounded-full transition-all duration-300"
            >
              HIRE ME
            </button>
          </div>

          {/* Decorative Globe */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-500/30 to-green-500/30 blur-xl"></div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
              <h2 className="text-xl font-bold mb-4">Let us work together</h2>

              <div className="space-y-3">
                <a
                  href="https://fiverr.com//lydia_nduati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border rounded-md p-3 hover:bg-gray-100 hover:border-teal-400"
                >
                  <SiFiverr className="text-teal-400" />
                  Hire on Fiverr (from $100)
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~010b0958a9c061b3b3?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border rounded-md p-3 hover:bg-gray-100 hover:border-teal-400"
                >
                  <SiUpwork className="text-teal-400" />
                  Hire on Upwork (from $20/hr)
                </a>
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-2 w-full border rounded-md p-3 hover:bg-gray-100 hover:border-teal-400"
                >
                  <MdEmail className="text-teal-400"/>
                  Send an Email
                </button>
                <button
                  onClick={handleResumeDownload}
                  className="flex items-center gap-2 w-full border rounded-md p-3 hover:bg-gray-100 hover:border-teal-400"
                >
                  <MdDownload className="text-teal-400" />
                  Download Resume
                </button>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
