"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";

import { FaShieldAlt } from 'react-icons/fa';

const DatenschutzPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen pb-12 pt-32 xl:pt-32"
    >
      {/* Hero Section */}
      <section className="bg-accent-100 py-16 mt-32 mb-12">
        <div className="container mx-auto text-center">
          <motion.h1
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h1 mb-4 text-primary flex items-center justify-center gap-2"
          >
            <FaShieldAlt className="text-3xl" />
          </motion.h1>
        </div>
      </section>

      <div className="container mx-auto">
        <main className="min-h-screen container mx-auto py-12">
            <h1 className="h1 text-center mb-8">Datenschutz&shy;erkl&auml;rung</h1>
            <div className="max-w-3xl mx-auto">
                <h2 className="h2 mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="h3 mb-2">Allgemeine Hinweise</h3>
                <p className="mb-4">Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.</p>
                <h3 className="h3 mb-2">Datenerfassung auf dieser Website</h3>
                <h4 className="h4 mb-1">Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</h4>
                <p className="mb-4">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Impressum dieser Website entnehmen.</p>
                <h4 className="h4 mb-1">Wie erfassen wir Ihre Daten?</h4>
                <p className="mb-4">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&thinsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                <p className="mb-4">Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&thinsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
                <h4 className="h4 mb-1">Wof&uuml;r nutzen wir Ihre Daten?</h4>
                <p className="mb-4">Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
                <h4 className="h4 mb-1">Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>
                <p className="mb-4">Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.</p>
                <p className="mb-4">Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
            </div>
        </main>
      </div>
    </motion.div>
  );
};

export default DatenschutzPage;
