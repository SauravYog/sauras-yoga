
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
            <div className="text-gray-700 space-y-4">
              <p>
                Kumar Saurav believes in living by one powerful mantra: "Never give up." Guided by this philosophy, he has dedicated his life to the transformative practice of yoga, sharing his passion and wisdom with thousands of students.
              </p>
              <p>
                Saurav holds a Bachelor's Degree in Yogic Science from Patanjali University (2015-2018) and a Master's Degree in Yoga Therapy from Tirupati Central College. He has also completed an extensive 200-hour Yoga Teacher Training Course (TTC) in traditional Ashtanga Yoga from Mysore, the global hub of yoga.
              </p>
              <p>
                With over 9 years of practice and teaching experience, Saurav specializes in both Ashtanga and Hatha yoga, having personally guided more than 5,000 students in Chennai through offline sessions and an additional 10,000 students worldwide through online classes.
              </p>
              <p>
                In addition to teaching, Saurav is also an author. His published work, "108: Yoga Guide," serves as a comprehensive resource for yoga practitioners of all levels. He is proficient in 25 different forms of yoga, including classical styles and innovative practices using various props.
              </p>
              <p>
                Saurav's philosophy for beginners is simple yet profound:
              </p>
              <p className="italic">
                "Practise yoga with discipline and consistency. The journey itself is transformative."
              </p>
              <p>
                His vision is to continuously grow as an advanced yogi, spreading awareness and deepening people's connection with yoga. Whether you're new to yoga or an experienced practitioner, Kumar Saurav welcomes you to experience the powerful harmony of body, mind, and spirit at his studio.
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-medium mb-2">Specializations:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Ashtanga Yoga</li>
                <li>Hatha Yoga</li>
                <li>Yoga Therapy</li>
                <li>25+ Yoga Forms</li>
                <li>Author of "108: Yoga Guide"</li>
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
