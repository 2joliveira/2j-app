"use client"

import { useRouter } from "next/navigation";
import { Button } from "./button";

export function NavigationButton() {
  const router = useRouter();

  return (
    <nav className="flex gap-4">
      <Button onClick={() => router.push("/")}>SOBRE</Button>
      {/* <button>EXPERIÊNCIAS</button> */}
      <Button onClick={() => router.push("/projects")}>PROJETOS</Button>
      {/* <button>CONTATO</button> */}
    </nav>
  );
}
