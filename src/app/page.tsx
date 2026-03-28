import { HomeImageContainer, ProfileSection } from "@/components";

export default function Home() {
  return (
    <div className="relative w-full space-y-15 md:space-y-5 p-4 overflow-hidden">
      <ProfileSection />

      <div className="relative md:mt-30 z-2 w-full md:-ml-24 bg-white rounded-4xl p-10 flex justify-end shadow-lg shadow-blue-700/40 animate-slide-right mb-0">
        <article className="w-[600px] space-y-4 text-blue-950 font-medium">
          <p>
            Sou um desenvolvedor full stack com experiência sólida em React,
            Next.js, React Native, Node.js e diversas tecnologias do ecossistema
            JavaScript. Tenho paixão por criar interfaces modernas e
            responsivas, integrar APIs complexas e otimizar aplicações para alta
            performance. Com espírito empreendedor, sempre busco projetos
            desafiadores e inovadores, equilibrando trabalho sério com
            criatividade.
          </p>
        </article>
      </div>

      <HomeImageContainer />
    </div>
  );
}
