import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import { HeaderMain, BackgroundWrapper } from "@/components";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jefferson Oliveira - Desenvolvedor Full Stack",
  description:
    "Portfólio de Jefferson Oliveira, desenvolvedor web especializado em React, Next.js, React Native e TypeScript. Foco em performance, design responsivo e boas práticas de código.",
  keywords: ["desenvolvedor", "full stack", "React", "Next.js", "TypeScript", "React Native", "portfólio"],
  authors: [{ name: "Jefferson Oliveira" }],
  creator: "Jefferson Oliveira",
  publisher: "Jefferson Oliveira",
  robots: "index, follow",
  openGraph: {
    title: "Jefferson Oliveira - Desenvolvedor Full Stack",
    description: "Portfólio profissional: Especialista em React, Next.js, TypeScript e desenvolvimento web moderno.",
    url: "https://2j-app.vercel.app",
    siteName: "Jefferson Oliveira Portfolio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Jefferson Oliveira - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jefferson Oliveira - Desenvolvedor Full Stack",
    description: "Portfólio profissional: Especialista em React, Next.js, TypeScript e desenvolvimento web moderno.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://2j-app.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body cz-shortcut-listen="true" className="h-full flex flex-col">
        <HeaderMain />

        <BackgroundWrapper>
          {children}
        </BackgroundWrapper>

        <Toaster />

        <Analytics />
      </body>
    </html>
  );
}
