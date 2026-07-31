import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";

const FaqSection = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <section className="mb-24 bg-gray-50 p-8 rounded-lg shadow-md text-center">
      <motion.h3
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="h3 mb-4 text-accent"
      >
        Häufige Fragen (FAQ)
      </motion.h3>
      <ul className="space-y-2 text-lg text-gray-700 mb-6 text-center">
        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          <strong>Wie lange halten die Ergebnisse?</strong> Die Ergebnisse sind sofort sichtbar und können bis zu 6 bis 12 Monate anhalten, abhängig von Ihrem Hauttyp und Lebensstil.
        </motion.li>
        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          <strong>Gibt es Nebenwirkungen?</strong> Mögliche Nebenwirkungen sind leichte Schwellungen oder Rötungen an den Injektionsstellen, die jedoch meist schnell abklingen.
        </motion.li>
        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          <strong>Wie oft sollte ich eine Behandlung durchführen lassen?</strong> Für optimale Ergebnisse empfehlen wir regelmäßige Auffrischungen alle 6 bis 12 Monate.
        </motion.li>
      </ul>
    </section>
  );
};

export default FaqSection;