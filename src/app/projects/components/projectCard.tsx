import { ButtonLink } from "@/components/buttonLink";
import Link from "next/link";
import ReactPlayer from "react-player";

interface ProjectCardProps {
  slide: {
    title: string;
    src: string;
    description: string[];
    web_repository: string;
    api_repository?: string;
    domain: string;
  };
}

export function ProjectCard({
  slide: { title, description, web_repository, api_repository, src, domain },
}: ProjectCardProps) {
  return (
    <div className="flex justify-between gap-6 px-4">
      <section className="flex flex-col items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-blue-950 mb-4">{title}</h2>

          <section className="max-h-[500px] overflow-y-auto custom-scroll p-2 bg-blue-50">
            {description.map((paragraph, i) => (
              <p key={`paragraph-${i}`} className="mb-4 max-w-[500px]">
                {paragraph}
              </p>
            ))}
          </section>
        </div>

        <div className="flex flex-col w-full gap-2">
          <div className="flex w-full gap-2">
            <ButtonLink href={web_repository} variant="secondary">
              Repositório WEB
            </ButtonLink>

            {api_repository && (
              <ButtonLink href={api_repository} variant="secondary">
                Repositório API
              </ButtonLink>
            )}
          </div>

          <ButtonLink href={domain} variant="secondary">
            Acessar Domínio
          </ButtonLink>
        </div>
      </section>

      <main className="bg-[#EDF2F8]">
        <div className="w-full max-h-[700px] aspect-video rounded-xl overflow-hidden">
          <ReactPlayer
            src={src}
            width="100%"
            height="100%"
            playing
            loop
            muted
          />
        </div>
      </main>
    </div>
  );
}
