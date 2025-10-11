import Link from "next/link";

import { SiGithub, SiLinkedin } from "react-icons/si";


export function ContactsIcons() {
  return (
    <div className="flex gap-4">
      <Link href="https://github.com/2joliveira">
        <SiGithub className="w-8 h-8 hover:fill-blue-900 hover:shadow-lg hover:shadow-blue-300 rounded-full" />
      </Link>

      <Link href="https://www.linkedin.com/in/jeffersonjcoliveira/">
        <SiLinkedin className="w-8 h-8 hover:fill-blue-900 hover:shadow-lg hover:shadow-blue-300 rounded-lg" />
      </Link>
    </div>
  );
}
