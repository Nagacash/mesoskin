"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      className="bg-gray-800 text-white py-8"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-accent transition-colors">Über mich</a></li>
            <li><a href="/treatments/dripspas" className="hover:text-accent transition-colors">Dripspas</a></li>
            <li><a href="/treatments/pdo-faden" className="hover:text-accent transition-colors">PDO Fäden</a></li>
          </ul>
        </div>

        {/* Behandlungen Links */}
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-4">Behandlungen</h3>
          <ul className="space-y-2">
            <li><a href="/treatments/doll-lips" className="hover:text-accent transition-colors">Doll Lips</a></li>
            <li><a href="/treatments/hyaluronsaure" className="hover:text-accent transition-colors">Hyaluronsäure</a></li>
            <li><a href="/treatments/skinbooster" className="hover:text-accent transition-colors">Skinbooster</a></li>
            <li><a href="/impressum" className="hover:text-accent transition-colors">Impressum</a></li>
            <li><a href="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</a></li>
          </ul>
        </div>



        {/* Contact Information */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
          <ul className="space-y-2 mx-auto w-fit">
            <li className="flex items-center gap-2">Body & Mind by Natalie Zimmermann</li>
            <li className="flex items-center gap-2">Physiotherapie</li>
            <li className="flex items-center gap-2"><Mail size={18} className="text-accent" /> E-Mail: <a href="mailto:kontakt@mesoskinhamburg.de" className="hover:text-accent transition-colors">kontakt@mesoskinhamburg.de</a></li>
            <li className="flex items-center gap-2"><Phone size={18} className="text-accent" /> Telefon: <a href="tel:+494023491990" className="hover:text-accent transition-colors">+49 40 23491990</a></li>
            <li className="flex items-center gap-2"><MapPin size={24} className="text-accent" /> Adresse: <a href="https://maps.apple.com/place?map=explore&place-id=IAB8A0CAEED0E2BF3&address=Rothenbaumchaussee+156%2C+20149+Hamburg%2C+Germany&coordinate=53.5784825%2C9.9893272&name=Body+%26+Mind+by+Natalie+Zimmermann&_provider=9902" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Rothenbaumchaussee 156, 20149 Hamburg, Deutschland</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 pt-8 border-t border-gray-700">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com/mesoskin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://instagram.com/mesoskin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
            <Instagram size={24} />
          </a>
          <a href="mailto:kontakt@mesoskinhamburg.de" className="text-white hover:text-accent transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <motion.p
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          &copy; 2025 <strong>Mesoskin</strong>. Alle Rechte vorbehalten.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
