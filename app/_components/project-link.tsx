"use client";

import { useContext, useRef } from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";

import { MouseContext } from "~/context/mouse-context";
import { type ProjectShape } from "~/data/projects";
import { staggerChild } from "~/utils/variants";

export default function ProjectLink({ project }: { project: ProjectShape }) {
  const { client, year, domain } = project;
  const { cursorChangeHandler } = useContext(MouseContext);
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
      className="group grid w-full grid-cols-4 border-t-[2px] border-dotted border-zinc-700 py-5 text-zinc-400 transition-colors last:border-b-[2px] hover:bg-zinc-950 lg:grid-cols-6"
      onMouseEnter={() =>
        cursorChangeHandler({
          type: "figure",
          figure: project.coverImg,
        })
      }
      onMouseLeave={() =>
        cursorChangeHandler({ type: "default", text: "", figure: "" })
      }
    >
      <div className="col-span-3 flex flex-row flex-nowrap lg:col-span-2">
        <div className="relative w-16 text-zinc-400 transition-all">{year}</div>
        <span className="text-white transition-all group-hover:text-white">
          {client}
        </span>
      </div>
      <div className="col-span-3 hidden transition-all group-hover:text-white lg:block">
        {domain}
      </div>
      <div className="col-span-1 flex w-full -translate-x-1 translate-y-1 items-center justify-end text-zinc-400 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-white">
        <ArrowTopRightIcon />
      </div>
    </motion.a>
  );
}
