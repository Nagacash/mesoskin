"use client";
import { useContext, useState, useEffect } from "react";
import { CursorContext } from "./CursorContext";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Socials from "./Socials";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
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
    <header className={`fixed top-0 left-0 z-[500] w-full bg-white overflow-x-hidden transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/30 pb-3 xl:pb-[25px]' : 'pb-6 xl:pb-[50px]'}`}>
      <div className="bg-primary mb-6 xl:mb-[20px] xl:h-[20px] py-1 xl:py-0 hidden md:block">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">


            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:block"
            >
              <Socials containerStyles="flex gap-6 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-4 pt-2 pb-0">
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="mx-auto xl:mx-0"
        >
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary"><strong>MESOSKIN</strong> HAMBURG</h1>
          </Link>
        </motion.div>
        <div
          className="xl:hidden cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-full h-screen xl:hidden z-[999]"
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:block"
        >
          <Nav />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
