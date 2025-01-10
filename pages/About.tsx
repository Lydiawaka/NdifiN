import Hero from "./components/Hero/Page"
import Navbar from "./components/Navbar/Page"

const About = () => {
  return (
    <div>
        
        <div className="w-full min-h-screen bg-black text-white p-8">
        <div className="max-w-7xl mx-auto">
            {/* Central message */}
            <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-teal-500">we are makers.</h1>
            
            <p className="text-l md:text-2xl max-w-xl mx-auto">
                At Ndinfin, we are more than just creators we are visionaries, makers, and problem solvers. Our team is a passionate collective of innovative developers and designers, dedicated to crafting extraordinary digital experiences. Every solution we build is tailored to your unique needs, ensuring every project goes beyond expectations. Whether you're a startup looking for a strong online presence or an established business ready to scale, we bring creativity and technical expertise together to transform your ideas into powerful solutions. At NdinfiN, we don't just build. we make your vision a reality.
            </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mobile Apps */}
            <div className="flex flex-col items-center text-center">
                <div className="relative w-64 h-64 mb-6">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-lg"></div>
                <img 
                    src="/images/mobile.jpg" 
                    alt="Mobile app interface" 
                    className="w-full h-full object-cover rounded-lg transform -rotate-12"
                />
                </div>
                <h2 className="text-2xl font-bold mb-4">Mobile Apps</h2>
                <p className="text-gray-300">
                We build scalable and high-performance mobile applications that provide 
                exceptional user experiences across all devices.
                </p>
            </div>

            {/* Central Image */}
            <div className="flex items-center justify-center">
                <div className="relative w-full h-64">
                <img 
                    src="/images/web.jpg" 
                    alt="Technical network visualization" 
                    className="w-full h-full object-cover rounded-lg"
                />
                <h2 className="text-2xl font-bold mb-4">WEB DEVELOPMENT</h2>
                <p className="text-gray-300">
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
                <img 
                    src="/images/laptop.jpg" 
                    alt="Abstract visualization" 
                    className="w-full h-full object-cover rounded-lg"
                />
                </div>
                <h2 className="text-2xl font-bold mb-4">LLM Training and Evaluation</h2>
                <p className="text-gray-300">
                We offer comprehensive training and evaluation services for Large 
                Language Models (LLMs), ensuring their accuracy, performance, and 
                alignment with your specific requirements.
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
export default About