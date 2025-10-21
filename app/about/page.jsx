'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Form from '@/components/Form';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className='min-h-screen overflow-x-hidden z-10 pt-32 xl:pt-32'
    >
      <div className='container mx-auto pt-40 pb-24'>
        <div className='text-center mb-24 bg-accent-100 p-8 rounded-lg shadow-md'>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='h1 mb-4'>Über mich</motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h1 mb-4 text-primary"><strong>Mesoskin</strong> Hamburg</motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className='max-w-2xl mx-auto'>
            Willkommen in der Welt der natürlichen Schönheit!
          </motion.p>
        </div>

        <div className='flex flex-col xl:flex-row items-center justify-between gap-16 mb-24'>
          <div className='flex-1'>
            <h2 className='h2 mb-6'>Über Annette Fascher</h2>
            <div className='space-y-6 text-lg'>
              <p>
                Seit über 30 Jahren bin ich leidenschaftlich in der Schönheitsbranche tätig und habe mich als langjährige Expertin im Anti-Aging-Bereich sowie im Bodyforming und der Straffung etabliert. Besonders in der Anti-Aging-Behandlung habe ich meine Expertise vertieft. Seit der Einführung von Hyaluronsäure habe ich zahlreiche Fortbildungen absolviert, darunter spezialisierte Master Classes in der Anwendung von PDO-Fäden und Hyaluronsäure-Injektionen mit stumpfer Kanüle.
              </p>
              <p>
                Mein Ziel ist es, meinen Klienten zu einem strahlenden und gesunden Erscheinungsbild zu verhelfen. Dabei greife ich auf die neuesten Entwicklungen und Techniken in der ästhetischen Medizin zurück, um individuelle Lösungen zu bieten, die auf Ihre Bedürfnisse abgestimmt sind.
              </p>
              <p>
                Ich lade Sie ein, sich mit mir auf eine transformative Reise zu begeben, die Ihre Gesundheit, Ihr Wohlbefinden und Ihre natürliche Schönheit in den Mittelpunkt stellt. Lassen Sie uns gemeinsam Ihre persönliche Schönheit entfalten!
              </p>
              <p className='font-serif italic text-xl'>
                Schönheit, die bleibt – seit 30 Jahren, natürlich und echt.
              </p>
            <p className="lead max-w-2xl mx-auto text-gray-700 mb-8">
              Mit <strong>Mesoskin</strong> Hamburg steht Annette Fascher-Wendlandt in Hamburg-Rothenbaumchausee 156 für einen exklusiven Ort, der ganz der sanften und gesunden Behandlung der Haut gewidmet ist – mit authentischen Ergebnissen. Faltenbehandlung, Gesichtsformung und Hautverjüngung sind hier wichtige Stichworte. Zu den Schwerpunkten ihrer Arbeit zählt im Bereich der Ästhetik die Doll Lip-Technik. Für diese spezielle Technik wurde sie in Moskau und London ausgebildet. Dazu bietet Annette Fascher-Wendlandt begleitende und ergänzende Maßnahmen wie Kraft und Gesundheit spendende Infusionen an.
            </p>
            </div>
            <button className='btn btn-lg block mx-auto mt-8'>
              Jetzt Termin vereinbaren
            </button>
          </div>
                    <div className='flex-1 flex justify-center items-center gap-4 bg-white p-6 rounded-lg shadow-xl'>
                      <Image
                        src='/assets/about/meso-annette.jpg'
                        width={500}
                        height={350}
                        alt='Annette Fascher-Wendlandt'
                        className='rounded-lg shadow-2xl w-full h-[500px] md:h-[700px] object-cover'
                      />
                    </div>
        </div>

        <div className='text-center max-w-3xl mx-auto mb-24 bg-accent-100 p-8 rounded-lg shadow-md'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='h2 mb-6'>Maßgeschneidert</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='text-lg mb-8'>
            Bei <strong>Mesoskin</strong> Hamburg steht immer das individuelle Angebot im Zentrum. Warum? Weil jeder Mensch und jede Haut anders ist. Oder anders formuliert: Der Mensch steht im Vordergrund. Entsprechend beginnt jede Behandlung mit einem ausführlichen Beratungsgespräch und einem individuelle Therapieplan. Eine umfassende Nachbetreuung steht ebenfalls „auf dem Programm“.
          </motion.p>

        </div>

        <div className='text-center max-w-3xl mx-auto mb-24 bg-accent-100 p-8 rounded-lg shadow-md'>
          <h2 className='h2 mb-6'>Qualifikationen</h2>
          <ul className='text-lg text-left list-disc list-inside'>
            <li className='mb-4'>
              <strong>Heilpraktikerin seit 1995:</strong> Langjährige Erfahrung in der alternativen Medizin und Gesundheitsförderung.
            </li>
            <li className='mb-4'>
              <strong>Zertifizierte psychologische Beraterin:</strong> Weiterbildung in psychologischer Beratung und Coaching, um Klienten bei der Bewältigung von Lebensherausforderungen zu unterstützen.
            </li>
            <li className='mb-4'>
              <strong>Spezialisiert auf Vitamininfusionen:</strong> Expertise in der Anwendung von Vitamininfusionen zur Förderung von Energie, Immunsystem und Entgiftung.
            </li>
            <li className='mb-4'>
              <strong>Regelmäßige Fortbildungen:</strong> Kontinuierliche Weiterbildung, um mein Wissen über aktuelle Trends und Entwicklungen im Gesundheitsbereich zu vertiefen.
            </li>
          </ul>
        </div>

        <TestimonialCarousel />

        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-8 pb-12'>
            <h2 className='h2'>Termin vereinbaren</h2>
            <p className='mt-4 text-lg'>
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
    </motion.section>
  );
};

export default About;
