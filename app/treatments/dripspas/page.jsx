"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import CtaSection from "@/components/CtaSection";

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
                        className="xl:w-1/2 flex justify-center xl:justify-end"
                    >            <Image
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
                </section>


                <section className="pt-24 mb-12 bg-gray-50 p-12 rounded-lg shadow-md">
                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        className="h3 mb-4 text-accent"
                    >
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        className="mb-6 text-lg text-gray-700"
                    >
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        className="mb-6 text-lg text-gray-700"
                    >
                        Hartnäckige Problemzonen, die sich trotz Sport und Ernährung einfach nicht verbessern lassen? Die ausgeklügelte Technologie aus der Schweiz, sorgt für einen gezielten Fettabbau und strafft die Körperkonturen mit Langzeiteffekt.
                    </motion.p>

                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        className="h3 mb-4 text-accent"
                    >
                        Ablauf der Infusionstherapie.
                        


                    </motion.h3>
                    
                    <div className="section-content">
    <div className="text-lg text-gray-700 mb-6 mt-8">
        <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="py-2"
        >
            Zunächst erfolgt eine **Stressmessung (HRV)**, um Ihre individuelle Situation zu beurteilen. Anschließend wird die Therapie in entspannter Atmosphäre durchgeführt.
        </motion.p>
    </div>

    <div className="text-xl font-semibold text-gray-800 border-t pt-4 mt-6">
        <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="mb-3"
        >
            <span className="font-bold uppercase tracking-wider text-base block mb-1">Fazit</span>
            Erleben Sie, wie schnell Sie sich wieder **vital und gesund** fühlen können.
        </motion.p>
        <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer text-base font-medium"
        >
            Kontaktieren Sie uns für eine individuelle Beratung zur Infusionstherapie!
        </motion.p>
    </div>
</div>

<div className="infusion-section-2 mt-12 pt-8 border-t border-gray-200">
    <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-900 mb-2"
    >
        BasenBalance-Infusion
    </motion.h2>

    <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl text-green-600 mb-6"
    >
        Entgiften und regenerieren Sie Ihren Körper mit unserer BasenBalance-Infusion!
    </motion.p>

    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg text-gray-700 mb-8 space-y-4"
    >
        <p>
            In der heutigen schnelllebigen Welt sind wir ständig Umweltgiften, ungesunder Ernährung und Stress ausgesetzt, die unseren Säure-Basen-Haushalt aus dem Gleichgewicht bringen können. Bei **Body&amp;Mind** bieten wir Ihnen die BasenBalance-Infusion an, eine innovative Gesundheitsbehandlung, die speziell entwickelt wurde, um Ihren Körper zu entgiften und ein gesundes, alkalisches Milieu zu fördern.
        </p>
    </motion.div>

    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mb-8 p-6 bg-gray-50 rounded-lg"
    >
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Was sind Baseninfusionen?
        </h3>
        <p className="text-lg text-gray-700">
            Baseninfusionen sind hochwirksame Flüssigkeitsbehandlungen, die wichtige Mineralien und Nährstoffe enthalten, um den pH-Wert Ihres Körpers zu regulieren. Diese Infusionen helfen nicht nur bei der Entgiftung, sondern unterstützen auch die Zellregeneration und das allgemeine Wohlbefinden.
        </p>
    </motion.div>

    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.8, duration: 0.8 }}
    >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Warum BasenBalance-Infusion?
        </h3>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 ml-4 mb-8">
            <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-1">
                <strong>Entgiftung:</strong> Entfernen Sie schädliche Säuren und Toxine aus Ihrem Körper.
            </motion.li>
            <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-1">
                <strong>Vitalität:</strong> Steigern Sie Ihre Energie und Lebensqualität durch einen ausgeglichenen Säure-Basen-Haushalt.
            </motion.li>
            <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-1">
                <strong>Wohlbefinden:</strong> Fördern Sie ein Gefühl der inneren Ruhe und Ausgeglichenheit.
            </motion.li>
        </ul>
    </motion.div>

    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="text-lg text-gray-700 mt-6"
    >
        <p className="mb-4 font-medium">
            Erleben Sie die Vorteile der BasenBalance-Infusion und tun Sie Ihrem Körper etwas Gutes! Lassen Sie uns gemeinsam den Weg zu mehr Gesundheit und Vitalität gehen.
        </p>
        <p className="italic text-base text-gray-500">
            Schönheit und Gesundheit, die bleibt – seit 30 Jahren, natürlich und echt.
        </p>
    </motion.div>


    <section className="mb-12 py-12">
    <motion.h2
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="text-3xl font-bold text-gray-900 mb-2 mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.6 }}
    >
        Radiance Infusion – Strahlende Haut und glänzendes Haar
    </motion.h2>

    <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg text-gray-700 mb-8"
    >
        Entdecken Sie die Radiance Infusion – Ihre Lösung für gesunde Haut und glänzendes Haar! Diese innovative Infusion kombiniert hochwertige Inhaltsstoffe, die speziell entwickelt wurden, um Ihre natürliche Schönheit zu fördern.
    </motion.p>

    <motion.h3
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="text-2xl font-semibold text-gray-800 mb-4 mt-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.7 }}
    >
        Vorteile der Radiance Infusion:
    </motion.h3>
    <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 ml-4 mb-10">
        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.6, duration: 0.5 }}>
            <strong>Strahlende Hautpflege:</strong> Verbessert das Hautbild und sorgt für einen frischen Teint.
        </motion.li>
        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.7, duration: 0.5 }}>
            <strong>Gesundes Haar:</strong> Unterstützt die Haarstruktur und verleiht strahlenden Glanz.
        </motion.li>
        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.8, duration: 0.5 }}>
            <strong>Intensive Feuchtigkeitsversorgung:</strong> Versorgt trockene Haut und Haare mit essenziellen Nährstoffen.
        </motion.li>
    </ul>

    <motion.h3
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="text-2xl font-semibold text-gray-800 mb-4 mt-8 border-t pt-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ delay: 0.9, duration: 0.7 }}
    >
        Schlüsselwirkstoffe:
    </motion.h3>
    <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 ml-4 mb-10">
        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.0, duration: 0.5 }}>
            <strong>N-Acetyl-L-Cystein (300 mg):</strong> Schützt die Haut vor Umwelteinflüssen und stärkt die Hautbarriere.
        </motion.li>
        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.1, duration: 0.5 }}>
            <strong>D-Panthenol (100 mg):</strong> Bietet intensive Feuchtigkeit und unterstützt die Hautheilung.
        </motion.li>
        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.2, duration: 0.5 }}>
            <strong>Pyridoxin-HCl (Vitamin B6, 100 mg):</strong> Fördert den Zellstoffwechsel und verbessert das Hautbild.
        </motion.li>
        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.3, duration: 0.5 }}>
            <strong>Zink-D-Gluconat-Trihydrat (69,7 mg):</strong> Reguliert die Talgproduktion und wirkt entzündungshemmend.
        </motion.li>
        <motion.li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="py-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 1.4, duration: 0.5 }}>
            <strong>D-Biotin (5 mg):</strong> Unterstützt gesundes Haarwachstum und erhält die Hautelastizität.
        </motion.li>
    </ul>

    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="text-lg text-gray-700 mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400"
    >
        <p className="mb-3 font-medium">
            Gönnen Sie sich die Pflege, die Sie verdienen! Erleben Sie die transformative Wirkung der Radiance Infusion – für gesunde Haut und glänzendes Haar.
        </p>
        <p className="text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer font-semibold">
            Kontaktieren Sie uns für weitere Informationen!
        </p>
    </motion.div>

    <div className="hidden">Infusion 5:</div>
</section>


    <div className="hidden">Infusion 2.</div>
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

