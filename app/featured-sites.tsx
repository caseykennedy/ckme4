"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import ProjectLink from "~/components/project-link";
import Section from "~/components/ui/section";
import projects from "~/data/projects";
import {
  revealVariants,
  staggerChild,
  staggerContainer,
} from "~/utils/variants";

export default function FeaturedSites() {
  return (
    <Section className="">
      <motion.div className="container">
        {projects
          .filter((project) => !project.featured || undefined)
          .map((project, i) => (
            <ProjectLink project={project} key={i} />
          ))}
      </motion.div>
    </Section>
  );
}
