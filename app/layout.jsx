import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CursorProvider from "@/components/CursorContext";
import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import CookieBanner from "@/components/CookieBanner";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

// Import Inter Tight from Google Fonts
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter-tight",
});

export const metadata = {
  title: "Mesoskin Hamburg | Ihr Experte für Schönheit & Wohlbefinden in Deutschland",
  description: "Entdecken Sie bei Mesoskin Hamburg innovative Schönheits- und Wellness-Services in Deutschland. Wir bieten Dripspas, PDO Fäden, Doll Lips, Hyaluronsäure und Skinbooster für natürliche Ergebnisse und Ihr Wohlbefinden in Hamburg.",
  keywords: ["naga codex", "maurice holda", "Annette Fascher-Wendlandt"],
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
          <CookieBanner />
        </CursorProvider>
      </body>
    </html>
  );
}
