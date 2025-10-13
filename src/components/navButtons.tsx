import { ButtonLink } from "./buttonLink";

export function NavButtons() {
  return (
    <nav className="flex gap-2 lg:gap-4">
      <ButtonLink href="/">SOBRE</ButtonLink>
      {/* <button>EXPERIÊNCIAS</button> */}
      <ButtonLink href="/projects">PROJETOS</ButtonLink>
      <ButtonLink href="/contact">CONTATO</ButtonLink>
    </nav>
  );
}
