"use client";
import { useContext, useState, useEffect } from "react";
import { CursorContext } from "./CursorContext";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Socials from "./Socials";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-[500] w-full transition-all duration-500 ${scrolled
        ? "bg-white/80 backdrop-blur-md py-4 shadow-sm"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="z-50"
        >
          <Link href="/" aria-label="Mesoskin Hamburg Home">
            <h1 className={`text-2xl font-bold tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
              Mesoskin<span className="font-light">Hamburg</span>
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Nav & Socials */}
        <div className="hidden xl:flex items-center gap-12">
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Nav scrolled={scrolled} />
          </motion.div>

          <div className={`h-6 w-[1px] ${scrolled ? 'bg-primary/20' : 'bg-white/20'}`}></div>

          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Socials containerStyles={`flex gap-6 ${scrolled ? 'text-primary' : 'text-white'} transition-colors duration-300`} />
          </motion.div>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          className={`xl:hidden cursor-pointer z-50 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded ${mobileNav ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          onClick={() => setMobileNav(!mobileNav)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileNav}
        >
          <AiOutlineMenu className={`text-3xl transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`} />
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileNav && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            >
              <MobileNav setMobileNav={setMobileNav} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
