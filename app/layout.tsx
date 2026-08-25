import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Geist,
  Geist_Mono,
  Inter,
  Playfair_Display,
  Amiri,
  Fraunces,
  Source_Serif_4,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

/* Site chrome. Spec 6.2. */
/* Only the body face preloads. Everything else swaps in off the critical
   path, which is what keeps LCP inside the budget. */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
  preload: false,
});
const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

/* Project faces for palette plates and specimens. Five slots, spec 7.6. */
const inter = Inter({ variable: "--font-p-inter", subsets: ["latin"], display: "swap", preload: false });
const playfair = Playfair_Display({ variable: "--font-p-playfair", subsets: ["latin"], display: "swap", preload: false });
const amiri = Amiri({
  variable: "--font-p-amiri",
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});
const fraunces = Fraunces({ variable: "--font-p-fraunces", subsets: ["latin"], display: "swap", preload: false });
const sourceSerif = Source_Serif_4({ variable: "--font-p-source-serif", subsets: ["latin"], display: "swap", preload: false });

const FONTS = [bricolage, geist, geistMono, inter, playfair, amiri, fraunces, sourceSerif]
  .map((f) => f.variable)
  .join(" ");

export const metadata: Metadata = {
  metadataBase: new URL("https://aatirsiddiqui.vercel.app"),
  title: "Aatir Siddiqui",
  description:
    "Cloud security analyst on federal cloud infrastructure. An index of the iOS apps, web apps, and ventures he has built.",
  openGraph: {
    title: "Aatir Siddiqui",
    description: "An index of the iOS apps, web apps, and ventures he has built.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={FONTS}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
