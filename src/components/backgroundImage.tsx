"use client";

import { useState } from "react";
import Image from "next/image";

export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const [loadedImage, setLoadedImage] = useState(false);

  return (
    <main className="relative flex flex-1">
      {!loadedImage && (
        <div className="absolute inset-0 bg-black animate-pulse z-10" />
      )}

      <Image
        src="/bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        onLoad={() => setLoadedImage(true)}
      />

      {loadedImage && <div className="relative z-20 w-full">{children}</div>}
    </main>
  );
}