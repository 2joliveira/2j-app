import "./globals.css";

import { Metadata } from "next";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { NavButtons } from "@/components/navButtons";

export const metadata: Metadata = {
  title: "Jefferson Oliveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body cz-shortcut-listen="true" className="h-full flex flex-col">
        <header className="flex z-20 w-full items-center justify-between px-10 py-1 bg-[#F2F5FA] shadow-lg shadow-blue-700/10">
          <Image src={logo} alt="logo" width={50} height={50} />

          <NavButtons />
        </header>

        <main className="flex flex-1 bg-[url(/bg-projects.jpg)] bg-cover bg-no-repeat">
          {children}
        </main>
      </body>
    </html>
  );
}
