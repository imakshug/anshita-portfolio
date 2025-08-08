import React from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon,
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Anshita</h3>
            <p className="text-gray-300 mb-4">
              MBA Candidate passionate about marketing strategy, brand development, 
              and digital innovation. Let's connect and explore opportunities together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/anshita"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="mailto:anshita@email.com"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Me
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="/resume" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Resume
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-3 text-gray-400" />
                <span className="text-gray-300">anshita@email.com</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Anshita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
