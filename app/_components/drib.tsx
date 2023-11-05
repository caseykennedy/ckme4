"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import type { ImageShape } from "../dribbbles";

import Img from "./img";

import { cn } from "~/utils";
import { staggerChild } from "~/utils/variants";

export default function Drib({ resource }: { resource: ImageShape }) {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { amount: 0.5, once: true });

  return (
    <motion.div
      key={resource.asset_id}
      ref={inViewRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerChild}
    >
      <Img
        src={resource.secure_url}
        alt="alt"
        width={800}
        height={530}
        // placeholder="blur"
        // blurDataURL={resource.blurDataUrl}
        style={{
          // backgroundColor: resource.color?.hex,
          width: "100%",
          height: "auto",
        }}
        className={cn(`object-cover object-top`)}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
      />
    </motion.div>
  );
}
