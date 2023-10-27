"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { staggerChild, staggerContainer } from "~/util/variants";

const aboutMe = [
  "Based in the Nevada desert, I am an independent web developer and designer working with people worldwide.",
  "I’ve made my way through a range of industries including DNS and domain registration, crypto, eCommerce, marketing, gaming and hospitality, and entertainment. With over 15 years of combined experience, my background has taught me to work in fast-paced environments and to collaborate with interdisciplinary teams.",
  "My promise is simple—no matter who I work with and what I do, I’ll always aim high and do it right. I aim to deliver quality design and clean code, and to perfect each step of the process.",
];

export default function About() {
  const inViewRef = useRef(null);

  const isInView = useInView(inViewRef, { amount: 0.75, once: true });
  return (
    <section className="w-full items-center border-t-[2px] border-dotted border-zinc-700 pb-24 pt-4">
      <div className="container grid grid-cols-6 gap-5">
        <div className="col-span-full text-zinc-400 md:col-span-3">About</div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          ref={inViewRef}
          className="col-span-full text-zinc-400 md:col-span-3"
        >
          {aboutMe.map((para, i) => (
            <motion.p variants={staggerChild} key={i} className="mb-4 text-2xl">
              {para}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}