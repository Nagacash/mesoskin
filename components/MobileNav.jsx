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
  {
    href: "/treatments/hypoxie-training",
    name: "Hypoxie-Training",
  },
  {
    href: "/contact",
    name: "Kontakt",
  },
];

const MobileNav = ({ setMobileNav }) => {
  const pathname = usePathname();
  return (
    <nav className="relative flex flex-col h-full p-8">
      <div
        className="absolute top-4 right-4 cursor-pointer text-accent-DEFAULT z-50"
        onClick={() => setMobileNav(false)}
      >
        <IoCloseOutline className="text-5xl" />
      </div>
      <div className="flex justify-center mb-12 mt-8">
        <h2 className="text-white text-4xl font-extrabold tracking-wider">MENU</h2>
      </div>
      <ul className="flex flex-col gap-6 text-white text-2xl items-center pb-10">
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
                className={`max-w-xs ${pathname === link.href ? 'border-b-4 border-accent-100' : 'hover:text-accent-DEFAULT hover:scale-110'} whitespace-nowrap transition-all duration-300`}              onClick={() => setMobileNav(false)}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      <div className="flex flex-col items-center gap-4 text-white mt-auto pt-10">
        <div className="flex items-center gap-3 text-lg">
          <FaPhoneAlt className="w-6 h-6 text-accent-DEFAULT" />
          <span>017661639830</span>
        </div>
        <div className="flex items-center gap-3 text-lg">
          <IoMdMail className="w-6 h-6 text-accent-DEFAULT" />
          <span>kontakt@mesoskinhamburg.de</span>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
