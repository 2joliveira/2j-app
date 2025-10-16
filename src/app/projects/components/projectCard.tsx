import { ButtonLink } from "@/components/buttonLink";
import dynamic from "next/dynamic";
import { ImSpinner9 } from "react-icons/im";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface ProjectCardProps {
  isVisible: boolean;
  isLoading: boolean;
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
  isVisible,
  isLoading,
  slide: { title, description, web_repository, api_repository, src, domain },
}: ProjectCardProps) {
  return (
    <div className="flex flex-col-reverse h-full items-center xl:flex-row justify-between gap-6">
      <section className="flex xl:w-[25%] flex-col items-center justify-between">
        <div className="w-full">
          <h2 className="text-3xl font-extrabold text-blue-950">{title}</h2>

          <section className="max-h-[300px] xl:max-h-[500px] my-4 overflow-y-auto custom-scroll p-2 bg-blue-50">
            {description.map((paragraph, i) => (
              <p key={`paragraph-${i}`} className="mb-4 xl:max-w-[500px]">
                {paragraph}
              </p>
            ))}
          </section>
        </div>

        <div className="flex flex-col w-full gap-2">
          <div className="flex w-full gap-2">
            <ButtonLink size="lg" href={web_repository} variant="secondary">
              REPOSITÓRIO WEB
            </ButtonLink>

            {api_repository && (
              <ButtonLink size="lg" href={api_repository} variant="secondary">
                REPOSITÓRIO API
              </ButtonLink>
            )}
          </div>

          <ButtonLink size="lg" href={domain} variant="secondary">
            ACESSAR DOMÍNIO
          </ButtonLink>
        </div>
      </section>

      <div className="max-w-[1300px] flex-1 h-full aspect-video rounded-xl bg-[#EDF2F8] overflow-hidden">
        {isLoading && (
          <div className="w-full h-full flex items-center justify-center">
            <ImSpinner9 className="w-10 h-10 text-blue-900 animate-spin" />
          </div>
        )}

        {isVisible && (
          <ReactPlayer
            src={src}
            width="100%"
            height="100%"
            playing={isVisible}
            muted
          />
        )}
      </div>
    </div>
  );
}
