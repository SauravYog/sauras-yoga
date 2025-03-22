
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <SectionHeader 
          title="About Our Studio" 
          subtitle="Learn more about SauravYog and our founder"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="/lovable-uploads/8f5891a7-dda1-48ef-b157-ba056ee39e07.png" 
              alt="Kumar Saurav - Yoga Instructor" 
              className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Meet Kumar Saurav</h3>
            <p className="text-gray-700 mb-4">
              Kumar Saurav lives by a mantra "Never give up" in his life. Saurav completed his B.A. in yogic science from Patanjali University and has been practising yoga for 9 years.
            </p>
            <p className="text-gray-700 mb-4">
              His expertise lies in Ashtanga and Hatha yoga. He has taught more than 500 members and aspires to become an advanced level yogi. His advice to beginners is to practise yoga with discipline and be consistent.
            </p>
            <p className="text-gray-700 mb-4">
              Saurav is the perfect coach for you if your goals are weight loss and strength building. Apart from individual specialities, he is proficient in 25 forms of yoga and has completed a detailed 200-hour practical training from DIVA that includes the classical styles of yoga, yoga with different props, and many more.
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-medium mb-2">Specializations:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Ashtanga Yoga</li>
                <li>Hatha Yoga</li>
                <li>Weight Loss Programs</li>
                <li>Strength Building</li>
                <li>25+ Yoga Forms</li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 bg-purple-50 p-8 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Our Studio Philosophy</h3>
          <p className="text-gray-700 text-center max-w-4xl mx-auto">
            At SauravYog, we believe that yoga is for everyone. Our mission is to create a welcoming, inclusive environment where students of all levels can explore, grow, and transform through the practice of yoga. We use a variety of props like dumbbells, wheels, sticks, bricks, and straps to enhance and strengthen your practice, making yoga accessible and beneficial for practitioners at any stage of their journey.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default About;
