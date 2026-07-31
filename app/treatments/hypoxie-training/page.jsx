"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";
import TreatmentHero from "@/components/TreatmentHero";
import { FaBolt, FaLungs, FaHeartbeat, FaRunning, FaBed, FaShieldAlt } from "react-icons/fa";

const HypoxieTrainingPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen overflow-x-hidden"
    >
      {/* Hero Section */}
      <TreatmentHero
        title="Mitochondrien & Hypoxie"
        subtitle="Innovatives Behandlungskonzept für mehr Energie, Vitalität und Leistungsfähigkeit."
        imageSrc="/assets/vitamin2.webp"
        imageAlt="Hypoxie-Training"
        overlayOpacity="bg-black/20"
      />

      <div className="container mx-auto py-24 relative z-10">

        {/* Intro Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="h2 mb-8 text-primary">Synergie für Ihre <span className="text-accent">Gesundheit</span></h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Steigern Sie Ihre Gesundheit und Leistungsfähigkeit mit unserem einzigartigen Behandlungskonzept! In unseren Praxisräumen kombinieren wir die Kraft der Mitochondrien-Infusion mit dem effektiven Hypoxie-Training.
                </p>
                <p>
                  Dieses synergistische Konzept ist ideal für alle, die ihre Vitalität und Lebensqualität nachhaltig verbessern möchten. Wir zielen direkt auf die Kraftwerke Ihrer Zellen ab – die Mitochondrien.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/50 aspect-[4/3]">
                <Image
                  src="/assets/vitamin2.webp"
                  fill
                  alt="Mitochondrien Behandlung"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* Concept Details */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-3xl text-primary mb-8">
                <FaBolt />
              </div>
              <h3 className="h3 mb-4 text-primary">Mitochondrien-Infusion</h3>
              <p className="text-gray-600 leading-relaxed">
                Die Infusion liefert essentielle Nährstoffe, die Ihre Zellen mit Energie versorgen. Sie fördert den Energiestoffwechsel, steigert die Zellregeneration und verbessert die Funktion geschädigter Mitochondrien. Fühlen Sie sich energiegeladener und vitaler!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center text-3xl text-accent mb-8">
                <FaLungs />
              </div>
              <h3 className="h3 mb-4 text-primary">Hypoxie-Training (IHHT)</h3>
              <p className="text-gray-600 leading-relaxed">
                Das Intervall-Hypoxie-Hyperoxie-Training simuliert Höhenbedingungen. Mit dem modernen MITOVIT®-Gerät wird die Sauerstoffkonzentration gezielt verändert. Dies aktiviert Mitochondrien, fördert deren Neubildung und verbessert die Sauerstoffversorgung aller Organe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-32">
          <h2 className="h2 text-center mb-16 text-primary">Vorteile des kombinierten Ansatzes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Energieproduktion",
                desc: "Maximieren Sie die Energie in Ihren Zellen.",
                icon: <FaBolt />
              },
              {
                title: "Regeneration",
                desc: "Abbau alter und Bildung neuer, leistungsfähiger Mitochondrien.",
                icon: <FaHeartbeat />
              },
              {
                title: "Stressresistenz",
                desc: "Stärken Sie Ihre Widerstandskraft und fördern Sie Ihr Wohlbefinden.",
                icon: <FaShieldAlt />
              },
              {
                title: "Leistungsfähigkeit",
                desc: "Fortschritte in physischer und psychischer Leistung.",
                icon: <FaRunning />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/60 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-xl text-primary mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Target Group Section */}
        <section className="mb-32">
          <div className="bg-accent/5 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="h2 mb-8 text-primary">Für wen ist es geeignet?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <FaBed className="text-4xl text-accent mx-auto mb-4" />
                  <p className="font-medium text-gray-700">Menschen mit Erschöpfung, Stress oder Schlafstörungen</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <FaRunning className="text-4xl text-accent mx-auto mb-4" />
                  <p className="font-medium text-gray-700">Leistungssportler zur Verbesserung von Ausdauer & Regeneration</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <FaHeartbeat className="text-4xl text-accent mx-auto mb-4" />
                  <p className="font-medium text-gray-700">Menschen mit chronischen Erkrankungen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-12">
          <div className="bg-white/50 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/60">
            <h2 className="h2 mb-6 text-primary">Erleben Sie die Synergie!</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Entdecken Sie, wie Sie Ihre Energie, Leistungsfähigkeit und Lebensqualität nachhaltig steigern können. Vereinbaren Sie noch heute einen Termin.
            </p>
            <CtaSection />
          </div>
        </section>

      </div>
    </motion.div>
  );
};

export default HypoxieTrainingPage;
