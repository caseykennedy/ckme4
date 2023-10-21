"use client";

import { useCallback, useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import "swiper/css";

import Img from "~/components/img";
import type { ProjectShape } from "~/data/projects";
import { cn } from "~/util";

// SwiperCore.use([Navigation]);

const listVariants = {
  open: {
    transition: { staggerChildren: 0.09, delayChildren: 0.25 },
  },
  closed: {
    transition: { staggerChildren: 0.07, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -400, duration: 0.5, ease: "easeOut" },
    },
  },
  closed: {
    y: 8,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -400, duration: 0.5, ease: "easeOut" },
    },
  },
};

export default function ProjectCard({ project }: { project: ProjectShape }) {
  const { client, coverImg, description, repository, services, slug, url } =
    project;

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
    (sliderRef.current as any)?.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
    (sliderRef.current as any)?.swiper?.slideNext();
  }, []);

  return (
    <>
      <motion.article
        initial="closed"
        animate="open"
        variants={itemVariants}
        className="container grid w-full grid-cols-6 border-b-[2px] border-dotted border-zinc-700 pb-24 pt-4"
      >
        <div className="col-span-full flex flex-col justify-between md:col-span-2">
          <motion.div variants={itemVariants}>
            {client}
            <motion.ul variants={listVariants} className="pt-16 text-zinc-400">
              {services.map((service, i) => (
                <motion.li variants={itemVariants} key={i}>
                  {service}
                </motion.li>
              ))}
            </motion.ul>
            <div className="pt-8">
              <PlusIcon />
            </div>
          </motion.div>

          <div className="flex flex-col">
            <div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400"
              >
                website
              </a>
            </div>
            <div>
              <a
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400"
              >
                repository
              </a>
            </div>
          </div>
        </div>

        <motion.div
          variants={itemVariants}
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
              <div className="aspect">
                <Img
                  src={coverImg}
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
              <div className="aspect">
                <Img
                  src={coverImg}
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
          <div className="flex pt-3">
            <div onClick={handlePrev} className="prev-arrow cursor-pointer">
              <ChevronLeftIcon className="h-5 w-5" />
            </div>
            <div onClick={handleNext} className="next-arrow cursor-pointer">
              <ChevronRightIcon className="h-5 w-5" />
            </div>
          </div>
        </motion.div>
      </motion.article>
    </>
  );
}
