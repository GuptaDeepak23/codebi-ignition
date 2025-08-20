import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Digital Marketing",
      excerpt: "Discover how artificial intelligence is revolutionizing the way businesses approach digital marketing strategies and customer engagement.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      author: "CodeBi Team",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "AI & Marketing",
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Modern Tech Stack",
      excerpt: "Learn about the latest technologies and best practices for creating web applications that can grow with your business needs.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      author: "CodeBi Team",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      category: "Web Development",
    },
    {
      id: 3,
      title: "SEO Strategies That Actually Work in 2024",
      excerpt: "Uncover the most effective SEO techniques and strategies that will help your website rank higher in search results this year.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
      author: "CodeBi Team",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "SEO",
    },
    {
      id: 4,
      title: "Automation Workflows: Streamline Your Business Processes",
      excerpt: "Explore how n8n workflows and automation tools can save time, reduce errors, and improve efficiency in your business operations.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      author: "CodeBi Team",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      category: "Automation",
    },
  ];

  const handleReadMore = (blogId: number) => {
    // For now, just scroll to contact - in a real app, this would navigate to the blog post
    console.log(`Navigate to blog post ${blogId}`);
    // You can implement navigation to individual blog pages here
  };

  return (
    <section id="blogs" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest <span className="text-accent">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world of digital marketing and web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    By {post.author}
                  </span>
                  <button
                    onClick={() => handleReadMore(post.id)}
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm group/btn"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to stay updated with our latest content?
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;