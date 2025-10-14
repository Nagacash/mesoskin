"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import Image from "next/image";

const ImageGallerySection = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="text-center mb-12"
        >
          <h2 className="h2 mb-4">Entspannung und Wohlbefinden</h2>
          <p className="lead max-w-xl mx-auto">
            Tauchen Sie ein in eine Welt der Ruhe und Erholung. Unsere Behandlungen sind darauf ausgelegt, Körper und Geist in Einklang zu bringen und Ihnen ein Gefühl tiefer Entspannung zu schenken.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Image
              src="/assets/home/spa7.jpg"
              width={500}
              height={350}
              alt="Spa Treatment 7"
              className="rounded-lg shadow-lg w-full h-80 object-cover grayscale"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Image
              src="/assets/home/spa2.jpg"
              width={500}
              height={350}
              alt="Spa Treatment 2"
              className="rounded-lg shadow-lg w-full h-80 object-cover grayscale"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Image
              src="/assets/home/spa3.jpg"
              width={500}
              height={350}
              alt="Spa Treatment 3"
              className="rounded-lg shadow-lg w-full h-80 object-cover grayscale"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Image
              src="/assets/home/spa4.jpg"
              width={500}
              height={350}
              alt="Spa Treatment 4"
              className="rounded-lg shadow-lg w-full h-80 object-cover grayscale"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Image
              src="/assets/home/spa5.jpg"
              width={500}
              height={350}
              alt="Spa Treatment 5"
              className="rounded-lg shadow-lg w-full h-80 object-cover grayscale"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Image
              src="/assets/home/spa6.jpg"
              width={500}
              height={350}
              alt="Spa Treatment 6"
              className="rounded-lg shadow-lg w-full h-80 object-cover grayscale"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;