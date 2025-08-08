import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/resume' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    width: '100%',
    zIndex: 50,
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    boxShadow: scrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const navContentStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0'
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    textDecoration: 'none'
  };

  const desktopNavStyle: React.CSSProperties = {
    display: 'none',
    gap: '2rem'
  };

  const mobileMenuStyle: React.CSSProperties = {
    display: isOpen ? 'block' : 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    padding: '0.5rem'
  };

  // Media query for desktop
  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
    desktopNavStyle.display = 'flex';
  }

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={navContentStyle}>
          {/* Logo */}
          <Link to="/" style={logoStyle}>
            Anshita
          </Link>

          {/* Desktop Navigation */}
          <div style={desktopNavStyle} className="desktop-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  color: location.pathname === item.href ? '#2563eb' : '#374151',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#2563eb'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = location.pathname === item.href ? '#2563eb' : '#374151'}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                color: '#374151',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              {isOpen ? (
                <XMarkIcon style={{ height: '1.5rem', width: '1.5rem' }} />
              ) : (
                <Bars3Icon style={{ height: '1.5rem', width: '1.5rem' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div style={mobileMenuStyle}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none',
                color: location.pathname === item.href ? '#2563eb' : '#374151',
                backgroundColor: location.pathname === item.href ? '#eff6ff' : 'transparent',
                borderRadius: '0.25rem',
                transition: 'all 0.2s ease'
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      
      <style>{`
        .desktop-nav {
          display: none;
        }
        .mobile-menu-button {
          display: block;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-button {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
