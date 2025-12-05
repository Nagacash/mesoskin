"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";
import TreatmentHero from "@/components/TreatmentHero";
import { FaCheck, FaLeaf, FaClock, FaMagic, FaShieldAlt } from "react-icons/fa";

const HyaluronsaurePage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen overflow-x-hidden"
    >
      {/* Hero Section */}
      <TreatmentHero
        title="Hyaluronsäure"
        subtitle="Frische und Vitalität für Ihr Gesicht – natürlich, effektiv und sofort sichtbar."
        imageSrc="/assets/treatments/girls2.jpg"
        imageAlt="Hyaluron-Unterspritzung"
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
              <h2 className="h2 mb-8 text-primary">Natürliche <span className="text-accent">Verjüngung</span></h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Die Hyaluron-Unterspritzung ist eine beliebte, nicht-invasive Methode zur Auffrischung und Verjüngung des Gesichts. Hyaluronsäure ist ein natürlicher Bestandteil der Haut, der für Feuchtigkeit und Elastizität sorgt.
                </p>
                <p>
                  Wichtig zu wissen ist, dass Hyaluronsäure eine im Körper natürlich vorkommende Verbindung ist. Sie findet sich zum Beispiel in den Knochen und in der Gelenkflüssigkeit, aber auch in der Haut.
                </p>
                <p>
                  Sie eignet sich deshalb so gut zur Modellierung, weil die Moleküle der Hyaluronsäure sehr viel Wasser an sich binden können und damit Volumen entsteht. Mit der Unterspritzung können Falten gemildert, Volumen wiederhergestellt und die Gesichtskonturen sanft geglättet werden.
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
                  src="/assets/new8.jpg"
                  fill
                  alt="Hyaluronsäure Behandlung"
                  className="object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-32">
          <h2 className="h2 text-center mb-16 text-primary">Vorteile der Behandlung</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sofortige Ergebnisse",
                desc: "Die Ergebnisse sind unmittelbar nach der Behandlung sichtbar, und Ihre Haut wirkt frischer und strahlender.",
                icon: <FaClock />
              },
              {
                title: "Natürliche Wirkung",
                desc: "Hyaluronsäure ist biokompatibel und fügt sich harmonisch in das Gewebe ein, was zu natürlichen Ergebnissen führt.",
                icon: <FaLeaf />
              },
              {
                title: "Minimale Ausfallzeit",
                desc: "Die Behandlung ist schmerzarm und erfordert in der Regel keine lange Erholungszeit.",
                icon: <FaShieldAlt />
              },
              {
                title: "Individuell anpassbar",
                desc: "Gezielt an verschiedenen Gesichtspartien einsetzbar – zur Faltenreduktion, Lippenvergrößerung oder Volumenaufbau.",
                icon: <FaMagic />
              },
              {
                title: "Sichere Technik",
                desc: "Verwendung einer stumpfen Kanüle reduziert das Risiko von Verletzungen und minimiert Schwellungen.",
                icon: <FaShieldAlt />
              },
              {
                title: "Biologisch abbaubar",
                desc: "Der Körper baut die Hyaluronsäure mit der Zeit natürlich ab, was die Behandlung sehr verträglich macht.",
                icon: <FaLeaf />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-2xl text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Areas Section */}
        <section className="mb-32">
          <div className="bg-accent/5 rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/pattern.svg')] opacity-5"></div>
            <div className="relative z-10">
              <h2 className="h2 text-center mb-12 text-primary">Behandlungsbereiche</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  "Nasolabialfalten",
                  "Mundwinkel",
                  "Kinnfalten",
                  "Tränenrinnen",
                  "Hohlwangen",
                  "Lippenfalten & Konturen",
                  "Lippen aufspritzen",
                  "Gesichtsmodellierung",
                  "Hände verjüngen"
                ].map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/60 flex items-center justify-center text-center h-20 cursor-default"
                  >
                    <span className="text-lg font-medium text-gray-700">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-12">
          <div className="bg-white/50 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/60">
            <h2 className="h2 mb-6 text-primary">Interessiert an einer Behandlung?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Vereinbaren Sie jetzt einen Termin für eine persönliche Beratung und Behandlung.
            </p>
            <CtaSection />
          </div>
        </section>

      </div>
    </motion.div>
  );
};

export default HyaluronsaurePage;
