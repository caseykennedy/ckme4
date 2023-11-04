"use client";

import { useRef } from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";

import { type ProjectShape } from "~/data/projects";
import { staggerChild } from "~/util/variants";

export default function ProjectLink({ project }: { project: ProjectShape }) {
  const { client, year, domain } = project;
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { amount: 0.9, once: true });
  return (
    <motion.a
      ref={inViewRef}
      variants={staggerChild}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      href={`https://${domain}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-ffull group grid grid-cols-6 border-t-[2px] border-dotted border-zinc-700 py-5 text-zinc-400 transition-colors last:border-b-[2px]"
    >
      <div className="col-span-2 flex flex-row flex-nowrap">
        <div className="relative w-32 text-white transition-all group-hover:text-zinc-400">
          {year}
        </div>
        <span className="transition-all group-hover:text-white">{client}</span>
      </div>
      <div className="col-span-2 transition-all group-hover:text-white">
        {domain}
      </div>
      <div className="col-span-2 flex w-full -translate-x-1 translate-y-1 items-center justify-end text-zinc-400 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-white">
        <ArrowTopRightIcon />
      </div>
    </motion.a>
  );
}
