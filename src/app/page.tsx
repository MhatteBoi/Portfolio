import { Navbar } from './Components/navbar'
import { Hero } from './Components/hero'
import { Projects } from './Components/projects'
import  AboutMe  from './Components/about-me'
import { Footer } from './Components/footer'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      
      
      <main className="relative z-10">
        <Hero /> 
        <div className="relative">
        <Image
      src="https://res.cloudinary.com/dm3vmtten/image/upload/v1737031867/Pngtree_simple_black_abstract_symmetrical_technology_7180929_ubabzr.png"
      alt="Tech Stack Background"
      layout="fill"
      objectFit="cover"
      className="absolute -z-10 rounded-full transform -translate-y-1/2 mx-auto w-full max-w-[770px] h-auto hidden md:block"
    />
        <Projects />
        
        <AboutMe />
        </div>
        <Footer />
      </main>
      
    </div>
  )
}

