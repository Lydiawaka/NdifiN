import { FaArrowLeft, FaArrowRight, FaStar, FaSearch, FaPalette, FaCode, FaMoneyCheckAlt } from "react-icons/fa";
import Hero from "./components/Hero/Page";
import Navbar from "./components/Navbar/Page";
import About from "./components/About/Page";
import Explore from "./components/Explore/Page";
import Footer from "./components/Footer/Page";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const index = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const services = [
    { icon: FaSearch, title: 'UI/UX Design', description: 'Where imagination meets functionality: crafting next-generation interfaces that push creative boundaries while maintaining intuitive usability.', aosDelay: "200" },
    { icon: FaPalette, title: 'SEO/SEM', description: 'Optimize your online presence and reach more customers effectively', aosDelay: "400" },
    { icon: FaCode, title: 'Web Development', description: 'Building the digital foundation of your success through expert web development.', aosDelay: "600" },
    { icon: FaMoneyCheckAlt, title: 'Financial Consultancy', description: 'Our consultants gives strategic investment guidance that takes a personalized approach to building and preserving wealth.', aosDelay: "800" }
  ];

  const steps = [
    { number: 1, title: 'Contact us', description: 'Reach out to discuss your needs' },
    { number: 2, title: 'Consult', description: 'In-depth analysis of your requirements' },
    { number: 3, title: 'Place order', description: 'Choose your desired solutions' },
    { number: 4, title: 'Payment', description: 'Secure and flexible payment options' }
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:ndifin77@gmail.com";
  };

  const testimonials = [
    {
      name: 'Johanna Doe',
      image: '/images/meeting.jpg',
      text: 'Amazing service and great communication throughout the project',
      rating: 5
    },
    {
      name: 'John Doe',
      image: '/images/meeting.jpg',
      text: 'Professional team that delivered beyond our expectations',
      rating: 4
    },
    {
      name: 'Jonathan Doe',
      image: '/images/meeting.jpg',
      text: 'Excellent results and outstanding support',
      rating: 5
    }
  ];

  return (
    <div className="bg-black">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <Hero />

      {/* About Agency Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2  data-aos="fade-up"
            className="text-3xl font-bold mb-6 text-white">NdifiN</h2>
            <p data-aos="fade-up" className="text-gray-200 mb-8">
              We are passionate about turning ideas into impactful online experiences. At NdifiN, we specialize in creating and developing websites that combine innovative design, seamless functionality, and user-focused experiences.
            </p>
            <button onClick={handleEmailClick} className="bg-blue-600 text-white px-6 py-2 rounded-lg">
              Connect
            </button>
          </div>
          <div data-aos="fade-up" data-aos-delay="800" className="relative">
            <img
              src="/images/laptop.jpg"
              alt="Agency preview"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>
      
      {/* About section */}
      <About/>
       {/* Services Section */}
       <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 data-aos= "fade-up" className="text-3xl font-bold text-center mb-12 text-gray-200">
            We Provide the Best Services
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}  
                className={`p-6 rounded-xl hover:shadow-lg transition-all
                  ${index === 2 ? 'bg-customBlue text-white' : 'bg-gray-50'}`}
              >
                <div className="w-12 h-12 mb-4">
                  {/* Icon placeholder */}
                  <div className="w-full h-full rounded-full">
                    <service.icon className="text-xl hover:rotate-90" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className={index === 2 ? 'text-blue-100' : 'text-gray-600'}>
                  {service.description}
                </p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <Explore />



      {/* Footer */}
      <Footer />
      


    </div>
  )
}
export default index