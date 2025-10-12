import { ButtonLink } from "@/components";
import { Input } from "./input";
import { TextArea } from "./textArea";

export function ContactForm() {
  return (
    <form className="px-10 py-8 flex flex-col justify-between">
      <div className="space-y-10">
        <Input placeholder="Nome" />

        <Input placeholder="E-Mail" type="email" />

        <TextArea placeholder="Mensagem" />
      </div>

      <ButtonLink href="" size="lg" variant="secondary">
        Enviar mensagem
      </ButtonLink>
    </form>
  );
}
