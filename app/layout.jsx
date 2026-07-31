import { Marcellus, Montserrat, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CursorProvider from "@/components/CursorContext";
import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Chatbot from "@/components/Chatbot";
import CookieBanner from "@/components/CookieBanner";

// Optimize font loading - only load weights actually used
const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Mesoskin Hamburg | Dripspas, PDO Fäden, Hyaluronsäure & mehr für Ihre Schönheit",
  description: "Mesoskin Hamburg bietet innovative Schönheits- und Wellness-Services: Dripspas, PDO Fäden, Doll Lips, Hyaluronsäure, Skinbooster und mehr. Erleben Sie natürliche Ergebnisse und Ihr Wohlbefinden in Hamburg.",
  keywords: ["Mesoskin Hamburg", "Dripspas Hamburg", "PDO Fäden Hamburg", "Doll Lips Hamburg", "Hyaluronsäure Hamburg", "Skinbooster Hamburg", "Schönheit Hamburg", "Wellness Hamburg", "ästhetische Behandlungen Hamburg", "Faltenunterspritzung Hamburg", "Hautverjüngung Hamburg", "natürliche Schönheit", "Annette Fascher-Wendlandt", "NAD+ Infusionen Hamburg", "NAD+ Therapie Hamburg", "Anti-Aging Hamburg", "Energieboost Hamburg"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="h-screen">
      <body
        className={`${marcellus.variable} ${montserrat.variable} ${interTight.variable} overflow-x-hidden overscroll-y-none`}
      >
        <CursorProvider>
          <Transition />
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <ScrollToTopButton />
          <Chatbot />
          <CookieBanner />
        </CursorProvider>
      </body>
    </html>
  );
}
