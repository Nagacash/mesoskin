"use client";
import { IoCloseOutline, IoStarOutline } from "react-icons/io5";
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
    <nav className="relative flex flex-col justify-between h-full p-8">
      <div
        className="cursor-pointer text-accent-DEFAULT"
        onClick={() => setMobileNav(false)}
      >
        <IoCloseOutline className="text-4xl" />
      </div>
      <div className="flex justify-center mb-8">
        <IoStarOutline className="text-white text-5xl" />
      </div>
      <ul className="flex flex-col gap-10 text-white text-xl items-center pb-10">
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
                className={`max-w-xs ${pathname === link.href ? 'border-b-4 border-accent-100' : 'hover:text-accent-DEFAULT'}`}              onClick={() => setMobileNav(false)}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      {/* <Socials containerStyles="text-white text-lg flex gap-6 justify-center" /> */}
    </nav>
  );
};

export default MobileNav;
