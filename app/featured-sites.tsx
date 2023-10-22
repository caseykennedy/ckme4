"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import ProjectLink from "~/components/project-link";
import {
  revealVariants,
  staggerChild,
  staggerContainer,
} from "~/util/variants";

export default function FeaturedSites() {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { amount: 0.75, once: true });
  return (
    <section className="w-full">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={revealVariants}
        ref={inViewRef}
        className="container"
      >
        <motion.div variants={revealVariants}>
          <ProjectLink />
        </motion.div>
        <motion.div variants={revealVariants}>
          <ProjectLink />
        </motion.div>
        <motion.div variants={revealVariants}>
          <ProjectLink />
        </motion.div>
        <motion.div variants={revealVariants}>
          <ProjectLink />
        </motion.div>
        <motion.div variants={revealVariants}>
          <ProjectLink />
        </motion.div>
        <motion.div variants={revealVariants}>
          <ProjectLink />
        </motion.div>
        <motion.div variants={revealVariants}>
          <ProjectLink />
        </motion.div>
        <motion.div variants={revealVariants}>
          <ProjectLink />
        </motion.div>
        <motion.div variants={revealVariants}>
          <ProjectLink />
        </motion.div>
      </motion.div>
    </section>
  );
}
