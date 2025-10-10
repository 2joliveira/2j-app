import { coiny } from "@/app/fonts";

export default function Contact() {
  return (
    <main className="w-full p-5">
      <h1
        className={`${coiny.className} text-4xl font-extrabold text-white drop-shadow-[0_6px_4px_rgba(0,0,0,0.6)] mb-5`}
      >
        <span className="text-blue-800">Ent</span>re em contato
      </h1>

      <div className="bg-blue-50 h-[90%] mx-10 rounded-2xl p-5 shadow-lg shadow-blue-700/40 animate-slide-down">
        <p>
          Se você gostou do meu trabalho ou quer saber mais sobre mim, entre em
          contato! Estou sempre aberto a novas oportunidades, colaborações e
          boas ideias. Seja para discutir um projeto, trocar experiências sobre
          desenvolvimento ou simplesmente conversar sobre tecnologia, será um
          prazer conectar. Utilize os canais abaixo para falar comigo,
          responderei o mais breve possível.
        </p>
      </div>
    </main>
  );
}
