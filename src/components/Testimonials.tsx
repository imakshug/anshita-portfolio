import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Dr. Sarah Martinez",
      role: "Marketing Professor",
      company: "XYZ University",
      content: "Anshita consistently demonstrates exceptional analytical thinking and creative problem-solving in her coursework. Her research on Gen Z consumer behavior was particularly insightful and well-executed.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Tech Innovations Inc.",
      content: "During her internship, Anshita showed remarkable initiative and delivered results that exceeded our expectations. Her social media campaign was one of our most successful initiatives this year.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "MBA Classmate",
      company: "XYZ University",
      content: "Working with Anshita on our brand strategy project was incredibly rewarding. She brings both strategic thinking and creative execution to every challenge. Her collaborative spirit makes her an ideal team member.",
      rating: 5
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Senior Marketing Manager",
      company: "StartUp Connect",
      content: "Anshita's work as our brand ambassador was outstanding. She truly understood our brand values and communicated them authentically to our target audience. Her enthusiasm is contagious.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Others Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feedback from professors, mentors, and colleagues who have worked with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
