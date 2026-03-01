import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Don Bosco Institute | Empowering Youth through Education and Vocational Training",
  description:
    "Don Bosco Institute, Tankisinwari, is a leading educational institution dedicated to providing quality education and vocational training to empower the youth of Nepal. Our mission is to foster holistic development, promote social justice, and contribute to the sustainable growth of our communities through education and skill-building programs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white">
        <Navbar />
        {children}
        <Toaster />
        <Footer />
        {/*  */}
        <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
      </body>
    </html>
  );
}
