import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown } from 'lucide-react';

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
                <div className="md:w-2/5 relative">
                  <div className="aspect-[4/3] w-full">
                    <img 
                      src={yoga.image} 
                      alt={yoga.name} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
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
                <Dialog>
                  <DialogTrigger asChild>
                    <button 
                      className="w-full text-left flex justify-between items-center"
                    >
                      <h3 className="text-lg font-medium text-gray-900">{yoga.name}</h3>
                      <ChevronDown size={16} className="text-yoga-primary ml-2" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-xl text-yoga-primary font-serif">{yoga.name}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-2">
                      <p className="text-gray-700">{yoga.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
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
    image: "/lovable-uploads/33b074a6-e7ed-4a28-b45c-2c8e7a00ae94.png",
    benefits: "Improved flexibility, stress reduction, better posture",
    focus: "Balance and proper alignment"
  },
  {
    name: "Ashtanga Yoga",
    description: "A dynamic, physically demanding practice with a set sequence of poses performed in a specific order. It synchronizes breath with movement to build strength, flexibility, and stamina.",
    image: "/lovable-uploads/f0384976-29c6-44f8-b895-f90adc7bdb43.png",
    benefits: "Increased strength, improved focus, detoxification",
    focus: "Strength building and endurance"
  },
  {
    name: "Power Yoga",
    description: "A vigorous, fitness-oriented approach derived from Ashtanga that challenges both the body and mind. This style focuses on building endurance, strength, and overall body conditioning through dynamic flows.",
    image: "/lovable-uploads/b78cac0a-288a-45e6-a58e-efd0c2d85589.png",
    benefits: "Strength building, calorie burning, mental fortitude",
    focus: "Muscular development and cardiovascular fitness"
  },
  {
    name: "Vinyasa Yoga",
    description: "A fluid, 'flow' style that links movement and breath in creative, ever-changing sequences. It encourages mindfulness, flexibility, and a balanced, rhythmic practice that adapts to each session.",
    image: "/lovable-uploads/c3959543-1515-4109-8799-80d20050fe07.png",
    benefits: "Cardiovascular health, meditative focus, adaptability",
    focus: "Fluid movement and breath coordination"
  },
  {
    name: "Sivananda Yoga",
    description: "A classical approach integrating twelve basic poses, breathing exercises, relaxation, and meditation. It promotes holistic well-being by harmonizing the body, mind, and spirit through disciplined practice.",
    image: "/lovable-uploads/f27a9710-7e58-4b3a-98a5-e9fab5ded5bd.png",
    benefits: "Holistic wellness, spiritual growth, stress relief",
    focus: "Overall wellness and balanced development"
  },
  {
    name: "Iyengar Yoga",
    description: "Emphasizes precise alignment and the use of props (such as blocks and straps) to support the body in each pose. It develops strength and flexibility while ensuring a safe practice that refines body awareness.",
    image: "/lovable-uploads/110f5166-417b-4610-8fad-4432af890844.png",
    benefits: "Precise alignment, therapeutic applications, injury prevention",
    focus: "Detailed alignment and structural integrity"
  },
  {
    name: "Yin Yang Yoga",
    description: "A slow-paced practice with long-held, passive poses that target deep connective tissues. It fosters relaxation, deep stretching, and a meditative state, balancing more vigorous practices.",
    image: "/lovable-uploads/90268098-0d34-4398-82e0-5e2d85fd20a8.png",
    benefits: "Deep tissue release, improved flexibility, stress reduction",
    focus: "Fascia release and joint mobility"
  },
  {
    name: "Insight Yoga",
    description: "Blends physical postures with mindfulness and meditation to cultivate inner awareness. It encourages a reflective practice that connects the body and mind for personal growth.",
    image: "/lovable-uploads/4f588304-d68a-4106-bd96-9fbbc14e7fcd.png",
    benefits: "Mindfulness, emotional balance, inner awareness",
    focus: "Mind-body connection and self-discovery"
  },
  {
    name: "Chair Yoga",
    description: "Adapts traditional yoga poses to be performed while seated or using a chair for support. It offers a gentle, accessible practice for those with limited mobility or beginners seeking low-impact exercise.",
    image: "/lovable-uploads/2bf356ec-0d3c-48bf-8cd7-0d0be5b7a6f7.png",
    benefits: "Accessibility, joint mobility, gentle stretching",
    focus: "Accessibility and adaptability for all bodies"
  },
  {
    name: "Aerial Yoga",
    description: "Uses a suspended hammock to support and deepen traditional yoga postures in the air. It offers a unique perspective on balance, flexibility, and core strength by reducing the impact of gravity.",
    image: "/lovable-uploads/d281e111-53b7-4c9f-bf5d-50e2b0a9c31e.png",
    benefits: "Spinal decompression, core strength, playful practice",
    focus: "Decompression and core engagement"
  },
  {
    name: "Acro Yoga",
    description: "Combines yoga, acrobatics, and Thai massage in a partner-based practice. It emphasizes trust, collaboration, and physical challenge through dynamic, playful poses.",
    image: "/lovable-uploads/518f4a56-4c32-4540-9eb4-e2b3c9414e32.png",
    benefits: "Trust building, partner connection, playful expression",
    focus: "Cooperation and balance with partners"
  },
  {
    name: "Sun Salutation",
    description: "A flowing sequence of poses traditionally performed at sunrise to greet the day. It energizes the body, improves circulation, and serves as a warm-up to prepare for deeper stretches.",
    image: "/lovable-uploads/14e14272-324a-4244-839d-65aad421e36c.png",
    benefits: "Morning energizing, full-body warm up, breath synchronization",
    focus: "Full-body activation and circulation"
  }
];

const allYogaTypes = [
  {
    name: "Beginners Yoga",
    description: "Ideal for those new to the practice, Beginners Yoga introduces basic poses and proper alignment in a gentle, welcoming setting. It builds a solid foundation, enhancing flexibility, balance, and mindfulness."
  },
  {
    name: "Ananda Yoga",
    description: "Ananda Yoga integrates gentle movements with deep relaxation and meditation for overall well-being. It encourages self-awareness and harmony between body and mind."
  },
  {
    name: "Hatha Yoga",
    description: "Hatha Yoga emphasizes physical postures and breathing techniques to harmonize the body and mind. Its measured pace and focus on alignment make it perfect for cultivating balance and inner calm."
  },
  {
    name: "Ashtanga Yoga",
    description: "Ashtanga Yoga follows a fixed sequence of poses with breath-synchronized, dynamic movements. This vigorous practice builds strength, endurance, and flexibility through its structured flow."
  },
  {
    name: "Power Yoga",
    description: "Power Yoga is a fitness-driven style that energizes the body with strength-focused, dynamic sequences. It provides a challenging workout that boosts physical power and mental focus."
  },
  {
    name: "Vinyasa Yoga",
    description: "Vinyasa Yoga features fluid, continuous movements that connect breath with motion. This dynamic practice enhances flexibility, balance, and concentration through its flowing sequences."
  },
  {
    name: "Satyananda Yoga",
    description: "Satyananda Yoga blends asanas with meditation and relaxation techniques for inner transformation. It emphasizes holistic practices that nurture mental clarity, emotional balance, and physical well-being."
  },
  {
    name: "Pragya Yoga",
    description: "Pragya Yoga combines mindful movement with meditation to deepen self-awareness and inner insight. It encourages a balanced integration of mind, body, and spirit through gentle practice."
  },
  {
    name: "Shivananda Yoga",
    description: "Shivananda Yoga follows a classical approach with a set of traditional asanas, breathing exercises, and meditation. This practice aims to cultivate health, vitality, and inner peace through its well-rounded routine."
  },
  {
    name: "Atmananda Yoga",
    description: "Atmananda Yoga integrates gentle postures and mindful breathing to awaken inner joy and self-realization. It fosters a harmonious connection between body and spirit for overall well-being."
  },
  {
    name: "Iyengar Yoga",
    description: "Iyengar Yoga focuses on precise alignment and uses props to support detailed body awareness in each pose. It is renowned for improving posture and stability while being accessible to all levels."
  },
  {
    name: "Moon Series",
    description: "The Moon Series features slow, graceful movements that emphasize relaxation and introspection. It mirrors the calming qualities of the moon, promoting balance and emotional serenity."
  },
  {
    name: "Sun Salutation",
    description: "Sun Salutation is a dynamic sequence of poses performed in a rhythmic, flowing manner. It energizes the body, improves circulation, and serves as an excellent warm-up for any practice."
  },
  {
    name: "Brick Yoga",
    description: "Brick Yoga incorporates yoga bricks to modify and deepen traditional poses safely. This practice offers additional support and creative variations for exploring new angles in your routine."
  },
  {
    name: "Basket Yoga",
    description: "Basket Yoga uses a basket as a prop to facilitate unique stretches and adjustments in familiar poses. It adds a creative twist that enhances balance, flexibility, and core strength."
  },
  {
    name: "Danda Yoga",
    description: "Danda Yoga employs a simple wooden stick as a prop to guide and support various postures. It enhances alignment and body awareness, making it suitable for both beginners and advanced practitioners."
  },
  {
    name: "Strap Yoga",
    description: "Strap Yoga uses yoga straps to extend reach and deepen stretches in challenging poses. It promotes improved flexibility and alignment by offering extra support and resistance."
  },
  {
    name: "Tibetan Yoga",
    description: "Tibetan Yoga integrates traditional Tibetan techniques with dynamic movements and breathwork. It emphasizes energy flow and mindfulness, drawing on ancient practices to enhance well-being."
  },
  {
    name: "Insight Yoga",
    description: "Insight Yoga combines physical postures with mindfulness meditation for deeper self-exploration. It fosters introspection and awareness, strengthening the connection between body and mind."
  },
  {
    name: "Sculpt Yoga",
    description: "Sculpt Yoga blends yoga poses with strength training and cardio elements. This high-energy practice sculpts the body while improving flexibility, endurance, and overall fitness."
  },
  {
    name: "Wall Yoga",
    description: "Wall Yoga uses a wall as a prop to support and modify traditional postures for enhanced alignment. It offers a fresh perspective on familiar poses while improving balance and stability."
  },
  {
    name: "Hot Yoga",
    description: "Hot Yoga is practiced in a heated environment, which helps to loosen muscles and intensify stretches. The warmth promotes detoxification and deepens the overall practice through increased circulation."
  },
  {
    name: "Core Yoga",
    description: "Core Yoga focuses on strengthening the abdominal and back muscles through targeted asanas. It enhances stability and balance while promoting better posture and overall physical fitness."
  },
  {
    name: "Yin Yang Yoga",
    description: "Yin Yang Yoga merges the stillness of Yin with the dynamic flow of Yang practices. This balanced approach cultivates both deep relaxation and active energy for a comprehensive workout."
  },
  {
    name: "Rope Yoga",
    description: "Rope Yoga incorporates ropes as props to introduce suspension elements into traditional poses. It adds an innovative challenge that boosts strength, balance, and flexibility."
  },
  {
    name: "Aerial Yoga",
    description: "Aerial Yoga uses hammocks or silks suspended from the ceiling to support various postures and inversions. It allows for deeper stretches, spinal decompression, and a playful exploration of movement."
  },
  {
    name: "Ladder Yoga",
    description: "Ladder Yoga introduces a ladder as a prop to challenge balance and extend traditional postures in creative ways. It encourages flexibility and strength while adding a fun, unconventional twist to your practice."
  },
  {
    name: "Chair Yoga",
    description: "Chair Yoga adapts traditional poses for practice while seated or using a chair for support. It offers an accessible and gentle routine, perfect for those with limited mobility or seeking a low-impact workout."
  },
  {
    name: "Mat Pilates",
    description: "Mat Pilates focuses on controlled movements and core strengthening exercises performed on a mat. It emphasizes posture, balance, and overall body conditioning, complementing traditional yoga practices."
  },
  {
    name: "Yoga for Back Bending",
    description: "Yoga for Back Bending centers on opening the chest and extending the spine through deep, expansive poses. It improves flexibility and posture while energizing the back muscles for greater vitality."
  },
  {
    name: "Yoga for Hip Opening",
    description: "Yoga for Hip Opening targets the muscles surrounding the hips to increase flexibility and relieve tension. It promotes improved mobility and balance, easing tightness and fostering lower body relaxation."
  },
  {
    name: "Yoga for Flexibility",
    description: "Yoga for Flexibility focuses on stretching and lengthening muscles to enhance overall range of motion. It relieves tension and supports a balanced practice that builds both strength and suppleness."
  },
  {
    name: "Balancing Yoga",
    description: "Balancing Yoga emphasizes stability through poses that require focused concentration and core strength. It sharpens body awareness and improves equilibrium, making it ideal for developing overall balance."
  },
  {
    name: "Detox Yoga",
    description: "Detox Yoga incorporates poses and breathwork aimed at stimulating the body's natural detoxification processes. It supports digestion, boosts circulation, and encourages the elimination of toxins for renewed energy."
  },
  {
    name: "Animal Flow",
    description: "Animal Flow draws inspiration from natural animal movements to create dynamic, ground-based sequences. It enhances strength, flexibility, and coordination while adding a playful element to your workout."
  },
  {
    name: "Dance Yoga",
    description: "Dance Yoga merges fluid dance movements with traditional yoga postures for a creative, rhythmic practice. It encourages self-expression, cardiovascular fitness, and a joyful connection between body and soul."
  },
  {
    name: "Acro Yoga",
    description: "Acro Yoga combines yoga, acrobatics, and partner work for a dynamic, collaborative practice. It builds trust, strength, and flexibility while creating an engaging and fun challenge."
  },
  {
    name: "Partner Yoga",
    description: "Partner Yoga involves two people performing poses together to build mutual support and balance. It deepens connection, enhances communication, and fosters trust through shared practice."
  },
  {
    name: "Calorie Crusher",
    description: "Calorie Crusher is an energetic, yoga-inspired workout designed to elevate the heart rate and burn calories. It combines dynamic sequences with strength-building moves for an intense, metabolism-boosting routine."
  },
  {
    name: "Deep Stretch",
    description: "Deep Stretch focuses on slowly elongating muscles and releasing tension with extended holds in each pose. It promotes relaxation, enhances flexibility, and serves as an ideal practice for recovery and stress relief."
  }
];

export default YogaTypes;

