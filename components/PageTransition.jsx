"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key="page-transition-wrapper">
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.4, duration: 0.5, ease: "easeIn" },
          }}
          className="w-screen h-screen fixed z-30 xl:z-40 bg-white top-0 pointer-events-none"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
