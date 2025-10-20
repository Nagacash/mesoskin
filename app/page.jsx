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
      <div className="text-center mb-48 mt-12 py-12 flex flex-col md:flex-row justify-center items-center gap-4">
        <FaqModal />
      </div>
    </>
  );
};

export default Home;
