"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { TbArrowBigLeftFilled, TbArrowBigRightFilled } from "react-icons/tb";
import { ProjectCard } from "./projectCard";
import slides from "../projects.json";

export function ProjectList() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "center" },
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

    setIsLoading(true);

    setSelectedIndex(emblaApi.selectedScrollSnap());

    setTimeout(() => setIsLoading(false), 1000);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <main className="flex-1 p-4 bg-[#EDF2F8] xl:mx-10 rounded-2xl shadow-lg shadow-blue-700/40 animate-slide-down mb-4">
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
              <ProjectCard
                slide={slide}
                isVisible={selectedIndex === i}
                isLoading={isLoading}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 gap-2">
        <button
          onClick={scrollPrev}
          disabled={selectedIndex === 0}
          className="text-blue-950 rounded-lg p-2 transition disabled:opacity-50 disabled:pointer-events-none hover:text-blue-900 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
          aria-label="Anterior"
        >
          <TbArrowBigLeftFilled className="w-5 h-5" />
        </button>

        <div className="space-x-2 pt-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === selectedIndex
                  ? "bg-blue-950 scale-110"
                  : "bg-gray-400 hover:bg-blue-900"
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          disabled={selectedIndex === slides.length - 1}
          className="text-blue-950 rounded-lg p-2 transition disabled:opacity-50 disabled:pointer-events-none hover:text-blue-900 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
          aria-label="Próximo"
        >
          <TbArrowBigRightFilled className="w-5 h-5" />
        </button>
      </div>
    </main>
  );
}
