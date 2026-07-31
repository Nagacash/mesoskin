"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";
import TreatmentHero from "@/components/TreatmentHero";
import { FaCheck, FaWater, FaGem, FaMagic, FaHandSparkles, FaEye } from "react-icons/fa";

const SkinboosterPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen overflow-x-hidden"
    >
      {/* Hero Section */}
      <TreatmentHero
        title="Skinbooster"
        subtitle="Spannkraft, die großflächig wirkt – für ein strahlendes, jugendliches Hautbild."
        imageSrc="/assets/treatments/girls3.webp"
        imageAlt="Skinbooster"
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
              <h2 className="h2 mb-8 text-primary">Tiefenwirksame <span className="text-accent">Hydratation</span></h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Skinbooster sind eine revolutionäre Behandlung zur Verbesserung der Hautqualität. Diese minimalinvasive Methode nutzt hyaluronsäurehaltige Injektionen, um die Haut intensiv mit Feuchtigkeit zu versorgen.
                </p>
                <p>
                  Im Gegensatz zu herkömmlichen Fillern, die Volumen aufbauen, zielen Skinbooster darauf ab, die Haut von innen heraus zu durchfeuchten und ihre Elastizität nachhaltig zu steigern.
                </p>
                <p>
                  Das Ergebnis ist ein strahlendes, jugendliches Aussehen und ein frisches, gesundes Hautbild – ganz ohne künstliche Veränderung der Gesichtszüge.
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
                  src="/assets/treatments/girls3.webp"
                  fill
                  alt="Skinbooster Behandlung"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-32">
          <h2 className="h2 text-center mb-16 text-primary">Vorteile der Skinbooster</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Intensive Hydratation",
                desc: "Dringt tief in die Haut ein und sorgt für eine langanhaltende Feuchtigkeitsversorgung.",
                icon: <FaWater />
              },
              {
                title: "Verbesserte Struktur",
                desc: "Reduziert feine Linien und Fältchen und verfeinert das allgemeine Hautbild sichtbar.",
                icon: <FaGem />
              },
              {
                title: "Natürliche Ergebnisse",
                desc: "Fördert die körpereigene Kollagenproduktion für ein natürliches und strahlendes Aussehen.",
                icon: <FaMagic />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-2xl text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Areas */}
        <section className="mb-32">
          <div className="bg-primary/5 rounded-3xl p-12 text-center">
            <h2 className="h2 mb-8 text-primary">Anwendungsbereiche</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Gesicht", "Hals", "Dekolleté", "Hände"].map((area, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white px-8 py-4 rounded-full shadow-sm text-lg font-medium text-gray-700 border border-gray-100"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Polynukleotide Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/50 aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {/* Abstract representation or another image could go here */}
                <div className="text-9xl text-white/50">
                  <FaGem />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="h2 mb-6 text-primary">Die Kraft der <span className="text-accent">Polynukleotide</span></h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                Polynukleotide sind natürliche Moleküle aus DNA- und RNA-Bausteinen. Als innovative injizierbare Gels fördern sie die Hautregeneration und sorgen für ein jugendlicheres Aussehen.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <FaMagic />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Wirkung</h4>
                    <p className="text-gray-600 font-light">Aktiviert Kollagen & Elastin, verbessert Struktur & Elastizität. Bindet Feuchtigkeit & schützt vor Umwelteinflüssen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <FaHandSparkles />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Anwendung</h4>
                    <p className="text-gray-600 font-light">Ideal für Hautverjüngung, gegen Pigmentstörungen und zur Milderung dunkler Augenringe.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-12">
          <div className="bg-white/50 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/60">
            <h2 className="h2 mb-6 text-primary">Bereit für strahlende Haut?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Erleben Sie die transformative Wirkung von Skinboostern und Polynukleotiden. Vereinbaren Sie jetzt Ihren Termin.
            </p>
            <CtaSection />
          </div>
        </section>

      </div>
    </motion.div>
  );
};

export default SkinboosterPage;
