import React from 'react';
import './App.css';

// Navigation Component with Tailwind
const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600 font-playfair">
            Anshita Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-primary-600 font-medium capitalize transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-primary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeInLeft">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-playfair">
              Hi, I'm <span className="text-primary-600">Anshita</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
              MBA Marketing Professional
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Passionate about creating strategic marketing solutions and driving business growth through innovative campaigns and data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="animate-fadeInRight">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <span className="text-6xl">👩‍💼</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-400 rounded-full animate-bounce-slow opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-400 rounded-full animate-bounce-slow opacity-70" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by creativity and strategic thinking, I combine analytical skills with innovative marketing approaches.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLeft">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Currently pursuing my MBA in Marketing, I am passionate about understanding consumer behavior and creating compelling brand stories. My academic journey has equipped me with a strong foundation in market research, digital marketing, and strategic planning.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I believe in the power of data-driven decision making combined with creative storytelling to build meaningful connections between brands and their audiences.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-700">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-accent-50 rounded-lg">
                <div className="text-3xl font-bold text-accent-600 mb-2">3.8</div>
                <div className="text-gray-700">GPA Achievement</div>
              </div>
            </div>
          </div>
          
          <div className="animate-fadeInRight">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h3>
              
              {[
                { name: 'Digital Marketing', level: 90 },
                { name: 'Market Research', level: 85 },
                { name: 'Content Strategy', level: 88 },
                { name: 'Brand Management', level: 82 },
                { name: 'Data Analytics', level: 78 },
                { name: 'Social Media Marketing', level: 92 }
              ].map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-primary-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Brand Revitalization Campaign",
      description: "Led a comprehensive rebranding strategy for a local business, resulting in 150% increase in brand awareness.",
      image: "🎯",
      tags: ["Branding", "Strategy", "Analytics"]
    },
    {
      title: "Digital Marketing Dashboard",
      description: "Created an interactive dashboard to track social media performance and ROI across multiple platforms.",
      image: "📊",
      tags: ["Digital Marketing", "Analytics", "Dashboard"]
    },
    {
      title: "Consumer Behavior Study",
      description: "Conducted extensive research on millennial purchasing habits, informing company's product development strategy.",
      image: "🔍",
      tags: ["Research", "Consumer Insights", "Strategy"]
    },
    {
      title: "Social Media Campaign",
      description: "Designed and executed a viral social media campaign that reached over 1M users and increased engagement by 300%.",
      image: "📱",
      tags: ["Social Media", "Content", "Viral Marketing"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my journey in marketing through real-world projects and academic achievements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden animate-fadeInUp">
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss marketing opportunities, collaborations, or just have a conversation about the industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fadeInLeft">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600">📧</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">anshita@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                  <span className="text-accent-600">📱</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600">💼</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <p className="text-gray-600">linkedin.com/in/anshita</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fadeInRight">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 font-playfair">Anshita Portfolio</h3>
          <p className="text-gray-400 mb-6">MBA Marketing Professional | Strategic Thinker | Creative Problem Solver</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {['LinkedIn', 'Twitter', 'Instagram', 'Email'].map((platform) => (
              <button key={platform} className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                <span className="text-sm">🔗</span>
              </button>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">© 2024 Anshita Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
