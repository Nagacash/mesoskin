"use client";
import { useContext, useState } from "react";
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
  return (
    <header className="pb-6 xl:pb-[50px] fixed top-0 left-0 z-[500] w-full bg-white overflow-x-hidden">
      <div className="bg-primary mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">

            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-center xl:w-auto xl:justify-normal"
            >
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-[20px_1fr] gap-2 items-center text-white">
                  <FaPhoneAlt className="w-5" />
                  <span>017661639830</span>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-[20px_1fr] gap-2 items-center text-white">
                  <IoMdMail className="w-5" />
                  <span>kontakt@mesoskinhamburg.de</span>
                </div>
              </div>
            </motion.div>
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
      <div className="container mx-auto flex items-center justify-between px-4">
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">MESOSKIN HAMBURG</h1>
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
          className="fixed bg-primary top-0 bottom-0 right-0 w-full xl:hidden z-[999]"
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
