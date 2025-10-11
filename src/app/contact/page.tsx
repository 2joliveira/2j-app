import Image from "next/image";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { ButtonLink } from "@/components/buttonLink";
import { coiny } from "@/app/fonts";
import contactsImage from "@/assets/contact.jpg";

export default function Contact() {
  return (
    <main className="w-full py-1 px-4">
      <h1
        className={`${coiny.className} text-4xl font-extrabold text-white drop-shadow-[0_6px_4px_rgba(0,0,0,0.6)] mb-5`}
      >
        <span className="text-blue-800">Ent</span>re em contato
      </h1>

      <div className="flex bg-blue-50 h-[85%] mx-10 rounded-2xl shadow-lg shadow-blue-700/40 animate-slide-down overflow-hidden">
        <Image
          alt="contact"
          src={contactsImage}
          className="w-2xl object-cover"
        />

        <div className="m-15 grid grid-cols-2 bg-white rounded-2xl">
          <div className="space-y-5 p-10">
            <p className="mb-10 font-black text-blue-950">
              Se você gostou do meu trabalho ou quer saber mais sobre mim, entre
              em contato! Estou sempre aberto a novas oportunidades,
              colaborações e boas ideias. Seja para discutir um projeto, trocar
              experiências sobre desenvolvimento ou simplesmente conversar sobre
              tecnologia, será um prazer conectar. Utilize os canais disponíveis
              para falar comigo, responderei o mais breve possível. 😃
            </p>

            <div className="flex pt-5 items-start flex-col gap-5">
              <ButtonLink
                variant="secondary"
                href="https://wa.me/5581996581075"
              >
                <SiWhatsapp />
                Whatsapp
              </ButtonLink>

              <ButtonLink
                variant="secondary"
                href="https://github.com/2joliveira"
              >
                <SiGithub />
                Github
              </ButtonLink>

              <ButtonLink
                variant="secondary"
                href="https://wa.me/5581996581075"
              >
                <SiLinkedin />
                Linkedin
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
