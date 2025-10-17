'use client';

import Image from "next/image";
import { motion } from "framer-motion";
// import { useContext } from "react";
// import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";

// This is a client component for Hyaluronsäure page
const HyaluronsaurePage = () => {
  // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen pb-12 overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="bg-accent-100 py-16 mb-12">
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 pt-40">
          <div className="text-center xl:text-left xl:w-1/2 pt-12">
            <motion.h1
              className="h1 mb-4 text-primary"
            >
              Hyaluron-Unterspritzung - Frische und Vitalität für Ihr Gesicht
            </motion.h1>
            <motion.p
              className="lead max-w-2xl mx-auto xl:mx-0 text-gray-700"
            >
              Die Hyaluron-Unterspritzung ist eine beliebte, nicht-invasive Methode zur Auffrischung und Verjüngung des Gesichts. Hyaluronsäure ist ein natürlicher Bestandteil der Haut, der für Feuchtigkeit und Elastizität sorgt. Mit der Unterspritzung können Falten gemildert, Volumen wiederhergestellt und die Gesichtskonturen sanft geglättet werden – für ein jugendliches und frisches Aussehen.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8, ease: "easeInOut" }}
            className="xl:w-1/2 flex justify-center xl:justify-end xl:ml-16 bg-white p-6 rounded-lg shadow-xl"
          >
            <Image
              src="/assets/treatments/girls.jpeg"
              width={500}
              height={350}
              alt="Hyaluron-Unterspritzung"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto">
        {/* Key Benefits Section */}
        <section className="mb-12">
          <motion.h2
            className="h2 mb-6 text-accent"
          >
            Vorteile der Hyaluron-Unterspritzung
          </motion.h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
            <motion.li>
              <strong>Sofortige Ergebnisse:</strong> Die Ergebnisse sind unmittelbar nach der Behandlung sichtbar, und Ihre Haut wirkt frischer und strahlender.
            </motion.li>
            <motion.li>
              <strong>Natürliche Wirkung:</strong> Hyaluronsäure ist biokompatibel und fügt sich harmonisch in das Gewebe ein, was zu natürlichen Ergebnissen führt.
            </motion.li>
            <motion.li>
              <strong>Minimale Ausfallzeit:</strong> Die Behandlung ist schmerzarm und erfordert in der Regel keine lange Erholungszeit, sodass Sie schnell zu Ihrem Alltag zurückkehren können.
            </motion.li>
            <motion.li>
              <strong>Individuell anpassbar:</strong> Die Unterspritzung kann gezielt an verschiedenen Gesichtspartien durchgeführt werden – sei es zur Faltenreduktion, zur Lippenvergrößerung oder zur Wiederherstellung von Volumen in den Wangen.
            </motion.li>
            <motion.li>
              <strong>Sichere Technik mit stumpfer Kanüle:</strong> Wir verwenden eine stumpfe Kanüle für die Unterspritzung. Diese Technik reduziert das Risiko von Verletzungen von Blutgefäßen und Nerven und minimiert die Wahrscheinlichkeit von Schwellungen und Blutergüssen, was zu einer sichereren und komfortableren Behandlung führt.
            </motion.li>
          </ul>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-4 text-2xl text-gray-700 text-center"
            >
              Behandlungsbereiche:
            </motion.p>
            <ul className="space-y-2 text-lg text-gray-700 mb-6">
              <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.6, duration: 0.8 }}><strong>Nasolabialfalten</strong></motion.li>
              <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.7, duration: 0.8 }}><strong>Mundwinkel</strong></motion.li>
              <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.8, duration: 0.8 }}><strong>Kinnfalten</strong></motion.li>
              <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.9, duration: 0.8 }}><strong>Tränenrinnen</strong></motion.li>
              <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.0, duration: 0.8 }}><strong>Hohlwangen</strong></motion.li>
              <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.1, duration: 0.8 }}><strong>Lippenfalten und Lippenkonturen</strong></motion.li>
            </ul>
          </motion.div>
        </section>

        {/* Natürlich: Hyaluronsäure Section */}
<section className="container mx-auto py-12">
      <h1 className="h2 mb-8 text-center">Hyaluronsäure</h1>
      <div className="flex flex-col lg:flex-row gap-x-24 gap-y-8">
        <div className="lg:w-1/2 py-12">
          <h2 className="h3 mb-4">Natürlich: Hyaluronsäure</h2>
          <p className="mb-4">
            Wichtig zu wissen ist, dass Hyaluronsäure eine im Körper natürlich
            vorkommende Verbindung ist. Sie findet sich zum Beispiel in den
            Knochen und in der Gelenkflüssigkeit, aber auch in der Haut. Sie
            eignet sich deshalb so gut zur Modellierung, weil die Moleküle der
            Hyaluronsäure sehr viel Wasser an sich binden können und damit
            Volumen entsteht.
          </p>
          <h2 className="h3 mb-4">Natürlich wirkende Effekte</h2>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Mesoskin</strong>.Hamburg wird vor allem mit der schmerzfreien Technik der
            </p>
          <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.3, duration: 0.8 }} className="h3 mb-4">Anwendungsbereiche</motion.h2>
          <ul className="list-disc list-inside mb-4">
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.4, duration: 0.8 }}>Lippen aufspritzen</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.5, duration: 0.8 }}>Faltenunterspritzung</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.6, duration: 0.8 }}>Gesichtsmodellierung</motion.li>

            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.9, duration: 0.8 }}>Hände verjüngen</motion.li>
          </ul>
          <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.0, duration: 0.8 }} className="h3 mb-4">Vorteile</motion.h2>
          <ul className="list-disc list-inside mb-4">
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.1, duration: 0.8 }}>Sofort sichtbare Ergebnisse</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.2, duration: 0.8 }}>Natürliches Aussehen</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.3, duration: 0.8 }}>Biologisch abbaubar</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.4, duration: 0.8 }}>Schonende Behandlung</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.5, duration: 0.8 }}>Kurze Genesungszeit</motion.li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/assets/new8.jpg"
            alt="Hyaluronsäure Behandlung"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-8 mt-16 w-full h-auto object-cover grayscale"
          />

        </div>
      </div>
    </section>

        {/* Call to Action Section */}
        <section className="text-center mb-12">
          <motion.p
            className="text-xl font-bold mb-4 text-primary"
          >
            Jetzt Termin vereinbaren
          </motion.p>
          <CtaSection />
        </section>
      </div>
    </motion.div>
  );
};

export default HyaluronsaurePage;
