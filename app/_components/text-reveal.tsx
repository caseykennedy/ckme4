"use client";

import { motion } from "framer-motion";

import { staggerChild, staggerContainer } from "~/util/variants";

export default function TextReveal({
  text = "Web development and visual design for people, teams and visionaries",
}: {
  text?: string;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      className="flex flex-wrap overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span variants={staggerChild} key={i}>
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.span>
  );
}
