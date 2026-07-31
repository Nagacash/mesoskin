"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Minus, Plus } from "lucide-react";

const faqData = [
  {
    question: "Wie lange halten die Ergebnisse?",
    answer:
      "Die Ergebnisse sind sofort sichtbar und können bis zu 6 bis 12 Monate anhalten, abhängig von Ihrem Hauttyp und Lebensstil.",
  },
  {
    question: "Gibt es Nebenwirkungen?",
    answer:
      "Mögliche Nebenwirkungen sind leichte Schwellungen oder Rötungen an den Injektionsstellen, die jedoch meist schnell abklingen.",
  },
  {
    question: "Wie oft sollte ich eine Behandlung durchführen lassen?",
    answer:
      "Für optimale Ergebnisse empfehlen wir regelmäßige Auffrischungen alle 6 bis 12 Monate.",
  },
];

const FaqModal = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group relative px-8 py-4 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300"></div>
          <span className="relative z-10 text-primary font-primary uppercase tracking-widest text-sm font-medium group-hover:text-accent transition-colors duration-300">
            Häufige Fragen (FAQ)
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-white/95 backdrop-blur-xl border-none shadow-2xl">
        <div className="p-10">
          <DialogHeader>
            <DialogTitle className="h3 text-primary text-center mb-4">Häufige Fragen</DialogTitle>
            <DialogDescription className="text-center text-primary/60 text-lg font-light mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Behandlungen.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-primary/5 rounded-xl overflow-hidden bg-white/50 hover:bg-white/80 transition-colors duration-300">
                <button
                  className="flex justify-between items-center w-full text-left p-6 font-primary tracking-wide text-lg text-primary hover:text-accent transition-colors duration-300"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <div className={`p-2 rounded-full transition-colors duration-300 ${openAccordion === index ? 'bg-accent text-white' : 'bg-primary/5 text-primary'}`}>
                    {openAccordion === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-primary/70 leading-relaxed font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FaqModal;