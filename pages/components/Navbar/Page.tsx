"use client"
import Image from "next/image"
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import Link from 'next/link';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const handleEmailClick = () => {
    window.location.href = "mailto:ndifin77@gmail.com";
  };

  return (
    <div>
        <nav className="p-0 ">
        <div className="flex justify-between items-center max-w-6xl mx-auto h-12">
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
        relative 
        md:relative 
        z-50 
        right-0 
        bg-background border md:border-none 
        md:bg-transparent 
        p-4 
        md:p-0 
        rounded-lg 
        shadow-lg 
        md:shadow-none
      `}>
         <div className="flex space-x-4 md:items-center lg:text-xl">
            <Link href="/blogs" className="flex bg-teal-500 text-black rounded-full py-1 px-3 hover:bg-slate-50 hover:text-black transition-colors">Blog</Link>
            <button onClick={handleEmailClick} className="flex bg-white text-black rounded-full py-1 px-3 hover:bg-teal-500 hover:text-white transition-colors">Contact Us</button>
            <Link href="/project" className="flex bg-teal-500 text-black rounded-full py-1 px-3 hover:bg-slate-50 hover:text-black transition-colors">Projects</Link>

          </div>
      </div> 
          
        </div>
      </nav>

    </div>
  )
}
export default Navbar;