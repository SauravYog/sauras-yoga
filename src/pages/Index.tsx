
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { ChevronRight, Sun, Moon, Heart, Wind, Flower } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/lovable-uploads/de1dd168-2250-41c1-bccb-75a8b1d90567.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)"
          }}
        ></div>
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="space-y-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-3 py-1 bg-purple-100 text-yoga-primary rounded-full text-sm font-medium mb-4">
                  Welcome to SauravYog
                </span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-15">
                  <img 
                    src="/lovable-uploads/f9b326cc-2d83-4a3d-8fef-03442cdcaa7f.png" 
                    alt="Yoga meditation symbol" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Discover Your Inner Peace Through <span className="text-yoga-primary">Yoga</span>
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-200 max-w-xl mx-auto"
              >
                Join us at SauravYog studio, where we offer over 40 different styles of yoga practices to help you find balance, strength, and tranquility.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  to="/schedule" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-yoga-primary text-white rounded-md font-medium transition-colors hover:bg-purple-700 shadow-md hover:shadow-lg"
                >
                  View Schedule
                  <ChevronRight size={18} className="ml-1" />
                </Link>
                <Link 
                  to="/yoga-types" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-yoga-primary border border-yoga-primary rounded-md font-medium transition-colors hover:bg-purple-50"
                >
                  Explore Yoga Types
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Yoga Types */}
      <section className="py-20 bg-white w-full">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Featured Yoga Types"
            subtitle="Explore some of our most popular yoga practices that bring balance to mind, body, and spirit."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredYogaTypes.map((yoga, index) => (
              <motion.div
                key={yoga.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="yoga-card overflow-hidden group"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={yoga.image} 
                    alt={yoga.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <yoga.icon className="mr-2 text-yoga-primary" size={18} />
                    <h3 className="font-serif font-medium text-xl text-gray-900">{yoga.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{yoga.description}</p>
                  <Link 
                    to="/yoga-types" 
                    className="inline-flex items-center text-yoga-primary font-medium hover:underline"
                  >
                    Learn more
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/yoga-types" 
              className="inline-flex items-center justify-center px-6 py-3 bg-yoga-primary text-white rounded-md font-medium transition-colors hover:bg-purple-700 shadow-md hover:shadow-lg"
            >
              View All Yoga Types
            </Link>
          </div>
        </div>
      </section>
      
      {/* Schedule Section */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Class Schedule"
            subtitle="Join us for daily yoga sessions designed to fit your busy schedule."
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6 md:p-8 overflow-hidden"
          >
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Class Hours</h3>
              <p className="text-gray-600">Monday to Saturday</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-yoga-primary font-medium mb-3">Morning Sessions</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-800">6:15 - 7:15 AM</span>
                    <span className="text-gray-600 text-sm">All Levels</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-800">7:30 - 8:30 AM</span>
                    <span className="text-gray-600 text-sm">All Levels</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-800">8:45 - 9:45 AM</span>
                    <span className="text-gray-600 text-sm">All Levels</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-800">10:00 - 11:00 AM</span>
                    <span className="text-gray-600 text-sm bg-purple-100 px-2 py-0.5 rounded-full text-xs">Women Only</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-yoga-primary font-medium mb-3">Evening Sessions</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-800">4:00 - 5:00 PM</span>
                    <span className="text-gray-600 text-sm">All Levels</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-800">5:15 - 6:15 PM</span>
                    <span className="text-gray-600 text-sm">All Levels</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-800">6:30 - 7:30 PM</span>
                    <span className="text-gray-600 text-sm">All Levels</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
              <h4 className="text-yoga-primary font-medium mb-2">Private & Therapy Classes</h4>
              <p className="text-gray-700 text-sm">11:00 AM - 4:00 PM • ₹1,500 per session • Booking required</p>
              <p className="text-gray-600 text-xs mt-1">For back pain, joint pain, pre/post natal, and more</p>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                to="/schedule" 
                className="inline-flex items-center text-yoga-primary font-medium hover:underline"
              >
                View Full Schedule
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* About Instructor */}
      <section className="py-20 bg-white w-full">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-yoga-primary rounded-lg"></div>
              <img 
                src="/lovable-uploads/8f5891a7-dda1-48ef-b157-ba056ee39e07.png" 
                alt="Kumar Saurav - Yoga Instructor" 
                className="w-full rounded-lg shadow-lg relative z-10"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block px-3 py-1 bg-purple-100 text-yoga-primary rounded-full text-sm font-medium">
                Meet the Founder
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">Kumar Saurav</h2>
              
              <div className="text-gray-600 space-y-4">
                <p>
                  Kumar Saurav lives by a mantra "Never give up" in his life. Saurav completed his B.A. in yogic science from Patanjali University and has been practising yoga for 9 years.
                </p>
                <p>
                  His expertise lies in Ashtanga and Hatha yoga. He has taught more than 500 members and aspires to become an advanced level yogi. His advice to beginners is to practise yoga with discipline and be consistent.
                </p>
                <p>
                  Apart from individual specialities, Saurav is proficient in 25 forms of yoga and has completed a detailed 200-hour practical training from DIVA that includes the classical styles of yoga, yoga with different props, and many more.
                </p>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-6 py-3 bg-yoga-primary text-white rounded-md font-medium transition-colors hover:bg-purple-700"
              >
                Learn More About Saurav
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-purple-50 w-full">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">Ready to Begin Your Yoga Journey?</h2>
            
            <p className="text-gray-600">
              Join us at SauravYog studio and discover the transformative power of yoga for your mind, body, and spirit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-yoga-primary text-white rounded-md font-medium transition-colors hover:bg-purple-700 shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
              <Link 
                to="/schedule" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-yoga-primary border border-yoga-primary rounded-md font-medium transition-colors hover:bg-purple-50"
              >
                View Schedule
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

// Featured yoga types data
const featuredYogaTypes = [
  {
    title: "Hatha Yoga",
    description: "Traditional yoga focusing on physical postures, breathing, and meditation for balanced mind and body.",
    image: "/lovable-uploads/33b074a6-e7ed-4a28-b45c-2c8e7a00ae94.png",
    icon: Sun
  },
  {
    title: "Ashtanga Yoga",
    description: "A dynamic, physically demanding practice with a set sequence of poses performed in a specific order.",
    image: "/lovable-uploads/f0384976-29c6-44f8-b895-f90adc7bdb43.png",
    icon: Wind
  },
  {
    title: "Vinyasa Yoga",
    description: "A fluid, 'flow' style that links movement and breath in creative, ever-changing sequences.",
    image: "/lovable-uploads/c3959543-1515-4109-8799-80d20050fe07.png",
    icon: Heart
  },
  {
    title: "Yin Yoga",
    description: "A slow-paced practice with long-held, passive poses that target deep connective tissues.",
    image: "/lovable-uploads/90268098-0d34-4398-82e0-5e2d85fd20a8.png",
    icon: Moon
  },
  {
    title: "Sun Salutation",
    description: "A flowing sequence of poses traditionally performed at sunrise to greet the day and energize the body.",
    image: "/lovable-uploads/14e14272-324a-4244-839d-65aad421e36c.png",
    icon: Flower
  },
  {
    title: "Chair Yoga",
    description: "Adapts traditional yoga poses to be performed while seated or using a chair for support.",
    image: "/lovable-uploads/2bf356ec-0d3c-48bf-8cd7-0d0be5b7a6f7.png",
    icon: Flower
  }
];

export default Index;
