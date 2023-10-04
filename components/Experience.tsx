"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";


const Experience = () => {

  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 pt-28 sm:mb-40 min-h-[100vh]">

      <div className="relative">
        <SectionHeading>MY EXPERIENCE</SectionHeading>
        <h1 className="sm:absolute sm:top-0 sm:bottom-0 sm:right-0 sm:left-0 sm:text-[90px] font-extrabold opacity-5 text-sky-500">
        EXPERIENCE
        </h1>
      </div>

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (

          <React.Fragment key={index}>
            
            <VerticalTimelineElement
            visible={true}
          contentStyle={{
            background: "#f3f4f6",
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight: "0.4rem solid #9ca3af",
          }}
          date={item.date}
          icon={item.icon}
          iconStyle={{
            background: "white",
            fontSize: "1.5rem",
          }}
        >
          <h3 className="font-semibold capitalize">{item.title}</h3>
          <p className="font-normal !mt-0">{item.location}</p>
          <p className="!mt-1 !font-normal text-gray-700">
            {item.description}
          </p>
        </VerticalTimelineElement>
            
          </React.Fragment>
        
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default Experience

/*
<motion.div initial={index % 2 === 0 ? { x: -200, opacity: 0 } : { x: 400, opacity: 0 }}
    
      //animate={{ x: 0, opacity: 1 }}
      animate={index % 2 === 0 ? { x: 0, opacity: 1 } : { x: 200, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      */

