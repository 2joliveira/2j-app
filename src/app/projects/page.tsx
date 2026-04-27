import type { Metadata } from "next";
import { coiny } from "@/app/fonts";

import { ProjectList } from "./components/projectList";

export const metadata: Metadata = {
  title: "Projetos | Jefferson Oliveira - Desenvolvedor Full Stack",
  description: "Explore os projetos desenvolvidos por Jefferson Oliveira, utilizando React, Next.js, TypeScript, Tailwind CSS e Node.js. Veja exemplos de aplicações web modernas.",
  keywords: ["desenvolvedor", "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  openGraph: {
    title: "Projetos - Jefferson Oliveira",
    description: "Veja meus projetos em React, Next.js, TypeScript e Node.js.",
    url: "https://2j-app.vercel.app/projects",
    siteName: "2j-app",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://2j-app.vercel.app/og-projects-image.jpg",
        width: 800,
        height: 600,
        alt: "Projetos - Jefferson Oliveira",
      },
    ],
  },
};

export default function Projects() {
  return (
    <div className="w-full py-1 px-4">
      <h1
        className={`${coiny.className} text-4xl text-white drop-shadow-[0_6px_4px_rgba(0,0,0,0.6)] mb-5`}
      >
        <span className="text-blue-800">Pro</span>jetos
      </h1>

      <ProjectList />
    </div>
  );
}
