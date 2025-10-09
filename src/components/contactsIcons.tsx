import Link from "next/link";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function ContactsIcons() {
  return (
    <div className="flex gap-4">
      <Link href="https://github.com/2joliveira">
        <GitHubLogoIcon className="w-8 h-8 hover:text-white hover:bg-black rounded-lg" />
      </Link>

      <Link href="https://www.linkedin.com/in/jeffersonjcoliveira/">
        <LinkedInLogoIcon className="w-8 h-8 hover:text-white hover:bg-black rounded-lg" />
      </Link>
    </div>
  );
}
