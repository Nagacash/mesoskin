import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { useContext } from "react";
import { CursorContext } from "./CursorContext";

const galleryItems = [
  {
    id: 1,
    src: "/assets/ing7.png",
    alt: "Spa Treatment 7",
    title: "Entspannung Pur",
    link: "#",
  },
  {
    id: 2,
    src: "/assets/home/spa2.jpg",
    alt: "Spa Treatment 2",
    title: "Wohlfühlmomente",
    link: "#",
  },
  {
    id: 3,
    src: "/assets/new5.jpg",
    alt: "Spa Treatment 3",
    title: "Harmonie für die Haut",
    link: "#",
  },
  {
    id: 4,
    src: "/assets/new6.jpg",
    alt: "Spa Treatment 4",
    title: "Revitalisierende Pflege",
    link: "#",
  },
  {
    id: 5,
    src: "/assets/home/spa5.jpg",
    alt: "Spa Treatment 5",
    title: "Sanfte Berührung",
    link: "#",
  },
  {
    id: 6,
    src: "/assets/home/spa6.jpg",
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
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="py-12 xl:py-24 bg-gray-50"
    >
      <div className="container mx-auto text-center">



        {/* New section: Entspannung und Wohlbefinden */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="text-center mb-24 bg-accent-100 p-8 rounded-lg shadow-md"
        >
          <h2 className="h2 mb-4">Entspannung und Wohlbefinden</h2>
          <p className="lead max-w-xl mx-auto mb-4">Entdecken Sie bei <strong>Mesoskin</strong> natürliche Schönheit und ganzheitliche Gesundheit. Unsere maßgeschneiderten Gesundheits- und Schönheitskonzepte fördern Ihr Wohlbefinden von innen und außen. Starten Sie Ihre Reise zu einem strahlenden Ich.</p>
          <p className="lead max-w-xl mx-auto">
            Tauchen Sie ein in eine Welt der Ruhe und Erholung. Unsere Behandlungen sind darauf ausgelegt, Körper und Geist in Einklang zu bringen und Ihnen ein Gefühl tiefer Entspannung zu schenken.
          </p>
        </motion.div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid flex -ml-4 w-auto"
          columnClassName="my-masonry-grid_column pl-4 bg-clip-padding"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="relative group mb-4 overflow-hidden rounded-lg shadow-2xl h-[350px]"
            >
              <a href={item.link} className="block">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="transition-transform duration-300 group-hover:scale-105 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold text-center px-4">{item.title}</h3>
                </div>
              </a>
            </motion.div>
          ))}
        </Masonry>
        <h2 className="h2 mb-6 mt-12">Philosophie:</h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lead max-w-3xl mx-auto text-primary mb-24 mt-12">
          Ich glaube an einen integrativen Ansatz, der Körper, Geist und Seele miteinander verbindet. Meine Erfahrung als Heilpraktikerin und psychologische Beraterin erlaubt es mir, maßgeschneiderte Lösungen anzubieten, die auf die individuellen Bedürfnisse meiner Klienten abgestimmt sind. Gemeinsam arbeiten wir daran, sowohl körperliche als auch psychische Herausforderungen zu meistern und das volle Potenzial zu entfalten.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default PhilosophySection;
