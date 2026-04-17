import Image from "next/image";
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { ButtonLink } from "@/components/ui/buttonLink";
import { ContactForm } from "./components/contactForm";
import { coiny } from "@/app/fonts";
import contactsImage from "@/assets/contact.jpg";

export default function Contact() {
  return (
    <main className="w-full py-4 px-4 lg:px-4">
      <h1
        className={`${coiny.className} text-4xl font-extrabold text-white drop-shadow-[0_6px_4px_rgba(0,0,0,0.6)] mb-5`}
      >
        <span className="text-blue-800">Ent</span>re em contato
      </h1>

      <div className="flex flex-col lg:flex-row 2xl:h-[85%] bg-blue-50 mx-4 mb-8 2xl:mb-0 xl:mx-10 rounded-2xl shadow-lg shadow-blue-700/40 animate-slide-down overflow-hidden">
        <Image
          alt="contact"
          src={contactsImage}
          className="w-full lg:w-sm xl:w-2xl object-cover max-h-60 lg:max-h-full"
        />

        <div className="m-4 p-4 2xl:m-10 grid grid-cols-1 2xl:grid-cols-2 bg-white rounded-2xl">
          <div className="flex flex-col justify-between p-4">
            <p className="mb-5 font-black text-sm text-blue-950">
              Se você gostou do meu trabalho ou quer saber mais sobre mim, entre
              em contato! Estou sempre aberto a novas oportunidades,
              colaborações e boas ideias. Seja para discutir um projeto, trocar
              experiências sobre desenvolvimento ou simplesmente conversar sobre
              tecnologia, será um prazer conectar. Utilize os canais disponíveis
              para entrar em contato comigo, responderei o mais breve possível.
              😃
            </p>

            <div className="flex pt-2 items-start flex-col gap-2 2xl:gap-4">
              <ButtonLink
                size="lg"
                variant="secondary"
                href="https://wa.me/5581996581075"
              >
                <SiWhatsapp />
                Whatsapp
              </ButtonLink>

              <ButtonLink
                size="lg"
                variant="secondary"
                href="https://github.com/2joliveira"
              >
                <SiGithub />
                Github
              </ButtonLink>

              <ButtonLink
                size="lg"
                variant="secondary"
                href="https://www.linkedin.com/in/jeffersonjcoliveira/"
              >
                <SiLinkedin />
                Linkedin
              </ButtonLink>

              <ButtonLink
                size="lg"
                variant="secondary"
                href="mailto:jj.oliveira2118@gmail.com"
              >
                <SiGmail />
                E-mail
              </ButtonLink>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </main>
  );
}
