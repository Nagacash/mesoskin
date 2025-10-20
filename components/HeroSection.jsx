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
      className="min-h-screen flex items-center overflow-x-hidden pt-60"
    >
      <div className="container mx-auto">
                  <div className="flex flex-col xl:flex-row items-center h-full">
                    <div className="w-full text-center xl:text-left xl:w-[500px] pt-24 md:pt-32 xl:pt-0 pb-12">
                      <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: 2, duration: 1, ease: "easeInOut" },
                        }}
                      >
                        <div className="bg-accent-100 px-4 py-2 rounded-lg mb-8 mx-auto max-w-max"
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={mouseLeaveHandler}
                        >
                          <motion.h2
                            className="h2"
                          >
                            <span className="font-bold">Natürliche Schönheit und Gesundheit</span> <br /> beginnt hier
                          </motion.h2>
                        </div>
                        <div className="mb-8 text-left pt-12">
                          <h2 className="h2 mb-4 text-center">Willkommen bei Mesoskin</h2>
                          <p className="lead max-w-xl mx-auto text-primary mb-4">
                            Willkommen bei Mesoskin in der Welt der natürlichen Schönheit und Gesundheitspflege!
                          </p>
                          <p className="lead max-w-xl mx-auto text-primary mb-4">
                            Treten Sie ein in eine Oase der Ruhe und Regeneration, wo wissenschaftliche Expertise auf die heilende Kraft der Natur trifft. Bei Mesoskin verstehen wir Schönheit nicht als kurzlebigen Trend, sondern als das strahlende äußere Zeichen innerer Balance und optimaler Gesundheit. Wir sind Ihr Partner auf dem Weg zu einem vitaleren Ich, bei dem Ihre Hautpflege und Ihr Wohlbefinden ganzheitlich betrachtet werden.
                          </p>
                          <p className="lead max-w-xl mx-auto text-primary mb-4">
                            Ich lade Sie ein, sich mit mir auf eine transformative Reise zu begeben, die Ihre Gesundheit, Ihr Wohlbefinden und Ihre natürliche Schönheit in den Mittelpunkt stellt. Vergessen Sie standardisierte Lösungen – hier bei Mesoskin dreht sich alles um Sie: Ihre individuellen Bedürfnisse, Ihre einzigartige Hautgeschichte und Ihre persönlichen Ziele. Entdecken Sie unser sorgfältig kuratiertes Spektrum an fortschrittlichen, minimal-invasiven Behandlungen und ganzheitlichen Pflegekonzepten, die darauf abzielen, Ihre natürliche Ausstrahlung nachhaltig zu stärken. Lassen Sie uns gemeinsam Ihr volles Potenzial an Schönheit und Vitalität entfalten. Ihre Reise zu langanhaltender, natürlicher Schönheit beginnt jetzt.
                          </p>
                        </div>
                        <h3 className="h3 mb-4 pt-12">Annette Fascher</h3>
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
