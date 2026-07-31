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
    <section className="py-24 xl:py-32 bg-primary relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20 opacity-50"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-16">

          {/* Text Content */}
          <div className="xl:w-1/2 text-center xl:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h2 text-white mb-6 leading-tight"
            >
              Bereit für Ihre <span className="text-accent italic">schönste</span> Haut?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-xl mx-auto xl:mx-0"
            >
              Vereinbaren Sie noch heute Ihren persönlichen Beratungstermin und starten Sie Ihre Reise zu mehr Wohlbefinden.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <button
                onClick={handleContactClick}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="relative overflow-hidden group bg-accent text-white rounded-full px-10 py-4 font-primary uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(212,140,112,0.4)] hover:shadow-[0_0_50px_rgba(212,140,112,0.6)] transition-all duration-500 hover:-translate-y-1"
              >
                <span className="relative z-10">Jetzt Termin buchen</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </button>
            </motion.div>
          </div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="xl:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/assets/treatments/meso8.webp"
                width={600}
                height={400}
                alt="Treatment"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 rounded-full blur-[80px] -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;
