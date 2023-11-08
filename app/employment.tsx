"use client";

import { useRef } from "react";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";

import Section from "~/components/ui/section";
import employment, { type EmploymentShape } from "~/data/employment";
import { cn } from "~/utils";
import { staggerChild } from "~/utils/variants";

const JobCard = ({
  job,
  className,
}: {
  job: EmploymentShape;
  className?: string;
}) => {
  const { company, position, startDate, endDate, description, focus } = job;
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { amount: 0.5, once: true });
  return (
    <motion.div
      ref={inViewRef}
      variants={staggerChild}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(
        `col-span-1 border-t-[2px] border-dotted border-zinc-800 pt-3 sm:border-t-0 sm:pt-0 lg:col-span-2`,
        className,
      )}
    >
      <div>
        {company}{" "}
        <span className="text-zinc-400">
          | {startDate} {endDate && `– ${endDate}`}
        </span>
        <br />
        {position}
      </div>
      <div className="py-4">
        <ArrowDownIcon />
      </div>
      <p className="mb-8 text-zinc-400">{description}</p>
      <div>
        <p className="mb-2">Focus</p>
        <ul className="text-zinc-400">
          {focus.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function Employment() {
  return (
    <Section className="items-center border-t-[2px] border-dotted border-zinc-700">
      <div className="container grid grid-cols-6 gap-5">
        <div className="col-span-full mb-16 text-zinc-400 md:col-span-1">
          Employment
        </div>
        <motion.div className="col-span-full grid grid-cols-1 gap-5 gap-y-12 sm:grid-cols-2 sm:gap-y-24 lg:col-span-5 lg:grid-cols-5">
          {employment[0] && (
            <JobCard job={employment[0]} className="border-t-0 " />
          )}

          {employment[1] && (
            <JobCard job={employment[1]} className="lg:col-start-4" />
          )}

          {employment[2] && (
            <JobCard job={employment[2]} className="lg:col-start-2" />
          )}

          {employment[3] && <JobCard job={employment[3]} />}

          {employment[4] && (
            <JobCard job={employment[4]} className="lg:col-start-2" />
          )}

          {employment[5] && <JobCard job={employment[5]} />}
        </motion.div>
      </div>
    </Section>
  );
}
