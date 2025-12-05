
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
    <section className="py-24 xl:py-32 bg-accent-100 relative overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6"
          >
            Die Vorteile unserer Behandlung
          </h2>
          <p className="lead max-w-2xl mx-auto text-primary/70">
            Erleben Sie den Unterschied, den professionelle Pflege und Hingabe machen können.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="group relative bg-white/40 backdrop-blur-sm border border-white/60 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent text-xl shadow-md group-hover:scale-110 transition-transform duration-500">
                  <FaCheck />
                </div>
                <div>
                  <h3 className="h3 mb-4 text-2xl">{benefit.title}</h3>
                  <p className="text-primary/80 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
