import Image from "next/image";
import profileImage from "@/assets/profile.jpg";
import { MotionPhotos } from "@/components/motionPhotos";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div className="w-full space-y-5 p-4">
      <section className="flex items-center w-fit max-w-[600px] min-h-60 bg-white p-4 gap-5 rounded-lg mt-20 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
        <figure className="bg-[linear-gradient(90deg,black_0%,blue_25%,silver_50%,blue_75%,black_100%)] p-1 rounded-full">
          <Image
            src={profileImage}
            alt="foto"
            className="w-35 min-w-35 h-35 rounded-full object-cover"
            priority
          />
        </figure>

        <span>
          <h2 className="font-extrabold text-3xl text-gray-800">
            Jefferson Oliveira
          </h2>
          <h3 className="font-medium text-gray-500">
            Desenvolvedor Full stack
          </h3>
          <MotionPhotos />
        </span>
      </section>

      <About />

      <footer className="flex mt-30 justify-center items-center gap-4">
        <button>
          <Image
            width={30}
            height={30}
            src="/socialMedia/whatsapp.svg"
            alt="whatsapp"
          />
        </button>

        <button>
          <Image
            width={30}
            height={30}
            src="/socialMedia/github.svg"
            alt="github"
          />
        </button>

        <button>
          <Image
            width={30}
            height={30}
            src="/socialMedia/linkedin.svg"
            alt="linkedin"
          />
        </button>

        <button>
          <Image
            width={30}
            height={30}
            src="/socialMedia/email.svg"
            alt="email"
          />
        </button>
      </footer>
    </div>
  );
}
