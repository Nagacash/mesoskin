"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";
import Form from "@/components/Form";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.8 } }}
      className="min-h-screen flex items-center justify-center overflow-hidden relative py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/treatments/spa10.webp"
          alt="Contact Background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch min-h-[600px]">

          {/* Contact Info Section */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.8, duration: 0.8, ease: "easeOut" },
            }}
            className="flex-1 flex flex-col justify-center"
          >
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl h-full flex flex-col justify-center">
              <h3 className="text-4xl md:text-5xl font-primary text-white mb-12 tracking-wide">Kontaktieren Sie uns</h3>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300" aria-hidden="true">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Adresse</h4>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {CONTACT_INFO.location.address}<br />
                      {CONTACT_INFO.location.city}, {CONTACT_INFO.location.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300" aria-hidden="true">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Telefon</h4>
                    <p className="text-white/80 text-lg">
                      <a 
                        href={`tel:${CONTACT_INFO.phoneFormatted.replace(/\s/g, '')}`} 
                        className="hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent rounded"
                        aria-label={`Call ${CONTACT_INFO.phone}`}
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300" aria-hidden="true">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">E-Mail</h4>
                    <p className="text-white/80 text-lg">
                      <a 
                        href={`mailto:${CONTACT_INFO.email}`} 
                        className="hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent rounded"
                        aria-label={`Email ${CONTACT_INFO.email}`}
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.0, duration: 0.8, ease: "easeOut" },
            }}
            className="flex-1"
          >
            <div className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl h-full border border-white/50 flex flex-col justify-center">
              <h3 className="text-3xl font-primary text-primary mb-8 text-center">Schreiben Sie uns</h3>
              <Form />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
