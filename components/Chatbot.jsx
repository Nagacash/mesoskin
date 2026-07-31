"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";


const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hallo! Ich bin der virtuelle Assistent von Mesoskin. Wie kann ich Ihnen helfen? Fragen Sie mich gerne nach Behandlungen, Annette oder Terminen.",
            sender: "bot",
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isLoading]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputValue,
            sender: "user",
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);

        try {
            const systemPrompt = `
        Du bist der freundliche und professionelle virtuelle Assistent von Mesoskin Hamburg.
        Deine Aufgabe ist es, potenziellen Kunden Fragen zu beantworten und sie zu einer Terminbuchung zu ermutigen.
        
        Wichtige Informationen:
        - Inhaberin: Annette Fascher-Wendlandt (Expertin für ästhetische Behandlungen, Fokus auf Natürlichkeit).
        - Standort: Osterstraße 92, 20259 Hamburg.
        - Kontakt: Tel: +49 40 23491990, Email: kontakt@mesoskinhamburg.de.
        - Terminbuchung: Über Telefon, Email oder das Kontaktformular auf der Webseite.
        
        Behandlungen:
        - Drip Spa: Vitamin-Infusionen (z.B. NAD+) für Energie, Immunsystem und Anti-Aging.
        - PDO Fäden: Fadenlifting ohne OP, kollagenanregend, straffend, natürlich.
        - Doll Lips: Lippenaufbau mit Hyaluron, Fokus auf Kontur, kein "Entenschnabel".
        - Hyaluronsäure: Faltenunterspritzung, Volumenaufbau, Feuchtigkeit.
        - Skinbooster: Tiefenhydration, Verbesserung der Hautqualität.
        - Hypoxie-Training (IHHT): Zelltraining für mehr Energie (Mitochondrien).
        - Liposana 3: Frequenz-Technologie für Lymphdrainage, Straffung und Entgiftung.
        - Notox: Natürliche Alternative zu Botox (Argireline), entspannt Mimikfalten.

        Verhalte dich höflich, hilfsbereit und kompetent. Antworte kurz und prägnant.
        Wenn du eine Frage nicht beantworten kannst, verweise freundlich auf den Kontakt per Telefon oder Email.
        Sprich den Nutzer mit "Sie" an, es sei denn, er duzt dich.
      `;

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                role: "user",
                                parts: [{ text: systemPrompt }]
                            },
                            {
                                role: "model",
                                parts: [{ text: "Verstanden. Ich bin bereit, als Assistent für Mesoskin Hamburg zu helfen." }]
                            },
                            ...messages.map(msg => ({
                                role: msg.sender === "user" ? "user" : "model",
                                parts: [{ text: msg.text }]
                            })).filter(msg => msg.parts[0].text !== "Hallo! Ich bin der virtuelle Assistent von Mesoskin. Wie kann ich Ihnen helfen? Fragen Sie mich gerne nach Behandlungen, Annette oder Terminen."),
                            {
                                role: "user",
                                parts: [{ text: userMessage.text }]
                            }
                        ]
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            const text = data.candidates[0].content.parts[0].text;

            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    text: text,
                    sender: "bot",
                },
            ]);
        } catch (error) {
            console.error("Error generating response:", error);
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    text: "Entschuldigung, es gab ein technisches Problem. Bitte kontaktieren Sie uns direkt per Telefon oder E-Mail.",
                    sender: "bot",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-accent-hover transition-colors duration-300"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-20 right-4 md:bottom-28 md:right-8 z-50 w-[calc(100vw-2rem)] md:w-[400px] h-[60vh] md:h-[500px] bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex items-center gap-3 shadow-md">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white">
                                <Bot size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold">Mesoskin Assistant</h3>
                                <p className="text-white/70 text-xs">Powered by AI</p>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === "user"
                                            ? "bg-accent text-white rounded-tr-none"
                                            : "bg-white text-gray-700 border border-gray-100 rounded-tl-none"
                                            }`}
                                    >
                                        <ReactMarkdown
                                            components={{
                                                ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-2 space-y-1" {...props} />,
                                                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                                                p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                                strong: ({ node, ...props }) => (
                                                    <span className={`font-bold ${msg.sender === "bot" ? "text-accent" : ""}`} {...props} />
                                                ),
                                            }}
                                        >
                                            {msg.text}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                                        <Loader2 className="w-5 h-5 animate-spin text-accent" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form
                            onSubmit={handleSendMessage}
                            className="p-4 bg-white border-t border-gray-100 flex gap-2"
                        >
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Fragen Sie etwas..."
                                className="flex-1 bg-gray-100 text-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isLoading}
                                className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
