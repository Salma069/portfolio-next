
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Salma | Portfolio",
    template: "%s | Salma",
  },
  description:
    "Portfolio Salma yg dibangun menggunakan NEXT JS sebagai framework",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        
      </head>

      <body className="min-h-full flex flex-col text-foreground bg-background">
        <Navbar />

        {children}

        <Footer className="bg-aksen" />
      </body>
    </html>
  );
}
