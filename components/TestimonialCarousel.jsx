"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Anna Schmidt",
    title: "Sportlerin",
    text: "Die Behandlungen bei Mesoskin Hamburg haben meine Haut revitalisiert und mir ein unglaubliches Gefühl von Frische verliehen. Ich fühle mich energiegeladener und meine Haut strahlt. Absolut empfehlenswert!",
    // image: "/assets/testimonials/person1.jpg", // Placeholder image
  },
  {
    id: 2,
    name: "Irene Mandoou",
    title: "Pilates Teacher",
    text: "Als Pilates Teacher lege ich Wert auf Wohlbefinden. Die Expertise und die maßgeschneiderten Lösungen von Mesoskin Hamburg sind herausragend. Meine Haut war noch nie so gut versorgt.",
    // image: "/assets/testimonials/person2.jpg", // Placeholder image
  },
  {
    id: 3,
    name: "Lena Meier",
    title: "Flugbegleiterin",
    text: "Durch meinen Beruf ist meine Haut oft strapaziert. Mesoskin Hamburg bietet genau die Pflege, die ich brauche, um frisch und erholt auszusehen. Die Ergebnisse sind einfach fantastisch!",
    // image: "/assets/testimonials/person3.jpg", // Placeholder image
  },
  {
    id: 4,
    name: "Dr. Klaus Weber",
    title: "Longevity Experte",
    text: "Die ganzheitlichen Ansätze bei Mesoskin Hamburg sind beeindruckend. Als Longevity Experte schätze ich die fundierte Beratung und die effektiven Behandlungen, die das allgemeine Wohlbefinden fördern.",
    // image: "/assets/testimonials/person4.jpg", // Placeholder image
  },
  {
    id: 5,
    name: "Sophie Müller",
    title: "Unternehmerin",
    text: "In meinem stressigen Alltag ist die Zeit bei Mesoskin Hamburg eine Oase der Ruhe. Die Behandlungen sind nicht nur entspannend, sondern liefern auch sichtbare Ergebnisse. Meine Haut dankt es mir!",
    // image: "/assets/testimonials/person5.jpg", // Placeholder image
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
      checkScrollability(); // Initial check
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", checkScrollability);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 2; // Scroll half the width of the carousel
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 xl:py-24 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="h2 mb-12 text-center text-xl md:text-2xl">Das sagen unsere Kund*innen über uns</h2>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth pb-4 hide-scrollbar"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="flex-none w-full md:w-1/2 lg:w-1/3 snap-center bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  {/* <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    objectFit="cover"
                    className="rounded-full"
                  /> */}
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 flex-grow">{testimonial.text}</p>
                <p className="font-semibold text-primary whitespace-nowrap">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows for Desktop */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:block absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg focus:outline-none z-10"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg focus:outline-none z-10"
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          )}
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;
