import ProjectTodos from "./todoapp";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Projects | Full Stack Developer",
    description:
      "Real-world Full Stack projects built with Next.js, React and MongoDB.",
    keywords: [
      "Next.js Projects",
      "Full Stack Portfolio",
      "React MongoDB Apps",
    ],
  };
}
export default function ProjectsPage() {
  return (
    <main>
      <ProjectTodos />
    </main>
  );
}