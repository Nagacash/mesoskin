"use client";
import { IoCloseOutline, IoStarOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <nav className="relative flex flex-col h-full w-full p-8 pb-10 bg-secondary/95 backdrop-blur-xl overflow-y-auto">
      {/* Close Button */}
      <div
        className="absolute top-6 right-6 cursor-pointer text-primary z-50 p-2 hover:bg-primary/5 rounded-full transition-colors"
        onClick={() => setMobileNav(false)}
      >
        <IoCloseOutline className="text-4xl" />
      </div>

      {/* Logo */}
      <div className="flex justify-center mt-4 mb-12">
        <Link href="/" onClick={() => setMobileNav(false)}>
          <h1 className="text-3xl font-bold tracking-widest uppercase text-primary">
            Mesoskin<span className="font-light">Hamburg</span>
          </h1>
        </Link>
      </div>

      {/* Links */}
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6 items-start pl-8 mb-12"
      >
        {links.map((link, index) => {
          return (
            <motion.li key={index} variants={item}>
              <Link
                href={link.href}
                onClick={() => setMobileNav(false)}
                className={`text-3xl font-primary uppercase tracking-widest transition-all duration-300 ${pathname === link.href
                  ? "text-accent border-b-2 border-accent"
                  : "text-primary hover:text-accent"
                  }`}
              >
                {link.name}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>

      {/* CTA & Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-auto flex flex-col items-center gap-8"
      >
        <button
          onClick={() => {
            setMobileNav(false);
            router.push("/contact");
          }}
          className="px-10 py-4 bg-accent text-white rounded-full font-primary uppercase tracking-widest text-sm hover:bg-accent/90 transition-colors shadow-[0_0_20px_rgba(197,160,133,0.4)] w-full max-w-xs"
        >
          Termin buchen
        </button>

        <div className="flex flex-col items-center gap-4 text-primary/70">
          <a href="tel:+4917661639830" className="flex items-center gap-3 text-lg hover:text-accent transition-colors">
            <FaPhoneAlt className="w-5 h-5" />
            <span>0176 6163 9830</span>
          </a>
          <a href="mailto:kontakt@mesoskinhamburg.de" className="flex items-center gap-3 text-lg hover:text-accent transition-colors">
            <IoMdMail className="w-5 h-5" />
            <span>kontakt@mesoskinhamburg.de</span>
          </a>
        </div>

        <Socials containerStyles="flex gap-6 text-primary text-2xl hover:text-accent transition-colors" />
      </motion.div>
    </nav>
  );
};

export default MobileNav;
