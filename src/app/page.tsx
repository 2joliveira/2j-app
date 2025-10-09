import Image from "next/image";
import profileImage from "@/assets/profile.jpg";
import homeImage from "@/assets/home.jpg";
import { MotionPhotos } from "@/components/motionPhotos";
import { About } from "@/components/about";
import { ContactsIcons } from "@/components/contactsIcons";

export default function Home() {
  return (
    <div className="relative w-full space-y-5 p-4 overflow-hidden">
      <section className="relative ml-20 z-2 flex items-center w-fit max-w-[600px] min-h-80 bg-white p-4 gap-5 rounded-lg mt-20 shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-slide-down mb-10">
        <figure className="bg-[linear-gradient(90deg,black_0%,blue_25%,silver_50%,blue_75%,black_100%)] p-1 rounded-full">
          <Image
            src={profileImage}
            alt="foto"
            className="w-35 min-w-35 h-35 rounded-full object-cover"
            priority
          />
        </figure>

        <div className="w-full">
          <span className="flex gap-10 items-center justify-start">
            <h2 className="font-extrabold text-3xl text-gray-800">
              Jefferson Oliveira
            </h2>

            <ContactsIcons />
          </span>
          <h3 className="font-medium text-gray-500 ml-2">
            Desenvolvedor Full stack
          </h3>

          <MotionPhotos />
        </div>
      </section>

      <About />

      <figure className="absolute -top-80 -right-30 z-0">
        <Image
          alt="home"
          src={homeImage}
          priority
          className="w-[900px] h-[900px] object-cover rounded-[100%] overflow-hidden"
        />
      </figure>
    </div>
  );
}
