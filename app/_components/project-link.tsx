"use client";

import { useContext, useRef } from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";

import { type ProjectLinkShape } from "../featured-sites";

import { MouseContext } from "~/context/mouse-context";
import { cn } from "~/utils";
import { staggerChild } from "~/utils/variants";

export default function ProjectLink({
  project,
}: {
  project: ProjectLinkShape;
}) {
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
      className={cn(
        `z-1 group relative grid w-full grid-cols-4 border-t-[2px] border-dotted border-zinc-700 py-5 text-zinc-400 transition-colors after:absolute after:bottom-0 after:left-0  after:right-0 after:z-[-1] after:h-0 after:bg-zinc-900 after:transition-all after:ease-in after:content-[''] last:border-b-[2px] after:hover:top-0 after:hover:h-full lg:grid-cols-6`,
      )}
      onMouseEnter={() =>
        cursorChangeHandler({
          type: "figure",
          figure: project.secure_url,
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
