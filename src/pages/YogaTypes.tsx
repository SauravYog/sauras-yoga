import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';

const YogaTypes = () => {
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
              Discover Our Yoga Types
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Explore over 40 different yoga styles to find the perfect practice for your mind, body, and spirit.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Yoga Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Featured Yoga Styles"
            subtitle="These specialized practices form the core of our teaching philosophy at SauravYog."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredYogaTypes.map((yoga, index) => (
              <motion.div 
                key={yoga.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="md:w-2/5">
                  <img 
                    src={yoga.image} 
                    alt={yoga.name} 
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">{yoga.name}</h3>
                    <p className="text-gray-600 mb-4">{yoga.description}</p>
                  </div>
                  <div className="mt-2">
                    {yoga.benefits && (
                      <div className="text-sm text-gray-700">
                        <span className="font-medium">Benefits:</span> {yoga.benefits}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* All Yoga Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Our Complete Yoga Collection"
            subtitle="We offer a diverse range of yoga styles to accommodate practitioners of all levels and interests."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allYogaTypes.map((yoga, index) => (
              <motion.div 
                key={yoga}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
              >
                <h3 className="text-lg font-medium text-gray-900">{yoga}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Props & Equipment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Props & Equipment"
            subtitle="We incorporate various props to enhance and strengthen your yoga practice."
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-purple-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <div className="text-gray-700 space-y-4">
              <p>
                At SauravYog, we believe in using specialized equipment to enhance your yoga experience. Our variety of props helps practitioners of all levels deepen their practice, improve alignment, and develop strength safely.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-4">We utilize the following props:</h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yoga-primary rounded-full mr-2"></span>
                  <span>Yoga Blocks</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yoga-primary rounded-full mr-2"></span>
                  <span>Straps</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yoga-primary rounded-full mr-2"></span>
                  <span>Wheels</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yoga-primary rounded-full mr-2"></span>
                  <span>Bolsters</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yoga-primary rounded-full mr-2"></span>
                  <span>Blankets</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yoga-primary rounded-full mr-2"></span>
                  <span>Chairs</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yoga-primary rounded-full mr-2"></span>
                  <span>Dumbbells</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yoga-primary rounded-full mr-2"></span>
                  <span>Ropes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yoga-primary rounded-full mr-2"></span>
                  <span>Sticks</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yoga-primary rounded-full mr-2"></span>
                  <span>Hammocks</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yoga-primary rounded-full mr-2"></span>
                  <span>Ladders</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yoga-primary rounded-full mr-2"></span>
                  <span>Walls</span>
                </li>
              </ul>
              
              <p className="mt-4">
                These props are designed to help practitioners enhance and strengthen their practice, making yoga more accessible for everyone regardless of flexibility or experience level.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

// Featured yoga types data with more detailed descriptions
const featuredYogaTypes = [
  {
    name: "Hatha Yoga",
    description: "Traditional yoga focusing on physical postures, breathing, and meditation. It lays the foundation for many modern styles by emphasizing balance, alignment, and mindfulness.",
    image: "public/lovable-uploads/de0bf1a6-8272-4d24-a5ff-e05256787c42.png",
    benefits: "Improved flexibility, stress reduction, better posture"
  },
  {
    name: "Ashtanga Yoga",
    description: "A dynamic, physically demanding practice with a set sequence of poses performed in a specific order. It synchronizes breath with movement to build strength, flexibility, and stamina.",
    image: "public/lovable-uploads/a3b17b67-8fc0-4ef2-9f68-5632c20c981d.png",
    benefits: "Increased strength, improved focus, detoxification"
  },
  {
    name: "Power Yoga",
    description: "A vigorous, fitness-oriented approach derived from Ashtanga that challenges both the body and mind. This style focuses on building endurance, strength, and overall body conditioning through dynamic flows.",
    image: "public/lovable-uploads/49c926fe-cecc-4f4f-a29a-16eea1500bd7.png",
    benefits: "Strength building, calorie burning, mental fortitude"
  },
  {
    name: "Vinyasa Yoga",
    description: "A fluid, 'flow' style that links movement and breath in creative, ever-changing sequences. It encourages mindfulness, flexibility, and a balanced, rhythmic practice that adapts to each session.",
    image: "public/lovable-uploads/9aa8b024-53a2-4e1e-aee0-5a0d62fa46d5.png",
    benefits: "Cardiovascular health, meditative focus, adaptability"
  },
  {
    name: "Sivananda Yoga",
    description: "A classical approach integrating twelve basic poses, breathing exercises, relaxation, and meditation. It promotes holistic well-being by harmonizing the body, mind, and spirit through disciplined practice.",
    image: "public/lovable-uploads/64696d7d-e35e-46df-8625-af33b19fcaea.png",
    benefits: "Holistic wellness, spiritual growth, stress relief"
  },
  {
    name: "Iyengar Yoga",
    description: "Emphasizes precise alignment and the use of props (such as blocks and straps) to support the body in each pose. It develops strength and flexibility while ensuring a safe practice that refines body awareness.",
    image: "public/lovable-uploads/f0e56e39-c15f-46dc-a500-3758ea1b1bd1.png",
    benefits: "Precise alignment, therapeutic applications, injury prevention"
  },
  {
    name: "Yin Yoga",
    description: "A slow-paced practice with long-held, passive poses that target deep connective tissues. It fosters relaxation, deep stretching, and a meditative state, balancing more vigorous practices.",
    image: "public/lovable-uploads/96b6d644-4e51-4ad7-aed1-3285514cb6e2.png",
    benefits: "Deep tissue release, improved flexibility, stress reduction"
  },
  {
    name: "Insight Yoga",
    description: "Blends physical postures with mindfulness and meditation to cultivate inner awareness. It encourages a reflective practice that connects the body and mind for personal growth.",
    image: "public/lovable-uploads/aaf3066b-fa49-433f-b14a-14693bb399f0.png",
    benefits: "Mindfulness, emotional balance, inner awareness"
  },
  {
    name: "Chair Yoga",
    description: "Adapts traditional yoga poses to be performed while seated or using a chair for support. It offers a gentle, accessible practice for those with limited mobility or beginners seeking low-impact exercise.",
    image: "public/lovable-uploads/8f5891a7-dda1-48ef-b157-ba056ee39e07.png",
    benefits: "Accessibility, joint mobility, gentle stretching"
  },
  {
    name: "Aerial Yoga",
    description: "Uses a suspended hammock to support and deepen traditional yoga postures in the air. It offers a unique perspective on balance, flexibility, and core strength by reducing the impact of gravity.",
    image: "public/lovable-uploads/12f103b8-70bf-4c24-9938-6f944809d547.png",
    benefits: "Spinal decompression, core strength, playful practice"
  },
  {
    name: "Acro Yoga",
    description: "Combines yoga, acrobatics, and Thai massage in a partner-based practice. It emphasizes trust, collaboration, and physical challenge through dynamic, playful poses.",
    image: "public/lovable-uploads/bb299f19-eb29-4104-9f40-d8a0dd88d7ba.png",
    benefits: "Trust building, partner connection, playful expression"
  },
  {
    name: "Sun Salutation",
    description: "A flowing sequence of poses traditionally performed at sunrise to greet the day. It energizes the body, improves circulation, and serves as a warm-up to prepare for deeper stretches.",
    image: "public/lovable-uploads/2d257bb8-89da-46bd-b394-60e8bcc5778d.png",
    benefits: "Morning energizing, full-body warm up, breath synchronization"
  }
];

// All yoga types offered
const allYogaTypes = [
  "Beginners Yoga", "Ananda Yoga", "Hatha Yoga", "Ashtanga Yoga", 
  "Power Yoga", "Vinyasa Yoga", "Satyananda Yoga", "Pragya Yoga", 
  "Shivananda Yoga", "Atmananda Yoga", "Iyengar Yoga", "Moon Series",
  "Sun Salutation", "Brick Yoga", "Basket Yoga", "Danda Yoga", 
  "Strap Yoga", "Tibetan Yoga", "Insight Yoga", "Sculpt Yoga", 
  "Wall Yoga", "Hot Yoga", "Core Yoga", "Yin Yoga", 
  "Rope Yoga", "Aerial Yoga", "Ladder Yoga", "Chair Yoga", 
  "Mat Pilates", "Yoga for Back Bending", "Yoga for Hip Opening", 
  "Yoga for Flexibility", "Balancing Yoga", "Detox Yoga", 
  "Animal Flow", "Dance Yoga", "Acro Yoga", "Partner Yoga", 
  "Calorie Crusher", "Deep Stretch"
];

export default YogaTypes;
