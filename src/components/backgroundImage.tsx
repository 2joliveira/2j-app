"use client";

import { useState } from "react";
import Image from "next/image";

export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  console.log({ loaded });


  return (
    <main className="relative flex flex-1">
      {!loaded && (
        <div className="absolute inset-0 bg-black animate-pulse z-10" />
      )}

      <Image
        src="/bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        onLoadingComplete={() => setLoaded(true)}
      />

      {loaded && <div className="relative z-20 w-full">{children}</div>}
    </main>
  );
}