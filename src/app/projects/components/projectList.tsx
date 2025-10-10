"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { ProjectCard } from "./projectCard";
import slides from "../projects.json";

export function ProjectList() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [
      Autoplay({
        delay: 10000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <main className="flex-1 p-4 bg-[#EDF2F8] mx-10 rounded-2xl shadow-lg shadow-blue-700/40 animate-slide-down">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <motion.div
              key={`slide-${i}`}
              className="flex-[0_0_100%] relative h-full"
              initial={{ opacity: 0.5, scale: 0.98 }}
              animate={{
                opacity: selectedIndex === i ? 1 : 0.6,
                scale: selectedIndex === i ? 1 : 0.98,
              }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard slide={slide} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 gap-2">
        <button
          onClick={scrollPrev}
          className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition mr-4"
          aria-label="Anterior"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>

        <div className="space-x-2 pt-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === selectedIndex
                  ? "bg-blue-800 scale-110"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition ml-4"
          aria-label="Próximo"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </main>
  );
}
