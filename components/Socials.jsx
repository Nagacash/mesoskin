import Link from "next/link";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/annette.fascherwendlandt/",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/mesoskin.hamburg/",
  },
];

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      {socials.map((social, index) => {
        return (
          <li key={index}>
            <Link href={social.href}>{social.icon}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
