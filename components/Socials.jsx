import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CONTACT_INFO } from "@/lib/constants";

const socials = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/annette.fascherwendlandt/",
  },
  {
    icon: <FaInstagram />,
    href: CONTACT_INFO.social.instagram,
  },
];

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      {socials.map((social, index) => {
        return (
          <li key={index}>
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.href.includes("instagram") ? "Instagram" : "Facebook"}
            >
              {social.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
