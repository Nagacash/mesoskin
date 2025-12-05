"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";
import CollapsibleSection from "@/components/CollapsibleSection";
import TreatmentHero from "@/components/TreatmentHero";
import Button from "@/components/Button";
import { FaStar, FaCheck } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { CONTACT_INFO } from "@/lib/constants";

const Dripspas = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
            className="min-h-screen overflow-x-hidden"
        >
            {/* Hero Section */}
            <TreatmentHero
                title="Drip Spa Infusionen"
                subtitle="Ihre Lösung für eine schnelle Genesung, mehr Energie und strahlende Schönheit."
                imageSrc="/assets/vitamin1.png"
                imageAlt="Drip Spa Infusionen"
                overlayOpacity="bg-black/30"
            />

            <div className="container mx-auto py-24 relative z-10">

                {/* Intro & Benefits */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="h2 mb-8 text-primary">Vorteile der <span className="text-accent">Infusionstherapie</span></h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                                Entdecken Sie die Vorteile der Infusionstherapie – eine effektive Methode zur gezielten Zufuhr von Medikamenten, Vitaminen und Mineralstoffen direkt in die Blutbahn. Da die Stoffe nicht erst durch den Verdauungstrakt müssen, wirken sie schneller und effizienter.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Schnelle Wirkung direkt im Blutkreislauf",
                                    "Individuelle Anpassung auf Ihre Bedürfnisse",
                                    "Energie- und Leistungssteigerung",
                                    "Stärkung des Immunsystems",
                                    "Detox & Entgiftung",
                                    "Haut- und Schönheitspflege"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 text-primary/80 font-medium">
                                        <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs">
                                            <FaCheck />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/50">
                                <Image
                                    src="/assets/ing5.png"
                                    width={600}
                                    height={400}
                                    alt="Vorteile der Infusionstherapie"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                        </motion.div>
                    </div>
                </section>

                {/* NAD+ Highlight Section */}
                <section className="mb-32 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl transform -skew-y-1"></div>
                    <div className="relative bg-white/60 backdrop-blur-md p-12 rounded-3xl shadow-xl border border-white/50">
                        <div className="text-center mb-16">
                            <h2 className="h2 mb-4 text-primary">NAD+ Infusionen</h2>
                            <p className="text-xl text-accent font-light">Der Schlüssel zu mehr Energie und Vitalität</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                            <div className="order-2 lg:order-1">
                                <Image
                                    src="/assets/vitamin3.png"
                                    width={500}
                                    height={350}
                                    alt="NAD+ Infusionen"
                                    className="rounded-2xl shadow-lg mx-auto"
                                />
                            </div>
                            <div className="order-1 lg:order-2 space-y-6">
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Erlebe die beeindruckenden Vorteile von <strong>NAD+ Infusionen</strong>. NAD+ verbessert die Mitochondrienfunktion, was zu mehr Ausdauer, Klarheit und einer verlangsamten Zellalterung führt.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-primary mb-2">Energie</h4>
                                        <p className="text-sm text-gray-500">Maximale Mitochondrienfunktion für mehr Power.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-primary mb-2">Anti-Aging</h4>
                                        <p className="text-sm text-gray-500">Unterstützt DNA-Reparatur und Zellverjüngung.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-primary mb-2">Klarheit</h4>
                                        <p className="text-sm text-gray-500">Fördert kognitive Frische und Fokus.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                        <h4 className="font-bold text-primary mb-2">Gesundheit</h4>
                                        <p className="text-sm text-gray-500">Hilft bei chronischer Müdigkeit und mehr.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing for NAD+ */}
                        <div className="bg-white/80 rounded-2xl p-8 shadow-inner">
                            <h3 className="h3 text-center mb-8 text-primary">Preise & Anwendung</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-accent/30 transition-colors duration-300">
                                    <p className="font-bold text-primary text-xl mb-2">125 mg</p>
                                    <p className="text-gray-500 mb-4">Einstieg</p>
                                    <p className="text-3xl font-primary text-accent">ca. 200 €</p>
                                </div>
                                <div className="p-6 bg-white rounded-xl shadow-sm border border-accent/50 relative transform scale-105 z-10">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">Beliebt</div>
                                    <p className="font-bold text-primary text-xl mb-2">250 mg</p>
                                    <p className="text-gray-500 mb-4">Standard</p>
                                    <p className="text-3xl font-primary text-accent">ca. 450 €</p>
                                </div>
                                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-accent/30 transition-colors duration-300">
                                    <p className="font-bold text-primary text-xl mb-2">500 mg</p>
                                    <p className="text-gray-500 mb-4">Intensiv</p>
                                    <p className="text-3xl font-primary text-accent">ca. 550 €</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Infusions Grid */}
                <section className="mb-32">
                    <h2 className="h2 text-center mb-16 text-primary">Unsere Spezial-Infusionen</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Mitochondrien Vitalitäts-Boost",
                                desc: "Maximieren Sie Ihre Zellleistung für nachhaltige Energie.",
                                price: "Ab 199€ - 249€",
                                details: "Optimierung der Zellleistung, effektive Entgiftung, Steigerung der Leistungsfähigkeit."
                            },
                            {
                                title: "BasenBalance-Infusion",
                                desc: "Entgiften und regenerieren Sie Ihren Körper.",
                                price: "Ab 179€ - 220€",
                                details: "Reguliert den pH-Wert, fördert Entgiftung und innere Ruhe."
                            },
                            {
                                title: "ImmunVitalis",
                                desc: "Der ultimative Boost für Ihr Immunsystem.",
                                price: "Ab 179€ - 279€",
                                details: "Hochdosiertes Vitamin C (12g), Taurin, Aminosäuren für maximale Abwehrkraft."
                            },
                            {
                                title: "C-Vital-Drip",
                                desc: "Hochdosiertes Vitamin C für schnelle Regeneration.",
                                price: "Ab 149€ - 189€",
                                details: "Stärkt das Immunsystem, wirkt antioxidativ, verbessert Hautgesundheit."
                            },
                            {
                                title: "B Energy Infusion",
                                desc: "Der Energie-Kick aus essenziellen B-Vitaminen.",
                                price: "Ab 179€ - 199€",
                                details: "Gegen Müdigkeit, für Stressbewältigung und kognitive Unterstützung."
                            },
                            {
                                title: "Gluta C Cholin",
                                desc: "Entgiftung und Lebergesundheit.",
                                price: "Ab 179€",
                                details: "Kombination aus Glutathion, Vitamin C und Cholin für Entgiftung und Vitalität."
                            },
                            {
                                title: "StressRelief Elixier",
                                desc: "Finden Sie Ihre innere Balance wieder.",
                                price: "Ab 179€",
                                details: "Unterstützt das Nervensystem, fördert Entspannung und vegetative Balance."
                            },
                            {
                                title: "Radiance Infusion",
                                desc: "Für den perfekten Glow von innen.",
                                price: "Ab 179€",
                                details: "Verbessert das Hautbild, stärkt Haare und spendet Feuchtigkeit."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                            >
                                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                                <p className="text-gray-600 mb-6 flex-grow">{item.desc}</p>
                                <div className="mb-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-500">
                                    {item.details}
                                </div>
                                <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-lg font-bold text-accent">{item.price}</span>
                                    <button
                                        onClick={() => router.push("/contact")}
                                        className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300"
                                    >
                                        <FaCheck />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-16 bg-primary rounded-3xl relative overflow-hidden text-center text-white mb-12">
                    <div className="absolute inset-0 bg-white/5"></div>
                    <div className="relative z-10 container mx-auto px-4">
                        <h2 className="h2 mb-6 text-white">Bereit für mehr Vitalität?</h2>
                        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
                            Vereinbaren Sie jetzt Ihren Termin für eine individuelle Infusionstherapie und spüren Sie den Unterschied.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Button
                                onClick={() => router.push("/contact")}
                                variant="white"
                                size="large"
                                className="shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(212,140,112,0.6)]"
                                ariaLabel="Termin vereinbaren"
                            >
                                Termin vereinbaren
                            </Button>
                            <Button
                                href={CONTACT_INFO.whatsappUrl}
                                variant="secondary"
                                size="large"
                                ariaLabel="WhatsApp Chat öffnen"
                            >
                                WhatsApp Chat
                            </Button>
                        </div>
                    </div>
                </section>

            </div>
        </motion.div>
    );
};

export default Dripspas;
