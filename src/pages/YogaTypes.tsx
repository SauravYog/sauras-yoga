
import React from "react";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../components/ui/SectionHeader";

const yogaTypes = [
  {
    id: 1,
    title: "Hatha Yoga",
    image: "/lovable-uploads/110f5166-417b-4610-8fad-4432af890844.png",
    description:
      "A gentle practice that focuses on basic postures and breathing techniques. Perfect for beginners and those looking to build a strong foundation in yoga.",
  },
  {
    id: 2,
    title: "Vinyasa Flow",
    image: "/lovable-uploads/0ce7dc04-b795-4808-978d-bdaa4afca671.png",
    description:
      "A dynamic practice that synchronizes movement with breath. Flowing from one pose to another, it builds strength, flexibility, and mindfulness.",
  },
  {
    id: 3,
    title: "Insight Yoga",
    image: "/lovable-uploads/4f588304-d68a-4106-bd96-9fbbc14e7fcd.png",
    description:
      "A meditative practice that combines Yin yoga with mindfulness meditation. It focuses on deep tissue release and spiritual insight.",
  },
  {
    id: 4,
    title: "Restorative Yoga",
    image: "/lovable-uploads/2d257bb8-89da-46bd-b394-60e8bcc5778d.png",
    description:
      "A peaceful practice using props to support the body in gentle poses. Ideal for stress relief, recovery, and deep relaxation.",
  },
];

const YogaTypes = () => {
  return (
    <>
      <Helmet>
        <title>Yoga Types - Saurav Yog</title>
      </Helmet>
      <div className="container mx-auto py-16">
        <SectionHeader
          title="Explore Yoga Styles"
          subtitle="Find the practice that resonates with your body and spirit"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {yogaTypes.map((yogaType) => (
            <div
              key={yogaType.id}
              className="yoga-card overflow-hidden flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={yogaType.image}
                  alt={yogaType.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3">{yogaType.title}</h3>
                <p className="text-gray-700">{yogaType.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default YogaTypes;
