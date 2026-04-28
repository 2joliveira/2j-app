"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { NavButtons } from "@/components/navButtons";
import { DropdownNavMenu } from "./dropdownNavMenu";

export function HeaderMain() {
  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [loadedImage, setLoadedImage] = useState(false);

  useEffect(() => {
    const element = divRef.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={divRef}
      className={`${!loadedImage ? "absolute -top-100" : "flex"} z-20 w-full items-center justify-between px-4 xl:px-10 py-1 bg-[#F2F5FA] shadow-lg shadow-blue-700/10`}
    >
      <Image src={logo} alt="logo" width={50} height={50} onLoad={() => setLoadedImage(true)} />

      {width < 550 ? <DropdownNavMenu /> : <NavButtons />}
    </header>
  );
}
