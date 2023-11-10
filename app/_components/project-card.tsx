"use client";

import { useCallback, useContext, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import Pill from "./ui/pill";

import "swiper/css";

import Img from "~/components/img";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { MouseContext } from "~/context/mouse-context";
import type { ProjectShape } from "~/data/projects";
import { cn } from "~/utils";
import {
  revealVariants,
  staggerChild,
  staggerContainer,
} from "~/utils/variants";

export default function ProjectCard({ project }: { project: ProjectShape }) {
  const {
    client,
    deliverables,
    description,
    domain,
    publicID,
    repository,
    services,
    slug,
    technology,
    objectives,
  } = project;

  const sliderRef = useRef(null);
  const inViewRef = useRef(null);

  const isInView = useInView(inViewRef, { amount: 0.3, once: true });

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    (sliderRef.current as any)?.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    (sliderRef.current as any)?.swiper?.slideNext();
  }, []);

  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <motion.article
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={revealVariants}
      ref={inViewRef}
      className="container grid w-full grid-cols-6 gap-5"
    >
      <div className="col-span-full flex flex-col justify-between md:col-span-2">
        <motion.div variants={revealVariants}>
          {client}
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="pt-16 text-zinc-400"
          >
            {services.map((service, i) => (
              <motion.li variants={staggerChild} key={i}>
                {service}
              </motion.li>
            ))}
          </motion.ul>
          <div className="pt-8">
            <Accordion type="single" collapsible>
              <AccordionItem value="details">
                <AccordionTrigger
                  onMouseEnter={() =>
                    cursorChangeHandler({ type: "hover", text: "details" })
                  }
                  onMouseLeave={() =>
                    cursorChangeHandler({ type: "default", text: "" })
                  }
                />
                <AccordionContent className="mt-3">
                  <p className="mb-7 text-white">{description}</p>

                  <div className="mb-8">
                    <p className="mb-3">Objectives</p>
                    <ul className="list-decimal text-sm text-zinc-400">
                      {objectives?.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
                    <div>
                      <p className="mb-3">Tech</p>
                      <ul className="flex flex-wrap gap-1">
                        {technology.map((item, i) => (
                          <li key={i}>
                            <Pill>{item}</Pill>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-3">Deliverables</p>
                      <ul className="flex flex-wrap gap-1">
                        {deliverables?.map((item, i) => (
                          <li key={i}>
                            <Pill>{item}</Pill>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-col"
        >
          <motion.div variants={staggerChild}>
            <a
              href={`https://${domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-white"
              onMouseEnter={() =>
                cursorChangeHandler({ type: "hover", text: "web" })
              }
              onMouseLeave={() =>
                cursorChangeHandler({ type: "default", text: "" })
              }
            >
              website
            </a>
          </motion.div>
          <motion.div variants={staggerChild}>
            <a
              href={repository}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-white"
              onMouseEnter={() =>
                cursorChangeHandler({ type: "hover", text: "repo" })
              }
              onMouseLeave={() =>
                cursorChangeHandler({ type: "default", text: "" })
              }
            >
              repository
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={revealVariants}
        className="relative col-span-full md:col-span-4"
      >
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          speed={1111}
          grabCursor={true}
          scrollbar={{
            draggable: true,
            dragSize: 24,
          }}
          loop={true}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          ref={sliderRef}
        >
          <SwiperSlide>
            <div
              className="aspect"
              onMouseEnter={() =>
                cursorChangeHandler({ type: "hover", text: "drag" })
              }
              onMouseLeave={() =>
                cursorChangeHandler({ type: "default", text: "" })
              }
            >
              <Img
                src={publicID}
                alt="alt"
                width={1087}
                height={632}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                className={cn(`object-cover object-top`)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="aspect"
              onMouseEnter={() =>
                cursorChangeHandler({ type: "hover", text: "drag" })
              }
              onMouseLeave={() =>
                cursorChangeHandler({ type: "default", text: "" })
              }
            >
              <Img
                src={publicID}
                alt="alt"
                width={1087}
                height={632}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                className={cn(`object-cover object-top`)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="z-40 flex pt-3">
          <div
            onClick={handlePrev}
            className="prev-arrow cursor-pointer"
            onMouseEnter={() =>
              cursorChangeHandler({ type: "hover", text: "prev" })
            }
            onMouseLeave={() =>
              cursorChangeHandler({ type: "default", text: "" })
            }
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </div>
          <div
            onClick={handleNext}
            className="next-arrow cursor-pointer"
            onMouseEnter={() =>
              cursorChangeHandler({ type: "hover", text: "next" })
            }
            onMouseLeave={() =>
              cursorChangeHandler({ type: "default", text: "" })
            }
          >
            <ChevronRightIcon className="h-5 w-5" />
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
