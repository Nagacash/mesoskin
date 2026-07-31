"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import TreatmentHero from "@/components/TreatmentHero";
import { TREATMENT_LINKS } from "@/lib/constants";

const Treatments = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen overflow-x-hidden"
    >
      <TreatmentHero
        title="Behandlungen"
        subtitle="Ästhetische Medizin, Infusionen und ganzheitliche Pflege — individuell auf Sie abgestimmt."
        imageSrc="/assets/treatments/treatments-hero.webp"
        imageAlt="Behandlungen bei Mesoskin Hamburg"
        overlayOpacity="bg-black/35"
      />

      <div className="container mx-auto py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="lead text-primary/80">
            Entdecken Sie unser Angebot von Dripspas und NAD+ über PDO-Fäden,
            Hyaluronsäure, Skinbooster bis Hypoxie-Training — in ruhiger
            Atmosphäre mit persönlicher Beratung.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
          {TREATMENT_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href.split("#")[0]}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="block rounded-2xl border border-accent/20 bg-white/80 px-6 py-5 text-primary hover:border-accent hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <span className="font-primary text-lg tracking-wide">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <button type="button" onClick={() => router.push("/contact")} className="btn mx-auto">
            Beratungstermin vereinbaren
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Treatments;
