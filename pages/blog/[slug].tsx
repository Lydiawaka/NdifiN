"use client"
import type { GetStaticProps, GetStaticPaths } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, User, ArrowLeft } from "lucide-react"

interface BlogPost {
  slug: string
  title: string
  description: string
  author: string
  date: string
  readTime: string
  tags: string[]
  image: string
  content: string
}

const blogPosts: Record<string, BlogPost> = {
  "future-web-development-2024": {
    slug: "future-web-development-2024",
    title: "The Future of Web Development in 2024",
    description: "Exploring the latest trends and technologies shaping the web development landscape.",
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Web Development", "Technology", "Trends"],
    image: "/images/web-dev.jpg",
    content: `
      <p>The web development landscape is evolving at an unprecedented pace. As we navigate through 2024, several key trends are reshaping how we build and interact with web applications.</p>
      
      <h2>1. The Rise of AI-Powered Development</h2>
      <p>Artificial Intelligence is no longer just a buzzword in web development. From code generation tools like GitHub Copilot to AI-powered design systems, developers are leveraging AI to accelerate their workflow and improve code quality.</p>
      
      <h2>2. Server-Side Renaissance</h2>
      <p>With frameworks like Next.js, Remix, and SvelteKit leading the charge, server-side rendering is making a strong comeback. The benefits of improved SEO, faster initial page loads, and better user experience are driving this trend.</p>
      
      <h2>3. Edge Computing Goes Mainstream</h2>
      <p>Edge computing is transforming how we think about web application architecture. By processing data closer to users, we're seeing significant improvements in performance and user experience.</p>
      
      <h2>4. WebAssembly's Growing Influence</h2>
      <p>WebAssembly (WASM) is opening new possibilities for web applications, allowing developers to run high-performance code written in languages like Rust, C++, and Go directly in the browser.</p>
      
      <h2>5. The Component-Driven Future</h2>
      <p>Component libraries and design systems are becoming more sophisticated, with tools like Storybook and Figma integration making it easier to maintain consistency across large applications.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of possibilities. By staying informed about these trends and continuously learning, developers can build better, faster, and more user-friendly web applications.</p>
    `,
  },
  "react-best-practices": {
    slug: "react-best-practices",
    title: "React Best Practices for 2024",
    description: "Learn the most effective patterns and practices for building React applications.",
    author: "Jane Smith",
    date: "2024-01-10",
    readTime: "7 min read",
    tags: ["React", "JavaScript", "Best Practices"],
    image: "/images/icon.jpeg",
    content: `
      <p>React continues to be one of the most popular frontend frameworks, and with its constant evolution, it's important to stay up-to-date with the latest best practices.</p>
      
      <h2>1. Embrace Functional Components and Hooks</h2>
      <p>Class components are largely a thing of the past. Functional components with hooks provide a cleaner, more intuitive way to manage state and side effects.</p>
      
      <h2>2. Use TypeScript for Better Developer Experience</h2>
      <p>TypeScript adds static type checking to JavaScript, helping catch errors early and improving code maintainability. The React ecosystem has excellent TypeScript support.</p>
      
      <h2>3. Optimize Performance with React.memo and useMemo</h2>
      <p>Prevent unnecessary re-renders by using React.memo for components and useMemo for expensive calculations. However, don't overuse these optimizations.</p>
      
      <h2>4. Follow the Single Responsibility Principle</h2>
      <p>Keep your components focused on a single responsibility. This makes them easier to test, debug, and reuse across your application.</p>
      
      <h2>5. Use Custom Hooks for Reusable Logic</h2>
      <p>Extract common stateful logic into custom hooks. This promotes code reuse and makes your components cleaner and more focused.</p>
      
      <h2>6. Implement Proper Error Boundaries</h2>
      <p>Use error boundaries to gracefully handle JavaScript errors in your component tree and provide fallback UI instead of crashing the entire application.</p>
      
      <h2>Conclusion</h2>
      <p>Following these best practices will help you build more maintainable, performant, and scalable React applications. Remember, the key is to stay consistent and keep learning as the ecosystem evolves.</p>
    `,
  },
  "typescript-advanced-features": {
    slug: "typescript-advanced-features",
    title: "Advanced TypeScript Features You Should Know",
    description: "Dive deep into TypeScript's advanced features and how to use them effectively.",
    author: "Mike Johnson",
    date: "2024-01-05",
    readTime: "8 min read",
    tags: ["TypeScript", "Programming", "Advanced"],
    image: "/images/javascript.jpeg",
    content: `
      <p>TypeScript has evolved significantly since its initial release, introducing powerful features that can help you write more robust and maintainable code.</p>
      
      <h2>1. Conditional Types</h2>
      <p>Conditional types allow you to create types that depend on a condition. They're particularly useful for creating flexible, reusable type definitions.</p>
      <pre><code>type ApiResponse&lt;T&gt; = T extends string ? string : T extends number ? number : never;</code></pre>
      
      <h2>2. Mapped Types</h2>
      <p>Mapped types let you create new types by transforming properties of existing types. They're the foundation for many utility types in TypeScript.</p>
      <pre><code>type Partial&lt;T&gt; = {
  [P in keyof T]?: T[P];
};</code></pre>
      
      <h2>3. Template Literal Types</h2>
      <p>Template literal types allow you to create types using template literal syntax, enabling powerful string manipulation at the type level.</p>
      <pre><code>type EventName&lt;T extends string&gt; = \`on\${Capitalize&lt;T&gt;}\`;</code></pre>
      
      <h2>4. Discriminated Unions</h2>
      <p>Discriminated unions help you model data that can be one of several types, with TypeScript providing excellent type narrowing support.</p>
      
      <h2>5. Advanced Generic Constraints</h2>
      <p>Use generic constraints to limit the types that can be used with your generic functions and classes, providing better type safety and IntelliSense.</p>
      
      <h2>6. Utility Types</h2>
      <p>TypeScript provides many built-in utility types like Pick, Omit, Record, and Exclude that can help you transform and manipulate types effectively.</p>
      
      <h2>Conclusion</h2>
      <p>These advanced TypeScript features might seem complex at first, but mastering them will significantly improve your ability to create type-safe, maintainable applications.</p>
    `,
  },
}

interface BlogPostPageProps {
  post: BlogPost
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Hero Image */}
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">{post.title}</h1>

            <p className="text-xl text-gray-600 mb-6 text-pretty">{post.description}</p>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-gray-700 leading-relaxed" />
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Articles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(blogPosts).map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = blogPosts[slug]

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}
