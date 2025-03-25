
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4">SauravYog</h3>
            <p className="text-sm text-gray-600 mb-4">
              Discover the perfect balance of mind, body, and spirit through our diverse yoga practices tailored to all experience levels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-yoga-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-yoga-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-yoga-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-yoga-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/yoga-types" className="text-sm text-gray-600 hover:text-yoga-primary transition-colors">Yoga Types</Link>
              </li>
              <li>
                <Link to="/schedule" className="text-sm text-gray-600 hover:text-yoga-primary transition-colors">Class Schedule</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-yoga-primary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-yoga-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4">Class Timings</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Monday - Saturday</li>
              <li>Morning: 6:15 AM - 11:00 AM</li>
              <li>Evening: 4:00 PM - 7:30 PM</li>
              <li>Women's Only Class: 10:00 AM - 11:00 AM</li>
              <li>Private Sessions: 11:00 AM - 4:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-yoga-primary flex-shrink-0 mt-1" />
                <a href="mailto:sauravyogchennai@gmail.com" className="text-sm text-gray-600 hover:text-yoga-primary transition-colors">
                  sauravyogchennai@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-yoga-primary flex-shrink-0 mt-1" />
                <a href="tel:+919444884326" className="text-sm text-gray-600 hover:text-yoga-primary transition-colors">
                  +91 94448 84326
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-yoga-primary flex-shrink-0 mt-1" />
                <a 
                  href="https://maps.google.com/?q=13.085420,80.215347" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-600 hover:text-yoga-primary transition-colors"
                >
                  Old No. W Block 97 New No. W Block 2, First floor, 3rd Main Road, Anna Nagar. CHENNAI 600 040. Near- tower club
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} SauravYog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
