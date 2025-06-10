import Image from "next/image"
import Link from "next/link"
import Footer from "./components/Footer/Page"
import Navbar from "./components/Navbar/Page"
import AnimatedCounters from "./project/AnimatedCounters";


export default function Home() {
  

  const projects = [
    {
      id: 1,
      title: 'Precious Metal Informative Website',
      description: 'A personal portfolio showcasing my skills and projects.',
      tech: ['React', 'Next.js', 'Tailwind'],
      image: '/images/metlp.JPG', 
    },
    {
      id: 2,
      title: 'E-commerce Store',
      description: 'An online store with full shopping cart functionality.',
      tech: ['Next.js', 'Django', 'Stripe'],
      image: '/images/wak.jpg',
    },
    {
      id: 3,
      title: 'Ecommerce Admin Dashboard',
      description: 'A full-stack blog with admin dashboard and markdown support.',
      tech: ['Next.js', 'Node.js', 'MySQL'],
      image: '/images/admin.jpg'
    },
    {
      id: 4,
      title: 'Solar Platform',
      description: 'A full-stack blog with admin dashboard and markdown support.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/images/solarfirm.jpg',
    },
    
    
    
  ];
  const personalProjects = [
    {
      id: 2,
      title: 'Crypto Tracker',
      description: 'A real-time cryptocurrency tracking dashboard displaying price charts, market trends, and coin data using CoinGecko API.',
      tech: ['Next.js', 'Docusaurus', 'Shadcn ui'],
      image: '/images/crypto.jpg',
      link: 'https://example.com/crypto-tracker'
    },    
    {
      id: 2,
      title: 'Blog Platform',
      description: 'A full-stack blog with admin dashboard and markdown support.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/images/blog.jpg',
      link: 'https://example.com/blog'
    },
    {
      id: 3,
      title: 'Recipe Finder',
      description: 'Search and filter recipes by ingredients, dietary restrictions, and more.',
      tech: ['Next.js', 'Tailwind CSS', 'Spoonacular API'],
      image: '/images/recipe.jpg',
      link: 'https://example.com/recipes'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing my skills and projects.',
      tech: ['React', 'Next.js', 'Tailwind'],
      image: '/images/portifolio.jpg', 
      link: ''
    },
    {
      id: 5,
      title: 'Our stories',
      description: 'A full-stack platform where users can sign up and write and save they stories and poems.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/images/poem.jpg',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A full-stack blog with admin dashboard and markdown support.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/images/furniture.jpg',
    },
    {
      id: 7,
      title: 'Task Management App',
      description: 'A Trello-inspired task management application with drag-and-drop functionality.',
      tech: ['Next.js', 'Shadcn ui', 'Mysql'],
      image: '/images/task.jpg',
      link: 'https://example.com/task-app'
    }
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

      {/* Clients Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Clients Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            {projects.map((project) => (
              <div key={project.id} className="border rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src={project.image}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">{project.tech}</span>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Personal Projects</h2>
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
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">{tech}</span>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link href={project.link || "#"} className="text-teal-500 hover:text-teal-700 font-medium">
                        View Project →
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
