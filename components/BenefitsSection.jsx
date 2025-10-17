
"use client";

import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";

const benefits = [
  {
    title: "Strahlende Haut",
    description: "Unsere Behandlungen fördern die natürliche Ausstrahlung Ihrer Haut.",
  },
  {
    title: "Gesundheitspflege",
    description: "Kompetente Pflege und medizinische Betreuung mit Herz und Fachwissen",
  },
  {
    title: "Anti-Aging",
    description: "Reduzieren Sie die Zeichen der Hautalterung und erhalten Sie ein jugendlicheres Aussehen.",
  },
  {
    title: "Entspannung",
    description: "Gönnen Sie sich eine Auszeit und genießen Sie pure Entspannung.",
  },
];

const BenefitsSection = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      className="py-12 xl:py-24 bg-accent-100"
    >
      <div className="container mx-auto">
        <motion.h2
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="h2 mb-12 text-center"
        >
          Die Vorteile unserer Behandlung
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex items-start gap-4"
            >
              <div className="text-2xl text-accent">
                <FaCheck />
              </div>
              <div>
                <h3 className="h3 mb-2">{benefit.title}</h3>
                <p className="max-w-md">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BenefitsSection;
