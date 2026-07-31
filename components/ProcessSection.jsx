"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";

const processSteps = [
  {
    step: "01",
    title: "Beratung",
    description: "Wir beginnen mit einer ausführlichen Beratung, um Ihre individuellen Bedürfnisse zu verstehen.",
  },
  {
    step: "02",
    title: "Vorbereitung",
    description: "Ausführliche Anamnese – Wir unterstützen Sie dabei, Ihre medizinische Vorgeschichte strukturiert und vollständig zu erfassen.",
  },
  {
    step: "03",
    title: "Behandlung",
    description: "Anti-Aging & Infusionstherapie für neue Energie und jugendliche Frische. Erleben Sie revitalisierende Infusionen.",
  },
  {
    step: "04",
    title: "Nachsorge",
    description: "Wir geben Ihnen Tipps für die optimale Pflege nach der Behandlung, um das Ergebnis langfristig zu erhalten.",
  },
];

const ProcessSection = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <section className="py-24 xl:py-32 bg-secondary relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6"
          >
            Ihr Weg zu neuer Frische
          </h2>
          <p className="lead max-w-2xl mx-auto text-primary/70">
            Ein transparenter und begleiteter Prozess für Ihr bestes Ergebnis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="relative z-10 group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xl font-bold font-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                  {step.step}
                </div>
                <h3 className="h3 text-xl mb-4">{step.title}</h3>
                <p className="text-primary/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
