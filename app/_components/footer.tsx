"use client";

import { ArrowUpIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

import { contact, links } from "~/data/info";
import useDate from "~/lib/useDate";
import { scrollTop } from "~/util";
import { staggerChild, staggerContainer } from "~/util/variants";

export default function Footer() {
  const nevadaTime = useDate();
  return (
    <footer className="border-t-[2px] border-dotted border-zinc-700 py-4">
      <div className="container pb-96">Casey Kennedy</div>
      <div className="container grid grid-cols-6">
        <div className="col-span-1 self-end md:col-span-2">©☻</div>
        <div className="col-span-2 self-end text-zinc-400">nv {nevadaTime}</div>
        <div className="col-span-1 self-end">
          <motion.ul
            className="col-span-2 pt-4 leading-tight text-zinc-400 md:col-span-1 lg:col-span-1"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.li
              variants={staggerChild}
              className="pb-8 text-white md:pb-16"
            >
              Contact
            </motion.li>
            <motion.li variants={staggerChild} className="pb-8 text-white">
              <a
                href={`mailto:${contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.email}
              </a>
            </motion.li>
            {links.map(({ label, url }, i) => (
              <motion.li variants={staggerChild} key={i}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="col-span-1 flex justify-end self-end">
          <button
            type="button"
            onClick={scrollTop}
            className="text-zinc-400 hover:text-zinc-100"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}
