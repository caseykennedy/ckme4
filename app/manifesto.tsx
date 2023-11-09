"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Section from "~/components/ui/section";
import { cn } from "~/utils";

const Item = ({ children }: { children: React.ReactNode }) => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, {
    margin: "-38% 0px -38% 0px",
    amount: 0.7,
    once: false,
  });
  return (
    <motion.li
      ref={inViewRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      // variants={variants}
      className={cn(
        `border-t-[2px] border-dotted border-zinc-700 py-6 leading-tight transition-colors`,
        {
          "text-white": isInView,
          "text-zinc-600": !isInView,
        },
      )}
    >
      <div className="max-w-[44ch]">{children}</div>
    </motion.li>
  );
};

export default function Manifesto() {
  return (
    <Section className="border-t-0">
      <ul className="text-2xl lg:text-5xl">
        <Item>
          Let’s keep it real. I value crystal clear, upfront communication.
        </Item>
        <Item>
          We’re in this together and doing our best, let’s have fun :)
        </Item>
        <Item>
          I work hard and play hard. I embrace a playful attitude and never take
          myself too seriously.
        </Item>
        <Item>Out of the box, but never out of touch.</Item>
        <Item>
          I keep an open and playful mind and aim to learn whenever possible
        </Item>
      </ul>
    </Section>
  );
}
