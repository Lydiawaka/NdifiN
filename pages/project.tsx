import Image from "next/image"
import Link from "next/link"
import Footer from "./components/Footer/Page"
import Navbar from "./components/Navbar/Page"
import AnimatedCounters from "./project/AnimatedCounters";
import { ExternalLink, Github } from "lucide-react";


export default function Home() {
  

  const personalProjects = [
    {
      id: 1,
      title: 'Recipe Finder',
      tech: ['Next.js', 'Tailwind CSS', 'Spoonacular API'],
      description: 'Search and filter recipes by ingredients, dietary restrictions, and more.',
      image: '/images/recipe-finder.jpg',
      liveUrl: 'https://recipe-finder-one-sepia.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/recipe-finder'
    },  
    {
      id: 2,
      title: 'Lejaflow',
      tech: ['Next.js', 'Node.js', 'PostgreSQL'],
      description: 'Smart Ledger Dashboard for Businesses.',
      image: '/images/leja.jpg',
      liveUrl: 'https://www.lejaflow.com/',
      codeUrl: 'https://github.com/Lydiawaka/Lejaflow'
    }, 
    {
      id: 3,
      title: 'Crypto Tracker',
      tech: ['Next.js', 'Docusaurus', 'Shadcn ui'],
      description: 'A real-time cryptocurrency tracking dashboard displaying price charts, market trends, and coin data using CoinGecko API.',
      image: '/images/crypto.jpg',
      liveUrl: 'https://crypto-tracker-gilt-one.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/crypto-tracker'
    },
        {
      id: 4,
      title: 'MarketLyse',
      tech: ['Next.js', 'Django', 'Typescript'],
      description: 'A Web App for insights and analysis on investment.',
      image: '/images/market.jpg',
      liveUrl: 'https://marketlyse.vercel.app/market',
      codeUrl: 'https://github.com/Lydiawaka/marketlyse'
    },
    {
      id: 5,
      title: 'Masgas Enterprice Website',
      tech: ['React', 'Next.js', 'Tailwind'],
      description: 'Ecommerce website that allow clients to order via Whatsapp.',
      image: '/images/masgas.PNG',
      liveUrl: 'https://masgas-enterprice.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/masgas-enterprice'
    },
    {
      id: 6,
      title: 'Masgas Dashboard Website',
      tech: ['React', 'Next.js', 'Tailwind', 'PostgreSQL', ],
      description: 'Allows the admins to upload the products to main website.',
      image: '/images/masgas-admin.PNG',
      liveUrl: 'https://masgas.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/masgas'
    },
    {
      id: 7,
      title: 'MarketingLyze',
      tech: ['Typescript','Javascript', 'Tailwind CSS'],
      description: 'A marketing platform that tracks campaign performance, finds email, and conversion insights using automated data analysis.',
      image: '/images/marketing.jpg',
      liveUrl: 'https://marketinglyze.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/marketinglyze'
    },
        {
      id: 8,
      title: 'E-commerce Store',
      tech: ['Next.js', 'Django', 'Stripe'],
      description: 'An online store with full shopping cart functionality.',
      image: '/images/wak.jpg',
      liveUrl: 'https://www.wakawears.com/',
      codeUrl: 'https://github.com/username/ecommerce-store'
    },
    {
      id: 9,
      title: 'Portfolio Website',
      tech: ['React', 'Next.js', 'Tailwind'],
      description: 'A personal portfolio showcasing my skills and projects.',
      image: '/images/portifolio.jpg',
      liveUrl: 'https://portfolio-eight-beta-86.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/Portfolio'
    },
    {
      id: 10,
      title: 'Our stories',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'A full-stack platform where users can sign up and write and save they stories and poems.',
      image: '/images/poem.jpg',
      liveUrl: 'https://poems-alpha.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/poems'
    },
    {
      id: 11,
      title: 'Furniture Store',
      tech: ['React', 'Vite', 'Node.js', 'MongoDB'],
      description: 'A modern furniture storefront built with Vite + React.',
      image: '/images/furniture.jpg',
      liveUrl: 'https://furniture-rust-nine.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/Furniture'
    },
    {
      id: 12,
      title: 'Task Management App',
      tech: ['Next.js', 'Shadcn ui', 'Mysql'],
      description: 'A Trello-inspired task management application with drag-and-drop functionality.',
      image: '/images/task.jpg',
      liveUrl: 'https://task-manager-mu-lovat.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/Task-Manager'
    },
    {
      id: 13,
      title: 'Restaurant Website',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'A full-stack restaurant website with an online booking system for reservations.',
      image: '/images/restaurant.jpg',
      liveUrl: 'https://restaurant-dusky-six.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/restaurant'
      },
      {
      id: 14,
      title: 'Blog Platform',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'A full-stack blog with admin dashboard and markdown support.',
      image: '/images/blog.jpg',
      liveUrl: 'https://essie-blogs.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/Essie-Blogs'
    },
    {
      id: 15,
      title: 'Medical Clinic Website',
      tech: ['Typescript','Javascript', 'Shadcn ui'],
      description: 'A medical centre website that enables users to  book appointments, and access professional medical care.',
      image: '/images/medical.jpg',
      liveUrl: 'https://eclasa-medical-clinic.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/Eclasa-Medical-Clinic'
    },

  ];
  
  return (
    <main className="min-h-screen">
        <div className="bg-black">
            <Navbar />
        </div>
       
      {/* Hero Section */}
      <section className="bg-black text-white py-20 md:py-18">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Web Development Projects</h1>
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-teal-500">Powered by Modern Technologies</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Discover web development projects showcasing both client and personal work, crafted using technologies like Next.js, React, and the MERN stack.
          </p>

          <Link
            href="/"
            className="inline-flex items-center bg-teal-500 hover:bg-teal-500 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Go Back
          </Link>

          {/* Stats */}
          <AnimatedCounters/>
          
        </div>
      </section>
      {/* Projects Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-white border border-teal-500 p-4 rounded-lg w-72 mx-auto hover:border-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map((project) => (
                <div key={project.id} className="border rounded-lg overflow-hidden shadow-md bg-white">
                  <div className="h-48 bg-gray-200 relative">
                    <Image
                      src={project.image}
                      alt={`Project ${project.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">{tech}</span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="flex gap-3">
                      <Link 
                        href={project.liveUrl} 
                        target="_blank"
                        className="flex-1 bg-gray-200 hover:ring-2 hover:ring-teal-400 text-gray-900 text-center py-2 px-4 rounded-md transition-colors font-medium flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Preview
                      </Link>
                      <Link 
                        href={project.codeUrl} 
                        target="_blank"
                        className="flex-1 bg-gray-200 hover:ring-2 hover:ring-gray-900 text-gray-900 text-center py-2 px-4 rounded-md transition-colors font-medium flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                        View Code
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

     
      <section className="">
        <Footer />
      </section>
    </main>
  )
}