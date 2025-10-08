import "./globals.css";

import Image from "next/image";
import logo from "@/assets/logo.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body cz-shortcut-listen="true" className="h-full flex flex-col">
        <header className="flex w-full items-center justify-between px-10 py-2 bg-[#F2F5FA]">
          <Image src={logo} alt="logo" width={50} height={50} />

          <nav className="flex gap-4">
            <button>home</button>
            <button>about</button>
            <button>work</button>
            <button>skills</button>
            <button>contact</button>
          </nav>
        </header>

        <main className="flex flex-1 bg-[#EDF2F8]">{children}</main>
      </body>
    </html>
  );
}
