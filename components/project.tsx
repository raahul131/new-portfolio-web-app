"use client"

import React, {useRef} from 'react'
import { motion, useTransform } from 'framer-motion'
import { projectsData } from "@/lib/data";
import { useScroll } from "framer-motion";
import { ImGithub } from "react-icons/im";
import { TbWorldWww } from "react-icons/tb";

type ProjectProps = typeof projectsData[number];

export function Project({title, description, tags, github, demo}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
      scale: scaleProgress,
      opacity: opacityProgress,
      }}
      className={"mb-3 sm:mb-8 last:mb-0"}
    >
      <section
        className={"bg-gray-100 hover:bg-gray-200 max-w-[42rem] border borderBlack overflow-hidden sm:pr-8 sm:h-[20rem] py-4 px-5 " +
          "sm:pt-10 rounded-md flex flex-col pt-4 pb-7 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"}
      >
        <h3 className={"text-2xl font-semibold"}>{title}</h3>
        <p className={"mt-2 leading-relaxed text-gray-700 dark:text-white/70"}>{description}</p>
        <ul className={"flex flex-wrap mt-4 gap-2 sm:mt-auto"}>
          {tags.map(tag => (
            <li key={tag}
                className={"bg-black/75 px-3 py-1 text-[0.75rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"}>
              {tag}
            </li>
          ))}
        </ul>

        <div className={"flex flex-wrap mt-4 gap-6 sm:mt-auto"}>
          <a
            className="flex items-center justify-center gap-2 hover:bg-gray-300 py-1 px-2 rounded-full transition-all
            duration-150 dark:hover:bg-gray-800 dark:text-white/80 dark:hover:text-gray-200 border borderBlack dark:border-white/10"
            href={github}
            target="_blank"
          >
            <ImGithub size={20}/>
            <p className={"font-medium"}>Github</p>
          </a>

          <a
            className="flex items-center justify-center gap-2 hover:bg-gray-300 py-1 px-2 rounded-full transition-all
            duration-150 dark:hover:bg-gray-800 dark:text-white/80 dark:hover:text-gray-200 border borderBlack dark:border-white/10"
            href={demo}
            target="_blank"
          >
            <TbWorldWww size={20}/>
            <p className={"font-medium"}>Demo</p>
          </a>
        </div>
      </section>
    </motion.div>
  )
}