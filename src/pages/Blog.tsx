import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, TagIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of AI in Marketing: Beyond the Hype",
      excerpt: "Exploring practical applications of artificial intelligence in modern marketing strategies and what it means for marketers in 2025.",
      content: `
        <p>Artificial Intelligence has moved from being a buzzword to a practical tool that's reshaping how we approach marketing. As an MBA student studying marketing strategy, I've been fascinated by the real-world applications of AI that go beyond the typical chatbot implementations.</p>
        
        <h3>Personalization at Scale</h3>
        <p>One of the most compelling uses of AI in marketing is hyper-personalization. Companies like Netflix and Spotify have shown us what's possible when you combine user data with machine learning algorithms. But what does this mean for smaller businesses and emerging marketers?</p>
        
        <p>In my recent research project, I analyzed how mid-size e-commerce companies are implementing AI-driven personalization. The results were surprising: companies that invested in AI personalization saw an average 25% increase in conversion rates within six months.</p>
        
        <h3>Predictive Analytics for Campaign Optimization</h3>
        <p>AI's ability to predict customer behavior is perhaps its most valuable contribution to marketing. By analyzing historical data, AI can forecast which customers are likely to churn, which products will trend next quarter, and even optimal timing for marketing campaigns.</p>
        
        <p>During my internship at Tech Innovations Inc., I worked on implementing predictive models that helped reduce customer acquisition costs by 30%. The key wasn't just having the technology, but understanding how to interpret and act on the insights.</p>
        
        <h3>The Human Element Remains Crucial</h3>
        <p>Despite all these technological advances, the most successful AI implementations I've observed maintain a strong human element. AI excels at processing data and identifying patterns, but humans excel at understanding context, emotion, and cultural nuances.</p>
        
        <p>As we move forward, the most successful marketers will be those who can effectively collaborate with AI tools while maintaining their creative and strategic thinking capabilities.</p>
      `,
      date: "March 15, 2025",
      readTime: "6 min read",
      category: "AI & Technology",
      tags: ["AI", "Marketing Strategy", "Personalization", "Future Trends"],
      featured: true
    },
    {
      id: 2,
      title: "Building Authentic Brand Communities in the Digital Age",
      excerpt: "How modern brands can create genuine connections with their audiences beyond traditional social media engagement.",
      content: `
        <p>In today's saturated digital landscape, building authentic brand communities has become more challenging—and more important—than ever. As consumers become increasingly skeptical of traditional advertising, brands must find new ways to create genuine connections.</p>
        
        <h3>The Community-First Approach</h3>
        <p>The most successful brand communities I've studied share one common trait: they put community needs before brand promotion. Take Patagonia's environmental activism or Glossier's beauty community—these brands have built movements, not just customer bases.</p>
        
        <h3>Lessons from My Research</h3>
        <p>In my recent study of 50 successful brand communities, I identified three key factors that differentiate authentic communities from marketing gimmicks:</p>
        
        <ul>
          <li><strong>Shared Values:</strong> Communities thrive when members share core beliefs with the brand</li>
          <li><strong>User-Generated Purpose:</strong> The best communities allow members to drive conversations and content</li>
          <li><strong>Consistent Engagement:</strong> Brands must be present and responsive, not just promotional</li>
        </ul>
        
        <p>The implications for emerging marketers are clear: focus on building relationships first, and sales will follow naturally.</p>
      `,
      date: "March 8, 2025",
      readTime: "4 min read",
      category: "Brand Strategy",
      tags: ["Community Building", "Brand Strategy", "Digital Marketing", "Engagement"],
      featured: false
    },
    {
      id: 3,
      title: "Gen Z's Shopping Habits: What My Research Revealed",
      excerpt: "Insights from my comprehensive study on how Generation Z makes purchasing decisions in the post-pandemic era.",
      content: `
        <p>As part of my MBA thesis research, I conducted an in-depth study of Generation Z shopping behaviors, surveying over 500 participants and conducting 50 in-depth interviews. The findings challenge many assumptions about this demographic.</p>
        
        <h3>Key Findings</h3>
        <p>Contrary to popular belief, Gen Z consumers aren't just impulse buyers driven by social media. My research revealed three distinct shopping personas within this generation:</p>
        
        <ul>
          <li><strong>The Conscious Consumer (40%):</strong> Values sustainability and ethical practices above all</li>
          <li><strong>The Value Optimizer (35%):</strong> Seeks the best deal through extensive research</li>
          <li><strong>The Experience Seeker (25%):</strong> Prioritizes unique experiences and exclusivity</li>
        </ul>
        
        <h3>Implications for Marketers</h3>
        <p>These insights have significant implications for how brands should approach Gen Z marketing. One-size-fits-all strategies are particularly ineffective with this generation.</p>
        
        <p>The most successful brands in my study were those that provided multiple value propositions and allowed consumers to choose their own journey—whether that's through sustainable options, competitive pricing, or exclusive experiences.</p>
      `,
      date: "February 28, 2025",
      readTime: "5 min read",
      category: "Market Research",
      tags: ["Gen Z", "Consumer Behavior", "Market Research", "Shopping Habits"],
      featured: true
    },
    {
      id: 4,
      title: "The Rise of Micro-Influencers: Quality Over Quantity",
      excerpt: "Why brands are shifting focus from mega-influencers to micro-influencers and how to build effective partnerships.",
      content: `
        <p>The influencer marketing landscape has evolved dramatically over the past few years. During my internship managing influencer partnerships, I discovered why micro-influencers (1K-100K followers) are becoming the preferred choice for many brands.</p>
        
        <h3>The Numbers Don't Lie</h3>
        <p>Our campaign analysis showed that micro-influencers consistently outperformed mega-influencers in key metrics:</p>
        
        <ul>
          <li>Engagement rates: 3.8% vs 1.2% for mega-influencers</li>
          <li>Cost per engagement: 60% lower</li>
          <li>Conversion rates: 2.3x higher</li>
        </ul>
        
        <h3>Building Authentic Partnerships</h3>
        <p>The key to successful micro-influencer campaigns isn't just finding the right people—it's building genuine partnerships. The most effective collaborations I managed were those where influencers had creative freedom and genuine enthusiasm for the brand.</p>
        
        <p>For emerging marketers, this represents a significant opportunity to build cost-effective campaigns with measurable results.</p>
      `,
      date: "February 20, 2025",
      readTime: "4 min read",
      category: "Influencer Marketing",
      tags: ["Influencer Marketing", "Social Media", "Campaign Strategy", "ROI"],
      featured: false
    },
    {
      id: 5,
      title: "Data Privacy and Marketing: Navigating the New Landscape",
      excerpt: "How marketers can adapt to increasing privacy regulations while still delivering personalized experiences.",
      content: `
        <p>With iOS 14.5, GDPR, and other privacy initiatives changing the marketing landscape, many marketers are struggling to adapt. In my recent coursework on marketing analytics, I explored how brands can maintain effective marketing while respecting user privacy.</p>
        
        <h3>The First-Party Data Advantage</h3>
        <p>The brands that are thriving in this new environment are those that have invested in first-party data collection. This isn't just about email addresses—it's about creating value exchanges that encourage users to share information willingly.</p>
        
        <h3>Practical Strategies</h3>
        <p>Based on case studies from my marketing analytics course, here are three strategies that are working:</p>
        
        <ul>
          <li><strong>Content Gating:</strong> Offering valuable content in exchange for information</li>
          <li><strong>Loyalty Programs:</strong> Creating ongoing relationships that provide data naturally</li>
          <li><strong>Interactive Experiences:</strong> Quizzes, polls, and tools that provide value while collecting insights</li>
        </ul>
        
        <p>The future of marketing isn't about collecting more data—it's about using data more intelligently and ethically.</p>
      `,
      date: "February 12, 2025",
      readTime: "5 min read",
      category: "Data & Analytics",
      tags: ["Data Privacy", "First-Party Data", "Marketing Analytics", "GDPR"],
      featured: false
    }
  ];

  const categories = ['all', 'AI & Technology', 'Brand Strategy', 'Market Research', 'Influencer Marketing', 'Data & Analytics'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Marketing Insights</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exploring the latest trends, sharing research findings, and discussing 
              the future of marketing through the lens of an MBA student's journey.
            </p>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Posts</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors duration-200">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 inline-flex items-center"
                      >
                        Read More
                        <ArrowRightIcon className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-50'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-primary-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs flex items-center"
                      >
                        <TagIcon className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                      {selectedPost.category}
                    </span>
                    {selectedPost.featured && (
                      <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {selectedPost.date}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {selectedPost.readTime}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl ml-4"
                >
                  ×
                </button>
              </div>

              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center"
                    >
                      <TagIcon className="h-4 w-4 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Blog;
