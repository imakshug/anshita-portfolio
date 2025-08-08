import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BriefcaseIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Testimonials from '../components/Testimonials';

const About: React.FC = () => {
  const skills = [
    'Market Research & Analytics',
    'Brand Strategy & Development',
    'Digital Marketing',
    'Consumer Behavior Analysis',
    'Campaign Management',
    'Social Media Strategy',
    'Content Marketing',
    'SEO/SEM',
    'Google Analytics',
    'HubSpot',
    'Canva',
    'Adobe Creative Suite'
  ];

  const experiences = [
    {
      title: "Marketing Intern",
      company: "Tech Innovations Inc.",
      period: "Summer 2024",
      description: "Led social media campaign that increased engagement by 40% and managed brand partnerships with 3 key influencers."
    },
    {
      title: "Research Assistant",
      company: "University Marketing Lab",
      period: "2023-2024",
      description: "Conducted consumer behavior research using SPSS and contributed to 2 published studies on digital marketing trends."
    },
    {
      title: "Brand Ambassador",
      company: "StartUp Connect",
      period: "2023",
      description: "Represented the brand at 10+ networking events and helped increase brand awareness by 25% in target demographic."
    }
  ];

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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate marketing professional combining academic excellence with 
              hands-on experience to drive meaningful brand connections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-600 text-lg">Professional Photo</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500 rounded-full opacity-20"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-500 rounded-full opacity-20"></div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Driven by Data, Inspired by Creativity
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Currently pursuing my MBA in Marketing at XYZ University, I'm passionate about 
                  the intersection of data-driven strategy and creative storytelling. My journey 
                  in marketing began with a fascination for consumer psychology and has evolved 
                  into a comprehensive understanding of modern marketing ecosystems.
                </p>
                <p>
                  Through my academic coursework and practical internships, I've developed expertise 
                  in market research, brand strategy, and digital marketing. I believe the best 
                  marketing campaigns are those that genuinely connect with people while driving 
                  measurable business results.
                </p>
                <p>
                  When I'm not analyzing consumer trends or crafting marketing strategies, you'll 
                  find me exploring the latest industry innovations, attending marketing conferences, 
                  or mentoring undergraduate students interested in marketing careers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <AcademicCapIcon className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Education</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Master of Business Administration (MBA)
                  </h3>
                  <p className="text-primary-600 font-medium">Marketing Concentration</p>
                  <p className="text-gray-600">XYZ University • 2023-2025</p>
                  <p className="text-gray-700 mt-2">
                    GPA: 3.8/4.0 • Relevant Coursework: Consumer Behavior, Brand Management, 
                    Digital Marketing Analytics, Strategic Marketing
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Bachelor of Business Administration
                  </h3>
                  <p className="text-gray-600 font-medium">Marketing Major</p>
                  <p className="text-gray-600">ABC University • 2019-2023</p>
                  <p className="text-gray-700 mt-2">
                    Magna Cum Laude • Marketing Student of the Year 2023
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <BriefcaseIcon className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-accent-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-accent-600 font-medium">{exp.company}</p>
                    <p className="text-gray-600">{exp.period}</p>
                    <p className="text-gray-700 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <SparklesIcon className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit of marketing skills developed through coursework, 
              internships, and hands-on projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-gray-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Personal Mission */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">My Mission</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              To bridge the gap between brands and consumers through authentic storytelling, 
              data-driven insights, and innovative marketing strategies that create lasting 
              connections and drive meaningful business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default About;
