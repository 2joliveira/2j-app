import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { HeaderMain } from "@/components/headerMain";

import "./globals.css";

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
        <HeaderMain />

        <main className="flex flex-1 bg-[url(/bg-projects.jpg)] bg-cover bg-no-repeat">
          {children}
        </main>

        <Toaster />
      </body>
    </html>
  );
}
