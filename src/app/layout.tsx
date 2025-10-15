import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { HeaderMain } from "@/components/headerMain";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jefferson Oliveira",
  description:
    "Portfólio, desenvolvedor web especializado em React, Next.js, React Native e TypeScript. Foco em performance, design responsivo e boas práticas de código.",
  robots: "index, follow",
  openGraph: {
    title: "Portfolio, Dev front end",
    description: "Desenvolvedor Web, focado em React, Next e Typescript",
    url: "https://2j-app.vercel.app/og-image.jpg",
    siteName: "2j-app",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://2j-app.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "2j-app",
      },
    ],
  },
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
