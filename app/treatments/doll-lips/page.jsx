"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";

const DollLipsPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen pb-24 xl:pt-32"
    >
      {/* Hero Section */}
      <section className="bg-accent-100 py-16 mt-24 mb-12">
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="text-center xl:text-left xl:w-1/2">
            <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h1 mb-4 text-primary"
            >
              Doll Lips: Lippenaufbau mit der Doll Lip-Technik
            </motion.h1>
            <motion.p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lead max-w-2xl mx-auto xl:mx-0 text-gray-700"
            >
              Willkommen bei Mesoskin, Ihren Experten für DOLL Lips Technik! Wenn Sie sich vollere, sinnlichere Lippen wünschen, sind Sie bei uns genau richtig. Unsere spezialisierte Behandlung kombiniert modernste Methoden mit hochwertiger Hyaluronsäure, um Ihnen ein natürliches und harmonisches Ergebnis zu bieten.
            </motion.p>
          </div>
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="xl:w-1/2 flex justify-center"
          >
            <Image
              src="/assets/treatments/doll-lips.jpeg"
              width={500}
              height={350}
              alt="Doll Lips"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Vorteile Section */}
        <section className="pt-24 mb-12 pb-24">
          <motion.h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-accent"
          >
            Vorteile der DOLL Lips Technik
          </motion.h2>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-6 text-lg text-gray-700"
          >
            DOLL Lips Technik ist nicht nur effektiv, sondern auch individuell anpassbar. Unser erfahrenes Team von Mesoskin sorgt dafür, dass Ihre Lippen perfekt konturiert und voluminisiert werden, ganz nach Ihren persönlichen Wünschen.
          </motion.p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
            <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              <strong>Natürliches Ergebnis:</strong> Vollere Lippen ohne übertriebenen Effekt.
            </motion.li>
            <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              <strong>Schnelle Erholung:</strong> Minimale Ausfallzeiten ermöglichen es Ihnen, schnell wieder in Ihren Alltag zurückzukehren.
            </motion.li>
          </ul>
        </section>

        {/* Kein „Duckface-Effekt“ Section */}
        <section className="mb-12 pb-24 bg-gray-50 p-8 rounded-lg shadow-md">
          <motion.h3
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h3 mb-4 text-accent"
          >
            Kein „Duckface-Effekt“
          </motion.h3>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-lg text-gray-700"
          >
            Annette Fascher-Wendlandt setzt vorwiegend auf die Doll Lip-Technik, weil hier die Kontur der Lippe im Zentrum steht und sie nach der Behandlung natürlich, wohlgeformt und sehr attraktiv aussieht. Dringend ist in diesem Zusammenhang zu erwähnen, dass diese Technik den sogenannten „Duckface-Effekt“ verhindert, weil der Filler nur in die rote Lippe verabreicht wird. Auf diesem Weg bleibt das Aussehen authentisch und attraktiv.
          </motion.p>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mb-12 pb-24">
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-xl font-bold mb-4 text-primary"
          >
            Jetzt Termin für Doll Lips vereinbaren
          </motion.p>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-6 text-lg text-gray-700"
          >
            Sie möchten einen Termin vereinbaren? Füllen Sie das Kontaktformular aus und ich werde mich schnellsmöglich zurückmelden.
          </motion.p>
          {/* The CtaSection component already has a button that links to contact */}
          <CtaSection />
        </section>
      </div>
    </motion.div>
  );
};

export default DollLipsPage;