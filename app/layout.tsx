import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ActiveSectionContextProvider from '@/context/active-section.context'
import Intro from '@/components/Intro'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rizmiya | Portfolio',
  description: 'Rizmiya is a React Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>

    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </head>

      <body className={`${inter.className} bg-slate-50 text-gray-950 relative`}>

      {/*<body className={`${inter.className} bg-slate-50 pt-28  text-gray-950 relative h-[5000px] sm:pt-36`}> */}

      {/*<div className="bg-[#6eda94] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#c9c3fa] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>*/}

        <ActiveSectionContextProvider>
          
          
          {children}
        </ActiveSectionContextProvider>
        
      </body>
    </html>
  )
}

/*

<div className='bg-teal-500 flex flex-col justify-center items-center'>
            <Intro />
          </div>




          
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ActiveSectionContextProvider from '@/context/active-section.context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rizmiya | Portfolio',
  description: 'Rizmiya is a React Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-slate-50 text-gray-950 relative h-[5000px] `}>

      

      <div className="bg-[#88f3ad] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#86efac]"></div>
        <div className="bg-[#c9c3fa] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ActiveSectionContextProvider>
          <Header />
          
          {children}
        </ActiveSectionContextProvider>
        
      </body>
    </html>
  )
}


*/

/*<body className={`${inter.className} bg-slate-50 pt-28  text-gray-950 relative h-[5000px] sm:pt-36`}> */