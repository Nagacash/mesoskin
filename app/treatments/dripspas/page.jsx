"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";
import InfusionSection from "@/components/InfusionSection";
import CollapsibleSection from "@/components/CollapsibleSection";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Dripspas = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
            className="min-h-screen pb-12 pt-32 xl:pt-32 overflow-x-hidden"
        >
            {/* Hero Section */}
            <section className="bg-primary-100 py-24 mt-0 mb-12">
                <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">
                    <div className="text-center xl:text-left xl:w-1/2 xl:flex-shrink-0 pt-12">
                        <motion.h1
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={mouseLeaveHandler}
                            className="h1 mb-4 text-primary py-4 px-8"
                        >
                            Infusionstherapie: Ihre Lösung für eine schnelle Genesung
                        </motion.h1>
                        <motion.p
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={mouseLeaveHandler}
                            className="lead max-w-2xl mx-auto xl:mx-0 text-gray-700 px-8"
                        >
                            Entdecken Sie die Vorteile der Infusionstherapie – eine effektive Methode zur gezielten Zufuhr von Medikamenten, Vitaminen und Mineralstoffen direkt in die Blutbahn.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        className="xl:w-1/2 flex justify-center xl:justify-end">
                    <Image
                            src="/assets/treatments/dripspas/meso6.jpg"
                            width={700}
                            height={550}
                            alt="Liposana 3"
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto">


                {/* Key Benefits Section */}
                <section className="mb-12 py-12 bg-accent-100 p-8 rounded-lg shadow-xl">
                    <motion.h2
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        className="h2 mb-6 text-accent mt-24"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Vorteile der Infusionstherapie
                    </motion.h2>
                    <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 ml-4 mb-6">
                        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-4">
                            <strong>Schnelle Wirkung:</strong> Stoffe wirken direkt im Blutkreislauf.
                        </motion.li>
                        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-4">
                            <strong>Individuelle Anpassung:</strong> Jede Infusion wird auf Ihre Bedürfnisse abgestimmt.
                        </motion.li>
                        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-4">
                            <strong>Vielfältige Anwendungen:</strong>
                            <ul className="list-circle list-inside ml-6 mt-2 space-y-1 text-base">
                                <li>Energie- und Leistungssteigerung</li>
                                <li>Stärkung des Immunsystems</li>
                                <li>Detox zur Entgiftung</li>
                                <li>Unterstützung bei chronischen Erkrankungen</li>
                                <li>Haut- und Schönheitspflege</li>
                                <li>Stressbewältigung und mentale Klarheit.</li>
                            </ul>
                        </motion.li>
                    </ul>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex justify-center mt-8"
                    >
                        <Image
                            src="/assets/ing5.png"
                            width={500}
                            height={300}
                            alt="Vorteile der Infusionstherapie"
                            className="rounded-lg shadow-xl p-8"
                        />
                    </motion.div>
                </section>
                <InfusionSection />

                {/* Restyled Section */}
                <section className="py-12">
                    <div className="space-y-12">

                        {/* Ablauf Section */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <CollapsibleSection title="Ablauf der Infusionstherapie" titleClassName="h2 text-gray-900">
                                <p className="text-lg text-gray-700 mb-6">
                                    Hartnäckige Problemzonen, die sich trotz Sport und Ernährung einfach nicht verbessern lassen? Die ausgeklügelte Technologie aus der Schweiz, sorgt für einen gezielten Fettabbau und strafft die Körperkonturen mit Langzeiteffekt.
                                </p>
                                <p className="text-lg text-gray-700 mb-6">
                                    Zunächst erfolgt eine <strong>Stressmessung (HRV)</strong>, um Ihre individuelle Situation zu beurteilen. Anschließend wird die Therapie in entspannter Atmosphäre durchgeführt.
                                </p>
                                <div className="border-t pt-4 mt-6">
                                    <h3 className="h3 mb-3 text-primary">Fazit</h3>
                                    <p className="text-lg text-gray-700 mb-4">
                                        Erleben Sie, wie schnell Sie sich wieder <strong>vital und gesund</strong> fühlen können.
                                    </p>
                                    <p className="text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer font-semibold">
                                        <a href="mailto:kontakt@mesoskinhamburg.de">
                                            Kontaktieren Sie uns für eine individuelle Beratung zur Infusionstherapie!
                                        </a>
                                    </p>
                                </div>
                            </CollapsibleSection>
                        </div>

                        {/* BasenBalance-Infusion Section */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            <CollapsibleSection title="BasenBalance-Infusion" titleClassName="text-gray-900 h2">
                                <p className="text-xl text-gray-700 mb-6">
                                    Entgiften und regenerieren Sie Ihren Körper mit unserer BasenBalance-Infusion!
                                </p>
                                <p className="text-lg text-gray-700 mb-8">
                                    In der heutigen schnelllebigen Welt sind wir ständig Umweltgiften, ungesunder Ernährung und Stress ausgesetzt, die unseren Säure-Basen-Haushalt aus dem Gleichgewicht bringen können. Bei <strong>Body&amp;Mind</strong> bieten wir Ihnen die BasenBalance-Infusion an, eine innovative Gesundheitsbehandlung, die speziell entwickelt wurde, um Ihren Körper zu entgiften und ein gesundes, alkalisches Milieu zu fördern.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="h3 mb-3 text-primary">Was sind Baseninfusionen?</h3>
                                        <p className="text-gray-700">
                                            Baseninfusionen sind hochwirksame Flüssigkeitsbehandlungen, die wichtige Mineralien und Nährstoffe enthalten, um den pH-Wert Ihres Körpers zu regulieren. Diese Infusionen helfen nicht nur bei der Entgiftung, sondern unterstützen auch die Zellregeneration und das allgemeine Wohlbefinden.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="h3 mb-3 text-primary">Warum BasenBalance-Infusion?</h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>Entgiftung:</strong> Entfernen Sie schädliche Säuren und Toxine aus Ihrem Körper.</li>
                                            <li><strong>Vitalität:</strong> Steigern Sie Ihre Energie und Lebensqualität durch einen ausgeglichenen Säure-Basen-Haushalt.</li>
                                            <li><strong>Wohlbefinden:</strong> Fördern Sie ein Gefühl der inneren Ruhe und Ausgeglichenheit.</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="flex justify-center my-8">
                                    <Image
                                        src="/assets/in2.png"
                                        width={1400}
                                        height={800}
                                        alt="Radiance Infusion"
                                        className="rounded-lg shadow-xl p-4"
                                    />
                                </div>

                                <p className="text-lg text-gray-700 font-medium mb-4">
                                    Erleben Sie die Vorteile der BasenBalance-Infusion und tun Sie Ihrem Körper etwas Gutes! Lassen Sie uns gemeinsam den Weg zu mehr Gesundheit und Vitalität gehen.
                                </p>
                                <p className="italic text-base text-gray-500 text-center">
                                    Schönheit und Gesundheit, die bleibt – seit 30 Jahren, natürlich und echt.
                                </p>
                            </CollapsibleSection>
                        </div>

                        {/* Radiance Infusion Section */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <CollapsibleSection title="Radiance Infusion – Strahlende Haut und glänzendes Haar" titleClassName="h2 text-gray-900">
                                <p className="text-xl text-gray-700 mb-8">
                                    Entdecken Sie die Radiance Infusion – Ihre Lösung für gesunde Haut und glänzendes Haar! Diese innovative Infusion kombiniert hochwertige Inhaltsstoffe, die speziell entwickelt wurden, um Ihre natürliche Schönheit zu fördern.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                                        <h3 className="h3 mb-4 text-accent">Vorteile der Radiance Infusion:</h3>
                                        <ul className="list-disc list-inside space-y-3 text-gray-700">
                                            <li><strong>Strahlende Hautpflege:</strong> Verbessert das Hautbild und sorgt für einen frischen Teint.</li>
                                            <li><strong>Gesundes Haar:</strong> Unterstützt die Haarstruktur und verleiht strahlenden Glanz.</li>
                                            <li><strong>Intensive Feuchtigkeitsversorgung:</strong> Versorgt trockene Haut und Haare mit essenziellen Nährstoffen.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                                        <h3 className="h3 mb-4 text-accent">Schlüsselwirkstoffe:</h3>
                                        <ul className="list-disc list-inside space-y-3 text-gray-700">
                                            <li><strong>N-Acetyl-L-Cystein (300 mg):</strong> Schützt die Haut vor Umwelteinflüssen und stärkt die Hautbarriere.</li>
                                            <li><strong>D-Panthenol (100 mg):</strong> Bietet intensive Feuchtigkeit und unterstützt die Hautheilung.</li>
                                            <li><strong>Pyridoxin-HCl (Vitamin B6, 100 mg):</strong> Fördert den Zellstoffwechsel und verbessert das Hautbild.</li>
                                            <li><strong>Zink-D-Gluconat-Trihydrat (69,7 mg):</strong> Reguliert die Talgproduktion und wirkt entzündungshemmend.</li>
                                            <li><strong>D-Biotin (5 mg):</strong> Unterstützt gesundes Haarwachstum und erhält die Hautelastizität.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex justify-center my-8">
                                    <Image
                                        src="/assets/ing4.png"
                                        width={500}
                                        height={300}
                                        alt="Schlüsselwirkstoffe"
                                        className="border-4 border-white rounded-lg shadow-xl p-8"
                                    />
                                </div>

                                <p className="text-lg text-gray-700 font-medium mb-3">
                                    Gönnen Sie sich die Pflege, die Sie verdienen! Erleben Sie die transformative Wirkung der Radiance Infusion – für gesunde Haut und glänzendes Haar.
                                </p>
                                <p className="text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer font-semibold">
                                    Kontaktieren Sie uns für weitere Informationen!
                                </p>
                            </CollapsibleSection>
                        </div>

                    </div>
                </section>

                {/* New CTA Section */}
                <section className="py-12 xl:py-24 bg-primary-100 text-white text-center">
                    <div className="container mx-auto">
                                                    <motion.h2
                                                        initial={{ opacity: 0, y: 50 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true, amount: 0.3 }}
                                                        transition={{ delay: 0.3, duration: 0.8 }}
                                                        className="h2 mb-4 text-gray-900"
                                                    >
                                                        Transformiere Deine Gesundheit durch maßgeschneiderte Infusionen.
                                                    </motion.h2>                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="lead max-w-2xl mx-auto mb-8 text-gray-900 pb-12 pt-12"
                        >
                            Schluss mit Erkältung oder Müdigkeit. Buche jetzt Deine Infusion und tanke neue Energie und Wohlbefinden – verabreicht von qualifiziertem Personal in deutscher Apothekenqualität.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex flex-col md:flex-row justify-center gap-4"
                        >
                            <a
                                href="https://g.page/mesoskinhamburg/review" // Placeholder for Google review link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-lg bg-blue-500 text-white hover:bg-blue-600 shadow-lg rounded-full px-6 py-3 text-base md:px-8 md:py-4 md:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center gap-1"
                            >
                                <FcGoogle className="text-xl" /> {/* Google logo */}
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <span>Review</span>
                            </a>
                            <button
                                onClick={() => router.push("/contact")}
                                className="btn btn-lg bg-accent text-white hover:bg-accent-dark shadow-lg rounded-full px-6 py-3 text-lg md:px-8 md:py-4 md:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-300"
                            >
                                Behandlung buchen
                            </button>
                            <a
                                href="https://wa.me/4917661639830"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-lg bg-green-500 text-white hover:bg-green-600 shadow-lg rounded-full px-6 py-3 text-lg md:px-8 md:py-4 md:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
                            >
                                Auf WhatsApp chatten
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Preise Section */}
                <section className="pt-24 mb-12">
                    <motion.h2
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        className="h2 mb-6 text-accent text-center"
                    >
                        Preise
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="bg-white p-12 rounded-lg shadow-lg text-center w-full"
                        >
                            <h3 className="text-2xl font-extrabold mb-3 text-primary">Erstbehandlung</h3>
                            <p className="text-lg text-gray-800 mb-6">Inclusive Consulting</p>
                            <p className="text-4xl font-extrabold text-accent mb-3">249 Euro</p>
                            <p className="text-base text-gray-600">Behandlungsdauer: 2 Stunden</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="bg-white p-12 rounded-lg shadow-lg text-center w-full"
                        >
                            <h3 className="text-2xl font-extrabold mb-3 text-primary">Folgebehandlung</h3>
                            <p className="text-lg text-gray-800 mb-6">Nach Erstsitzung</p>
                            <p className="text-4xl font-extrabold text-accent mb-3">199 Euro</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="bg-white p-12 rounded-lg shadow-lg text-center w-full"
                        >
                            <h3 className="text-2xl font-extrabold mb-3 text-primary">6er Abo</h3>
                            <p className="text-lg text-gray-800 mb-6">Paketpreis</p>
                            <p className="text-4xl font-extrabold text-accent mb-3">999 Euro</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="bg-white p-12 rounded-lg shadow-lg text-center w-full"
                        >
                            <h3 className="text-2xl font-extrabold mb-3 text-primary">10er Abo</h3>
                            <p className="text-lg text-gray-800 mb-6">Paketpreis</p>
                            <p className="text-4xl font-extrabold text-accent mb-3">1650 Euro</p>
                        </motion.div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="text-center mb-12">


                    <CtaSection />
                </section>
            </div>
        </motion.div>
    );
};

export default Dripspas;
