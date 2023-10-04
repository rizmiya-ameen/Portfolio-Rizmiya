
"use client"
import React from 'react'
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from './SectionHeading';


const ContactMe = () => {

  const { ref } = useSectionInView("Contact");

  return (
    <section id="contact" ref={ref} className="flex flex-col w-full leading-7 pt-28 min-h-[100vh] text-center bg-blue-500 -z-40">

      <div className="relative">
        <SectionHeading>Get in Touch</SectionHeading>
        <h1 className="hidden sm:inline sm:tracking-wide sm:absolute sm:top-0 sm:bottom-0 sm:right-0 sm:left-0 sm:text-[90px] sm:font-extrabold sm:opacity-[0.1] sm:text-white -z-10">
        CONTACT
        </h1>
      </div>

      

      <div className='w-full h-28 bg-black mt-auto'>

      </div>
    </section>
  )
}

export default ContactMe

//re_P741CfyV_HFqAfzScQ6gf5Esc2JPKVZ6P

