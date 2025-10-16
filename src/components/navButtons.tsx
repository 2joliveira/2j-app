import { FaDownload } from "react-icons/fa";
import { ButtonLink } from "./buttonLink";

export function NavButtons() {
 

  return (
    <nav className="flex gap-2 lg:gap-4">
      <ButtonLink href="/">INÍCIO</ButtonLink>
      <ButtonLink href="/projects">PROJETOS</ButtonLink>
      <ButtonLink href="/contact">CONTATO</ButtonLink>
      <ButtonLink as="/curriculum/file.pdf" href="#" download>
        <div className="flex gap-2">
          <p>CURRÍCULO</p>
          <FaDownload className="w-4 h-4" />
        </div>
      </ButtonLink>
    </nav>
  );
}
