import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div>
        <div className="w-full min-h-screen bg-black text-white p-8">
        <div className="max-w-7xl mx-auto">
            {/* Central message */}
            <div data-aos= "fade-up" className="text-center mb-16">
            <h1 data-aos= "fade-up" className="text-5xl font-bold text-teal-500">we are makers.</h1>
            
            <p data-aos= "fade-up" className="text-sm md:text-xl max-w-xl mx-auto">
                At Ndinfin, we are visionaries, makers, and problem solvers. Our passionate team of developers and designers crafts tailored digital solutions that exceed expectations. Whether you&apos;re a startup or an established business, we combine creativity and expertise to bring your vision to life. At Ndinfin, we don&apos;t just create. we make it happen.
            </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mobile Apps */}
            <div className="flex flex-col items-center text-center">
                <div className="relative w-64 h-64 mb-6">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-lg"></div>
                <Image 
                    src="/images/mobile.jpg" 
                    alt="Mobile app interface"
                    width={500} 
                    height={400}
                    className="w-full h-full object-cover rounded-lg transform -rotate-12"
                />
                </div>
                <h2 data-aos= "fade-up" className="text-2xl font-bold mb-4">Mobile Apps</h2>
                <p data-aos= "fade-up" className="text-gray-300">
                We build scalable and high-performance mobile applications that provide 
                exceptional user experiences across all devices.
                </p>
            </div>

            {/* Central Image */}
            <div className="flex items-center justify-center">
                <div className="relative w-full h-64">
                <Image 
                    src="/images/web.jpg" 
                    alt="Technical network visualization" 
                    width={500}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                />
                <h2 data-aos= "fade-up" className="text-2xl font-bold mb-4">WEB DEVELOPMENT</h2>
                <p data-aos= "fade-up" className="text-gray-300">
                We build scalable and high-performance mobile applications that provide 
                exceptional user experiences across all devices.
                </p>
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg"></div>
                </div>
            </div>

            {/* LLM Training */}
            <div className="flex flex-col items-center text-center">
                <div className="relative w-64 h-64 mb-6">
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg"></div>
                <Image 
                    src="/images/laptop.jpg" 
                    alt="Abstract visualization" 
                    width={500}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                />
                </div>
                <h2 data-aos= "fade-up" className="text-2xl font-bold mb-4">AI-Powered Web Solutions</h2>
                <p data-aos= "fade-up" className="text-gray-300">
                    AI integration in websites boosts functionality, user experience, and efficiency with features like recommendations, chatbots, advanced search, and analytics.
                </p>
            </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default About;
