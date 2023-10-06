"use client"
import React from 'react'
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from './Submit-btn';
import SectionHeading from './SectionHeading';
import { motion } from "framer-motion";
import toast from 'react-hot-toast';

const Contact = () => {

  const { ref } = useSectionInView("Contact");

  return (
    <motion.section 
      id="contact" 
      ref={ref} 
      className="flex flex-col w-full leading-7 px-5 pt-28 pb-16 min-h-[100vh] text-center bg-gradient-to-r from-indigo-500 to-cyan-500"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >

      <div className="relative text-white">
        <SectionHeading>Get in Touch</SectionHeading>
        <h1 className="hidden sm:inline sm:tracking-wide sm:absolute sm:top-0 sm:bottom-0 sm:right-0 sm:left-0 sm:text-[90px] sm:font-extrabold sm:opacity-[0.1] sm:text-white">
        CONTACT
        </h1>
      </div>

      <p className="text-gray-300 mt-5">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:aladhanriz@gmail.com">
          aladhanriz@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-6 flex flex-col mx-auto w-[min(100%,38rem)]"
        /*action={async (formData) => {
          await sendEmail(formData)
        }}*/
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
           return;
          }

          toast.success("Email sent successfully!")
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <div className='flex justify-center'>
          <SubmitBtn />
        </div>
        
      </form>


    </motion.section>
  )
}

export default Contact