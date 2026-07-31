"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function initials(name) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const testimonials = [
  {
    id: 1,
    name: "Anna Schmidt",
    title: "Sportlerin",
    text: "Die Behandlungen bei Mesoskin Hamburg haben meine Haut revitalisiert und mir ein unglaubliches Gefühl von Frische verliehen. Ich fühle mich energiegeladener und meine Haut strahlt. Absolut empfehlenswert!",
  },
  {
    id: 2,
    name: "Irene Mandoou",
    title: "Pilates Teacher",
    text: "Als Pilates Teacher lege ich Wert auf Wohlbefinden. Die Expertise und die maßgeschneiderten Lösungen von Mesoskin Hamburg sind herausragend. Meine Haut war noch nie so gut versorgt.",
  },
  {
    id: 3,
    name: "Lena Meier",
    title: "Flugbegleiterin",
    text: "Durch meinen Beruf ist meine Haut oft strapaziert. Mesoskin Hamburg bietet genau die Pflege, die ich brauche, um frisch und erholt auszusehen. Die Ergebnisse sind einfach fantastisch!",
  },
  {
    id: 4,
    name: "Dr. Klaus Weber",
    title: "Longevity Experte",
    text: "Die ganzheitlichen Ansätze bei Mesoskin Hamburg sind beeindruckend. Als Longevity Experte schätze ich die fundierte Beratung und die effektiven Behandlungen, die das allgemeine Wohlbefinden fördern.",
  },
  {
    id: 5,
    name: "Sophie Müller",
    title: "Unternehmerin",
    text: "In meinem stressigen Alltag ist die Zeit bei Mesoskin Hamburg eine Oase der Ruhe. Die Behandlungen sind nicht nur entspannend, sondern liefern auch sichtbare Ergebnisse. Meine Haut dankt es mir!",
  },
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      setCanScrollLeft(carouselRef.current.scrollLeft > 0);
      setCanScrollRight(
        carouselRef.current.scrollLeft + carouselRef.current.offsetWidth <
          carouselRef.current.scrollWidth
      );
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollability);
      checkScrollability();
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", checkScrollability);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 2;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 xl:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="h2 mb-12 text-center text-xl md:text-2xl">Das sagen unsere Kund*innen über uns</h2>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth pb-4 hide-scrollbar gap-4"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="flex-none w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] snap-center bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center min-h-[320px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="w-20 h-20 rounded-full mb-4 flex items-center justify-center bg-gradient-to-br from-accent/30 to-primary/10 text-primary font-primary text-xl tracking-wide ring-2 ring-accent/40"
                  aria-hidden
                >
                  {initials(testimonial.name)}
                </div>
                <div className="flex text-yellow-400 mb-4" aria-label="5 von 5 Sternen">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} aria-hidden />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 flex-grow text-sm leading-relaxed">{testimonial.text}</p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </motion.div>
            ))}
          </div>

          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Vorherige Bewertungen"
              className="hidden md:flex absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-accent z-10 items-center justify-center"
            >
              <FaChevronLeft className="text-gray-600" aria-hidden />
            </button>
          )}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Nächste Bewertungen"
              className="hidden md:flex absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-accent z-10 items-center justify-center"
            >
              <FaChevronRight className="text-gray-600" aria-hidden />
            </button>
          )}
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;
