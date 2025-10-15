"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";
import PdoFadenImageGallery from "@/components/PdoFadenImageGallery";

const PdoFadenPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen pb-12 pt-48 xl:pt-48 overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="bg-accent-100 py-16 mb-12">
        <div className="container mx-auto text-center pt-12">
          <motion.h1
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h1 mb-4 text-primary"
          >
            PDO Fäden - Fadenlifting für viel natürlich wirkende Schönheit
          </motion.h1>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lead max-w-2xl mx-auto text-gray-700"
          >
            Das Fadenlifting setzt Fäden ein, die schon seit Jahrzehnten in der Chirurgie genutzt werden. Sie werden minimalinvasiv und schonend zur Straffung unter die Haut gezogen. Im Lauf von mehreren Monaten bis zu zwei Jahren werden sie auf biologischem Weg abgebaut und können danach wieder neu eingesetzt werden. Dazu bieten sie einen weiteren großen Vorteil: Die PDO Fäden regen die Hauteigene Kollagensynthese aus. Die Haut wird gestrafft und das Gewebe in die ursprüngliche Position angehoben.Das Ergebnis ist ein Lifting Effekt mit einem natürlichen Aussehen. Dieses biochemische Verfahren macht die Haut praller und straffer und das ganz ohne Skalpell.
          </motion.p>
        </div>
      </section>

      <PdoFadenImageGallery />

      <div className="container mx-auto">
        {/* Eingesetzt werden die Fäden Section */}
        <section className="mb-24 py-32 px-12 rounded-lg shadow-lg bg-white mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-accent"
          >
            Eingesetzt werden die Fäden fast am ganzen Körper. Zum Beispiel:
          </motion.h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4 mb-6">
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.4, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><strong>V Shape</strong></motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.5, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><strong>hängende Halspartie</strong></motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.6, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><strong>Hängebäckchen</strong></motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.7, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><strong>Wangen</strong></motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.8, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><strong>Augenbrauen</strong></motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.9, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><strong>Nase</strong></motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.0, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><strong>Schlaffe Gesichtshaut</strong></motion.li>
          </ul>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-6 text-lg text-gray-700"
          >
            Der kleine Eingriff erfolgt ambulant bei Mesoskin.Hamburg und dauert zwischen einer halben und ganzen Stunde. Wichtig zu wissen: Die Behandlung ist so gut wie schmerzfrei, weil sie unter örtlicher Betäubung stattfindet.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-6 text-lg text-gray-700"
          >
            Mehr Informationen zum Ablauf, zur Nachbehandlung und zum Umfang erläutert Annette Fascher
          </motion.p>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mb-12">

          <CtaSection />
        </section>
      </div>
    </motion.div>
  );
};

export default PdoFadenPage;
