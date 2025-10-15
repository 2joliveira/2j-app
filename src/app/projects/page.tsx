import type { Metadata } from "next";
import { coiny } from "@/app/fonts";

import { ProjectList } from "./components/projectList";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos desenvolvidos com React, Next.js, TypeScript e Tailwind CSS.",
  robots: "index, follow",
  openGraph: {
    title: "Portfolio, Dev Full stack",
    description: "Desenvolvedor Web, focado em React, Next, Typescript e Node",
    url: "https://2j-app.vercel.app/og-projects-image.jpg",
    siteName: "2j-app",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://2j-app.vercel.app/og-projects-image.jpg",
        width: 800,
        height: 600,
        alt: "2j-app",
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
