import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { ButtonLink } from "./buttonLink";
import { FaDownload } from "react-icons/fa";

export function DropdownNavMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center justify-center cursor-pointer transition rounded gap-2 text-sm font-semibold text-blue-950 hover:text-blue-900 hover:bg-blue-50 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
          <GiHamburgerMenu className="w-7 h-7" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] rounded-md bg-white p-4 space-y-4 mr-5 outline-none shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade z-50"
          sideOffset={5}
        >
          <DropdownMenu.Item className="outline-none">
            <ButtonLink href="/">INÍCIO</ButtonLink>
          </DropdownMenu.Item>

          <DropdownMenu.Item className="outline-none">
            <ButtonLink href="/projects">PROJETOS</ButtonLink>
          </DropdownMenu.Item>

          <DropdownMenu.Item className="outline-none">
            <ButtonLink href="/contact">CONTATO</ButtonLink>
          </DropdownMenu.Item>

          <DropdownMenu.Item className="outline-none">
            <ButtonLink as="/curriculum/file.pdf" href="#" download>
              <div className="flex gap-2">
                <p>CURRÍCULO</p>
                <FaDownload className="w-4 h-4" />
              </div>
            </ButtonLink>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
