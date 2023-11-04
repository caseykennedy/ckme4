"use client";

import { motion } from "framer-motion";

import TextReveal from "~/components/text-reveal";
import { contact, links } from "~/data/info";
import { cn } from "~/util";
import { staggerChild, staggerContainer } from "~/util/variants";

const capabilities = [
  "Full-stack dev",
  "Visual design",
  "ui + ux",
  "Wireframing",
  "Prototyping",
  "Strategy",
  "Ongoing support",
];

const clients = [
  "Zeda, Inc.",
  "enCirca",
  "Valeo",
  "Cahuilla Casino",
  "Fidira",
  "Ortho Implant Co.",
  "Fresh Bakin'",
  "Life Change Center",
];

const ListItems = ({
  title,
  items,
  className,
}: {
  title: string;
  items: string[];
  className?: string;
}) => (
  <motion.ul
    className={cn(
      `col-span-1 hidden pt-4 leading-tight text-zinc-400 xl:block`,
      className,
    )}
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
  >
    <motion.li variants={staggerChild} className="pb-16">
      {title}
    </motion.li>
    {items.map((item, i) => (
      <motion.li variants={staggerChild} key={i}>
        {item}&nbsp;
      </motion.li>
    ))}
  </motion.ul>
);

export default function Hero() {
  return (
    <section className="w-full items-center pb-24 lg:h-[66vh]">
      <div className="container grid grid-cols-4 gap-8 lg:grid-cols-5 lg:gap-5 xl:grid-cols-6">
        <div className="col-span-full mb-8 pt-[6.25rem] md:col-span-3 lg:col-span-3">
          <h2 className="max-w-[26ch] flex-1 text-2xl tracking-tight text-white">
            <TextReveal text="Web development and visual design for people, teams and visionaries" />
          </h2>
        </div>

        <motion.ul
          className="col-span-2 pt-4 leading-tight text-zinc-400 md:col-span-1 lg:col-span-1"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={staggerChild} className="pb-8 md:pb-16">
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

        <ListItems
          title="Capabilities"
          items={capabilities}
          className="hidden lg:block"
        />
        <ListItems title="Clients" items={clients} />
      </div>
    </section>
  );
}
