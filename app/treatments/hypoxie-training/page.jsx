"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";
import { useRouter } from "next/navigation";

const HypoxieTrainingPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const router = useRouter();
  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen pb-12 pt-32 xl:pt-32 overflow-x-hidden z-10"
    >
      {/* Hero Section */}
      <section className="bg-accent-100 py-16 mb-24">
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-16 pt-12">
          <div className="text-center xl:w-1/2">
            <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h3 mb-4 text-primary"
            >
              Innovatives Behandlungskonzept: Mitochondrien-Infusion & Hypoxie-Training
            </motion.h1>
            <p className="text-lg text-gray-700 mb-6">
              Steigern Sie Ihre Gesundheit und Leistungsfähigkeit mit unserem einzigartigen Behandlungskonzept! In der unseren Praxisräumen und n der Rothenbaumchaussee in Hamburg kombinieren wir die Kraft der Mitochondrien-Infusion mit dem effektiven Hypoxie-Training. Dieses synergistische Konzept ist ideal für alle, die ihre Vitalität und Lebensqualität nachhaltig verbessern möchten.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.6, duration: 0.8 } }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="xl:w-1/2 flex justify-center bg-white p-6 rounded-lg shadow-2xl"
          >
            <Image
              src="/assets/vitamin2.png" // Placeholder image
              width={500}
              height={350}
              alt="Hypoxie-Training"
              className="rounded-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto z-0 px-4">
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 mb-24 text-center px-4"
        >
          <motion.h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-accent"
          >
            Was ist Mitochondrien-Infusion?
          </motion.h2>
            <p className="mb-4 text-lg">
              Die Mitochondrien-Infusion liefert essentielle Nährstoffe, die Ihre Zellen mit Energie versorgen. Diese Infusion fördert den Energiestoffwechsel, steigert die Zellregeneration und verbessert die Funktion von geschädigten Mitochondrien – den Kraftwerken Ihrer Zellen. Erleben Sie, wie Sie sich energiegeladener und vitaler fühlen!
            </p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-12 pb-12 mb-24 bg-accent-100 rounded-lg shadow-md text-center px-12"
        >
          <motion.h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-accent"
          >
            Was ist Hypoxie-Training?
          </motion.h2>
          <p className="mb-4 text-lg">
            Das Intervall-Hypoxie-Hyperoxie-Training (IHHT) simuliert Höhenbedingungen, um Ihre Leistungsfähigkeit zu steigern. Mit dem modernen MITOVIT®-Gerät wird die Sauerstoffkonzentration in der eingeatmeten Luft gezielt verändert. Dies aktiviert Ihre Mitochondrien, fördert die Bildung neuer Mitochondrien und verbessert die Sauerstoffversorgung aller Organe.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="pt-8 mb-24 text-center px-4"
        >
          <motion.h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-accent font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Die Vorteile unseres kombinierten Ansatzes:
          </motion.h2>

          <motion.ul
            className="text-lg text-gray-700 mb-6 list-disc list-inside"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <li>
              <strong>Steigerung der Energieproduktion:</strong> Maximieren Sie die Energie in Ihren Zellen durch die Kombination von Infusion und Hypoxie-Training.
            </li>
            <li>
              <strong>Verbesserte Regeneration:</strong> Alte Mitochondrien werden abgebaut, während neue, leistungsfähige Mitochondrien gebildet werden.
            </li>
            <li>
              <strong>Erhöhte Stressresistenz:</strong> Stärken Sie Ihre Widerstandskraft gegen Stress und fördern Sie Ihr allgemeines Wohlbefinden.
            </li>
            <li>
              <strong>Optimierte Leistungsfähigkeit:</strong> Erleben Sie Fortschritte in Ihrer physischen und psychischen Leistungsfähigkeit, sei es im Alltag oder im Sport.
            </li>
          </motion.ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-12 pb-12 mb-24 bg-accent-100 rounded-lg shadow-md text-center px-12"
        >
          <motion.h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-accent"
          >
            Für wen ist dieses Behandlungskonzept geeignet?
          </motion.h2>
          <p className="mb-4 text-lg">
            Unser innovatives Konzept ist ideal für:
          </p>
          <ul className="text-lg text-gray-700 mb-6 list-disc list-inside">
            <li>Menschen mit chronischen Erkrankungen, die kein körperliches Training absolvieren können</li>
            <li>Leistungssportler, die ihre Ausdauer und Regeneration verbessern möchten</li>
            <li>Personen, die unter Erschöpfung, Stress oder Schlafstörungen leiden</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="pt-8 mb-24 text-center px-4"
        >
          <motion.h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-accent font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Erleben Sie die Synergie von Infusion und Hypoxie-Training!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-700 mb-6"
          >
            Kombinieren Sie die Vorteile der Mitochondrien-Infusion mit dem effektiven Hypoxie-Training und entdecken Sie, wie Sie Ihre Energie, Leistungsfähigkeit und Lebensqualität nachhaltig steigern können.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-700 mb-6"
          >
            Vereinbaren Sie noch heute einen Termin in unserer Privatpraxis am Bült und erleben Sie die transformative Wirkung unseres ganzheitlichen Behandlungskonzepts!
          </motion.p>
        </motion.section>

        <div className="text-center mb-24 flex flex-col justify-center items-center">
          <button
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="btn btn-lg bg-accent text-white hover:bg-accent-dark shadow-lg rounded-full px-8 py-4 transition-all duration-300 ease-in-out transform hover:scale-105 text-xl focus:outline-none focus:ring-4 focus:ring-accent-300 w-full max-w-xs"
            onClick={handleContactClick}
          >
            Jetzt Termin buchen
          </button>
        </div>

        {/* Call to Action Section */}
        <motion.section className="text-center mb-24">
          <CtaSection />
        </motion.section>
      </div>
    </motion.div>
  );
};

export default HypoxieTrainingPage;
