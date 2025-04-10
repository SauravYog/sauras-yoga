
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <SectionHeader 
          title="Contact Us" 
          subtitle="Get in touch with SauravYog for any questions or to schedule a session"
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-purple-600 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:sauravyogchennai@gmail.com" className="text-gray-700 hover:text-purple-600 transition-colors">
                    sauravyogchennai@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-purple-600 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a href="tel:+919444884326" className="text-gray-700 hover:text-purple-600 transition-colors">
                    +91 94448 84326
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-purple-600 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium">Studio Address</h4>
                  <a 
                    href="https://maps.google.com/?q=13.085420,80.215347" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <address className="not-italic">
                      Old No. W Block 97 New No. W Block 2,<br />
                      First floor, 3rd Main Road,<br />
                      Anna Nagar. CHENNAI 600 040.<br />
                      Near- tower club
                    </address>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Studio Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Saturday:</span>
                  <span>6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
