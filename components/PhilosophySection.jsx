import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { useContext } from "react";
import { CursorContext } from "./CursorContext";

const galleryItems = [
  {
    id: 1,
    src: "/assets/ing7.webp",
    alt: "Spa Treatment 7",
    title: "Entspannung Pur",
    link: "#",
  },
  {
    id: 2,
    src: "/assets/home/spa2.webp",
    alt: "Spa Treatment 2",
    title: "Wohlfühlmomente",
    link: "#",
  },
  {
    id: 3,
    src: "/assets/new5.webp",
    alt: "Spa Treatment 3",
    title: "Harmonie für die Haut",
    link: "#",
  },
  {
    id: 4,
    src: "/assets/new6.webp",
    alt: "Spa Treatment 4",
    title: "Revitalisierende Pflege",
    link: "#",
  },
  {
    id: 5,
    src: "/assets/home/spa5.webp",
    alt: "Spa Treatment 5",
    title: "Sanfte Berührung",
    link: "#",
  },
  {
    id: 6,
    src: "/assets/home/spa6.webp",
    alt: "Spa Treatment 6",
    title: "Glänzende Ergebnisse",
    link: "#",
  },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const PhilosophySection = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <section className="relative py-24 xl:py-32 bg-secondary overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2
            className="h2 mb-6"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            Entspannung & Wohlbefinden
          </h2>
          <p className="lead max-w-2xl mx-auto text-primary/80">
            Entdecken Sie bei <strong>Mesoskin</strong> natürliche Schönheit und ganzheitliche Gesundheit.
            Unsere maßgeschneiderten Konzepte fördern Ihr Wohlbefinden von innen und außen.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid flex -ml-8 w-auto"
          columnClassName="my-masonry-grid_column pl-8 bg-clip-padding"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <div
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <div className="relative h-[400px] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-xl font-primary tracking-wide text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        {/* Philosophy Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4 block">
            Unsere Philosophie
          </span>
          <h3 className="h3 mb-8">Ganzheitliche Balance</h3>
          <p className="text-lg md:text-xl leading-relaxed text-primary/80 font-light">
            "Ich glaube an einen integrativen Ansatz, der Körper, Geist und Seele miteinander verbindet.
            Meine Erfahrung als Heilpraktikerin und psychologische Beraterin erlaubt es mir,
            maßgeschneiderte Lösungen anzubieten, die auf die individuellen Bedürfnisse meiner Klienten abgestimmt sind."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PhilosophySection;
