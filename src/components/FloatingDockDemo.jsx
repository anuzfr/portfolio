import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconFileCv,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      title: "GitHub",
      href: "https://github.com/anuzfr",
    },
    {
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/anuj--singh/",
    },
    {
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      title: "Twitter",
      href: "#",
    },
    {
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      title: "Resume",
      href: "#",
      
    }
    
];
  return (
    <div className="flex items-center justify-center h-[15rem] w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>
  );
}
