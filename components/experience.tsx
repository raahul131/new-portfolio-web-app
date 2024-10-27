"use client";

import React from 'react'
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import Image from "next/image";
import {useTheme} from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme()

  return (
    <section id={"Experience"} ref={ref} className={"scroll-mt-28 mb-28 sm:mb-40 max-w-[50rem]"}>
      <SectionHeading>My Experience</SectionHeading>

      {/*<VerticalTimeline lineColor="">*/}
        {experiencesData?.map((experience, index) => (
         <React.Fragment key={index} >
           <VerticalTimelineElement
             contentStyle={{
               background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
               boxShadow: "none",
               border: "1px solid rgba(0, 0, 0, 0.05)",
               textAlign: "left",
               padding: "1.3rem 2rem",
             }}
             contentArrowStyle={{
               borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
             }}
             date={experience.date}
             icon={<Image src={experience.icon} alt={experience.title} width={40} height={40} className={"rounded-full object-center"} />}
             iconStyle={{
               background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
               fontSize: "1.5rem",
             }}
           >
             <h3 className={"font-semibold capitalize"}>{experience?.title}</h3>
             <p className={"font-normal !mt-0"}>{experience?.location}</p>
             <ul className="list-disc ml-5">
               {experience.description.map((desc, index) => (
                 <li key={index} className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{desc}</li>
               ))}
             </ul>
           </VerticalTimelineElement>
         </React.Fragment>
        ))}
      {/*</VerticalTimeline>*/}

    </section>
  )
}
