import { FaLinkedin, FaTiktok, FaDiscord, FaCopyright, FaWhatsapp, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="py-8 md:py-12 px-4 md:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Social Links */}
        <div data-aos= "fade-up" className="flex flex-col items-center sm:items-start">
          <div className="flex items-center space-x-2 mb-4">
            
            <span className="text-2xl font-semibold">NdifiN</span>
          </div>
          <div data-aos= "fade-up" className="flex space-x-4">
            <a href="#" className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors" >
              <FaLinkedin className="text-white rounded-lg h-6 w-5 "/>
            </a>
            <a href="#" className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors" >
              <FaTiktok className="text-white rounded-lg h-6 w-5 " />
            </a>
            <a href="#" className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors" >
              <FaDiscord className="text-white rounded-lg h-6 w-5 " />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div data-aos= "fade-up" className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-gray-300 transition-colors flex items-center">
              <FaWhatsapp className="bg-teal-600 text-white rounded-lg" />+254 778 136 430</li>
            <li className="hover:text-gray-300 transition-colors flex items-center">
              <FaMailBulk className="bg-teal-600 text-white rounded-md" />
              ndifin77@gmail.com</li>
          </ul>
        </div>

        {/* Services */}
        <div data-aos= "fade-up" className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-gray-300 transition-colors">Web Development</li>
            <li className="hover:text-gray-300 transition-colors">SEO</li>
            <li className="hover:text-gray-300 transition-colors">UI/UX Design</li>
            <li className="hover:text-gray-300 transition-colors">Financial Consultancy</li>
          </ul>
        </div>

        {/* About Us */}
        <div data-aos= "fade-up" className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-gray-300 transition-colors">Our Story</li>
            <li className="hover:text-gray-300 transition-colors">Team</li>
            <li className="hover:text-gray-300 transition-colors">Careers</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <FaCopyright />
        <h1 className="text-gray-400">2025</h1>
      </div>
    </footer>
    </div>
  )
}
export default Footer