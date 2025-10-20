"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CtaSection = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      className="py-24 xl:py-32"
    >
      <div className="container mx-auto text-center flex flex-col xl:flex-row items-center justify-center gap-16">
        <div className="bg-accent-100 p-8 rounded-lg shadow-xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-center text-primary"
          >
            Bereit für Ihre schönste Haut?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lead max-w-xl mx-auto mb-8 text-center text-gray-700"
          >
            Buchen Sie noch heute einen Termin und lassen Sie sich von uns verwöhnen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center"
            >
            <button
                onClick={handleContactClick}
                className="btn bg-primary text-white hover:bg-primary-dark shadow-lg rounded-full px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
                Jetzt Termin buchen
            </button>
            </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="xl:w-1/2 flex justify-center bg-white p-6 rounded-lg shadow-xl"
        >
          <Image
            src="/assets/treatments/meso8.jpg"
            width={400}
            height={800}
            alt="Liposana 3 Machine"
            className="rounded-lg shadow-xl grayscale w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CtaSection;
