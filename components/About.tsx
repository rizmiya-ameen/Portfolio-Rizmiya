"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { HiDownload } from 'react-icons/hi'

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="px-4 sm:px-14 mb-0 text-center leading-8 pt-28 min-h-[100vh]"
      
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="relative">
        <SectionHeading>Know Me Better</SectionHeading>
        <h1 className="hidden sm:inline sm:tracking-wide sm:absolute sm:top-0 sm:bottom-0 sm:right-0 sm:left-0 sm:text-[90px] sm:font-extrabold sm:opacity-[0.1] sm:text-sky-500">
          ABOUT ME
        </h1>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:mt-[90px]">

        <div className="flex-[2] text-justify sm:mx-20 sm:text-lg ">
          <p className="text-xl leading-[80px]">Hi, I&apos;m <span className="font-bold underline decoration-sky-500 text-xl">Fathima Rizmiya</span></p>
          <p className="mb-3">With a background in chemistry and a passion for education, I've spent the last 7 years nurturing students' curiosity and igniting their love for science. Recently, I ventured into the world of technology, through the Victoria Digital Jobs Program. What I enjoy most about programming is the thrill of problem-solving.
          <br />
          Beyond my career, I find solace in nature and cherish moments with my family.</p>

          <p className="sm:mt-[30px] mb-8 sm:mb-16"><strong>Interests: </strong>Photography, Reading, Writing, Gardening, Cooking/Baking</p>

          <div className="flex justify-center mb-8">
            <a className="group bg-gray-900 text-white px-6 py-2 flex items-center gap-2 rounded-full outline-none hover:bg-sky-600"
              href="/CV.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60" />
            </a>
          </div>

          
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-10 sm:pt-[76px] sm:text-lg">
          <div className="flex flex-col items-start ">
            <p><strong>Email: </strong><a href={`mailto:rizmiyaamin@gmail.com`} className="text-pink-600">rizmiyaamin@gmail.com</a></p>
            <hr className="w-full border-t-1 border-gray-300 my-2" />
            <p><strong>From: </strong>Melbourne, Australia</p>
            <hr className="w-full border-t-1 border-gray-300 my-2" />
            <p><strong>Contact: </strong>(+61) 123 456 789</p>
            <hr className="w-full border-t-1 border-gray-300 my-2" />
            <p className="mb-16 sm:mb-[100px]"><strong>Languages: </strong>English, Tamil, Sinhala</p>
          </div>


          <div className="relative flex flex-col items-center justify-center leading-6">
            <p className="text-[70px] mb-4 font-medium ">07</p>
            <p>Years of Work <br />Experience</p>
            <div className="flex h-24 w-24 bg-sky-200 absolute rounded-full -z-30"/>
          </div>
      
        </div>
      </div>

      
      

      
    </motion.section>
  );
}