"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";

const Liposana3Page = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen pb-12 xl:pt-32"
    >
      {/* Hero Section */}
      <section className="bg-accent-100 py-24 mt-32 mb-12">
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="text-center xl:text-left xl:w-1/2 xl:flex-shrink-0">
            <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h1 mb-4 text-primary"
            >
              Liposana - Frequenzen die Ihr Leben verändern Health&Beauty
            </motion.h1>
            <motion.p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lead max-w-2xl mx-auto xl:mx-0 text-gray-700"
            >
              Die LIPOSANA3-Gerätetechnologie setzt auf 3 patentierte Frequenzmuster, die ein Behandlungskonzept aus Medizin, Ästhetik und Therapie ergibt.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="xl:w-1/2 flex justify-center xl:justify-end xl:-mr-16"
          >
            <Image
              src="/assets/treatments/girls2.jpg"
              width={500}
              height={350}
              alt="Liposana 3"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">


        {/* Key Benefits Section */}
        <section className="mb-12 py-12">
          <motion.h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-accent mt-24"
          >
            Vorteile der LIPOSANA3-Technologie
          </motion.h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 ml-4 mb-6">
            <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-4">
              <strong>Lymphaktivierung:</strong> Aktivierung des Lymphsytems, dem Filter unseres Körpers. Gesundheit ist nur mit einem gesunden Lymphfluss möglich. Sie ist von größter Bedeutung für all unsere gesundheitlichen Probleme.
            </motion.li>
            <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-4">
              <strong>Fettzellen - Entleerung:</strong> Fettzellenerwärmung und -entleerung durch entzündungshemmenden Ultraschall.
            </motion.li>
            <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-4">
              <strong>Aufbau der Tiefenmuskulatur:</strong> Aufbau der Tiefenmuskulatur über neuromuskuläre Stimulation, ästhetische und therapeutische Basis.
            </motion.li>
          </ul>
        </section>


        <section className="pt-24 mb-12 bg-gray-50 p-12 rounded-lg shadow-md">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h3 mb-4 text-accent"
          >
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-6 text-lg text-gray-700"
          >
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-6 text-lg text-gray-700"
          >
            Hartnäckige Problemzonen, die sich trotz Sport und Ernährung einfach nicht verbessern lassen? Die ausgeklügelte Technologie aus der Schweiz, sorgt für einen gezielten Fettabbau und strafft die Körperkonturen mit Langzeiteffekt.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h3 mb-4 text-accent"
          >
            Mögliche Behandlungsbereiche
          </motion.h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4 mb-6">
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.7, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Umfang Reduzierung</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.8, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Gewebsstraffung</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.9, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Reiterhose</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.0, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Cellulite</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.1, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Übersäuerung</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.2, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Lipödem</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.3, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Erkrankung des Bewegungsapparates</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.4, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Aktivierung des Stoffwechsels</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.5, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Lymphstau</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.6, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Anti-Aging</motion.li>
            <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.7, duration: 0.8 }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Fibromyalgie</motion.li>
          </ul>
        </section>



        {/* Preise Section */}
        <section className="pt-24 mb-12">
          <motion.h2
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h2 mb-6 text-accent text-center"
          >
            Preise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2 text-primary">Erstbehandlung</h3>
              <p className="text-gray-700 mb-4">Inclusive Consulting</p>
              <p className="text-3xl font-bold text-accent mb-2">249 Euro</p>
              <p className="text-gray-500 text-sm">Behandlungsdauer: 2 Stunden</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2 text-primary">Folgebehandlung</h3>
              <p className="text-gray-700 mb-4">Nach Erstsitzung</p>
              <p className="text-3xl font-bold text-accent mb-2">199 Euro</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2 text-primary">6er Abo</h3>
              <p className="text-gray-700 mb-4">Paketpreis</p>
              <p className="text-3xl font-bold text-accent mb-2">999 Euro</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2 text-primary">10er Abo</h3>
              <p className="text-gray-700 mb-4">Paketpreis</p>
              <p className="text-3xl font-bold text-accent mb-2">1650 Euro</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mb-12">


          <CtaSection />
        </section>
      </div>
    </motion.div>
  );
};

export default Liposana3Page;
