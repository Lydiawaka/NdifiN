import { useState } from "react";
import { FaLinkedin, FaGithub, FaTiktok, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from "next/link";


const Explore = () => {
    const [isOpen, setIsOpen] = useState(false);
    
      const menuItems = [
        { id: 1, icon: <FaLinkedin />, angle: 0, link:"https://www.linkedin.com/in/lydia-nduati-b76b32279/" },
        { id: 2, icon: <FaGithub />, angle: 72, link: "https://www.linkedin.com/in/lydia-nduati-b76b32279/"},
        { id:3, icon: <FaTiktok />, angle: 144, link: "https://www.tiktok.com/@ndifin1?_t=ZM-8tgtLa8WbFG&_r=1"},
        { id:4, icon: <CiMail />, angle: 216, link: "https://www.linkedin.com/in/lydia-nduati-b76b32279/"},
        { id:5, icon: <FaInstagram />, angle: 288, link: "GATXUWWYDFFHN4SK64F6H3X6UVUCRGMR6BXJ4JAPT2MMG5QI5VRQLQNE" }
      ];
  return (
    <div>
        <div className="relative hidden md:flex space-x-3 justify-center items-center">
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center text-white h-24 w-24 bg-teal-500 rounded-full hover:bg-customBlue cursor-pointer">
                <span>Explore</span>
            </button>
            
            {menuItems.map(({ icon, angle, id, link }) => (
            <Link
                key={id}
                className={`absolute top-1/2 bottom-1/2 right-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 bg-white text-teal-500 rounded-full transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                style={{
                  transform: `rotate(${angle * 72}deg) translateY(-130px) rotate(-${angle * 72}deg)`
                }} href={link}              
            >
              {icon}
            </Link>
            ))}
         </div>
    </div>
  )
}
export default Explore