'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Form from '@/components/Form';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className='min-h-screen overflow-x-hidden'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-56 pb-24'>
        <div className='text-center mb-24'>
          <h1 className='h1 mb-4'>Über mich</h1>
          <p className='lead max-w-2xl mx-auto'>
            Mesoskin Hamburg
          </p>
          <p className='max-w-2xl mx-auto'>
            Willkommen in der Welt der natürlichen Schönheit!
          </p>
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
              <p>
                Mit Mesoskin Hamburg steht Annette Fascher-Wendlandt in Hamburg-Wandsbek für einen exklusiven Ort, der ganz der sanften und gesunden Behandlung der Haut gewidmet ist – mit authentischen Ergebnissen. Faltenbehandlung, Gesichtsformung und Hautverjüngung sind hier wichtige Stichworte. Zu den Schwerpunkten ihrer Arbeit zählt im Bereich der Ästhetik die Doll Lip-Technik. Für diese spezielle Technik wurde sie in Moskau und London ausgebildet. Dazu bietet Annette Fascher-Wendlandt begleitende und ergänzende Maßnahmen wie Kraft und Gesundheit spendende Infusionen an.
              </p>
            </div>
            <button className='btn btn-lg block mx-auto mt-8'>
              Jetzt Termin vereinbaren
            </button>
          </div>
          <div className='flex-1 flex justify-center items-center gap-4'>
            <div className='relative w-full h-96 transform -rotate-3 transition-transform duration-300 hover:rotate-0'>
              <Image
                src='/assets/about/anette.jpeg'
                layout='fill'
                objectFit='cover'
                alt='Annette Fascher-Wendlandt'
                className='rounded-lg shadow-lg'
              />
            </div>


          </div>
        </div>

        <div className='text-center max-w-3xl mx-auto mb-24'>
          <h2 className='h2 mb-6'>Maßgeschneidert</h2>
          <p className='text-lg mb-8'>
            Bei Mesoskin Hamburg steht immer das individuelle Angebot im Zentrum. Warum? Weil jeder Mensch und jede Haut anders ist. Oder anders formuliert: Der Mensch steht im Vordergrund. Entsprechend beginnt jede Behandlung mit einem ausführlichen Beratungsgespräch und einem individuelle Therapieplan. Eine umfassende Nachbetreuung steht ebenfalls „auf dem Programm“.
          </p>
          <button className='btn btn-lg block mx-auto'>Termin vereinbaren</button>
        </div>

        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-8'>
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
            buttonText='Termin vereinbaren'
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
