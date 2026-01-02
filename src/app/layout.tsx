import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ChatBot from "@/app/components/chatbot/chatbot";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sabahat-Shakkel",
  description: "AI Enable Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
         <Navbar />
         {children}
          <ChatBot />
        <Footer />
      </body>
    </html>
  );
}
