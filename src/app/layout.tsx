import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ChatBot from "@/app/components/chatbot/chatbot";
import BackgroundAnimationSplash from '@/app/themebg/bgstyling';


import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900 400",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900 400",
});

export const metadata: Metadata = {
  
  metadataBase: new URL("https://agentify-sbt.vercel.app"),

 title: {
    default:
      "Full Stack Developer | AI Chatbot | Next.js | React & MongoDB ",
    template: "%s | Full Stack Developer Portfolio",
  },
  description:
    "Experienced AI Enable Full Stack Developer & Software Engineer specializing in Python, OpenAI Agents, Next.js 16+, React, TypeScript, MongoDB, REST APIs,FastAPI and scalable web applications.",

  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Web Application Engineer",
    "Frontend Backend Developer",
    "Python Developer",
    "JavaScript Developer",
    "TypeScript Developer",
  ],

  alternates: {
    canonical: "https://agentify-sbt.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Full Stack Agentic AI Developer | Python, Typescript, OpenAI Agents SDK, FastAPI, Next.js & React Software Engineer, MongoDB, ",
    description:
      "A professional Full Stack Agentic AI Developer building high-performance AI web applications.",
    url: "https://agentify-sbt.vercel.app",
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Full Stack Developer | Software Engineer",
    description:
      "Full Stack Developer portfolio .",
    images: ["/og/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Your Name",
              jobTitle: "Full Stack Developer",
              description:
                "Professional Full Stack Agentid AI Developer and Software Engineer specializing in Next.js, React, MongoDB and Enabling AI on Your Web Applications.",
              url: "https://agentify-sbt.vercel.app",
              sameAs: [
                "https://github.com/sabahat-shakeel",
                "https://linkedin.com/in/syeda-sabahat-shakeel",
              ],
              knowsAbout: [
                "Python",
                "OpenAI Agents",
                "Next.js",
                "React",
                "TypeScript",
                "MongoDB",
                "FasptAPI",
                "REST APIs",
                "Enbaling AI",
              ],
            }),
          }}
        />
      <BackgroundAnimationSplash/>

         <Navbar />
         {children}
         
          <ChatBot />
        <Footer />
      </body>
    </html>
  );
}
