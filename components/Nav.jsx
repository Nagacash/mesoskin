import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import { usePathname } from "next/navigation";

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

const Nav = ({ scrolled }) => {
  const pathname = usePathname();
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className={`${pathname === link.href
                ? "border-b-2 border-accent"
                : ""
                } ${scrolled ? "text-primary hover:text-accent" : "text-white hover:text-accent"
                } uppercase transition-colors duration-300 whitespace-nowrap font-medium tracking-wider text-sm`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
