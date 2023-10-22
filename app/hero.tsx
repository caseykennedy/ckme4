"use client";

import { motion } from "framer-motion";

import TextReveal from "~/components/text-reveal";
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
  "Orthopaedic Implant Co.",
  "Fresh Bakin'",
  "The Life Change Center",
];

const ContactItems = ({ title, items }: { title: string; items: string[] }) => (
  <motion.ul
    className="flex-1 overflow-hidden"
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
  >
    <motion.li variants={staggerChild} className="pb-16 text-white">
      {title}
    </motion.li>
    <motion.li variants={staggerChild} className="pb-8 text-white">
      me@caseykennedy.me
    </motion.li>
    {items.map((item, i) => (
      <motion.li variants={staggerChild} key={i}>
        {item}&nbsp;
      </motion.li>
    ))}
  </motion.ul>
);

const ListItems = ({ title, items }: { title: string; items: string[] }) => (
  <motion.ul
    className="flex-1 overflow-hidden"
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
    <section className="w-full items-center pb-24 md:h-[66vh]">
      <div className="container grid grid-cols-6 gap-5">
        <div className="col-span-full pt-[6.25rem] md:col-span-3">
          <h2 className="max-w-[26ch] flex-1 text-3xl tracking-tight text-white">
            <TextReveal text="Web development and visual design for people, teams and visionaries" />
          </h2>
        </div>

        <div className="col-span-full flex flex-row flex-wrap gap-5 pt-4 leading-tight text-zinc-400 md:col-span-3">
          <ContactItems
            title="Contact"
            items={["Github", "Dribbble", "LinkedIn"]}
          />
          <ListItems title="Capabilities" items={capabilities} />
          <ListItems title="Clients" items={clients} />
        </div>
      </div>
    </section>
  );
}
