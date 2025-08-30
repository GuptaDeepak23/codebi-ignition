import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { blogId } = useParams();

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

  const post = blogPosts.find(p => p.id === parseInt(blogId || "0"));

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
            <Link to="/blogs">
              <Button>View All Blogs</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return <br key={index} />;
      
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">{paragraph.slice(2, -2)}</h3>;
      }
      
      if (paragraph.startsWith('      **')) {
        return <h4 key={index} className="text-lg font-semibold text-foreground mt-4 mb-2">{paragraph.slice(8, -2)}</h4>;
      }
      
      if (paragraph.startsWith('      - ')) {
        return <li key={index} className="ml-6 text-muted-foreground">• {paragraph.slice(6)}</li>;
      }
      
      if (paragraph.startsWith('      ') && paragraph.includes('**')) {
        const parts = paragraph.split('**');
        return (
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {parts.map((part, partIndex) => 
              partIndex % 2 === 1 ? <strong key={partIndex} className="text-foreground">{part}</strong> : part
            )}
          </p>
        );
      }
      
      if (paragraph.startsWith('      ')) {
        return <p key={index} className="text-muted-foreground leading-relaxed mb-4 ml-6">{paragraph.slice(6)}</p>;
      }
      
      return <p key={index} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Background decoration for all pages */}
      <div className="page-background-decoration">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-accent/10 via-background to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <Link to="/blogs" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-2 mb-8">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
            
            <div className="text-foreground">
              {formatContent(post.content)}
            </div>
          </article>
          
          {/* Share and Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Share this article:</span>
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </Button>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link to="/blogs">
                  <Button variant="outline" size="sm">
                    <BookOpen className="w-4 h-4 mr-2" />
                    View All Blogs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to ensure footer is visible */}
      <div className="py-20"></div>

      <Footer />
    </div>
  );
};

export default BlogPost;
