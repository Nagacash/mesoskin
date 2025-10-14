"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";

const ImpressumPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen pb-12 xl:pt-32"
    >
      {/* Hero Section */}
      <section className="bg-accent-100 py-16 mt-32 mb-12">
        <div className="container mx-auto text-center">
          <motion.h1
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h1 mb-4 text-primary"
          >
            Impressum
          </motion.h1>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Diensteanbieter Section */}
        <section className="mb-12">
          <motion.h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-accent"
          >
            Diensteanbieter
          </motion.h2>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-2 text-lg text-gray-700"
          >
            Annette Fascher-Wendlandt
          </motion.p>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-2 text-lg text-gray-700"
          >
            Peter-Marquard-Straße 1
          </motion.p>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-6 text-lg text-gray-700"
          >
            22303 Hamburg
          </motion.p>
        </section>

        {/* Kontaktmöglichkeiten Section */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg shadow-md">
          <motion.h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-accent"
          >
            Kontaktmöglichkeiten
          </motion.h2>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-2 text-lg text-gray-700"
          >
            <strong>E-Mail-Adresse:</strong>
            kontakt@mesoskinhamburg.de
          </motion.p>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-6 text-lg text-gray-700"
          >
            <strong>Telefon:</strong>
            017661639830
          </motion.p>
        </section>

        {/* Angaben zum Unternehmen Section */}
        <section className="mb-12">
          <motion.h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-accent"
          >
            Angaben zum Unternehmen
          </motion.h2>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-2 text-lg text-gray-700"
          >
            <strong>Berufsbezeichnung:</strong>
            Heilpraktiker/in
          </motion.p>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-6 text-lg text-gray-700"
          >
            <strong>Land in dem die Berufsbezeichnung verliehen wurde:</strong>
            Deutschland
          </motion.p>
        </section>
      </div>
    </motion.div>
  );
};

export default ImpressumPage;
