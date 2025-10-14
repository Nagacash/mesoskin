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
      <BenefitsSection />
      <ProcessSection />
      <CtaSection />
      <div className="text-center mb-24 flex justify-center items-center gap-4">
        <button
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="btn btn-lg bg-accent text-white hover:bg-accent-dark shadow-lg rounded-full px-8 py-4 transition-all duration-300 ease-in-out transform hover:scale-105 text-xl focus:outline-none focus:ring-4 focus:ring-accent-300"
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
