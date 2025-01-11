"use client"
import Image from "next/image"
import { useState } from "react";
import { MdMenu } from "react-icons/md";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const handleEmailClick = () => {
    window.location.href = "mailto:ndifin77@gmail.com";
  };

  return (
    <div>
        <nav className="py-4 px-8 ">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Logo" width={120} height={100} />
            
          </div>

          {/* Menu Icon - visible only on small screens */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 hover:bg-slate-100 rounded-full"
      >
        <MdMenu className="text-teal-500" size={28} />
      </button>

      {/* Navigation Buttons */}
      <div className={`
        ${isMenuOpen ? 'flex' : 'hidden'} 
        md:flex 
        flex-col
        md:flex-row 
        space-y-2 
        md:space-y-0 
        md:space-x-4
        absolute 
        md:relative 
        top-12 
        md:top-0 
        right-0 
        bg-black 
        md:bg-transparent 
        p-4 
        md:p-0 
        rounded-lg 
        shadow-lg 
        md:shadow-none
      `}>
         <div className="flex space-x-4">
            <button className="flex bg-teal-500 rounded-full py-1 px-3 hover:bg-slate-50">Blog</button>
            <button onClick={handleEmailClick} className="flex bg-slate-50 rounded-full py-1 px-3 hover:bg-teal-500">Contact Us</button>
          </div>
      </div>
         
          
        </div>
      </nav>

    </div>
  )
}
export default Navbar;