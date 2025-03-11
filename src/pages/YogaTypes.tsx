import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

const YogaTypes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeYoga, setActiveYoga] = useState<string | null>(null);

  const toggleYogaInfo = (yogaName: string) => {
    setActiveYoga(activeYoga === yogaName ? null : yogaName);
  };

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
              className="text-lg text-gray-600 mb-4"
            >
              Explore over 40 different yoga styles that can help improve your strength, flexibility, and mobility.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-4 rounded-lg shadow-sm text-gray-700 max-w-2xl mx-auto"
            >
              <p>Our holistic approach integrates various yoga styles into our classes based on your needs and goals. 
              Rather than offering separate classes for each style, we incorporate these diverse techniques 
              into our comprehensive teaching methodology to address specific aspects of physical wellness.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Yoga Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Featured Yoga Styles"
            subtitle="These specialized practices form the core of our teaching methodology at SauravYog."
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
                    {yoga.focus && (
                      <div className="text-sm text-gray-700 mt-1">
                        <span className="font-medium">Focus:</span> {yoga.focus}
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
            title="Our Comprehensive Yoga Collection"
            subtitle="We draw from these diverse traditions to create well-rounded practices that address your specific needs."
          />
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8 text-gray-700">
            <p>Our instructors are trained in multiple yoga disciplines and incorporate elements from these 
            various styles into our class offerings. This integrated approach allows us to target specific 
            aspects of physical wellness — whether you're seeking to build strength, enhance flexibility, 
            or improve mobility — without limiting you to a single yoga tradition.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allYogaTypes.map((yoga, index) => (
              <motion.div 
                key={yoga.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={() => toggleYogaInfo(yoga.name)}
                      className="w-full text-left flex justify-between items-center"
                    >
                      <h3 className="text-lg font-medium text-gray-900">{yoga.name}</h3>
                      <Info size={16} className="text-yoga-primary ml-2" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-xs bg-white p-3 shadow-lg">
                    <p className="text-sm">{yoga.description}</p>
                  </TooltipContent>
                </Tooltip>
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

const featuredYogaTypes = [
  {
    name: "Hatha Yoga",
    description: "Traditional yoga focusing on physical postures, breathing, and meditation. It lays the foundation for many modern styles by emphasizing balance, alignment, and mindfulness.",
    image: "public/lovable-uploads/33b074a6-e7ed-4a28-b45c-2c8e7a00ae94.png",
    benefits: "Improved flexibility, stress reduction, better posture",
    focus: "Balance and proper alignment"
  },
  {
    name: "Ashtanga Yoga",
    description: "A dynamic, physically demanding practice with a set sequence of poses performed in a specific order. It synchronizes breath with movement to build strength, flexibility, and stamina.",
    image: "public/lovable-uploads/f0384976-29c6-44f8-b895-f90adc7bdb43.png",
    benefits: "Increased strength, improved focus, detoxification",
    focus: "Strength building and endurance"
  },
  {
    name: "Power Yoga",
    description: "A vigorous, fitness-oriented approach derived from Ashtanga that challenges both the body and mind. This style focuses on building endurance, strength, and overall body conditioning through dynamic flows.",
    image: "public/lovable-uploads/b78cac0a-288a-45e6-a58e-efd0c2d85589.png",
    benefits: "Strength building, calorie burning, mental fortitude",
    focus: "Muscular development and cardiovascular fitness"
  },
  {
    name: "Vinyasa Yoga",
    description: "A fluid, 'flow' style that links movement and breath in creative, ever-changing sequences. It encourages mindfulness, flexibility, and a balanced, rhythmic practice that adapts to each session.",
    image: "public/lovable-uploads/c3959543-1515-4109-8799-80d20050fe07.png",
    benefits: "Cardiovascular health, meditative focus, adaptability",
    focus: "Fluid movement and breath coordination"
  },
  {
    name: "Sivananda Yoga",
    description: "A classical approach integrating twelve basic poses, breathing exercises, relaxation, and meditation. It promotes holistic well-being by harmonizing the body, mind, and spirit through disciplined practice.",
    image: "public/lovable-uploads/3e67e577-ff68-44b8-ae3d-9219a7915c70.png",
    benefits: "Holistic wellness, spiritual growth, stress relief",
    focus: "Overall wellness and balanced development"
  },
  {
    name: "Iyengar Yoga",
    description: "Emphasizes precise alignment and the use of props (such as blocks and straps) to support the body in each pose. It develops strength and flexibility while ensuring a safe practice that refines body awareness.",
    image: "public/lovable-uploads/110f5166-417b-4610-8fad-4432af890844.png",
    benefits: "Precise alignment, therapeutic applications, injury prevention",
    focus: "Detailed alignment and structural integrity"
  },
  {
    name: "Yin Yang Yoga",
    description: "A slow-paced practice with long-held, passive poses that target deep connective tissues. It fosters relaxation, deep stretching, and a meditative state, balancing more vigorous practices.",
    image: "public/lovable-uploads/90268098-0d34-4398-82e0-5e2d85fd20a8.png",
    benefits: "Deep tissue release, improved flexibility, stress reduction",
    focus: "Fascia release and joint mobility"
  },
  {
    name: "Insight Yoga",
    description: "Blends physical postures with mindfulness and meditation to cultivate inner awareness. It encourages a reflective practice that connects the body and mind for personal growth.",
    image: "public/lovable-uploads/4f588304-d68a-4106-bd96-9fbbc14e7fcd.png",
    benefits: "Mindfulness, emotional balance, inner awareness",
    focus: "Mind-body connection and self-discovery"
  },
  {
    name: "Chair Yoga",
    description: "Adapts traditional yoga poses to be performed while seated or using a chair for support. It offers a gentle, accessible practice for those with limited mobility or beginners seeking low-impact exercise.",
    image: "public/lovable-uploads/2bf356ec-0d3c-48bf-8cd7-0d0be5b7a6f7.png",
    benefits: "Accessibility, joint mobility, gentle stretching",
    focus: "Accessibility and adaptability for all bodies"
  },
  {
    name: "Aerial Yoga",
    description: "Uses a suspended hammock to support and deepen traditional yoga postures in the air. It offers a unique perspective on balance, flexibility, and core strength by reducing the impact of gravity.",
    image: "public/lovable-uploads/d281e111-53b7-4c9f-bf5d-50e2b0a9c31e.png",
    benefits: "Spinal decompression, core strength, playful practice",
    focus: "Decompression and core engagement"
  },
  {
    name: "Acro Yoga",
    description: "Combines yoga, acrobatics, and Thai massage in a partner-based practice. It emphasizes trust, collaboration, and physical challenge through dynamic, playful poses.",
    image: "public/lovable-uploads/518f4a56-4c32-4540-9eb4-e2b3c9414e32.png",
    benefits: "Trust building, partner connection, playful expression",
    focus: "Cooperation and balance with partners"
  },
  {
    name: "Sun Salutation",
    description: "A flowing sequence of poses traditionally performed at sunrise to greet the day. It energizes the body, improves circulation, and serves as a warm-up to prepare for deeper stretches.",
    image: "public/lovable-uploads/14e14272-324a-4244-839d-65aad421e36c.png",
    benefits: "Morning energizing, full-body warm up, breath synchronization",
    focus: "Full-body activation and circulation"
  }
];

const allYogaTypes = [
  {
    name: "Beginners Yoga",
    description: "A gentle introduction to basic yoga postures and breathing techniques, perfect for those new to yoga practice."
  },
  {
    name: "Ananda Yoga",
    description: "Focuses on gentle postures designed to move the energy up to the brain and prepare the body for meditation."
  },
  {
    name: "Hatha Yoga",
    description: "Traditional approach focusing on physical postures (asanas) and breathing control (pranayama) to balance body and mind."
  },
  {
    name: "Ashtanga Yoga",
    description: "A dynamic, physically demanding practice that follows a specific sequence of postures linked by breath."
  },
  {
    name: "Power Yoga",
    description: "A vigorous, fitness-based approach that builds strength, flexibility and stamina through flowing postures."
  },
  {
    name: "Vinyasa Yoga",
    description: "Synchronizes movement with breath in flowing sequences, with smooth transitions between postures."
  },
  {
    name: "Satyananda Yoga",
    description: "Integrates traditional practices like asana, pranayama, and meditation with modern approaches to health and wellbeing."
  },
  {
    name: "Pragya Yoga",
    description: "A mindful approach focusing on developing self-awareness and conscious movement through postures."
  },
  {
    name: "Shivananda Yoga",
    description: "Structured around five principles: proper exercise, proper breathing, proper relaxation, proper diet, and positive thinking."
  },
  {
    name: "Atmananda Yoga",
    description: "Emphasizes alignment and precise movement coordinated with breath awareness."
  },
  {
    name: "Iyengar Yoga",
    description: "Focuses on precise alignment and the use of props to help students achieve proper form."
  },
  {
    name: "Moon Series",
    description: "A calming sequence that honors the cooling, reflective energy of the moon, focusing on gentle, introspective movements."
  },
  {
    name: "Sun Salutation",
    description: "A sequence of postures performed in a flowing manner to create heat and energy in the body."
  },
  {
    name: "Brick Yoga",
    description: "Incorporates yoga blocks (bricks) to support proper alignment and deepen stretches in various postures."
  },
  {
    name: "Basket Yoga",
    description: "Uses basket-like props for support and to create resistance in certain postures, enhancing core stability."
  },
  {
    name: "Danda Yoga",
    description: "Uses a staff (danda) to aid in alignment and provide support in standing and seated postures."
  },
  {
    name: "Strap Yoga",
    description: "Incorporates straps to help achieve proper alignment in postures, especially when flexibility is limited."
  },
  {
    name: "Tibetan Yoga",
    description: "Ancient practices focused on energy channels and chakras, often including 'Five Tibetan Rites'."
  },
  {
    name: "Insight Yoga",
    description: "Combines yoga, meditation, and Chinese meridian theory to address physical, energetic, and mental aspects."
  },
  {
    name: "Sculpt Yoga",
    description: "Combines yoga postures with weight training for increased strength and muscle definition."
  },
  {
    name: "Wall Yoga",
    description: "Uses a wall for support to achieve proper alignment and deepen stretches in various postures."
  },
  {
    name: "Hot Yoga",
    description: "Practiced in a heated room to promote flexibility, detoxification, and cardiovascular challenge."
  },
  {
    name: "Core Yoga",
    description: "Focuses on strengthening the core muscles, including the abdomen, back, and pelvis."
  },
  {
    name: "Yin Yang Yoga",
    description: "Combines the slow-paced Yin style with more active Yang sequences for a balanced practice."
  },
  {
    name: "Rope Yoga",
    description: "Uses wall-mounted ropes to support the body in various postures, enhancing alignment and decreasing strain."
  },
  {
    name: "Aerial Yoga",
    description: "Performs yoga postures while suspended in a hammock, reducing pressure on joints and spine."
  },
  {
    name: "Ladder Yoga",
    description: "Uses a wall-mounted ladder for support and alignment, especially beneficial for inversions and backbends."
  },
  {
    name: "Chair Yoga",
    description: "Adapts traditional yoga poses to be performed seated in or with the support of a chair, accessible for all mobility levels."
  },
  {
    name: "Mat Pilates",
    description: "Floor exercises that emphasize core strength, proper alignment, and breathing control."
  },
  {
    name: "Yoga for Back Bending",
    description: "Focuses on postures that open the chest and stretch the spine backward, improving spinal mobility."
  },
  {
    name: "Yoga for Hip Opening",
    description: "Targets the hip joints and surrounding muscles to release tension and increase range of motion."
  },
  {
    name: "Yoga for Flexibility",
    description: "Emphasizes poses that enhance overall flexibility, with attention to safe alignment and gradual progression."
  },
  {
    name: "Balancing Yoga",
    description: "Focuses on postures that challenge and improve balance, enhancing focus and core stability."
  },
  {
    name: "Detox Yoga",
    description: "Incorporates twists, inversions, and other poses that stimulate circulation and support the body's natural detoxification."
  },
  {
    name: "Animal Flow",
    description: "Ground-based movement combining elements from yoga, gymnastics, and various movement disciplines."
  },
  {
    name: "Dance Yoga",
    description: "Blends yoga poses with dance movements for a fluid, expressive practice that enhances creativity."
  },
  {
    name: "Acro Yoga",
    description: "Partner practice combining yoga, acrobatics, and Thai massage for strength, trust, and playfulness."
  },
  {
    name: "Partner Yoga",
    description: "Performed with a partner who provides support, resistance, or assists in achieving deeper expressions of poses."
  },
  {
    name: "Calorie Crusher",
    description: "High-intensity sequence designed to maximize calorie burn while maintaining yoga principles of breath and mindfulness."
  },
  {
    name: "Deep Stretch",
    description: "Slow-paced practice with longer-held postures to release tension in muscles and connective tissues."
  }
];

export default YogaTypes;
