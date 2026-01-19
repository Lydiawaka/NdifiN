import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import Footer from "./components/Footer/Page"
import Navbar from "./components/Navbar/Page"
import AnimatedCounters from "./project/AnimatedCounters";
import { ExternalLink, Github } from "lucide-react";


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const personalProjects = [
    {
      id: 1,
      title: 'Recipe Finder',
      tech: ['Next.js', 'Tailwind CSS', 'Spoonacular API'],
      description: 'Search and filter recipes by ingredients, dietary restrictions, and more.',
      image: '/images/recipe-finder.jpg',
      liveUrl: 'https://recipe-finder-one-sepia.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/recipe-finder',
      category: 'Web App'
    },  
    {
      id: 2,
      title: 'Lejaflow',
      tech: ['Next.js', 'Node.js', 'PostgreSQL'],
      description: 'Smart Ledger Dashboard for Businesses.',
      image: '/images/leja.jpg',
      liveUrl: 'https://www.lejaflow.com/',
      codeUrl: 'https://github.com/Lydiawaka/Lejaflow',
      category: 'Dashboard'
    }, 
    {
      id: 3,
      title: 'Crypto Tracker',
      tech: ['Next.js', 'Docusaurus', 'Shadcn ui'],
      description: 'A real-time cryptocurrency tracking dashboard.',
      image: '/images/crypto.jpg',
      liveUrl: 'https://crypto-tracker-gilt-one.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/crypto-tracker',
      category: 'Dashboard'
    },
    {
      id: 4,
      title: 'MarketLyse',
      tech: ['Next.js', 'Django', 'Typescript'],
      description: 'A Web App for insights and analysis on investment.',
      image: '/images/market.jpg',
      liveUrl: 'https://marketlyse.vercel.app/market',
      codeUrl: 'https://github.com/Lydiawaka/marketlyse',
      category: 'Analytics'
    },
    {
      id: 5,
      title: 'Masgas Enterprice Website',
      tech: ['React', 'Next.js', 'Tailwind'],
      description: 'Ecommerce website with WhatsApp ordering.',
      image: '/images/masgas.PNG',
      liveUrl: 'https://masgas-enterprice.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/masgas-enterprice',
      category: 'E-commerce'
    },
    {
      id: 6,
      title: 'Masgas Dashboard Website',
      tech: ['React', 'Next.js', 'Tailwind', 'PostgreSQL'],
      description: 'Admin dashboard for product management.',
      image: '/images/masgas-admin.PNG',
      liveUrl: 'https://masgas.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/masgas',
      category: 'Dashboard'
    },
    {
      id: 7,
      title: 'MarketingLyze',
      tech: ['Typescript','Javascript', 'Tailwind CSS'],
      description: 'Marketing platform for campaign tracking and analysis.',
      image: '/images/marketing.jpg',
      liveUrl: 'https://marketinglyze.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/marketinglyze',
      category: 'Analytics'
    },
    {
      id: 8,
      title: 'E-commerce Store',
      tech: ['Next.js', 'Django', 'Stripe'],
      description: 'Online store with full shopping cart functionality.',
      image: '/images/wak.jpg',
      liveUrl: 'https://www.wakawears.com/',
      codeUrl: 'https://github.com/username/ecommerce-store',
      category: 'E-commerce'
    },
    {
      id: 9,
      title: 'Portfolio Website',
      tech: ['React', 'Next.js', 'Tailwind'],
      description: 'Personal portfolio showcasing skills and projects.',
      image: '/images/portifolio.jpg',
      liveUrl: 'https://portfolio-eight-beta-86.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/Portfolio',
      category: 'Portfolio'
    },
    {
      id: 10,
      title: 'Our stories',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'Platform for writing and saving stories and poems.',
      image: '/images/poem.jpg',
      liveUrl: 'https://poems-alpha.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/poems',
      category: 'Blog'
    },
    {
      id: 11,
      title: 'Furniture Store',
      tech: ['React', 'Vite', 'Node.js', 'MongoDB'],
      description: 'Modern furniture storefront built with Vite + React.',
      image: '/images/furniture.jpg',
      liveUrl: 'https://furniture-rust-nine.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/Furniture',
      category: 'E-commerce'
    },
    {
      id: 12,
      title: 'Task Management App',
      tech: ['Next.js', 'Shadcn ui', 'Mysql'],
      description: 'Trello-inspired task management with drag-and-drop.',
      image: '/images/task.jpg',
      liveUrl: 'https://task-manager-mu-lovat.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/Task-Manager',
      category: 'Productivity'
    },
    {
      id: 13,
      title: 'Restaurant Website',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'Full-stack restaurant with online booking system.',
      image: '/images/restaurant.jpg',
      liveUrl: 'https://restaurant-dusky-six.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/restaurant',
      category: 'Business'
    },
    {
      id: 14,
      title: 'Blog Platform',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'Full-stack blog with admin dashboard and markdown.',
      image: '/images/blog.jpg',
      liveUrl: 'https://essie-blogs.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/Essie-Blogs',
      category: 'Blog'
    },
    {
      id: 15,
      title: 'Medical Clinic Website',
      tech: ['Typescript','Javascript', 'Shadcn ui'],
      description: 'Medical center website with appointment booking.',
      image: '/images/medical.jpg',
      liveUrl: 'https://eclasa-medical-clinic.vercel.app/',
      codeUrl: 'https://github.com/Lydiawaka/Eclasa-Medical-Clinic',
      category: 'Healthcare'
    },
  ];
  
// Get unique categories
  const categories = ['All', ...Array.from(new Set(personalProjects.map(project => project.category)))];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? personalProjects 
    : personalProjects.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-background">
        <Navbar />
      </div>
       
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-secondary/20 text-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-teal-500 bg-clip-text text-transparent">
            Web Development Projects
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-teal-400">
            Powered by Modern Technologies
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-muted-foreground">
            Explore our collection of successful projects that showcase our expertise and commitment to delivering exceptional digital solutions.
          </p>

          <Link
            href="/"
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20"
          >
            Get in Touch
          </Link>

        </div>
      </section>
      {/* Projects Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              A collection of my recent work across various domains
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-teal-600 text-white shadow-lg shadow-teal-500/20 scale-105"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-500 hover:-translate-y-2"
              >
                
                
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0  to-transparent" />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-secondary text-gray-600 dark:text-gray-300 text-xs rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full border border-gray-600">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-teal-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* view live */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <Link href={project.liveUrl} className="px-3 py-1 bg-teal-600 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      View Live
                    </Link>
                  </div>
                  
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-500/30 rounded-2xl transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="text-center mt-12">
            <Link
              href="/project"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium group"
            >
              View All Projects
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="bg-background">
        <Footer />
      </section>
    </main>
  )
}