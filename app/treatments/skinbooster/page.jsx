"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";
import FaqModal from "@/components/FaqModal";
import { useRouter } from "next/navigation";

const SkinboosterPage = () => {
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
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 pt-12">
          <div className="text-center xl:text-left xl:w-1/2">
            <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h1 mb-4 text-primary"
            >
              Spannkraft, die großflächig wirkt – der Skinbooster
            </motion.h1>
            <p className="text-lg text-gray-700 mb-6">
              Willkommen bei <strong>Mesoskin</strong> – Ihre Experten für Skinbooster
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.6, duration: 0.8 } }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="xl:w-1/2 flex justify-center xl:mt-12 bg-white p-6 rounded-lg shadow-2xl"
          >
            <Image
              src="/assets/treatments/girls3.png"
              width={500}
              height={350}
              alt="Skinbooster"
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
            Was sind Skinbooster?
          </motion.h2>
            <p className="mb-4 text-lg">
              Skinbooster sind eine revolutionäre Behandlung zur Verbesserung der Hautqualität. Diese minimalinvasive Methode nutzt hyaluronsäurehaltige Injektionen, um die Haut intensiv mit Feuchtigkeit zu versorgen, die Elastizität zu steigern und ein strahlendes, jugendliches Aussehen zu fördern. Skinbooster sind ideal für alle, die ihre Haut revitalisieren und ein frisches, gesundes Hautbild erzielen möchten.
            </p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-12 pb-12 mb-24 bg-accent-100 rounded-lg shadow-md text-center px-12"
        >
          <ul className="space-y-2 text-lg text-gray-700 mb-6 text-center">
            <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="pt-12 pb-12">
              <strong>Intensive Hydratation:</strong> Skinbooster dringen tief in die Haut ein und sorgen für eine langanhaltende Feuchtigkeitsversorgung.
            </motion.li>
            <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              <strong>Verbesserte Hautstruktur:</strong> Die Behandlung kann feine Linien und Fältchen reduzieren und das allgemeine Hautbild verfeinern.
            </motion.li>
            <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              <strong>Natürliche Ergebnisse:</strong> Skinbooster fördern die körpereigene Kollagenproduktion, was zu einem natürlichen und strahlenden Aussehen führt.
            </motion.li>
          </ul>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-4 text-lg text-gray-700"
          >
            In Frage kommen die Skinbooster vor allem für:
          </motion.p>
          <ul className="flex flex-wrap justify-center gap-4 mb-6 text-center">
            <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.4, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="h3 mb-2 text-gray-700"><strong>Gesicht</strong></motion.h3>,
            <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.5, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="h3 mb-2 text-gray-700"><strong>Hals</strong></motion.h3>,
            <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.6, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="h3 mb-2 text-gray-700"><strong>Dekolleté</strong></motion.h3>,
            <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.7, duration: 0.8 }} onMouseEnter={mouseLeaveHandler} onMouseLeave={mouseEnterHandler} className="h3 mb-2 text-gray-700"><strong>Hände</strong></motion.h3>
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
            Entdecken Sie die Kraft der Polynukleotide für Ihre Haut!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-700 mb-6"
          >
            Polynukleotide sind natürliche Moleküle, die aus den Bausteinen von DNA und RNA bestehen. In der ästhetischen Medizin werden sie als innovative injizierbare Gels eingesetzt, um die Hautregeneration zu fördern und ein jugendlicheres Aussehen zu erzielen.
          </motion.p>

          <motion.h3
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h3 mb-4 text-primary font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Wie wirken Polynukleotide?
          </motion.h3>

          <motion.ul
            className="text-lg text-gray-700 mb-6 list-disc list-inside"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <li>
              <strong>Stimulierung der Haut:</strong> Sie aktivieren die Produktion von Kollagen und Elastin, verbessern die Hautstruktur und Elastizität.
            </li>
            <li>
              <strong>Feuchtigkeit und Schutz:</strong> Polynukleotide binden Feuchtigkeit und schützen die Haut vor schädlichen Umwelteinflüssen.
            </li>
          </motion.ul>

          <motion.h3
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h3 mb-4 text-primary font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            Vielseitige Anwendungen:
          </motion.h3>

          <motion.ol
            className="text-lg text-gray-700 mb-6 list-decimal list-inside"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <li>
              <strong>Hautverjüngung:</strong> Für einen strahlenden, frischen Teint.
            </li>
            <li>
              <strong>Pigmentstörungen:</strong> Mildern Sie unschöne Flecken.
            </li>
            <li>
              <strong>Dunkle Augenringe:</strong> Reduzieren Sie Schatten unter den Augen.
            </li>
          </motion.ol>

          <motion.h3
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h3 mb-4 text-primary font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            Verträglichkeit:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-lg text-gray-700 mb-6"
          >
            Die Behandlung ist gut verträglich. Mögliche leichte Reaktionen wie Rötungen oder Schwellungen klingen schnell ab.
          </motion.p>

          <motion.h3
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h3 mb-4 text-primary font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            Fazit:
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="text-lg text-gray-700 mb-6"
          >
            Erleben Sie die transformative Wirkung von Polynukleotiden und bringen Sie Ihre Haut zum Strahlen!
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
          <div className="mt-4 w-full max-w-xs">
            <FaqModal />
          </div>
        </div>

        {/* Call to Action Section */}
        <motion.section className="text-center mb-24">
          <CtaSection />
        </motion.section>
      </div>
    </motion.div>
  );
};

export default SkinboosterPage;
