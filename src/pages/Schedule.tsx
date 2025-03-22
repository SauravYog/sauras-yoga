
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Schedule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
            >
              Class Schedule
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Find the perfect time for your yoga journey with our flexible class schedule.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Weekly Schedule"
            subtitle="Join us Monday through Saturday for a variety of yoga classes designed to accommodate all skill levels."
          />
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">Morning Classes</h3>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {morningClasses.map((classItem) => (
                      <div 
                        key={classItem.time} 
                        className="bg-gray-50 rounded-lg p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-yoga-primary font-medium">{classItem.time}</span>
                          {classItem.womenOnly && (
                            <span className="bg-purple-100 text-yoga-primary text-xs px-2 py-1 rounded-full">
                              Women Only
                            </span>
                          )}
                        </div>
                        <h4 className="text-gray-900 font-medium mt-2">General Yoga Class</h4>
                        <p className="text-gray-600 text-sm mt-1">All levels welcome</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">Evening Classes</h3>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {eveningClasses.map((classItem) => (
                      <div 
                        key={classItem.time} 
                        className="bg-gray-50 rounded-lg p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-yoga-primary font-medium">{classItem.time}</span>
                        </div>
                        <h4 className="text-gray-900 font-medium mt-2">General Yoga Class</h4>
                        <p className="text-gray-600 text-sm mt-1">All levels welcome</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              All classes are taught by Kumar Saurav and are offered in various yoga styles.
            </p>
            <p className="text-gray-600">
              Please arrive 10-15 minutes before class starts to set up your space.
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Pricing"
            subtitle="Flexible pricing options to suit your yoga journey."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6 border-b">
                <h3 className="text-xl font-medium text-gray-900 mb-2">1 Month</h3>
                <div className="text-3xl font-bold text-yoga-primary">₹5,000</div>
                <p className="text-gray-600 text-sm mt-2">Perfect for beginners</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-yoga-primary mt-1 mr-2" />
                    <span className="text-gray-700">Unlimited classes for 1 month</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-yoga-primary mt-1 mr-2" />
                    <span className="text-gray-700">Access to all equipment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-yoga-primary mt-1 mr-2" />
                    <span className="text-gray-700">Any class, any time</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6 border-b">
                <h3 className="text-xl font-medium text-gray-900 mb-2">3 Months</h3>
                <div className="text-3xl font-bold text-yoga-primary">₹12,000</div>
                <p className="text-gray-600 text-sm mt-2">For regular practitioners</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-yoga-primary mt-1 mr-2" />
                    <span className="text-gray-700">Unlimited classes for 3 months</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-yoga-primary mt-1 mr-2" />
                    <span className="text-gray-700">Access to all equipment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-yoga-primary mt-1 mr-2" />
                    <span className="text-gray-700">Special workshops included</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6 border-b">
                <h3 className="text-xl font-medium text-gray-900 mb-2">6 Months</h3>
                <div className="text-3xl font-bold text-yoga-primary">₹18,000</div>
                <p className="text-gray-600 text-sm mt-2">For dedicated yogis</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-yoga-primary mt-1 mr-2" />
                    <span className="text-gray-700">Unlimited classes for 6 months</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-yoga-primary mt-1 mr-2" />
                    <span className="text-gray-700">Access to all equipment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-yoga-primary mt-1 mr-2" />
                    <span className="text-gray-700">Premium workshops included</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform md:scale-105 relative z-10"
            >
              <div className="absolute top-0 right-0 bg-yoga-primary text-white px-3 py-1 text-sm font-medium">
                Best Value
              </div>
              <div className="p-6 border-b bg-purple-50">
                <h3 className="text-xl font-medium text-gray-900 mb-2">12 Months</h3>
                <div className="text-3xl font-bold text-yoga-primary">₹28,000</div>
                <p className="text-gray-600 text-sm mt-2">For serious enthusiasts</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-yoga-primary mt-1 mr-2" />
                    <span className="text-gray-700">Unlimited classes for 12 months</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-yoga-primary mt-1 mr-2" />
                    <span className="text-gray-700">All equipment included</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-yoga-primary mt-1 mr-2" />
                    <span className="text-gray-700">All special workshops included</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-yoga-primary mt-1 mr-2" />
                    <span className="text-gray-700">Personalized practice plan</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our classes and schedules."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </Layout>
  );
};

// Class schedule data
const morningClasses = [
  { time: "6:15 - 7:15 AM" },
  { time: "7:30 - 8:30 AM" },
  { time: "8:45 - 9:45 AM" },
  { time: "10:00 - 11:00 AM", womenOnly: true }
];

const eveningClasses = [
  { time: "4:00 - 5:00 PM" },
  { time: "5:15 - 6:15 PM" },
  { time: "6:30 - 7:30 PM" },
  { time: "8:45 - 9:45 PM" }
];

// FAQ data
const faqs = [
  {
    question: "What should I bring to class?",
    answer: "Please bring comfortable clothes, a water bottle, and your own mat if you have one. If not, mats are available for rent."
  },
  {
    question: "How early should I arrive before class?",
    answer: "We recommend arriving 10-15 minutes before class to set up your space and settle in."
  },
  {
    question: "Are classes suitable for beginners?",
    answer: "Yes, all our classes are open to beginners. Our instructors provide modifications for all levels."
  },
  {
    question: "Do I need to register in advance?",
    answer: "No, you don't need to book a slot. You can come to any class during our operating hours."
  },
  {
    question: "What is the women-only class?",
    answer: "Our 10:00 AM class is reserved for women only, providing a comfortable space for female practitioners."
  },
  {
    question: "Can I try a class before signing up?",
    answer: "Yes, we offer trial classes for new students. Please contact us to schedule your first visit."
  }
];

export default Schedule;
