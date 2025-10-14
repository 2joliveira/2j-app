import Image from "next/image";
import { About } from "@/components";
import homeImage from "@/assets/home.jpg";
import { ProfileSection } from "@/components/profileSection";

export default function Home() {
  return (
    <div className="relative w-full space-y-15 md:space-y-5 p-4 overflow-hidden">
      <ProfileSection />

      <About />

      <figure className="absolute -top-80 -right-30 z-0 ">
        <Image
          alt="home"
          src={homeImage}
          priority
          className="w-[900px] h-[900px] object-cover rounded-[100%] overflow-hidden shadow-lg shadow-blue-700/40"
        />
      </figure>
    </div>
  );
}
