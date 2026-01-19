"use client"

import { useState } from "react"
import Head from "next/head"
import Navbar from "./components/Navbar/Page"
import Footer from "./components/Footer/Page"
import Link from "next/link"
import BlogPostPage from "./blog/[slug]"

// JSON data for internal blogs
const internalBlogs = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
    author: "NdifiN Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    image: "/images/web-dev.jpg",
    slug: "future-web-development-2024",
  },
  {
    id: 2,
    title: "UI/UX Design Principles That Drive User Engagement",
    excerpt: "Learn the fundamental design principles that create intuitive and engaging user experiences.",
    author: "NdifiN Design Team",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Design",
    image: "/images/icon.jpeg",
    slug: "react-best-practices",
  },
  {
    id: 3,
    title: "Building Scalable Applications with Modern JavaScript",
    excerpt:
      "A comprehensive guide to building scalable applications using the latest JavaScript frameworks and tools.",
    author: "NdifiN Dev Team",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Development",
    image: "/images/javascript.jpeg",
    slug: "typescript-advanced-features",
  },
    
]

// JSON data for Medium blogs
const mediumBlogs = [
  {
    id: 1,
    title: "How to Build a Successful Tech Startup in 2025",
    excerpt: "Key insights and strategies for launching and scaling a tech startup in today's competitive market.",
    author: "NdifiN on Medium",
    date: "2024-01-20",
    readTime: "8 min read",
    category: "Business",
    image: "/images/icon.jpeg",
    url: "https://medium.com/@ndifin77/how-to-build-a-successful-tech-startup-in-2025-b98436b472a4",
    platform: "Medium",
  },
  {
    id: 2,
    title: "The Art of Code Review: Best Practices for Development Teams",
    excerpt:
      "Essential practices for conducting effective code reviews that improve code quality and team collaboration.",
    author: "NdifiN on Medium",
    date: "2024-01-18",
    readTime: "6 min read",
    category: "Development",
    image: "/images/code-review.jpeg",
    url: "https://medium.com/@ndifin77/the-art-of-code-review-best-practices-for-development-teams-c7559ff06a90",
    platform: "Medium",
  },
  {
    id: 3,
    title: "Financial Planning for Freelancers and Consultants",
    excerpt: "A comprehensive guide to managing finances as a freelancer or consultant in the tech industry.",
    author: "NdifiN on Medium",
    date: "2024-01-12",
    readTime: "9 min read",
    category: "Finance",
    image: "/images/freelancer.jpeg",
    url: "https://medium.com/@ndifin77/financial-planning-for-freelancers-and-consultants-a-comprehensive-guide-a9b162ec7d54",
    platform: "Medium",
  },
]

export default function Blog() {
  const [activeTab, setActiveTab] = useState<"internal" | "medium">("internal")

  const currentBlogs = activeTab === "internal" ? internalBlogs : mediumBlogs

  return (
    <>
      <Head>
        <title>Blog | NdifiN - Insights on Web Development & Technology</title>
        <meta
          name="description"
          content="Read our latest articles on web development, UI/UX design, and technology trends. Expert insights from the NdifiN team."
        />
      </Head>

      <div className="bg-background min-h-screen text-foreground">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-24 pb-12 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">Our Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay">
              Insights, tutorials, and thoughts on web development, design, and technology trends
            </p>
          </div>
        </section>

        {/* Sub Navigation */}
        <section className="pb-8 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-secondary/50 rounded-lg p-1 animate-fade-in-up">
                <button
                  onClick={() => setActiveTab("internal")}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    activeTab === "internal" ? "bg-teal-500 text-white" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Our Articles
                </button>
                <button
                  onClick={() => setActiveTab("medium")}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    activeTab === "medium" ? "bg-teal-500 text-white" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Medium Posts
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogs.map((blog, index) => (
                <article
                  key={blog.id}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full">{blog.category}</span>
                      {activeTab === "medium" && (
                        <span className="text-gray-400 text-xs">{(blog as any).platform}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2">{blog.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{blog.author}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-sm">{blog.date}</span>
                      {activeTab === "internal" && "slug" in blog ? (
                        <Link href={`/blog/${blog.slug}`}>
                           <button className="text-teal-500 hover:text-teal-400 font-medium">Read More →</button>
                        </Link>
                      ) : activeTab === "medium" && "url" in blog ? (
                        <a
                          href={blog.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:text-teal-400 font-medium"
                        >
                          Read on Medium →
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-8 bg-card border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 animate-fade-in-delay">
              Subscribe to our newsletter for the latest insights on web development and technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in-up">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground border border-input focus:border-teal-500 focus:outline-none"
              />
              <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
