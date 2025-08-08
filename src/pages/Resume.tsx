import React from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentArrowDownIcon, 
  AcademicCapIcon, 
  BriefcaseIcon, 
  TrophyIcon,
  StarIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const Resume: React.FC = () => {
  const downloadResume = () => {
    // In a real implementation, this would download the actual PDF
    alert('Resume download would start here. Please add your actual resume PDF to the public folder.');
  };

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      school: "XYZ University",
      location: "City, State",
      date: "2023 - 2025",
      gpa: "3.8/4.0",
      relevant: [
        "Consumer Behavior & Market Research",
        "Brand Management & Strategy",
        "Digital Marketing Analytics",
        "Strategic Marketing Management",
        "Marketing Research Methods"
      ],
      honors: ["Dean's List", "Graduate Marketing Association President"]
    },
    {
      degree: "Bachelor of Business Administration",
      school: "ABC University",
      location: "City, State", 
      date: "2019 - 2023",
      gpa: "3.7/4.0",
      relevant: [
        "Marketing Principles",
        "Consumer Psychology",
        "Business Statistics",
        "International Marketing",
        "Digital Media & Communications"
      ],
      honors: ["Magna Cum Laude", "Marketing Student of the Year 2023", "Phi Beta Kappa"]
    }
  ];

  const experience = [
    {
      title: "Marketing Strategy Intern",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      date: "June 2024 - August 2024",
      achievements: [
        "Led social media campaign resulting in 40% increase in engagement and 15K new followers",
        "Managed influencer partnerships with 3 key industry leaders, generating $50K in earned media value",
        "Conducted competitive analysis for new product launch, informing go-to-market strategy",
        "Collaborated with cross-functional teams to optimize customer acquisition funnel"
      ]
    },
    {
      title: "Research Assistant",
      company: "University Marketing Research Lab",
      location: "City, State",
      date: "September 2023 - Present",
      achievements: [
        "Conducted primary research on consumer behavior patterns using SPSS and R",
        "Co-authored 2 published studies on digital marketing trends with 50+ citations",
        "Managed data collection from 500+ survey respondents across multiple demographics",
        "Presented findings at 3 academic conferences and marketing symposiums"
      ]
    },
    {
      title: "Brand Ambassador",
      company: "StartUp Connect Events",
      location: "City, State",
      date: "January 2023 - August 2023",
      achievements: [
        "Represented brand at 10+ networking events, increasing brand awareness by 25%",
        "Developed social media content strategy, growing Instagram following by 200%",
        "Created and managed email marketing campaigns with 35% open rate",
        "Coordinated with marketing team to execute product launch events"
      ]
    },
    {
      title: "Marketing Coordinator",
      company: "Local Non-Profit Organization",
      location: "City, State",
      date: "May 2022 - December 2022",
      achievements: [
        "Planned and executed fundraising campaigns that exceeded goals by 30%",
        "Managed social media presence across 4 platforms with consistent growth",
        "Coordinated volunteer recruitment drives, increasing participation by 50%",
        "Designed marketing materials using Adobe Creative Suite and Canva"
      ]
    }
  ];

  const skills = {
    "Marketing Strategy": ["Brand Positioning", "Market Research", "Competitive Analysis", "Go-to-Market Strategy"],
    "Digital Marketing": ["Social Media Marketing", "Content Marketing", "Email Marketing", "SEO/SEM", "PPC Advertising"],
    "Analytics & Tools": ["Google Analytics", "HubSpot", "Salesforce", "SPSS", "R", "Tableau", "Facebook Ads Manager"],
    "Creative & Design": ["Adobe Creative Suite", "Canva", "Figma", "Content Creation", "Copywriting"],
    "Research & Analysis": ["Market Research", "Consumer Behavior Analysis", "Statistical Analysis", "Survey Design"]
  };

  const certifications = [
    "Google Analytics Certified",
    "HubSpot Content Marketing Certification",
    "Facebook Blueprint Certification",
    "Google Ads Search Certification",
    "Hootsuite Social Media Marketing Certification"
  ];

  const awards = [
    {
      title: "Marketing Student of the Year",
      organization: "ABC University Marketing Department",
      year: "2023"
    },
    {
      title: "Best Digital Campaign",
      organization: "University Marketing Competition",
      year: "2024"
    },
    {
      title: "Dean's List",
      organization: "XYZ University",
      year: "2023-2024"
    }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Resume</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Download my complete resume or explore my professional journey, 
              education, and achievements below.
            </p>
            
            <button
              onClick={downloadResume}
              className="btn-primary inline-flex items-center"
            >
              <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
              Download Resume (PDF)
            </button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-12"
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Anshita Kumar</h2>
              <p className="text-xl text-primary-600 font-medium">MBA Candidate | Aspiring Marketing Strategist</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center">
                <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">anshita@email.com</span>
              </div>
              <div className="flex items-center justify-center">
                <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center mb-8">
              <AcademicCapIcon className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Education</h2>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-primary-600 font-medium mb-1">{edu.school}</p>
                      <p className="text-gray-600 mb-3">{edu.location} • {edu.date}</p>
                      <p className="text-gray-700 mb-4">GPA: {edu.gpa}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Relevant Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.relevant.map((course, i) => (
                            <span key={i} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Honors & Recognition:</h4>
                      <ul className="space-y-1">
                        {edu.honors.map((honor, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <StarIcon className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                            {honor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center mb-8">
              <BriefcaseIcon className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-primary-600 font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-600">{exp.location} • {exp.date}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
                  <div className="space-y-2">
                    {skillList.map((skill, i) => (
                      <div key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-sm flex items-center"
                  >
                    <div className="w-3 h-3 bg-primary-600 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Awards & Recognition</h2>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <div className="flex items-start">
                      <TrophyIcon className="h-6 w-6 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{award.title}</h3>
                        <p className="text-gray-600">{award.organization}</p>
                        <p className="text-sm text-gray-500">{award.year}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
