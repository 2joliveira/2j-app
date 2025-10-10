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

          <section className="max-h-[500px] overflow-y-auto custom-scroll pr-2">
            {description.map((paragraph, i) => (
              <p key={`paragraph-${i}`} className="mb-4 max-w-[500px]">
                {paragraph}
              </p>
            ))}
          </section>
        </div>

        <div className="flex flex-col w-full gap-2">
          <div className="flex w-full gap-2">
            <Link
              className="w-full text-[14px] text-white font-bold bg-blue-950 p-2 rounded-xl hover:bg-blue-900 text-center transition-colors"
              href={web_repository}
            >
              Repositório WEB
            </Link>

            {api_repository && (
              <Link
                className="w-full text-[14px] text-white font-bold bg-blue-950 p-2 rounded-xl hover:bg-blue-900 text-center transition-colors"
                href={api_repository}
              >
                Repositório API
              </Link>
            )}
          </div>
          <Link
            className="w-full text-[14px] text-white font-bold bg-blue-950 p-2 rounded-xl hover:bg-blue-900 text-center transition-colors"
            href={domain}
          >
            Acessar Domínio
          </Link>
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
