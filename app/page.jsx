'use client';

import { CursorContext } from '@/components/CursorContext';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import Image from 'next/image';
import ModalVideo from '@/components/ModalVideo';
import { useRouter } from 'next/navigation';

import BenefitsSection from '@/components/BenefitsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import ProcessSection from '@/components/ProcessSection';
import FaqModal from '@/components/FaqModal';


const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const router = useRouter();
  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <BenefitsSection />

      <ProcessSection />
      <CtaSection />
      <div className="text-center mb-24 flex flex-col md:flex-row justify-center items-center gap-4">
        <button
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="btn btn-lg bg-accent text-white hover:bg-accent-dark shadow-lg rounded-full px-6 py-3 text-lg md:px-8 md:py-4 md:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-300"
          onClick={handleContactClick}
        >
          Jetzt Termin buchen
        </button>
        <FaqModal />
      </div>
    </>
  );
};

export default Home;
