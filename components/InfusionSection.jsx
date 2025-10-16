"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const InfusionSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      className="py-24 xl:py-32"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="xl:w-1/2 text-center xl:text-left"
          >
            <h2 className="h2 mb-4">Was sind Baseninfusionen?</h2>
            <p className="lead mb-8">
              Baseninfusionen sind hochwirksame Flüssigkeitsbehandlungen, die wichtige Mineralien und Nährstoffe enthalten, um den pH-Wert Ihres Körpers zu regulieren. Diese Infusionen helfen nicht nur bei der Entgiftung, sondern unterstützen auch die Zellregeneration und das allgemeine Wohlbefinden.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="xl:w-1/2 flex justify-center ml-auto">
              <Image
                src="/assets/in.png"
                width={500}
                height={300}
                alt="Baseninfusion"
                className="rounded-lg shadow-xl p-8"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default InfusionSection;
