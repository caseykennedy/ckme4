"use client";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { type ProjectShape } from "~/data/projects";

export default function ProjectLink({ project }: { project: ProjectShape }) {
  const { client, year, domain } = project;
  return (
    <a
      href="#"
      className="w-ffull group grid grid-cols-6 border-t-[2px] border-dotted border-zinc-700 py-5 text-zinc-400 transition-colors"
    >
      <div className="col-span-2 flex flex-row flex-nowrap">
        <div className="relative w-32 text-white transition-all group-hover:text-zinc-400">
          {year}
        </div>
        <span className="transition-all group-hover:text-white">{client}</span>
      </div>
      <div className="col-span-2">{domain}</div>
      <div className="col-span-2 flex w-full -translate-x-1 translate-y-1 items-center justify-end text-zinc-400 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-white">
        <ArrowTopRightIcon />
      </div>
    </a>
  );
}
