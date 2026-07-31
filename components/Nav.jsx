"use client";

import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/navLinks";

const Nav = ({ solidHeader }) => {
  const pathname = usePathname();
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <nav
      className="min-w-0 max-w-[min(100%,42rem)] xl:max-w-none overflow-x-auto overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Hauptnavigation"
    >
      <div className="flex w-max lg:gap-2 xl:gap-4 2xl:gap-5">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className={`${
              pathname === link.href ? "border-b-2 border-accent" : ""
            } ${
              solidHeader
                ? "text-primary hover:text-accent"
                : "text-white hover:text-accent"
            } uppercase transition-colors duration-300 whitespace-nowrap font-medium tracking-wide lg:text-[11px] xl:text-xs 2xl:text-sm lg:px-0.5`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
