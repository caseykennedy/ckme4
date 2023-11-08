"use client";

import { PlusIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="fixed top-0 w-full max-w-[1500px] px-2 pt-4 mix-blend-difference sm:px-5">
      <div className="container flex flex-row items-center justify-between">
        <h1 className="text-base leading-tight" aria-label="Casey Kennedy">
          ck_
          <span className="hidden">Casey Kennedy</span>
        </h1>

        <div>
          <PlusIcon />
        </div>
      </div>
    </header>
  );
}
