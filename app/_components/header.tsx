"use client";

import { PlusIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="fixed top-0 w-full py-4 mix-blend-difference">
      <div className="container flex flex-row items-center justify-between gap-4">
        <h1 className="text-base leading-tight" aria-label="Casey Kennedy">
          ck_
          <span className="hidden">Casey Kennedy</span>
        </h1>

        <PlusIcon />
      </div>
    </header>
  );
}
