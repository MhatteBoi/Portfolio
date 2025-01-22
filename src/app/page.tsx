import { Navbar } from './Components/navbar'
import { Hero } from './Components/hero'
import { Projects } from './Components/projects'
import  AboutMe  from './Components/about-me'
import { Footer } from './Components/footer'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="min-h-screen overflow-y-hidden relative">
      <Navbar />
      
      
      <main className="relative z-10">
        <Hero /> 
        <div className="relative">
        <Image
      src="https://res.cloudinary.com/dm3vmtten/image/upload/v1737031867/Pngtree_simple_black_abstract_symmetrical_technology_7180929_ubabzr.png"
      alt="Tech Stack Background"
      width={900}
      height={1200}
      className="absolute -z-10 rounded-full -top-[550] left-1/2 transform -translate-x-1/2 w-full max-w-[900px] h-auto hidden md:block"
    />
        <Projects />
        
        <AboutMe />
        </div>
        <Footer />
      </main>
      
    </div>
  )
}

