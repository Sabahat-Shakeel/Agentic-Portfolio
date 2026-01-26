import type { Metadata } from "next";
import AboutMe from "./about";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Me | Full Stack Developer & Software Engineer",
    description:
      "Professional Full Stack Developer aur Software Engineer with strong experience in Next.js, React, TypeScript, MongoDB aur scalable web applications.",
    keywords: [
      "About Full Stack Developer",
      "Software Engineer Portfolio",
      "Next.js Developer Profile",
      "React MongoDB Developer",
      "MERN Stack Engineer",
      "Web Application Developer",
    ],
    openGraph: {
      title: "About Me | AI Enable and Full Stack Developer",
      description:
        "Learn more about an experienced Full Stack Developer specializing in Next.js, React and modern web technologies.",
      url: "https://agentify-sbt.vercel.app/about",
      type: "profile",
    },
    alternates: {
      canonical: "https://agentify-sbt.vercel.app/about",
    },
  };
}

export default function AboutPage() {
  return (
    <main>
      <AboutMe />
    </main>
  );
}