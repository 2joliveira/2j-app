"use client"

import { useRouter } from "next/navigation";

export function NavigationButton() {
  const router = useRouter();

  return (
    <nav className="flex gap-4">
      <button onClick={() => router.push("/")}>INÍCIO</button>
      <button>SOBRE</button>
      <button>EXPERIÊNCIAS</button>
      <button onClick={() => router.push("/projects")}>PROJETOS</button>
      <button>CONTATO</button>
    </nav>
  );
}
