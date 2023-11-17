"use client";

import { useContext, useRef } from "react";
import { motion } from "framer-motion";

import Section from "~/components/ui/section";
import { MouseContext } from "~/context/mouse-context";
import { useIntersectionObserver } from "~/utils/use-intersection-observer";
import { staggerChild } from "~/utils/variants";

export default function TrippyArt() {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const { cursorChangeHandler } = useContext(MouseContext);

  console.log(`Render Section trippy-art`, { isVisible });

  return (
    <Section
      onMouseEnter={() => cursorChangeHandler({ type: "hidden", text: "" })}
      onMouseLeave={() => cursorChangeHandler({ type: "default", text: "" })}
    >
      <motion.div
        variants={staggerChild}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        ref={ref}
      >
        {isVisible && (
          <iframe
            src="https://munro-art.vercel.app/?params=eyJzcGVlZCI6MC4xLCJub3JtYWxTY2FsZSI6MC40OSwic3RyZW5ndGgiOjEuMTYsInN0cmVuZ3RoU2NhbGUiOnsieCI6MC4xLCJ5IjowLjF9LCJkaXJlY3Rpb24iOnsieCI6LTEsInkiOi0xfSwic2NhbGluZyI6ImZpbGwiLCJpbWdTY2FsZSI6MC44LCJjYW52YXNCRyI6eyJyIjozMCwiZyI6MzAsImIiOjMwLCJhIjoxMDB9LCJpbnRyb0RlbGF5IjozLCJpbnRyb0R1cmF0aW9uIjo1LCJwYXVzZWQiOmZhbHNlLCJpbWFnZXMiOnsiYmciOiIvaW1hZ2VzL3NlbGVjdGlvbi9tY2dnZi5qcGciLCJub3JtYWwiOiIvaW1hZ2VzL2ZpbHRlcl9OUk0uanBnIn19"
            width="100%"
            height="100%"
            className="aspect-[2/3] sm:aspect-video"
          ></iframe>
        )}
      </motion.div>
    </Section>
  );
}
