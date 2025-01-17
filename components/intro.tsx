"use client"
import React from 'react'
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin,BsTwitterX } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { useSectionInView } from "@/lib/hooks";
import {useActiveSectionContext} from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section ref={ref} id={"home"} className={"mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"}>
      <div className={"flex items-center justify-center"}>
        <div className={"relative"}>
          <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.png"
              alt="Rahul R."
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
      >
        <span className="font-bold">Hi, I'm Rahul Ray,</span> a{" "}
        <span className="font-bold">software engineer.</span>I specialize in{" "}
        <span className="font-bold">Web Development, </span>and I'm passionate about {" "}
        <span className="italic">transforming ideas into impactful products</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
          hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
          active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>
      </motion.div>

      <motion.div
        className="flex pt-6 flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15]
          hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/rahulray131/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15]
          hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/raahul131"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15]
          hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://x.com/rahulray__?t=klzx8K2Sk3DgzfM5buBwzg&s=09"
          target="_blank"
        >
          <BsTwitterX size={20}/>
        </a>
      </motion.div>

    </section>
  )
}
