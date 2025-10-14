"use client";
import { IoCloseOutline } from "react-icons/io5";
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
    href: "/treatments/liposana-3",
    name: "Liposana 3",
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
    <nav className="relative flex flex-col justify-between h-full p-8">
      <div
        className="cursor-pointer text-accent-DEFAULT"
        onClick={() => setMobileNav(false)}
      >
        <IoCloseOutline className="text-4xl" />
      </div>
      <ul className="flex flex-col gap-10 text-white text-xl">
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
              className={`${pathname === link.href ? 'border-b-2 border-accent-DEFAULT' : 'hover:text-accent-DEFAULT'} uppercase max-w-max mx-auto transition-colors`}              onClick={() => setMobileNav(false)}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      <Socials containerStyles="text-white text-lg flex gap-6 justify-center" />
    </nav>
  );
};

export default MobileNav;
