import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  achievements: string[];
  date: string;
  image: string;
  type: 'case-study' | 'campaign' | 'research' | 'branding';
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "EcoTech Brand Positioning Strategy",
      category: "Brand Strategy",
      description: "Comprehensive brand positioning strategy for a sustainable technology startup targeting millennials and Gen Z consumers.",
      detailedDescription: "Led a team of 4 MBA students to develop a complete brand positioning strategy for EcoTech, a startup focused on sustainable home technology. Conducted primary research with 200+ consumers, analyzed competitor landscape, and created a differentiated brand positioning that resulted in a 30% increase in brand awareness during pilot testing.",
      technologies: ["Market Research", "SPSS", "Survey Design", "Competitive Analysis", "Brand Mapping"],
      achievements: [
        "30% increase in brand awareness during pilot",
        "95% positive feedback from target demographic",
        "Adopted by company as official brand strategy",
        "Featured in university case study database"
      ],
      date: "Fall 2024",
      image: "/api/placeholder/600/400",
      type: "branding"
    },
    {
      id: 2,
      title: "Digital Campaign: #GreenLiving",
      category: "Digital Marketing",
      description: "Multi-platform digital marketing campaign promoting sustainable lifestyle choices among college students.",
      detailedDescription: "Designed and executed a comprehensive digital marketing campaign targeting college students to promote sustainable living practices. The campaign spanned Instagram, TikTok, and LinkedIn, featuring user-generated content, influencer partnerships, and educational resources.",
      technologies: ["Instagram Ads", "TikTok Marketing", "Google Analytics", "Hootsuite", "Canva", "Adobe Premiere"],
      achievements: [
        "2.5M+ total impressions across platforms",
        "45% engagement rate (3x industry average)",
        "15,000+ new followers in 6 weeks",
        "Featured in Marketing Land as case study"
      ],
      date: "Spring 2024",
      image: "/api/placeholder/600/400",
      type: "campaign"
    },
    {
      id: 3,
      title: "Consumer Behavior Research: Gen Z Shopping Patterns",
      category: "Market Research",
      description: "In-depth analysis of Generation Z online shopping behaviors and decision-making factors in post-pandemic era.",
      detailedDescription: "Conducted comprehensive research study analyzing how Gen Z consumers make purchasing decisions in the digital-first economy. Used mixed-methods approach combining surveys, interviews, and behavioral tracking data from 500+ participants.",
      technologies: ["SPSS", "Qualtrics", "Google Analytics", "Heat Mapping", "Statistical Analysis"],
      achievements: [
        "Published in Journal of Consumer Marketing",
        "Presented at 3 academic conferences",
        "Used by 5+ companies to inform strategy",
        "Cited 50+ times in academic literature"
      ],
      date: "Summer 2024",
      image: "/api/placeholder/600/400",
      type: "research"
    },
    {
      id: 4,
      title: "FitLife App Launch Campaign",
      category: "Product Launch",
      description: "360-degree marketing campaign for fitness app launch including influencer partnerships and PR strategy.",
      detailedDescription: "Led the complete marketing strategy for FitLife app launch, coordinating across multiple channels including influencer marketing, PR, social media, and paid advertising. Managed budget of $50K and team of 6 marketing professionals.",
      technologies: ["Influencer Marketing", "PR Strategy", "Facebook Ads", "Google Ads", "Email Marketing"],
      achievements: [
        "100K+ app downloads in first month",
        "50+ media mentions and features",
        "ROI of 300% on paid advertising",
        "4.8/5 app store rating"
      ],
      date: "Fall 2023",
      image: "/api/placeholder/600/400",
      type: "campaign"
    },
    {
      id: 5,
      title: "Local Coffee Shop Rebranding",
      category: "Brand Strategy",
      description: "Complete visual and strategic rebrand for local coffee shop chain looking to compete with national brands.",
      detailedDescription: "Partnered with Brew & Bean Coffee to completely reimagine their brand identity, messaging, and customer experience. Conducted customer interviews, competitor analysis, and market positioning to create a distinctive brand that celebrates local community while competing with national chains.",
      technologies: ["Brand Strategy", "Logo Design", "Customer Research", "Adobe Creative Suite", "Market Analysis"],
      achievements: [
        "40% increase in customer retention",
        "25% increase in average transaction value",
        "Featured in Local Business Journal",
        "Expanded to 3 additional locations"
      ],
      date: "Spring 2023",
      image: "/api/placeholder/600/400",
      type: "branding"
    },
    {
      id: 6,
      title: "B2B Content Marketing Strategy",
      category: "Content Marketing",
      description: "Comprehensive content marketing strategy for SaaS company targeting marketing professionals.",
      detailedDescription: "Developed and executed content marketing strategy for MarketPro SaaS, focusing on thought leadership and lead generation. Created content calendar, managed blog, podcast, and webinar series while measuring impact on sales funnel.",
      technologies: ["Content Strategy", "SEO", "HubSpot", "WordPress", "Google Analytics", "Social Media"],
      achievements: [
        "300% increase in organic traffic",
        "150+ qualified leads per month",
        "5x increase in content engagement",
        "Top 3 ranking for 20+ keywords"
      ],
      date: "Summer 2023",
      image: "/api/placeholder/600/400",
      type: "case-study"
    }
  ];

  const categories = ['all', 'Brand Strategy', 'Digital Marketing', 'Market Research', 'Product Launch', 'Content Marketing'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of marketing campaigns, research studies, and strategic initiatives 
              that demonstrate my passion for creative problem-solving and data-driven results.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-primary-50'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center">
                  <span className="text-gray-600">Project Visual</span>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <EyeIcon className="h-5 w-5 mr-2" />
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
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
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedProject.title}
                  </h2>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                  <ul className="space-y-3">
                    {selectedProject.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center text-gray-600 mb-2">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      <span className="font-medium">Timeline</span>
                    </div>
                    <p className="text-gray-700">{selectedProject.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
