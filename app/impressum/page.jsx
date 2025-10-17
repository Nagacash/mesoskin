"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";

import { FaInfoCircle } from 'react-icons/fa';

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
            className="h1 mb-4 text-primary flex items-center justify-center gap-2"
          >
            <FaInfoCircle className="text-3xl" /> Impressum
          </motion.h1>
        </div>
      </section>

      <main className="min-h-screen container mx-auto py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="h2 mb-4">Diensteanbieter</h2>
          <p className="mb-2 text-lg text-gray-700">
            Annette Fascher-Wendlandt
          </p>
          <p className="mb-2 text-lg text-gray-700">
            Peter-Marquard-Straße 1
          </p>
          <p className="mb-6 text-lg text-gray-700">
            22303 Hamburg
          </p>

          <h2 className="h2 mb-4">Kontaktmöglichkeiten</h2>
          <p className="mb-2 text-lg text-gray-700">
            <strong>E-Mail-Adresse:</strong> kontakt@mesoskinhamburg.de
          </p>
          <p className="mb-6 text-lg text-gray-700">
            <strong>Telefon:</strong> 017661639830
          </p>

          <h2 className="h2 mb-4">Angaben zum Unternehmen</h2>
          <p className="mb-2 text-lg text-gray-700">
            <strong>Berufsbezeichnung:</strong> Heilpraktiker/in
          </p>
          <p className="mb-2 text-lg text-gray-700">
            <strong>Land in dem die Berufsbezeichnung verliehen wurde:</strong> Deutschland
          </p>
          <p className="mb-6 text-lg text-gray-700">
            <strong>Steuernummer:</strong> 43/058/02935
          </p>
        </div>
      </main>
    </motion.div>
  );
};

export default ImpressumPage;
