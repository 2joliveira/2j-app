"use client";

import { ButtonLink, MotionPhotos } from "@/components";
import { SiGithub, SiLinkedin } from "react-icons/si";
import profileImage from "@/assets/profile.jpg";
import Image from "next/image";

export function ProfileSection() {
  return (
    <>
      <section className="relative md:ml-20 z-2 flex flex-col md:flex-row items-center w-fit md:max-w-[600px] min-h-60 bg-white px-4 py-6 gap-5 rounded-lg md:mb-10 md:mt-20 shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-slide-down">
        <figure className="bg-[linear-gradient(90deg,black_0%,blue_25%,silver_50%,blue_75%,black_100%)] p-1 rounded-full">
          <Image
            src={profileImage}
            alt="foto"
            className="w-35 min-w-35 h-35 rounded-full object-cover"
            priority
          />
        </figure>

        <div className="w-full">
          <span className="flex gap-1 sm flex-wrap items-center justify-center sm:justify-between">
            <h2 className="font-extrabold text-3xl text-blue-950">
              Jefferson Oliveira
            </h2>

            <div className="flex gap-4">
              <ButtonLink size="sm" href="https://github.com/2joliveira">
                <SiGithub className="w-7 h-7" />
              </ButtonLink>

              <ButtonLink
                size="sm"
                href="https://www.linkedin.com/in/jeffersonjcoliveira/"
              >
                <SiLinkedin className="w-7 h-7" />
              </ButtonLink>
            </div>
          </span>
          <h3 className="font-medium text-center sm:text-start text-gray-500 ml-2">
            Desenvolvedor Full stack
          </h3>
          <MotionPhotos />
        </div>
      </section>
    </>
  );
}
