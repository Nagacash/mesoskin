"use client";

import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/navLinks";

const CONTACT_HREF = "/contact";

const linkClass = (pathname, href, solidHeader) =>
  `${
    pathname === href ? "border-b-2 border-accent" : ""
  } ${
    solidHeader
      ? "text-primary hover:text-accent"
      : "text-white hover:text-accent"
  } uppercase transition-colors duration-300 whitespace-nowrap font-medium tracking-wide text-[10px] lg:text-[11px] xl:text-xs min-[1400px]:text-sm py-1`;

const Nav = ({ solidHeader }) => {
  const pathname = usePathname();
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const mainLinks = NAV_LINKS.filter((link) => link.href !== CONTACT_HREF);
  const contactLink = NAV_LINKS.find((link) => link.href === CONTACT_HREF);

  return (
    <nav
      className="flex items-center gap-2 xl:gap-3 min-w-0 w-full max-w-full justify-end"
      aria-label="Hauptnavigation"
    >
      <div
        className="min-w-0 flex-1 overflow-x-auto overscroll-x-contain scroll-smooth nav-scroll-fade lg:max-w-[calc(100vw-11rem)] xl:max-w-[calc(100vw-18rem)] min-[1400px]:max-w-none"
        tabIndex={0}
        aria-label="Behandlungen und Seiten"
      >
        <div className="flex w-max items-center gap-2 xl:gap-3 xl:pr-1">
          {mainLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className={linkClass(pathname, link.href, solidHeader)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {contactLink && (
        <Link
          href={contactLink.href}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className={`${linkClass(pathname, contactLink.href, solidHeader)} shrink-0 pl-1 border-l border-current/15`}
        >
          {contactLink.name}
        </Link>
      )}
    </nav>
  );
};

export default Nav;
