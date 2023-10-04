"use client"

import React from 'react'
import Image from 'next/image'
import image4 from "@/public/image4.png";
import { motion } from 'framer-motion'
import Link from 'next/link';

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";

import { AiFillTwitterSquare } from "react-icons/ai";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from '@/context/active-section.context';
import { Typewriter } from 'react-simple-typewriter'


const Intro = () => {

  const { ref } = useSectionInView("Home", 0.5);
  //const { setActiveSection, setTimeOfLastClick } = //useActiveSectionContext();

  const fadeIn = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: 0.3,
        duration: 1,
        ease: 'easeOut',
      },
    },
  };


  return (
    <section 
      ref={ref} 
      id="home"
      className="sm:flex sm:flex-col sm:justify-center mb-0 w-full text-center sm:text-left pt-28 sm:mb-0 sm:pt-36 min-h-[100vh] bg-gradient-to-tr from-teal-300 to-blue-500"
    >

      <div className='sm:flex sm:flex-row'>

      
        <div className='relative flex items-center justify-center sm:flex-1'> 

          <motion.div
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image 
              src={image4} 
              alt="profile_picture"
              width="192" 
              height="192" 
              quality="95" 
              priority={true}
              className='h-40 w-40 rounded-full object-cover border-[0.2rem] border-white shadow-xl'
            />
          </motion.div>
          

        </div>

        <div className='sm:flex sm:flex-col sm:flex-[2]'>

          <motion.div className='sm:flex  mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.7]'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          >
            <h1 >Hi, I&apos;m Fathima Rizmiya. <br /> I am a{" "}<br className='sm:hidden'/>  
              <span className='text-[40px] font-extrabold'>
                <Typewriter
                  words={['REACT DEVELOPER', 'CODING ENTHUSIAST', 'NATURE LOVER',]}
                  loop={5}
                  cursor
                  cursorStyle='|'
                  typeSpeed={90}
                  deleteSpeed={90}
                  delaySpeed={1000}
                />
              </span>
              <br /> based in Melbourne, Victoria
            </h1>

          </motion.div>

          <motion.div  className="flex flex-row items-center justify-center sm:justify-start sm:ml-1 gap-4 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          >


            <a
              className="text-black hover:text-gray-700 cursor-pointer borderBlack text-xl"
              href="https://www.linkedin.com/in/fathima-rizmiya/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="text-black hover:text-gray-700 cursor-pointer borderBlack text-[26px]"
              href="https://github.com/rizmiya-ameen"
              target="_blank"
            >
              <FaGithubSquare />
            </a>

            <a
              className="text-black hover:text-gray-700 cursor-pointer borderBlack text-[26px]"
              href="https://www.youtube.com/@ChemHexaTamil"
              target="_blank"
            >
              <TbBrandYoutubeFilled />
            </a>

            <a
              className="text-black hover:text-gray-700 cursor-pointer borderBlack text-[28px]"
              href="https://twitter.com/Rizmiya22"
              target="_blank"
            >
              <AiFillTwitterSquare />
            </a>
              
          </motion.div>
        </div>
        

        
      </div>


      <div className='flex flex-col items-center justify-center'>
        <Link href='#about'>
        <motion.img
          variants={fadeIn}
            initial="hidden"
            whileInView="show"
          src="arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[90px]"
        />
        </Link>
      </div>

    </section>
  )
}

export default Intro

/*
"use client"

import React from 'react'
import Image from 'next/image'
import image4 from "@/public/image4.png";
import { motion } from 'framer-motion'
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi'
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from '@/context/active-section.context';
import { Typewriter } from 'react-simple-typewriter'


const Intro = () => {

  const { ref } = useSectionInView("Home", 0.5);
  //const { setActiveSection, setTimeOfLastClick } = //useActiveSectionContext();

  const fadeIn = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: 0.3,
        duration: 1,
        ease: 'easeOut',
      },
    },
  };


  return (
    <section 
      ref={ref} 
      id="home"
      className="sm:flex sm:flex-col sm:justify-center mb-28 w-full text-center sm:text-left pt-28 sm:mb-0 sm:pt-36 min-h-[100vh] bg-gradient-to-tr from-teal-300 to-blue-500"
    >

      <div className='sm:flex sm:flex-row'>

      
        <div className='relative flex items-center justify-center sm:flex-1'>
          
          

          <motion.div
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image 
              src={image4} 
              alt="profile_picture"
              width="192" 
              height="192" 
              quality="95" 
              priority={true}
              className='h-40 w-40 rounded-full object-cover border-[0.2rem] border-white shadow-xl'
            />
          </motion.div>


          <motion.span 
            className='text-2xl absolute bottom-0 right-5'
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏼
          </motion.span>
          
          

          </div>

          <div className='sm:flex sm:flex-col sm:flex-[2]'>
  
            <motion.div className='sm:flex  mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            >
              <h1>Hi, I&apos;m Fathima Rizmiya. <br /> I am a<br />  
                <span className='text-[40px] font-extrabold'>
                  <Typewriter
                    words={['REACT DEVELOPER', 'CODING ENTHUSIAST']}
                    loop={5}
                    cursor
                    cursorStyle='|'
                    typeSpeed={90}
                    deleteSpeed={90}
                    delaySpeed={1000}
                  />
                </span>
              </h1> 
            </motion.div>
  
            <motion.div  className="flex flex-col sm:flex-row items-center justify-start gap-4 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
            >
  
              <a className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                href="/CV.pdf"
                download
              >
                Download CV{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a>
  
  
              <a
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/fathima-rizmiya/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
  
              <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/rizmiya-ameen"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
  
  
                
            </motion.div>
          </div>
          
  
          
        </div>
  
  
        <div className='flex flex-col items-center justify-center'>
          <Link href='#about'>
          <motion.img
            variants={fadeIn}
              initial="hidden"
              whileInView="show"
            src="arrow-down.svg"
            alt="arrow down"
            className="w-[18px] h-[28px] object-contain mt-[90px]"
          />
          </Link>
        </div>
  
      </section>
    )
  }
  
  export default Intro

  */
