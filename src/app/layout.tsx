import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { HeaderMain } from "@/components/headerMain";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jefferson Oliveira",
  description: "Portfólio, desenvolvedor web especializado em React, Next.js, React Native e TypeScript. Foco em performance, design responsivo e boas práticas de código."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body cz-shortcut-listen="true" className="h-full flex flex-col">
        <HeaderMain />

        <main className="flex flex-1 bg-[url(/bg.jpg)] bg-cover bg-no-repeat">
          {children}
        </main>

        <Toaster />
      </body>
    </html>
  );
}
