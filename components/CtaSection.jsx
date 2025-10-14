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
      <div className="container mx-auto text-center flex flex-col xl:flex-row items-center justify-center gap-8">
        <div className="xl:w-1/2">
          <motion.h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-center"
          >
            Bereit für Ihre schönste Haut?
          </motion.h2>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lead max-w-xl mx-auto mb-8 text-center"
          >
            Buchen Sie noch heute einen Termin und lassen Sie sich von uns verwöhnen.
          </motion.p>

        </div>
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="xl:w-1/2 flex justify-center"
        >
          <Image
            src="/assets/treatments/machine.jpeg"
            width={400}
            height={300}
            alt="Liposana 3 Machine"
            className="rounded-lg shadow-xl border-4 border-primary grayscale"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CtaSection;
