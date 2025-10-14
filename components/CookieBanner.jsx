"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === null) {
      setIsVisible(true);
    } else {
      setCookieConsent(consent === "true");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setCookieConsent(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setCookieConsent(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between shadow-lg z-50"
        >
          <p className="text-sm text-center md:text-left mb-3 md:mb-0">
            Wir verwenden Cookies, um Ihr Erlebnis auf unserer Website zu verbessern. Durch die Nutzung unserer Website stimmen Sie unserer Verwendung von Cookies zu.
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleAccept}
              className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Akzeptieren
            </button>
            <button
              onClick={handleDecline}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Ablehnen
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
