import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Fraunces,
  Geist,
  Instrument_Serif,
  Karla,
  Outfit,
} from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex’ception — Restaurant à Raismes",
  description:
    "Une cuisine française contemporaine, guidée par les produits, les saisons et l’envie de créer une expérience sincère.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-concept="01"
      className={`${geistSans.variable} ${instrumentSerif.variable} ${outfit.variable} ${fraunces.variable} ${karla.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Script id="alexeption-concept" strategy="beforeInteractive">
          {`(function(){try{var c=localStorage.getItem("alexeption-concept");if(c==="02"||c==="03")document.documentElement.setAttribute("data-concept",c);}catch(e){}})();`}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
