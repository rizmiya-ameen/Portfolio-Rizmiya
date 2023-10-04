import Intro from "@/components/Intro"
import SectionDivider from "@/components/SectionDivider"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
//import Experience from "@/components/Experience"
import Header from "@/components/Header"
import Education from "@/components/Education"
import ContactMe from "@/components/ContactMe"


export default function Home() {
  return (
    <main  className="flex flex-col items-center">
      <Header />
      <Intro />
      
      <About />
      <Projects />
      <Skills />
      <Education />
      <ContactMe />
      
    </main>
  )
}

/*<SectionDivider />*/
