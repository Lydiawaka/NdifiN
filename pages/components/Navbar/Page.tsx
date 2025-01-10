"use client"
import Image from "next/image"
import { useState } from "react";

const Navbar = () => {
  const menuItems = [
    { label: 'Share', angle: 0 },
    { label: 'Edit', angle: 72 },
    { label: 'Delete', angle: 144 },
    { label: 'Save', angle: 216 },
    { label: 'Print', angle: 288 }
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:ndifin77@gmail.com";
  };

  return (
    <div>
        <nav className="py-4 px-8 ">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Logo" width={120} height={100} />
            <div className="h-4 w-4 bg-customBlue rounded-full"></div>
          </div>
          <div className="flex space-x-4">
            
            <button className="flex bg-teal-500 rounded-full py-1 px-3 hover:bg-slate-50">Blog</button>
            <button onClick={handleEmailClick} className="flex bg-slate-50 rounded-full py-1 px-3 hover:bg-teal-500">Contact Us</button>
          </div>
          
        </div>
      </nav>

    </div>
  )
}
export default Navbar;