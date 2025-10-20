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
            <section className="bg-primary-100 py-12 mt-0 mb-12">
                <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">
                    <div className="text-center xl:text-left xl:w-1/2 xl:flex-shrink-0 pt-0">
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
                            src="/assets/vitamin1.png"
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
                                    Zunächst erfolgt eine Stressmessung (HRV), um Ihre individuelle Situation zu beurteilen. Anschließend wird die Therapie in entspannter Atmosphäre durchgeführt.
                                </p>
                                <div className="border-t pt-4 mt-6">
                                    <h3 className="h3 mb-3 text-primary">Fazit</h3>
                                    <p className="text-lg text-gray-700 mb-4">
                                        Erleben Sie, wie schnell Sie sich wieder vital und gesund fühlen können. Kontaktieren Sie uns für eine individuelle Beratung zur Infusionstherapie!
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
                                    In der heutigen schnelllebigen Welt sind wir ständig Umweltgiften, ungesunder Ernährung und Stress ausgesetzt, die unseren Säure-Basen-Haushalt aus dem Gleichgewicht bringen können. Bei Body&Mind  bieten wir Ihnen die BasenBalance-Infusion an, eine innovative Gesundheitsbehandlung, die speziell entwickelt wurde, um Ihren Körper zu entgiften und ein gesundes, alkalisches Milieu zu fördern.
                                </p>
                                <h3 className="h3 mb-3 text-primary">Was sind Baseninfusionen?</h3>
                                <p className="text-gray-700 mb-6">
                                    Baseninfusionen sind hochwirksame Flüssigkeitsbehandlungen, die wichtige Mineralien und Nährstoffe enthalten, um den pH-Wert Ihres Körpers zu regulieren. Diese Infusionen helfen nicht nur bei der Entgiftung, sondern unterstützen auch die Zellregeneration und das allgemeine Wohlbefinden.
                                </p>
                                <h3 className="h3 mb-3 text-primary">Warum BasenBalance-Infusion?</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>Entgiftung:</strong> Entfernen Sie schädliche Säuren und Toxine aus Ihrem Körper.</li>
                                    <li><strong>Vitalität:</strong> Steigern Sie Ihre Energie und Lebensqualität durch einen ausgeglichenen Säure-Basen-Haushalt.</li>
                                    <li><strong>Wohlbefinden:</strong> Fördern Sie ein Gefühl der inneren Ruhe und Ausgeglichenheit.</li>
                                </ul>
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
                                <h3 className="h3 mb-4 text-accent">Vorteile der Radiance Infusion:</h3>
                                <ul className="list-disc list-inside space-y-3 text-gray-700">
                                    <li><strong>Strahlende Hautpflege:</strong> Verbessert das Hautbild und sorgt für einen frischen Teint.</li>
                                    <li><strong>Gesundes Haar:</strong> Unterstützt die Haarstruktur und verleiht strahlenden Glanz.</li>
                                    <li><strong>Intensive Feuchtigkeitsversorgung:</strong> Versorgt trockene Haut und Haare mit essenziellen Nährstoffen.</li>
                                </ul>
                                <h3 className="h3 mb-4 text-accent">Schlüsselwirkstoffe:</h3>
                                <ul className="list-disc list-inside space-y-3 text-gray-700">
                                    <li><strong>N-Acetyl-L-Cystein (300 mg):</strong> Schützt die Haut vor Umwelteinflüssen und stärkt die Hautbarriere.</li>
                                    <li><strong>D-Panthenol (100 mg):</strong> Bietet intensive Feuchtigkeit und unterstützt die Hautheilung.</li>
                                    <li><strong>Pyridoxin-HCl (Vitamin B6, 100 mg):</strong> Fördert den Zellstoffwechsel und verbessert das Hautbild.</li>
                                    <li><strong>Zink-D-Gluconat-Trihydrat (69,7 mg):</strong> Reguliert die Talgproduktion und wirkt entzündungshemmend.</li>
                                    <li><strong>D-Biotin (5 mg):</strong> Unterstützt gesundes Haarwachstum und erhält die Hautelastizität.</li>
                                </ul>
                                <p className="text-lg text-gray-700 font-medium mb-3">
                                    Gönnen Sie sich die Pflege, die Sie verdienen! Erleben Sie die transformative Wirkung der Radiance Infusion – für gesunde Haut und glänzendes Haar. Kontaktieren Sie uns für weitere Informationen!
                                </p>
                            </CollapsibleSection>
                        </div>

                        {/* Mitochondrien Vitalitäts-Boost Section */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            <CollapsibleSection title="Mitochondrien Vitalitäts-Boost – Ihre Quelle für nachhaltige Energie und Wohlbefinden" titleClassName="text-gray-900 h2">
                                <p className="text-lg text-gray-700 mb-6">
                                    Entdecken Sie die Mitochondrien Vitalitäts-Boost-Infusion in unserer Privatpraxis. Diese innovative Behandlung ist darauf ausgelegt, Ihre Zellleistung zu maximieren und Ihnen einen kraftvollen Energieschub zu verleihen.
                                </p>
                                <h3 className="h3 mb-3 text-primary">Was ist die Mitochondrien Vitalitäts-Boost-Infusion?</h3>
                                <p className="text-lg text-gray-700 mb-8">
                                    Unsere Mitochondrien Vitalitäts-Boost-Infusion kombiniert hochwertige Inhaltsstoffe, die speziell entwickelt wurden, um die Funktion Ihrer Mitochondrien – den Kraftwerken Ihrer Zellen – zu optimieren. Durch die gezielte Förderung der ATP-Produktion unterstützen wir Ihre körperliche und geistige Leistungsfähigkeit.
                                </p>
                                <h3 className="h3 mb-3 text-primary">Starke Inhaltsstoffe für Ihre Gesundheit:</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>Aminosäuren:</strong> L-Arginin, L-Lysin, L-Carnitin und L-Glutathion zur Stärkung der Zellfunktion und des Immunsystems.</li>
                                    <li><strong>Vitamine:</strong> B2, B3, B5, B6, B7, B9, B12 und Vitamin C für eine optimale Nährstoffversorgung und Unterstützung des Stoffwechsels.</li>
                                    <li><strong>Mineralien:</strong> Calcium, Kalium, Magnesium, Selen und Zink zur Förderung einer gesunden Zellfunktion und Immunabwehr.</li>
                                    <li><strong>Weitere:</strong> Taurin, N-Acetyl-L-Cystein und Alpha-Liponsäure für Entgiftung und antioxidativen Schutz.</li>
                                </ul>
                                <h3 className="h3 mb-3 text-primary">Vorteile der Mitochondrien Vitalitäts-Boost-Infusion:</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>Optimierung der Zellleistung:</strong> Verbessern Sie Ihre mitochondriale Atmung und die ATP-Bildung für mehr Energie.</li>
                                    <li><strong>Effektive Entgiftung:</strong> Unterstützen Sie die Schwermetalldetoxifikation und schützen Sie sich vor freien Radikalen.</li>
                                    <li><strong>Steigerung der Leistungsfähigkeit:</strong> Erleben Sie schnelle Regeneration, gesteigerte Vitalität und reduzierte Stresssymptome.</li>
                                </ul>
                                <h3 className="h3 mb-3 text-primary">Positive Erfahrungen unserer Patienten:</h3>
                                <p className="text-lg text-gray-700 mb-8">
                                    Zahlreiche Patienten berichten von Verbesserungen bei Allergien, Mangelzuständen, Bluthochdruck und chronischen Schmerzen. Die Mitochondrien Vitalitäts-Boost-Infusion fördert außerdem die Regeneration nach Erkrankungen und steigert das allgemeine Wohlbefinden.
                                </p>
                                <p className="text-lg text-gray-700 font-medium mb-4">
                                    Gönnen Sie sich den Vitalitäts-Boost, den Sie verdienen! Erleben Sie, wie die Mitochondrien Vitalitäts-Boost-Infusion Ihr Energielevel und Ihre Lebensqualität nachhaltig steigern kann.
                                </p>
                                <p className="text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer font-semibold">
                                    Vereinbaren Sie noch heute einen Termin in unseren Räumen in der RothenbaumChaussee in Hamburg.Starten Sie Ihre Reise zu mehr Energie und Gesundheit!
                                </p>
                            </CollapsibleSection>
                        </div>

                        {/* B Energy Infusion Section */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <CollapsibleSection title="B Energy Infusion – Ihre Quelle für Vitalität!" titleClassName="h2 text-gray-900">
                                <p className="text-lg text-gray-700 mb-6">
                                    Erleben Sie einen Energie-Boost mit unserer B Energy Infusion! Diese leistungsstarke Mischung aus essenziellen B-Vitaminen steigert Ihre körperliche und geistige Leistungsfähigkeit.
                                </p>
                                <h3 className="h3 mb-3 text-primary">Vorteile der B Energy Infusion:</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>Energie und Vitalität:</strong> Wandelt Nährstoffe in Energie um und bekämpft Müdigkeit.</li>
                                    <li><strong>Stressbewältigung:</strong> Unterstützt das Nervensystem und fördert emotionale Balance.</li>
                                    <li><strong>Kognitive Unterstützung:</strong> Stärkt Konzentration und Gedächtnisleistung.</li>
                                    <li><strong>Stimmungsaufhellung:</strong> Verbessert Ihre mentale Gesundheit durch Neurotransmitterproduktion.</li>
                                    <li><strong>Haut- und Haarpflege:</strong> Fördert die Zellregeneration für gesunde Haut und Haare.</li>
                                    <li><strong>Immunsystemstärkung:</strong> Hilft, Krankheiten abzuwehren und die Abwehrkräfte zu unterstützen.</li>
                                    <li><strong>Herzgesundheit:</strong> Reguliert Homocystein und unterstützt ein gesundes Herz-Kreislaufsystem.</li>
                                </ul>
                                <p className="text-lg text-gray-700 font-medium mb-4">
                                    Gönnen Sie sich den Energie-Kick, den Sie verdienen! Kontaktieren Sie uns, um mehr über die B Energy Infusion zu erfahren und Ihre Vitalität zu steigern!
                                </p>
                            </CollapsibleSection>
                        </div>

                        {/* Gluta C Cholin Infusion Section */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            <CollapsibleSection title="Gluta C Cholin Infusion" titleClassName="text-gray-900 h2">
                                <p className="text-xl text-gray-700 mb-6">
                                    Entgiftende Infusion mit Glutathion, Vitamin C und Cholin
                                </p>
                                <p className="text-lg text-gray-700 mb-8">
                                    Entfalten Sie Ihr volles Potenzial mit unserer einzigartigen Infusion!
                                </p>
                                <p className="text-lg text-gray-700 mb-8">
                                    Unsere hochwertige Infusion kombiniert die kraftvollen Inhaltsstoffe Glutathion, Vitamin C und Cholin, um Ihre Gesundheit auf ein neues Level zu heben. Diese synergistische Formel bietet eine Vielzahl von Vorteilen, die Ihr Wohlbefinden nachhaltig fördern.
                                </p>
                                <h3 className="h3 mb-3 text-primary">Anwendungsgebiete der Infusion</h3>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                    <li><strong>Entgiftung:</strong><br/>Stärken Sie die natürlichen Entgiftungsprozesse Ihres Körpers. Glutathion wirkt als starkes Antioxidans, das freie Radikale neutralisiert und toxische Substanzen ausleitet.</li>
                                    <li><strong>Immunsystemstärkung:</strong><br/>Unterstützen Sie Ihre Immunabwehr mit der antioxidativen Kraft von Vitamin C und Glutathion. Schützen Sie sich effektiv gegen Krankheiten und Infektionen.</li>
                                    <li><strong>Energie- und Leistungssteigerung:</strong><br/>Erleben Sie einen Energieschub! Cholin verbessert die Gehirnfunktion und steigert Ihre körperliche Ausdauer, sodass Sie den Alltag mit neuer Vitalität meistern können.</li>
                                    <li><strong>Hautgesundheit:</strong><br/>Erhalten Sie eine strahlende Haut! Vitamin C fördert die Kollagenproduktion und verbessert die Hautelastizität, während es Anzeichen der Hautalterung reduziert.</li>
                                    <li><strong>Lebergesundheit:</strong><br/>Unterstützen Sie Ihre Leber mit der regenerativen Kraft von Glutathion und Cholin. Fördern Sie einen gesunden Fettstoffwechsel und eine optimale Leberfunktion.</li>
                                    <li><strong>Kognitive Unterstützung:</strong><br/>Verbessern Sie Ihre Konzentration und Gedächtnisleistung. Cholin ist entscheidend für die Gehirnfunktion und kann neurodegenerativen Erkrankungen entgegenwirken.</li>
                                    <li><strong>Stimmungsverbesserung:</strong><br/>Steigern Sie Ihr emotionales Wohlbefinden. Die Kombination aus Glutathion, Vitamin C und Cholin kann Ihre Stimmung positiv beeinflussen und Stress abbauen.</li>
                                </ol>
                                <h3 className="h3 mb-3 text-primary">Warum unsere Infusion?</h3>
                                <p className="text-lg text-gray-700 mb-8">
                                    Unsere Infusion mit Glutathion, Vitamin C und Cholin ist die perfekte Wahl für alle, die ihre Gesundheit aktiv unterstützen möchten. Ideal für Sportler, Berufstätige und alle, die sich eine natürliche Vitalitätssteigerung wünschen.
                                </p>
                                <p className="text-lg text-gray-700 font-medium mb-4">
                                    Erleben Sie die Vorteile einer entgiftenden Infusion und bringen Sie Körper und Geist in Einklang. Kontaktieren Sie uns noch heute, um mehr über diese transformative Behandlung zu erfahren!
                                </p>
                            </CollapsibleSection>
                        </div>

                        {/* Vitamin C-Infusion Section */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <CollapsibleSection title="Vitamin C-Infusion – Energie und Immunstärkung in einer Sitzung" titleClassName="h2 text-gray-900">
                                <p className="text-lg text-gray-700 mb-6">
                                    Entdecken Sie die Kraft der Vitamin C-Infusion in unserer Privatpraxis am Bült! Diese hochdosierte Behandlung liefert Vitamin C direkt in Ihren Blutkreislauf und bietet zahlreiche gesundheitliche Vorteile.
                                </p>
                                <h3 className="h3 mb-3 text-primary">Ihre Vorteile auf einen Blick:</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>Stärkt das Immunsystem:</strong> Schützt vor Erkältungen und Infektionen.</li>
                                    <li><strong>Antioxidative Wirkung:</strong> Reduziert oxidative Stressbelastungen.</li>
                                    <li><strong>Verbessert die Hautgesundheit:</strong> Unterstützt die Kollagenproduktion für einen strahlenden Teint.</li>
                                    <li><strong>Energieboost:</strong> Spürbare Vitalitätssteigerung und schnelle Regeneration.</li>
                                </ul>
                                <h3 className="h3 mb-3 text-primary">Ideal für:</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Personen in der Genesung von Krankheiten oder Operationen.</li>
                                    <li>Menschen mit erhöhtem Stress oder chronischer Erschöpfung.</li>
                                    <li>Alle, die ihre Gesundheit proaktiv stärken möchten.</li>
                                </ul>
                                <p className="text-lg text-gray-700 font-medium mb-4">
                                    Erleben Sie die transformative Wirkung der Vitamin C-Infusion! Vereinbaren Sie noch einen Termin.
                                </p>
                            </CollapsibleSection>
                        </div>

                        {/* ImmunVitalis Section */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            <CollapsibleSection title="ImmunVitalis" titleClassName="text-gray-900 h2">
                                <p className="text-xl text-gray-700 mb-6">
                                    Stärken Sie Ihr Immunsystem mit ImmunVitalis!
                                </p>
                                <p className="text-lg text-gray-700 mb-8">
                                    Unser Immun-Infusions-Set kombiniert 12.000 mg L-Ascorbinsäure mit einer kraftvollen Mischung aus Aminosäuren und Vitaminen, um Ihre Gesundheit zu maximieren.
                                </p>
                                <h3 className="h3 mb-3 text-primary">Highlights:</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>L-Ascorbinsäure (12.000 mg):</strong> Stärkt das Immunsystem und wirkt antioxidativ.</li>
                                    <li><strong>Taurin (1.200 mg) & L-Arginin (1.000 mg):</strong> Fördern Regeneration und Durchblutung.</li>
                                    <li><strong>Essentielle Vitamine:</strong> Unterstützen den Energiestoffwechsel und die Abwehr.</li>
                                </ul>
                                <p className="text-lg text-gray-700 font-medium mb-4">
                                    Revitalisieren Sie Ihren Körper!
                                </p>
                                <p className="text-lg text-gray-700 mb-8">
                                    Infusion mit 3.000 mg S-Acetyl-Glutathion entgiftet und schützt Ihre Zellen.
                                </p>
                                <h3 className="h3 mb-3 text-primary">Vorteile:</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>S-Acetyl-Glutathion (3.000 mg):</strong> Stärkt die Entgiftungsprozesse und wirkt als starkes Antioxidans.</li>
                                </ul>
                                <p className="text-lg text-gray-700 font-medium mb-4">
                                    Gönnen Sie sich die Energie und Vitalität, die Sie verdienen! Starten Sie jetzt Ihre Gesundheitsreise mit ImmunVitalis.
                                </p>
                            </CollapsibleSection>
                        </div>

                        {/* C-Vital-Drip Section */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <CollapsibleSection title="C-Vital-Drip" titleClassName="h2 text-gray-900">
                                <p className="text-xl text-gray-700 mb-6">
                                    Hochdosiertes Vitamin C für Ihre Gesundheit.
                                </p>
                            </CollapsibleSection>
                        </div>

                        {/* StressRelief Elixier Section */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            <CollapsibleSection title="StressRelief Elixier – Ihre Lösung für Stressbewältigung und vegetative Balance" titleClassName="text-gray-900 h2">
                                <p className="text-lg text-gray-700 mb-6">
                                    Fühlen Sie sich oft gestresst oder aus dem Gleichgewicht? Mit dem StressRelief Elixier bringen Sie Körper und Geist in Einklang. Unsere innovative Infusion kombiniert sorgfältig ausgewählte Inhaltsstoffe, die speziell zur Unterstützung Ihres Nervensystems entwickelt wurden.
                                </p>
                                <h3 className="h3 mb-3 text-primary">Stressbewältigung leicht gemacht</h3>
                                <p className="text-lg text-gray-700 mb-8">
                                    In der hektischen Welt von heute ist es wichtiger denn je, das innere Gleichgewicht zu finden. Das StressRelief Elixier hilft Ihnen, Stress abzubauen und die vegetative Balance wiederherzustellen. Erleben Sie, wie Sie mit neuer Energie den Herausforderungen des Alltags begegnen!
                                </p>
                                <h3 className="h3 mb-3 text-primary">Die Vorteile auf einen Blick:</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>Stressreduktion:</strong> Fördert Entspannung und innere Ruhe.</li>
                                    <li><strong>Vegetative Ausgleichung:</strong> Stabilisiert das vegetative Nervensystem für mehr Gelassenheit.</li>
                                    <li><strong>Energie und Vitalität:</strong> Unterstützt körperliche und geistige Leistungsfähigkeit.</li>
                                    <li><strong>Optimale Nährstoffversorgung:</strong> Liefert essentielle Aminosäuren und Antioxidantien für Ihr Wohlbefinden.</li>
                                </ul>
                                <h3 className="h3 mb-3 text-primary">Wirkstoffe, die wirken:</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>Cholin:</strong> Fördert die Gehirnfunktion und verbessert die kognitive Klarheit – ideal für mentale Höchstleistungen.</li>
                                    <li><strong>L-Glutathion:</strong> Ein starkes Antioxidans, das Entgiftungsprozesse unterstützt und Ihre Zellen vor oxidativem Stress schützt.</li>
                                    <li><strong>Cystein:</strong> Stärkt die Glutathionsynthese und hilft, schädliche Substanzen aus dem Körper zu eliminieren.</li>
                                    <li><strong>Kalium:</strong> Essenziell für die Regulierung des Elektrolythaushalts und die Unterstützung von Muskeln und Nerven.</li>
                                </ul>
                                <p className="text-lg text-gray-700 font-medium mb-4">
                                    Starten Sie Ihre Reise zu mehr Wohlbefinden!
                                </p>
                                <p className="text-lg text-gray-700 mb-8">
                                    Das StressRelief Elixier ist die perfekte Lösung für alle, die aktiv gegen Stress ankämpfen und ihr vegetatives Gleichgewicht fördern möchten. Gönnen Sie sich die Unterstützung, die Sie verdienen, und erleben Sie, wie sich Ihr Körper und Geist revitalisieren.
                                </p>
                                <p className="text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer font-semibold">
                                    Kontaktieren Sie uns noch heute, um mehr über das StressRelief Elixier zu erfahren und den ersten Schritt zu einem stressfreieren Leben zu machen!
                                </p>
                            </CollapsibleSection>
                        </div>

                        {/* Haare & Haut Section */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <CollapsibleSection title="Haare & Haut" titleClassName="h2 text-gray-900">
                                <p className="text-xl text-gray-700 mb-6">
                                    Für gesundes Haar und strahlende Haut.
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
                            className="flex flex-col md:flex-row justify-center gap-4 mx-auto"
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
                            <h3 className="text-2xl font-extrabold mb-3 text-primary">Mitochondrien Vitalitäts-Boost</h3>
                            <p className="text-lg text-gray-800 mb-6">Ihre Quelle für nachhaltige Energie und Wohlbefinden</p>
                            <p className="text-4xl font-black text-accent mb-3">Ab 199€ - 249€</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="bg-white p-12 rounded-lg shadow-lg text-center w-full"
                        >
                            <h3 className="text-2xl font-extrabold mb-3 text-primary">BasenBalance-Infusion</h3>
                            <p className="text-lg text-gray-800 mb-6">Entgiften und regenerieren Sie Ihren Körper mit unserer BasenBalance-Infusion!</p>
                            <p className="text-4xl font-black text-accent mb-3">Ab 179€ - 220€</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="bg-white p-12 rounded-lg shadow-lg text-center w-full"
                        >
                            <h3 className="text-2xl font-extrabold mb-3 text-primary">ImmunVitalis</h3>
                            <p className="text-lg text-gray-800 mb-6">Stärken Sie Ihr Immunsystem mit ImmunVitalis!</p>
                            <p className="text-4xl font-black text-accent mb-3">Ab 179€ - 279€</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="bg-white p-12 rounded-lg shadow-lg text-center w-full"
                        >
                            <h3 className="text-2xl font-extrabold mb-3 text-primary">C-Vital-Drip</h3>
                            <p className="text-lg text-gray-800 mb-6">Hochdosiertes Vitamin C für Ihre Gesundheit</p>
                            <p className="text-4xl font-black text-accent mb-3">Ab 149€ - 189€</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="bg-white p-12 rounded-lg shadow-lg text-center w-full"
                        >
                            <h3 className="text-2xl font-extrabold mb-3 text-primary">B Energy Infusion</h3>
                            <p className="text-lg text-gray-800 mb-6">Ihre Quelle für Vitalität!</p>
                            <p className="text-4xl font-black text-accent mb-3">Ab 179€ - 199€</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="bg-white p-12 rounded-lg shadow-lg text-center w-full"
                        >
                            <h3 className="text-2xl font-extrabold mb-3 text-primary">Gluta C Cholin Infusion</h3>
                            <p className="text-lg text-gray-800 mb-6">Entgiftende Infusion mit Glutathion, Vitamin C und Cholin</p>
                            <p className="text-4xl font-black text-accent mb-3">Ab 179€</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="bg-white p-12 rounded-lg shadow-lg text-center w-full"
                        >
                            <h3 className="text-2xl font-extrabold mb-3 text-primary">StressRelief Elixier</h3>
                            <p className="text-lg text-gray-800 mb-6">Ihre Lösung für Stressbewältigung und vegetative Balance</p>
                            <p className="text-4xl font-black text-accent mb-3">Ab 179€</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 1.0, duration: 0.8 }}
                            className="bg-white p-12 rounded-lg shadow-lg text-center w-full"
                        >
                            <h3 className="text-2xl font-extrabold mb-3 text-primary">Radiance Infusion</h3>
                            <p className="text-lg text-gray-800 mb-6">Strahlende Haut und glänzendes Haar</p>
                            <p className="text-4xl font-black text-accent mb-3">Ab 179€</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 1.1, duration: 0.8 }}
                            className="bg-white p-12 rounded-lg shadow-lg text-center w-full"
                        >
                            <h3 className="text-2xl font-extrabold mb-3 text-primary">Vitamin C-Infusion</h3>
                            <p className="text-lg text-gray-800 mb-6">Energie und Immunstärkung in einer Sitzung</p>
                            <p className="text-4xl font-black text-accent mb-3">Ab 149€ - 189€</p>
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
