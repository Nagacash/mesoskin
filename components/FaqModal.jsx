"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
        <span className="bg-white border border-gray-300 text-gray-800 py-3 px-6 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-300 ease-in-out text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer w-full max-w-xs text-wrap text-center">Häufige Fragen (FAQ)</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-6">
        <DialogHeader>
          <DialogTitle className="h3 text-accent text-center mb-4">Häufige Fragen (FAQ)</DialogTitle>
          <DialogDescription className="text-center text-gray-700">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Skinbooster-Behandlungen.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 hover:text-primary transition-all duration-300"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                {openAccordion === index ? <Minus className="h-5 w-5 text-primary" /> : <Plus className="h-5 w-5 text-accent" />}
              </button>
              {openAccordion === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {item.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FaqModal;