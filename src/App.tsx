import React from 'react';
import './App.css';

// Simple Navigation Component
const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            Anshita
          </div>
          <div className="nav-links">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="nav-link"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Simple Hero Section
const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm Anshita
            </h1>
            <h2 className="hero-subtitle">
              MBA Marketing Professional
            </h2>
            <p className="hero-description">
              Passionate about creating strategic marketing solutions and driving business growth through 
              innovative campaigns and data-driven insights.
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Get In Touch
              </button>
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
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Driven by creativity and strategic thinking, I combine analytical skills with 
            innovative marketing approaches.
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-heading">My Journey</h3>
            <div className="about-description">
              <p>
                Currently pursuing my MBA in Marketing, I am passionate about understanding consumer behavior and creating compelling brand stories. My academic journey has equipped me with a strong foundation in market research, digital marketing, and strategic planning.
              </p>
              <p>
                I believe in the power of data-driven decision making combined with creative storytelling to build meaningful connections between brands and their audiences.
              </p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3.8</div>
                <div className="stat-label">GPA Achievement</div>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <h3 className="about-heading">Skills & Expertise</h3>
            
            <div className="skills-list">
              {[
                { name: 'Digital Marketing', level: 90 },
                { name: 'Market Research', level: 85 },
                { name: 'Content Strategy', level: 88 },
                { name: 'Brand Management', level: 82 },
                { name: 'Data Analytics', level: 78 },
                { name: 'Social Media Marketing', level: 92 }
              ].map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
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
      description: "Led a comprehensive rebranding strategy for a local business, resulting in 150% increase in brand awareness through innovative design and strategic positioning.",
      tags: ["Branding", "Strategy", "Analytics"]
    },
    {
      title: "Digital Marketing Dashboard",
      description: "Created an interactive dashboard to track social media performance and ROI across multiple platforms with real-time analytics and insights.",
      tags: ["Digital Marketing", "Analytics", "Dashboard"]
    },
    {
      title: "Consumer Behavior Study",
      description: "Conducted extensive research on millennial purchasing habits, informing company's product development strategy and market positioning.",
      tags: ["Research", "Consumer Insights", "Strategy"]
    },
    {
      title: "Social Media Campaign",
      description: "Designed and executed a viral social media campaign that reached over 1M users and increased engagement by 300% through creative content.",
      tags: ["Social Media", "Content", "Viral Marketing"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my journey in marketing through real-world projects and academic achievements.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
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
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to discuss marketing opportunities, collaborations, or just have a conversation about the industry.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-heading">Get in Touch</h3>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div className="contact-details">
                  <p className="contact-label">Email</p>
                  <p className="contact-value">anshita@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div className="contact-details">
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div className="contact-details">
                  <p className="contact-label">LinkedIn</p>
                  <p className="contact-value">linkedin.com/in/anshita</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Your message here..." rows={5}></textarea>
              </div>
              
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
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
    </div>
  );
};

export default App;
