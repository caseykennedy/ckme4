"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import ProjectLink from "~/components/project-link";
import projects from "~/data/projects";
import {
  revealVariants,
  staggerChild,
  staggerContainer,
} from "~/util/variants";

export default function FeaturedSites() {
  return (
    <section className="w-full">
      <motion.div className="container">
        {projects
          .filter((project) => !project.featured || undefined)
          .map((project, i) => (
            <ProjectLink project={project} key={i} />
          ))}
      </motion.div>
    </section>
  );
}
