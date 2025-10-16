"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";

const processSteps = [
  {
    step: 1,
    title: "Beratung",
    description: "Wir beginnen mit einer ausführlichen Beratung, um Ihre individuellen Bedürfnisse zu verstehen.",
  },
  {
    step: 2,
    title: "Vorbereitung",
    description: "Ihre Haut wird sanft gereinigt und auf die Behandlung vorbereitet.",
  },
  {
    step: 3,
    title: "Behandlung",
    description: "Die Behandlung wird mit modernsten Geräten und hochwertigen Produkten durchgeführt.",
  },
  {
    step: 4,
    title: "Nachsorge",
    description: "Wir geben Ihnen Tipps für die optimale Pflege nach der Behandlung.",
  },
];

const ProcessSection = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      className="py-12 xl:py-24 bg-gray-50"
    >
      <div className="container mx-auto">
        <motion.h2
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="h2 mb-12 text-center"
        >
          So läuft die Behandlung ab →
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="text-center py-10 px-6 rounded-lg shadow-md border border-gray-200 bg-accent-100"
            >
              <div className="text-5xl md:text-6xl text-accent mb-4">{step.step}</div>
              <h3 className="text-2xl mb-4 text-wrap">{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;
