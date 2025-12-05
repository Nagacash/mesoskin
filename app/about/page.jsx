'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Form from '@/components/Form';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { useContext } from 'react';
import { CursorContext } from '@/components/CursorContext';

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <section className='min-h-screen overflow-x-hidden'>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about/meso-annette.jpg"
            alt="Annette Fascher Background"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-secondary"></div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1
              className="text-6xl md:text-8xl font-primary text-white mb-4 tracking-wide"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              Über Mich
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wider uppercase">
              Annette Fascher-Wendlandt
            </p>
          </motion.div>
        </div>
      </div>

      <div className='container mx-auto py-24 relative z-10'>

        {/* Profile Section */}
        <div className='flex flex-col xl:flex-row items-center gap-16 mb-32'>
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='flex-1 relative'
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src='/assets/about/meso-annette.jpg'
                width={600}
                height={800}
                alt='Annette Fascher-Wendlandt'
                className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700'
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex-1'
          >
            <h2
              className='h2 mb-8 text-primary'
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              Leidenschaft für <span className="text-accent italic">natürliche</span> Schönheit
            </h2>
            <div className='space-y-6 text-lg text-primary/80 font-light leading-relaxed'>
              <p>
                Seit über 30 Jahren bin ich leidenschaftlich in der Schönheitsbranche tätig. Was als Beruf begann, wurde schnell zur Berufung. Als Expertin für Anti-Aging, Bodyforming und Straffung habe ich es mir zur Aufgabe gemacht, die natürliche Schönheit meiner Klienten nicht nur zu bewahren, sondern sie zum Strahlen zu bringen.
              </p>
              <p>
                Besonders die ästhetische Medizin hat es mir angetan. Mit der Einführung von Hyaluronsäure und PDO-Fäden eröffneten sich neue Welten der sanften Verjüngung. Durch stetige Fortbildungen und Master Classes halte ich mein Wissen immer auf dem neuesten Stand, um Ihnen die besten und sichersten Behandlungen bieten zu können.
              </p>
              <div className="border-l-4 border-accent pl-6 py-2 my-8 bg-accent/5 rounded-r-lg">
                <p className='font-primary text-xl italic text-primary font-medium'>
                  "Schönheit ist für mich kein starres Ideal, sondern das harmonische Zusammenspiel von innerem Wohlbefinden und äußerer Ausstrahlung."
                </p>
              </div>
              <p>
                Bei <strong>Mesoskin Hamburg</strong> habe ich einen Ort geschaffen, an dem Sie im Mittelpunkt stehen. Ein Ort der Ruhe, der Kompetenz und der ehrlichen Beratung. Lassen Sie uns gemeinsam Ihre persönliche Schönheit entfalten.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Philosophy & Qualifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {/* Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-center"
          >
            <h3 className="h3 mb-6 text-accent">Maßgeschneidert</h3>
            <p className="text-lg text-primary/80 leading-relaxed">
              Jeder Mensch ist einzigartig, und genau so sollte auch seine Pflege sein. Bei Mesoskin gibt es keine Standardlösungen. Jede Behandlung beginnt mit einem ausführlichen Gespräch und einer genauen Analyse. Wir entwickeln gemeinsam einen Plan, der perfekt auf Ihre Hautbedürfnisse und Ihre Lebenssituation abgestimmt ist.
            </p>
          </motion.div>

          {/* Qualifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary p-10 rounded-3xl shadow-lg text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <h3 className="h3 mb-8 text-white">Qualifikationen</h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 mt-2.5 bg-accent rounded-full flex-shrink-0"></span>
                <div>
                  <strong className="block text-accent text-lg mb-1">Heilpraktikerin seit 1995</strong>
                  <span className="text-white/70 font-light">Langjährige Erfahrung in der alternativen Medizin und Gesundheitsförderung.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 mt-2.5 bg-accent rounded-full flex-shrink-0"></span>
                <div>
                  <strong className="block text-accent text-lg mb-1">Psychologische Beraterin</strong>
                  <span className="text-white/70 font-light">Ganzheitliche Unterstützung für Körper und Geist.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 mt-2.5 bg-accent rounded-full flex-shrink-0"></span>
                <div>
                  <strong className="block text-accent text-lg mb-1">Expertin für Infusionstherapie</strong>
                  <span className="text-white/70 font-light">Spezialisiert auf Vitamin- und NAD+ Infusionen für Vitalität.</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="mb-32">
          <TestimonialCarousel />
        </div>

        {/* Contact Form Section */}
        <div className='max-w-4xl mx-auto bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-white/50'>
          <div className='text-center mb-12'>
            <h2
              className='h2 mb-4'
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              Termin vereinbaren
            </h2>
            <p className='text-lg text-primary/70'>
              Sie möchten einen Termin vereinbaren? Füllen Sie das Kontaktformular aus und ich werde mich schnellsmöglich zurückmelden.
            </p>
          </div>
          <Form
            fullNamePlaceholder='Ihr Vorname'
            lastNamePlaceholder='Nachname'
            interestPlaceholder='Für welche Behandlung interessieren Sie sich?'
            emailPlaceholder='E-Mail'
            phonePlaceholder='Telefon'
            messagePlaceholder='Nachricht'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
