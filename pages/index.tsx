import { FaSearch, FaPalette, FaCode, FaBug } from "react-icons/fa";
import Hero from "./components/Hero/Page";
import Navbar from "./components/Navbar/Page";
import About from "./components/About/Page";
import Explore from "./components/Explore/Page";
import Footer from "./components/Footer/Page";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Image from "next/image";
import Projects from "./components/Projects/Page";
import Head from "next/head";

const Index = () => {

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
    { icon: FaBug, 
    title: 'Software Testing', 
    description: 'Ensure your applications are bug-free, reliable, and perform optimally.', 
    aosDelay: "800" }
  ];


  const handleEmailClick = () => {
    window.location.href = "mailto:ndifin77@gmail.com";
  };

  return (
    <>
    <Head>
       <title>NdifiN | Software Development & Consultancy</title>
       <meta name="google-site-verification" content="aZ2EgSdJ42Mq5hcC1VE9wH1iSiJoKmlAG_wyIgpo2J4" />
      </Head>
      
    <div className="bg-background min-h-screen transition-colors duration-300">
      
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <Hero />

      {/* About Agency Section */}
      <section className="py-10 px-10 w-full">
        <div className="container max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
          <div className="lg:col-span-2 ">
            <h2  data-aos="fade-up"
            className="text-3xl font-bold mb-6 text-foreground">NdifiN</h2>
            <p data-aos="fade-up" className="text-muted-foreground  max-w-xl mb-8">
              We are passionate about turning ideas into impactful online experiences. At NdifiN, we specialize in creating and developing websites that combine innovative design, seamless functionality, and user-focused experiences.
            </p>
            <button onClick={handleEmailClick} className="bg-teal-500 text-primary-foreground font-semibold px-6 py-2 rounded-lg hover:text-black hover:bg-slate-50 ">
              Connect
            </button>
          </div>
          <div data-aos="fade-up" data-aos-delay="800" className="lg:col-span-2 relative w-full">
            <Image
              src="/images/laptop.jpg"
              alt="Agency preview"
              width={500}
              height={300}
              className="rounded-2xl w-[500px] h-auto object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* About section */}
      <About/>
      {/* project section */}
      <Projects />
       
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
                  <div className="w-full h-full text-gray-900 rounded-full">
                    <service.icon className="text-xl hover:rotate-90" />
                  </div>
                </div>
                <h3 className="text-xl text-gray-900 font-semibold mb-3">{service.title}</h3>
                <p className={index === 2 ? 'text-gray-100' : 'text-gray-700'}>
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
   </>
  )
}
export default Index