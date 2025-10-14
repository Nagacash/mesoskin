"use client";

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
      className="min-h-screen pb-12 pt-64"
    >
      {/* Hero Section */}
      <section className="bg-accent-100 py-16 mb-24">
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="text-center xl:text-left xl:w-1/2">
            <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h1 mb-4 text-primary"
            >
              Spannkraft, die großflächig wirkt – der Skinbooster
            </motion.h1>
            <motion.p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lead max-w-2xl mx-auto xl:mx-0 text-gray-700"
            >
              Willkommen bei Mesoskin – Ihre Experten für Skinbooster
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.6, duration: 0.8 } }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="xl:w-1/2 flex justify-center"
          >
            <Image
              src="/assets/treatments/girls3.png"
              width={500}
              height={350}
              alt="Skinbooster"
              className="rounded-lg border-4 border-black"
            />
          </motion.div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 mb-24 text-center"
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
          className="pt-8 mb-24 bg-gray-50 p-8 rounded-lg shadow-md text-center"
        >
          <ul className="space-y-2 text-lg text-gray-700 mb-6 text-center max-w-prose mx-auto">
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
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-4 text-lg text-gray-700"
          >
            In Frage kommen die Skinbooster vor allem für:
          </motion.p>
          <ul className="flex flex-wrap justify-center gap-4 mb-6 text-center max-w-prose mx-auto">
            <motion.h3 onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="h3 mb-2"><strong>Gesicht</strong></motion.h3>,
            <motion.h3 onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="h3 mb-2"><strong>Hals</strong></motion.h3>,
            <motion.h3 onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="h3 mb-2"><strong>Dekolleté</strong></motion.h3>,
            <motion.h3 onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="h3 mb-2"><strong>Hände</strong></motion.h3>
          </ul>
        </motion.section>

        {/* PROFHILO Section */}
        <motion.section
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 mb-24 text-center"
        >
          <motion.h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-accent"
          >
            Und jetzt auch bei mesoskin.hamburg: PROFHILO®!
          </motion.h2>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-6 text-lg text-gray-700 text-center max-w-prose mx-auto"
          >
            PROFHILO® gehört zu den ganz neuen und besonders vielversprechenden Anti-Aging-Verfahren. Durch die BAP-Injektionstechnik – kurz für Bio Aesthetic Points – verteilt sich der Wirkstoff breit im Gewebe und wirkt auf der gesamten Gesichtshaut. So strahlt Ihr gesamtes Gesicht durch das feuchtigkeitsbindende PROFHILO®.
          </motion.p>
        </motion.section>

        <div className="text-center mb-24 flex justify-center items-center gap-4">
          <button
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="btn btn-lg bg-accent text-white hover:bg-accent-dark shadow-lg rounded-full px-8 py-4 transition-all duration-300 ease-in-out transform hover:scale-105 text-xl focus:outline-none focus:ring-4 focus:ring-accent-300"
            onClick={handleContactClick}
          >
            Jetzt Termin buchen
          </button>
          <FaqModal />
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
