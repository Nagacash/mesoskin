"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";
import TreatmentHero from "@/components/TreatmentHero";
import { FaCheck, FaHeart } from "react-icons/fa";

const DollLipsPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen overflow-x-hidden"
    >
      {/* Hero Section */}
      <TreatmentHero
        title="Doll Lips"
        subtitle="Lippenaufbau mit der Doll Lip-Technik für natürlich volle, sinnliche Lippen."
        imageSrc="/assets/treatments/doll-lips.jpeg"
        imageAlt="Doll Lips"
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
              <h2 className="h2 mb-8 text-primary">Perfekte <span className="text-accent">Kontur</span></h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Willkommen bei <strong>Mesoskin</strong>, Ihren Experten für DOLL Lips Technik! Wenn Sie sich vollere, sinnlichere Lippen wünschen, sind Sie bei uns genau richtig.
                </p>
                <p>
                  Unsere spezialisierte Behandlung kombiniert modernste Methoden mit hochwertiger Hyaluronsäure, um Ihnen ein natürliches und harmonisches Ergebnis zu bieten.
                </p>
                <p>
                  Die DOLL Lips Technik ist nicht nur effektiv, sondern auch individuell anpassbar. Unser erfahrenes Team sorgt dafür, dass Ihre Lippen perfekt konturiert und voluminisiert werden, ganz nach Ihren persönlichen Wünschen.
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
                  src="/assets/treatments/doll-lips.jpeg"
                  fill
                  alt="Doll Lips Detail"
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
          <h2 className="h2 text-center mb-16 text-primary">Vorteile der Doll Lips Technik</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Natürliches Ergebnis",
                desc: "Vollere Lippen ohne übertriebenen Effekt. Die Kontur steht im Vordergrund.",
                icon: <FaHeart />
              },
              {
                title: "Kein Schnabel-Effekt",
                desc: "Verhindert den 'Duckface-Effekt', da der Filler nur in die rote Lippe verabreicht wird.",
                icon: <FaCheck />
              },
              {
                title: "Schnelle Erholung",
                desc: "Minimale Ausfallzeiten ermöglichen es Ihnen, schnell wieder in Ihren Alltag zurückzukehren.",
                icon: <FaCheck />
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

        {/* Technique Highlight */}
        <section className="mb-32">
          <div className="bg-accent/5 rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="h2 mb-8 text-primary">Kein „Duckface-Effekt“</h2>
              <p className="text-xl text-gray-700 leading-relaxed font-light mb-8">
                Annette Fascher-Wendlandt setzt vorwiegend auf die Doll Lip-Technik, weil hier die Kontur der Lippe im Zentrum steht und sie nach der Behandlung natürlich, wohlgeformt und sehr attraktiv aussieht.
              </p>
              <p className="text-lg text-gray-600 font-medium">
                Dringend ist in diesem Zusammenhang zu erwähnen, dass diese Technik den sogenannten „Duckface-Effekt“ verhindert, weil der Filler nur in die rote Lippe verabreicht wird. Auf diesem Weg bleibt das Aussehen authentisch und attraktiv.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-12">
          <div className="bg-white/50 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/60">
            <h2 className="h2 mb-6 text-primary">Jetzt Termin vereinbaren</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sie möchten einen Termin vereinbaren? Füllen Sie das Kontaktformular aus und ich werde mich schnellsmöglich zurückmelden.
            </p>
            <CtaSection />
          </div>
        </section>

      </div>
    </motion.div>
  );
};

export default DollLipsPage;