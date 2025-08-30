import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight, Search, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Digital Marketing",
      excerpt: "Discover how artificial intelligence is revolutionizing the way businesses approach digital marketing strategies and customer engagement.",
      content: `Artificial Intelligence (AI) is transforming the digital marketing landscape at an unprecedented pace. From personalized customer experiences to predictive analytics, AI is enabling marketers to make data-driven decisions that were previously impossible.

      **Key AI Applications in Digital Marketing:**

      1. **Personalization at Scale**: AI algorithms analyze user behavior to deliver personalized content, recommendations, and experiences across all touchpoints.

      2. **Predictive Analytics**: Machine learning models can predict customer behavior, helping marketers optimize campaigns and improve ROI.

      3. **Chatbots and Customer Service**: AI-powered chatbots provide instant customer support, improving engagement and reducing response times.

      4. **Content Optimization**: AI tools analyze content performance and suggest optimizations for better engagement and conversion rates.

      5. **Ad Targeting**: Advanced AI algorithms optimize ad placement and targeting for maximum effectiveness.

      **The Future Outlook:**
      As AI technology continues to evolve, we can expect even more sophisticated marketing automation, real-time personalization, and predictive capabilities that will revolutionize how businesses connect with their customers.`,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      author: "CodeBi Team",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "AI & Marketing",
      tags: ["AI", "Digital Marketing", "Automation", "Personalization"]
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Modern Tech Stack",
      excerpt: "Learn about the latest technologies and best practices for creating web applications that can grow with your business needs.",
      content: `Building scalable web applications requires careful consideration of architecture, technology choices, and development practices. In today's fast-paced digital world, businesses need applications that can handle growth without compromising performance or user experience.

      **Modern Tech Stack Components:**

      1. **Frontend Frameworks**: React, Vue.js, and Angular provide robust foundations for building interactive user interfaces.

      2. **Backend Technologies**: Node.js, Python (Django/Flask), and Go offer excellent performance and scalability for server-side operations.

      3. **Database Solutions**: PostgreSQL, MongoDB, and Redis provide flexible data storage options for different use cases.

      4. **Cloud Infrastructure**: AWS, Google Cloud, and Azure offer scalable hosting solutions with built-in redundancy and performance optimization.

      5. **DevOps Tools**: Docker, Kubernetes, and CI/CD pipelines ensure smooth deployment and maintenance processes.

      **Best Practices for Scalability:**
      - Implement microservices architecture for better maintainability
      - Use caching strategies to improve performance
      - Design database schemas with scalability in mind
      - Implement proper monitoring and logging systems
      - Plan for horizontal scaling from the beginning`,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      author: "CodeBi Team",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      category: "Web Development",
      tags: ["Web Development", "Scalability", "Modern Tech", "Architecture"]
    },
    {
      id: 3,
      title: "SEO Strategies That Actually Work in 2024",
      excerpt: "Uncover the most effective SEO techniques and strategies that will help your website rank higher in search results this year.",
      content: `Search Engine Optimization (SEO) continues to evolve, and staying ahead of the curve is crucial for maintaining and improving search rankings. In 2024, search engines are becoming increasingly sophisticated, focusing on user experience and content quality.

      **Effective SEO Strategies for 2024:**

      1. **Core Web Vitals**: Google's Core Web Vitals are now ranking factors, making page speed and user experience crucial for SEO success.

      2. **Content Quality**: Focus on creating comprehensive, valuable content that answers user queries effectively.

      3. **User Experience**: Ensure your website is mobile-friendly, fast-loading, and easy to navigate.

      4. **Technical SEO**: Implement proper schema markup, optimize meta tags, and ensure clean URL structures.

      5. **Local SEO**: For businesses serving local markets, optimize for local search with proper Google My Business management.

      **Advanced Techniques:**
      - Implement voice search optimization strategies
      - Focus on featured snippets and zero-click searches
      - Use AI-powered content optimization tools
      - Build quality backlinks through relationship building
      - Monitor and adapt to algorithm changes`,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
      author: "CodeBi Team",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "SEO",
      tags: ["SEO", "Search Rankings", "Content Strategy", "Technical SEO"]
    },
    {
      id: 4,
      title: "Automation Workflows: Streamline Your Business Processes",
      excerpt: "Explore how n8n workflows and automation tools can save time, reduce errors, and improve efficiency in your business operations.",
      content: `Business process automation is no longer a luxury but a necessity for companies looking to stay competitive in today's fast-paced market. Automation tools like n8n can transform how businesses operate, reducing manual work and improving efficiency.

      **Key Benefits of Business Automation:**

      1. **Time Savings**: Automate repetitive tasks to free up valuable time for strategic activities.

      2. **Error Reduction**: Minimize human errors through consistent, automated processes.

      3. **Cost Efficiency**: Reduce operational costs by streamlining workflows and eliminating redundant processes.

      4. **Scalability**: Easily scale operations without proportionally increasing staff requirements.

      5. **Data Insights**: Automated processes generate valuable data for business intelligence and decision-making.

      **Popular Automation Use Cases:**
      - Email marketing automation and drip campaigns
      - Customer service ticket routing and responses
      - Data synchronization between different platforms
      - Social media posting and engagement tracking
      - Invoice processing and payment reminders
      - Lead qualification and follow-up sequences

      **Getting Started with n8n:**
      n8n is an open-source workflow automation tool that allows you to connect different services and create complex automation workflows. Start with simple integrations and gradually build more sophisticated automation systems.`,
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      author: "CodeBi Team",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      category: "Automation",
      tags: ["Automation", "n8n", "Workflow", "Efficiency"]
    },
    {
      id: 5,
      title: "The Rise of Progressive Web Apps (PWAs)",
      excerpt: "Discover how Progressive Web Apps are changing the mobile app landscape and why businesses should consider this approach.",
      content: `Progressive Web Apps (PWAs) represent the next evolution in web application development, combining the best features of web and mobile apps. They offer a native app-like experience while maintaining the accessibility and ease of web applications.

      **What Makes PWAs Special:**

      1. **Offline Functionality**: PWAs can work without an internet connection, providing a seamless user experience.

      2. **App-like Experience**: They offer native app features like push notifications, home screen installation, and smooth animations.

      3. **Cross-platform Compatibility**: One PWA works across all devices and platforms, reducing development and maintenance costs.

      4. **Fast Performance**: PWAs load quickly and provide smooth interactions, improving user engagement.

      5. **Easy Updates**: Updates are automatic and don't require user intervention or app store approval.

      **Business Benefits:**
      - Lower development costs compared to native apps
      - Faster time to market
      - Better user engagement and retention
      - Improved conversion rates
      - Easier maintenance and updates

      **Implementation Considerations:**
      When implementing PWAs, focus on performance optimization, offline functionality, and user experience design. Consider using service workers for caching and offline capabilities.`,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      author: "CodeBi Team",
      date: "Nov 20, 2024",
      readTime: "6 min read",
      category: "Web Development",
      tags: ["PWA", "Web Development", "Mobile Apps", "User Experience"]
    },
    {
      id: 6,
      title: "Content Marketing Strategies for B2B Companies",
      excerpt: "Learn effective content marketing strategies specifically designed for B2B companies to generate leads and build authority.",
      content: `Content marketing is particularly crucial for B2B companies, where the sales cycle is longer and decision-making involves multiple stakeholders. A well-executed content marketing strategy can establish thought leadership and generate qualified leads.

      **B2B Content Marketing Best Practices:**

      1. **Educational Content**: Focus on providing valuable, educational content that addresses industry challenges and pain points.

      2. **Thought Leadership**: Position your company as an industry expert through insightful analysis and forward-thinking content.

      3. **Multi-format Approach**: Use various content formats including whitepapers, case studies, webinars, and industry reports.

      4. **Account-based Marketing**: Create personalized content for specific target accounts and decision-makers.

      5. **Lead Nurturing**: Develop content sequences that guide prospects through the buyer's journey.

      **Content Types That Work for B2B:**
      - Industry research and reports
      - Case studies and success stories
      - Expert interviews and podcasts
      - Technical guides and tutorials
      - Webinars and virtual events
      - Infographics and visual content

      **Distribution Channels:**
      Focus on LinkedIn, industry publications, and email marketing for B2B content distribution. Build relationships with industry influencers and consider guest posting opportunities.`,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      author: "CodeBi Team",
      date: "Nov 15, 2024",
      readTime: "7 min read",
      category: "Content Marketing",
      tags: ["B2B Marketing", "Content Strategy", "Lead Generation", "Thought Leadership"]
    }
  ];

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen relative">
      {/* Background decoration for all pages */}
      <div className="page-background-decoration">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-1 pb-10 bg-gradient-to-br from-accent/10 via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Latest <span className="text-accent">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from the world of digital marketing and web development
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-foreground mb-4">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or category filters.
              </p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
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
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          By {post.author}
                        </span>
                        <Link to={`/blog/${post.id}`}>
                          <Button variant="ghost" className="text-accent  p-2 h-auto">
                            Read More
                            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-16">
                <p className="text-lg text-muted-foreground mb-6">
                  Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Spacer to ensure footer is visible */}
      <div className="py-20"></div>

      <Footer />
    </div>
  );
};

export default BlogList;
