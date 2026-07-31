"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CursorContext } from "./CursorContext";
import { usePathname } from "next/navigation";
import { NAV_LINKS, navLinkLabel } from "@/lib/navLinks";

const linkClass = (pathname, href, solidHeader) =>
  `${
    pathname === href ? "border-b border-accent" : "border-b border-transparent"
  } ${
    solidHeader
      ? "text-primary hover:text-accent"
      : "text-white hover:text-accent"
  } uppercase transition-colors duration-300 whitespace-nowrap font-normal tracking-normal xl:tracking-wide text-[8px] lg:text-[9px] xl:text-[10px] min-[1400px]:text-xs leading-none py-0.5`;

const Nav = ({ solidHeader }) => {
  const pathname = usePathname();
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [compactLabels, setCompactLabels] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1400px)");
    const update = () => setCompactLabels(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <nav
      className="flex flex-wrap items-center justify-end gap-x-1 gap-y-1 lg:gap-x-1.5 xl:gap-x-2 max-w-full"
      aria-label="Hauptnavigation"
    >
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className={linkClass(pathname, link.href, solidHeader)}
          title={link.name}
        >
          {navLinkLabel(link, compactLabels)}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
