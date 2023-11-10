"use client";

import { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

import TetraGeo from "~/components/tetra-geo";
import TextReveal from "~/components/text-reveal";
import Section from "~/components/ui/section";
import { MouseContext } from "~/context/mouse-context";
import { contact, links } from "~/data/info";
import { cn } from "~/utils";
import { staggerChild, staggerContainer } from "~/utils/variants";

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
  // "enCirca",
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
      `col-span-1 hidden pt-4 leading-snug text-zinc-400 xl:block`,
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
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <Section className="flex min-h-[500px] flex-col items-center justify-between pb-0 pt-0 sm:pb-0 sm:pt-0 xl:h-[66vh]">
      <div className="container grid grid-cols-4 gap-8 lg:grid-cols-5 lg:gap-5 xl:grid-cols-6">
        <div className="col-span-full mb-8 pt-[6.25rem] md:col-span-3 lg:col-span-3">
          <h2 className="max-w-[26ch] flex-1 text-2xl tracking-tight text-white">
            <TextReveal text="Web development and visual design for people, teams and visionaries" />
          </h2>
        </div>

        <motion.ul
          className="col-span-2 pt-4 leading-snug text-zinc-400 md:col-span-1 lg:col-span-1"
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
              onMouseEnter={() =>
                cursorChangeHandler({
                  type: "hover",
                  text: "Say hi ✌️",
                })
              }
              onMouseLeave={() =>
                cursorChangeHandler({ type: "default", text: "", figure: "" })
              }
            >
              {contact.email}
            </a>
          </motion.li>
          {links.map(({ label, url }, i) => (
            <motion.li variants={staggerChild} key={i}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
                onMouseEnter={() =>
                  cursorChangeHandler({
                    type: "hover",
                    text: "arw",
                  })
                }
                onMouseLeave={() => cursorChangeHandler({ type: "default" })}
              >
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

      <div className="container flex justify-end md:justify-start">
        <div className="w-16">
          <Canvas camera={{ position: [0, 1, 16], fov: 60 }}>
            <ambientLight intensity={1} />
            <spotLight
              position={[20, 20, 25]}
              penumbra={1}
              angle={0.25}
              color="black"
              // castShadow
              // shadow-mapSize={[512, 512]}
            />
            <directionalLight position={[0, 5, -4]} intensity={20} />
            <directionalLight
              position={[0, -15, -0]}
              intensity={19}
              color="blue"
            />
            <TetraGeo
              flatShading={false}
              position={[0, 1, 0]}
              radius={3}
              speed={0.0075}
              wireframe={false}
            />
            {/* <TetraGeo
            flatShading={false}
            position={[0, 1, 0]}
            radius={5}
            detail={0}
            speed={0.00079}
            wireframe={true}
          /> */}
          </Canvas>
        </div>
      </div>
    </Section>
  );
}
