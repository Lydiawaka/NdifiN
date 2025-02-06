import { useState } from "react";
import { FaLinkedin, FaGithub, FaTiktok, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Explore = () => {
    const [isOpen, setIsOpen] = useState(false);
    
      const menuItems = [
        { id: 1, icon: <FaLinkedin />, angle: 0 },
        { id: 2, icon: <FaGithub />, angle: 72 },
        { id:3, icon: <FaTiktok />, angle: 144 },
        { id:4, icon: <CiMail />, angle: 216 },
        { id:5, icon: <FaInstagram />, angle: 288 }
      ];
  return (
    <div>
        <div className="relative hidden md:flex space-x-3 justify-center items-center">
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center text-white h-24 w-24 bg-teal-500 rounded-full hover:bg-customBlue cursor-pointer">
                <span>Explore</span>
            </button>
            
            {menuItems.map(({ icon, angle, id }) => (
            <button
              key={id}
              className={`absolute top-1/2 bottom-1/2 right-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 bg-white text-teal-500 rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{
                transform: `rotate(${angle * 72}deg) translateY(-130px) rotate(-${angle * 72}deg)`
              }}
            >
              {icon}
            </button>
            ))}
         </div>
    </div>
  )
}
export default Explore