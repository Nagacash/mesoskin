"use client";
import { IoCloseOutline, IoStarOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Socials from "./Socials";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "Über mich",
  },
  {
    href: "/treatments/dripspas",
    name: "Dripspas",
  },
  {
    href: "/treatments/pdo-faden",
    name: "PDO Fäden",
  },
  {
    href: "/treatments/doll-lips",
    name: "Doll Lips",
  },
  {
    href: "/treatments/hyaluronsaure",
    name: "Hyaluronsäure",
  },
  {
    href: "/treatments/skinbooster",
    name: "Skinbooster",
  },
];

const MobileNav = ({ setMobileNav }) => {
  const pathname = usePathname();
  return (
    <nav className="relative flex flex-col h-full p-8">
      <div
        className="cursor-pointer text-accent-DEFAULT"
        onClick={() => setMobileNav(false)}
      >
        <IoCloseOutline className="text-4xl" />
      </div>
      <div className="flex justify-center mb-8">
        <h2 className="text-white text-3xl font-bold">MENU</h2>
      </div>
      <ul className="flex flex-col gap-10 text-white text-xl items-center pb-10">
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
                className={`max-w-xs ${pathname === link.href ? 'border-b-4 border-accent-100' : 'hover:text-accent-DEFAULT'} whitespace-nowrap`}              onClick={() => setMobileNav(false)}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      <div className="flex flex-col items-end gap-2 text-white mt-auto">
        <div className="grid grid-cols-[20px_1fr] gap-2 items-center">
          <FaPhoneAlt className="w-5" />
          <span>017661639830</span>
        </div>
        <div className="grid grid-cols-[20px_1fr] gap-2 items-center">
          <IoMdMail className="w-5" />
          <span>kontakt@mesoskinhamburg.de</span>
        </div>
      </div>
      {/* <Socials containerStyles="text-white text-lg flex gap-6 justify-center" /> */}
    </nav>
  );
};

export default MobileNav;
