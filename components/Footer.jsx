"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO, TREATMENT_LINKS, GLAMOUR_ACADEMY } from "@/lib/constants";

const Footer = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <footer className="bg-primary text-white pt-16 pb-8 relative overflow-hidden" role="contentinfo">
      {/* Decorative Top Border/Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" aria-hidden="true"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-20 relative z-10">
        {/* Navigation Links */}
        <nav className="text-left" aria-label="Footer navigation">
          <h3 className="text-2xl font-primary tracking-wide mb-6 text-accent">Navigation</h3>
          <ul className="space-y-3 text-white/80 font-light">
            <li><a href="/" className="hover:text-accent transition-colors duration-300 block w-fit focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded">Home</a></li>
            <li><a href="/about" className="hover:text-accent transition-colors duration-300 block w-fit focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded">Über mich</a></li>
            <li><a href="/contact" className="hover:text-accent transition-colors duration-300 block w-fit focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded">Kontakt</a></li>
            <li><a href="/impressum" className="hover:text-accent transition-colors duration-300 block w-fit focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded">Impressum</a></li>
            <li><a href="/datenschutz" className="hover:text-accent transition-colors duration-300 block w-fit focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded">Datenschutz</a></li>
            <li>
              <a
                href={GLAMOUR_ACADEMY.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300 inline-flex items-center gap-1.5 w-fit focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
              >
                {GLAMOUR_ACADEMY.name}
                <span className="sr-only"> (öffnet in neuem Tab)</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Behandlungen Links */}
        <nav className="text-left" aria-label="Treatment links">
          <h3 className="text-2xl font-primary tracking-wide mb-6 text-accent">Behandlungen</h3>
          <ul className="space-y-3 text-white/80 font-light">
            {TREATMENT_LINKS.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="hover:text-accent transition-colors duration-300 block w-fit focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Information */}
        <address className="text-left md:text-center lg:text-left not-italic">
          <h3 className="text-2xl font-primary tracking-wide mb-6 text-accent">Kontakt</h3>
          <ul className="space-y-4 text-white/80 font-light mx-auto md:mx-0 w-fit">
            <li className="flex items-start gap-3">
              <span>{CONTACT_INFO.practitionerName}</span>
            </li>
            <li className="flex items-center gap-3 group">
              <Mail size={18} className="text-accent group-hover:scale-110 transition-transform" aria-hidden="true" />
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                aria-label={`Email ${CONTACT_INFO.email}`}
              >
                {CONTACT_INFO.email}
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <Phone size={18} className="text-accent group-hover:scale-110 transition-transform" aria-hidden="true" />
              <a 
                href={`tel:${CONTACT_INFO.phoneFormatted.replace(/\s/g, '')}`} 
                className="hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                aria-label={`Call ${CONTACT_INFO.phone}`}
              >
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li className="flex items-start gap-3 group">
              <MapPin size={24} className="text-accent mt-1 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <a 
                href="https://maps.apple.com/?q=Osterstraße+92,+20259+Hamburg,+Germany" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent transition-colors duration-300 leading-tight focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                aria-label={`View location: ${CONTACT_INFO.location.fullAddress}`}
              >
                {CONTACT_INFO.location.address},<br />{CONTACT_INFO.location.city}, {CONTACT_INFO.location.country}
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className="container mx-auto mt-16 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <nav className="flex space-x-6" aria-label="Social media links">
            <a 
              href={CONTACT_INFO.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-accent transition-colors duration-300 hover:scale-110 transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={24} />
            </a>
            <a 
              href={CONTACT_INFO.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-accent transition-colors duration-300 hover:scale-110 transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
              aria-label="Visit our Instagram page"
            >
              <Instagram size={24} />
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="text-white/60 hover:text-accent transition-colors duration-300 hover:scale-110 transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
              aria-label={`Email ${CONTACT_INFO.email}`}
            >
              <Mail size={24} />
            </a>
          </nav>
          <motion.p
            className="text-white/40 text-sm font-light"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            &copy; {new Date().getFullYear()} <strong>{CONTACT_INFO.businessName}</strong>. Alle Rechte vorbehalten.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
