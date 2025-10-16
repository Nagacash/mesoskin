"use client";

import { CursorContext } from "@/components/CursorContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden pt-80"
    >
      <div className="container mx-auto">
                  <div className="flex flex-col xl:flex-row items-center h-full">
                    <div className="w-full text-center xl:text-left xl:w-[500px] pt-24 md:pt-32 xl:pt-0">
                      <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: 2, duration: 1, ease: "easeInOut" },
                        }}
                      >
                        <div className="bg-accent-100 p-2 rounded-lg mb-8"
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={mouseLeaveHandler}
                        > {/* Added div with pink background and padding */}
                          <motion.h1
                            className="h1"
                          >
                            <span className="font-bold">Natürliche Schönheit</span> <br /> beginnt hier
                          </motion.h1>
                        </div>
                        <div className="mb-8 text-left">
                          <h3 className="h3 mb-4">Qualifikationen:</h3>
                          <ul className="list-disc list-inside text-primary text-lg">
                            <li><span className="font-semibold">Heilpraktikerin seit 1995:</span> Langjährige Erfahrung in der alternativen Medizin und Gesundheitsförderung.</li>
                            <li><span className="font-semibold">Zertifizierte psychologische Beraterin:</span> Weiterbildung in psychologischer Beratung und Coaching, um Klienten bei der Bewältigung von Lebensherausforderungen zu unterstützen.</li>
                            <li><span className="font-semibold">Spezialisiert auf Vitamininfusionen:</span> Expertise in der Anwendung von Vitamininfusionen zur Förderung von Energie, Immunsystem und Entgiftung.</li>
                            <li><span className="font-semibold">Regelmäßige Fortbildungen:</span> Kontinuierliche Weiterbildung, um mein Wissen über aktuelle Trends und Entwicklungen im Gesundheitsbereich zu vertiefen.</li>
                          </ul>
                        </div>
                        <h3 className="h3 mb-4">Annette Fascher</h3>
                        <div
                          onMouseEnter={mouseEnterHandler}
                          onMouseLeave={mouseLeaveHandler}
                          className="lead max-w-xl mx-auto text-primary mb-12"
                        >
                          <motion.p>
                            Maßgeschneiderte Hautpflegelösungen für einen gesunden Teint, die
                            individuelle Pflege für strahlende Haut bieten.<br /><br />Ich bin seit 1995 Heilpraktikerin und habe mir über die Jahre ein umfangreiches Wissen in der ganzheitlichen Gesundheitsberatung angeeignet.<br /><br />Parallel dazu habe ich mich als psychologische Beraterin und Lebenscoach weitergebildet. Diese Kombination ermöglicht es mir, Menschen in ihrer Gesamtheit zu betrachten und auf beiden Ebenen – körperlich und psychisch – zu unterstützen.
                          </motion.p>
                        </div>
                        <div className="flex flex-col xl:flex-row items-center gap-8 max-w-max mx-auto">
                        <div
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={mouseLeaveHandler}
                            className="btn btn-lg"
                            onClick={handleContactClick}
                        >
                          <motion.button>
                            Termin buchen
                          </motion.button>
                        </div>
                        </div>
                      </motion.div>
                    </div>
          <div className="flex-1 pt-8 md:pt-16 xl:pt-0">
            <div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:flex justify-center rounded-lg"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.8, ease: "easeInOut" }}
              >
                <Image
                  src="/assets/home/meso10.jpg"
                  width={700}
                  height={500}
                  alt="Skin Care Woman"
                  className="rounded-lg shadow-xl w-full h-auto object-cover border border-white border-4"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
