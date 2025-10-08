"use client";

import { motion } from "motion/react";
import Image from "next/image";

const photos = [
  "/logoImages/javascript.svg",
  "/logoImages/typescript.svg",
  "/logoImages/react.svg",
  "/logoImages/next.svg",
  "/logoImages/reactNative.svg",
  "/logoImages/expo.svg",
  "/logoImages/node.svg",
  "/logoImages/nest.svg",
  "/logoImages/prisma.svg",
  "/logoImages/postgresql.svg",
  "/logoImages/docker.svg",
];

export function MotionPhotos() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {photos.map((src, i) => (
        <motion.div
          key={src}
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: i * 0.2, // sequência de queda
          }}
          style={{
            width: 50,
            height: 50,
          }}
        >
          <Image src={src} alt={`Logo ${i}`} width={80} height={80} />
        </motion.div>
      ))}
    </div>
  );
}
