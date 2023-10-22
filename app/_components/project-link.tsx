"use client";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { cn } from "~/util";

export default function ProjectLink() {
  return (
    <a
      href="#"
      className="w-ffull group grid grid-cols-6 border-t-[2px] border-dotted border-zinc-700 py-5"
    >
      <div className="col-span-2 flex flex-row flex-nowrap">
        <div className="relative w-32 transition-all group-hover:text-zinc-400">
          2018
        </div>
        Cahuilla Consortium
      </div>
      <div className="col-span-2 text-zinc-400 transition-colors group-hover:text-white">
        cahuillaconsortium.com
      </div>
      <div className="col-span-2 flex w-full -translate-x-2 translate-y-2 items-center justify-end text-zinc-500 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-white">
        <ArrowTopRightIcon />
      </div>
    </a>
  );
}
