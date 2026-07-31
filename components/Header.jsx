"use client";
import { useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { CursorContext } from "./CursorContext";
import { prefersLightHeader } from "@/lib/navLinks";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const pathname = usePathname();
  const [mobileNav, setMobileNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const solidHeader = scrolled || prefersLightHeader(pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!mobileNav) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileNav]);

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {mobileNav && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[600] flex flex-col lg:hidden"
          >
            <MobileNav setMobileNav={setMobileNav} />
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    );

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[500] w-full transition-all duration-500 ${
          solidHeader
            ? "bg-white/80 backdrop-blur-md shadow-sm pb-4 pt-[max(1rem,env(safe-area-inset-top))]"
            : "bg-transparent pb-6 pt-[max(1.5rem,env(safe-area-inset-top))]"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8">
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="z-50 shrink-0 max-w-[42%] sm:max-w-none"
          >
            <Link href="/" aria-label="Mesoskin Hamburg Home">
              <span
                className={`block text-base sm:text-lg lg:text-[15px] xl:text-xl min-[1400px]:text-2xl font-bold tracking-wide lg:tracking-widest uppercase transition-colors duration-300 ${
                  solidHeader ? "text-primary" : "text-white"
                }`}
              >
                Mesoskin
                <span className="font-light hidden min-[1400px]:inline">Hamburg</span>
              </span>
            </Link>
          </motion.div>

          <div className="hidden lg:flex min-w-0 flex-1 items-center justify-end pl-1 xl:pl-2 max-w-[calc(100%-7.5rem)] sm:max-w-[calc(100%-9rem)]">
            <motion.div
              className="min-w-0 w-full flex justify-end"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <Nav solidHeader={solidHeader} />
            </motion.div>
          </div>

          <button
            type="button"
            className={`lg:hidden cursor-pointer z-50 shrink-0 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded ${
              mobileNav ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onClick={() => setMobileNav(true)}
            aria-label="Menü öffnen"
            aria-expanded={mobileNav}
            aria-controls="mobile-navigation"
          >
            <AiOutlineMenu
              className={`text-3xl transition-colors duration-300 ${
                solidHeader ? "text-primary" : "text-white"
              }`}
            />
          </button>
        </div>
      </header>
      {mobileMenu}
    </>
  );
};

export default Header;
