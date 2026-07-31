"use client";

import Image from 'next/image';
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";
import PdoFadenImageGallery from "@/components/PdoFadenImageGallery";
import TreatmentHero from "@/components/TreatmentHero";
import { FaCheck } from "react-icons/fa";

const PdoFadenPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen overflow-x-hidden"
    >
      {/* Hero Section */}
      <TreatmentHero
        title="PDO Fäden"
        subtitle="Fadenlifting für viel natürlich wirkende Schönheit. Ohne Skalpell, für ein strafferes, jüngeres Ich."
        imageSrc="/assets/treatments/meso8.webp"
        imageAlt="PDO Fäden"
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
              <h2 className="h2 mb-8 text-primary">Natürliches <span className="text-accent">Lifting</span></h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Das Fadenlifting setzt Fäden ein, die schon seit Jahrzehnten in der Chirurgie genutzt werden. Sie werden minimalinvasiv und schonend zur Straffung unter die Haut gezogen. Im Lauf von mehreren Monaten bis zu zwei Jahren werden sie auf biologischem Weg abgebaut und können danach wieder neu eingesetzt werden.
                </p>
                <p>
                  Dazu bieten sie einen weiteren großen Vorteil: Die PDO Fäden regen die <strong className="text-primary font-medium">hauteigene Kollagensynthese</strong> an. Die Haut wird gestrafft und das Gewebe in die ursprüngliche Position angehoben.
                </p>
                <p>
                  Das Ergebnis ist ein Lifting Effekt mit einem natürlichen Aussehen. Dieses biochemische Verfahren macht die Haut praller und straffer und das ganz ohne Skalpell.
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
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/50 aspect-square">
                {/* Placeholder for a detail shot or graphic, reusing existing image for now but styled differently */}
                <Image
                  src="/assets/ing6.webp"
                  fill
                  alt="PDO Fäden Detail"
                  className="object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* Application Areas Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4 text-primary">Anwendungsbereiche</h2>
            <p className="text-xl text-gray-500 font-light">Eingesetzt werden die Fäden fast am ganzen Körper.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "V Shape",
              "Hängende Halspartie",
              "Hängebäckchen",
              "Wangen",
              "Augenbrauen",
              "Nase",
              "Schlaffe Gesichtshaut"
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/50 flex items-center gap-4 group cursor-default"
              >
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <FaCheck />
                </span>
                <span className="text-lg font-medium text-gray-700 group-hover:text-primary transition-colors">{area}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-700 mb-4">
              Der kleine Eingriff erfolgt ambulant bei <strong>Mesoskin Hamburg</strong> und dauert zwischen einer halben und ganzen Stunde.
            </p>
            <p className="text-lg text-primary font-medium">
              Wichtig zu wissen: Die Behandlung ist so gut wie schmerzfrei, weil sie unter örtlicher Betäubung stattfindet.
            </p>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="mb-32">
          <h2 className="h2 text-center mb-12 text-primary">Vorher & Nachher</h2>
          <PdoFadenImageGallery />
        </section>

        {/* CTA Section */}
        <section className="text-center mb-12">
          <div className="bg-white/50 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/60">
            <h2 className="h2 mb-6 text-primary">Interessiert an einem Fadenlifting?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Mehr Informationen zum Ablauf, zur Nachbehandlung und zum Umfang erläutert Annette Fascher gerne in einem persönlichen Gespräch.
            </p>
            <CtaSection />
          </div>
        </section>

      </div>
    </motion.div>
  );
};

export default PdoFadenPage;
