"use client";

import Image from "next/image";
import homeImage from "@/assets/home.jpg";
import { motion } from "motion/react";

export function HomeImageContainer() {
  return (
    <figure className="absolute -top-80 -right-30 z-0 animate-slide-down">
      <motion.div
        key={homeImage.src}
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 1,
        }}
      >
        <Image
          alt="home"
          src={homeImage}
          priority
          className="w-[900px] h-[900px] object-cover rounded-[100%] overflow-hidden shadow-lg shadow-blue-700/40"
        />
      </motion.div>
    </figure>
  );
}
