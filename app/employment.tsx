"use client";

import { useRef } from "react";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";

import employment, { type EmploymentShape } from "~/data/employment";
import {
  revealVariants,
  staggerChild,
  staggerContainer,
} from "~/util/variants";

const JobCard = ({ job }: { job: EmploymentShape }) => {
  const { company, position, startDate, endDate, description, focus } = job;
  return (
    <>
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
    </>
  );
};

export default function Employment() {
  console.log(employment[0]);

  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { amount: 0.3, once: true });
  return (
    <section className="w-full items-center border-t-[2px] border-dotted border-zinc-700 pb-24 pt-4">
      <div className="container grid grid-cols-6 gap-5">
        <div className="col-span-full text-zinc-400 md:col-span-1">
          Employment
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          ref={inViewRef}
          className="col-span-full grid grid-cols-5 gap-5 gap-y-24 md:col-span-5"
        >
          <motion.div variants={staggerChild} className="col-span-2 ">
            {employment[0] && <JobCard job={employment[0]} />}
          </motion.div>
          <motion.div
            variants={staggerChild}
            className="col-span-2 col-start-4 "
          >
            {employment[1] && <JobCard job={employment[1]} />}
          </motion.div>
          <motion.div
            variants={staggerChild}
            className="col-span-2 col-start-2"
          >
            {employment[2] && <JobCard job={employment[2]} />}
          </motion.div>
          <motion.div variants={staggerChild} className="col-span-2">
            {employment[3] && <JobCard job={employment[3]} />}
          </motion.div>
          <motion.div
            variants={staggerChild}
            className="col-span-2 col-start-2"
          >
            {employment[4] && <JobCard job={employment[4]} />}
          </motion.div>
          <motion.div variants={staggerChild} className="col-span-2">
            {employment[5] && <JobCard job={employment[5]} />}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
