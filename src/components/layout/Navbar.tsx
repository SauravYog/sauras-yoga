
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <img 
                src="/lovable-uploads/ac05c204-b98c-4555-8de6-6d3c12b41b0c.png" 
                alt="SauravYog Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-serif font-bold text-gray-900 hover:text-yoga-primary transition-colors">
                SauravYog
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/yoga-types" className={`nav-link ${isActive('/yoga-types') ? 'active' : ''}`}>
              Yoga Types
            </Link>
            <Link to="/schedule" className={`nav-link ${isActive('/schedule') ? 'active' : ''}`}>
              Schedule
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden rounded-full p-2 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-yoga-primary bg-purple-50' : 'text-gray-900 hover:bg-gray-100'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/yoga-types" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/yoga-types') ? 'text-yoga-primary bg-purple-50' : 'text-gray-900 hover:bg-gray-100'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Yoga Types
                </Link>
                <Link 
                  to="/schedule" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/schedule') ? 'text-yoga-primary bg-purple-50' : 'text-gray-900 hover:bg-gray-100'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Schedule
                </Link>
                <Link 
                  to="/about" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-yoga-primary bg-purple-50' : 'text-gray-900 hover:bg-gray-100'}`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-yoga-primary bg-purple-50' : 'text-gray-900 hover:bg-gray-100'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
