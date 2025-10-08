import Image from "next/image";
import Link from "next/link";

import githubSvg from "@/assets/socialMedia/github.svg";
import linkedinSvg from "@/assets/socialMedia/linkedin.svg";

export function ContactsIcons() {
  const contacts = [
    {
      name: "github",
      icon: githubSvg,
      link: "https://github.com/2joliveira",
    },
    {
      name: "linkedin",
      icon: linkedinSvg,
      link: "https://www.linkedin.com/in/jeffersonjcoliveira/",
    },
  ];
  return (
    <div className="flex gap-4">
      {contacts.map(({ name, icon, link }) => (
        <Link
          key={name}
          href={link}
          className="hover:invert-75 transition"
        >
          <Image width={28} height={28} src={icon} alt={name} />
        </Link>
      ))}
    </div>
  );
}
