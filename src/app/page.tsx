'use client';
import { Navbar } from './Components/navbar'
import { Hero } from './Components/hero'
import { Projects } from './Components/projects'
import  AboutMe  from './Components/about-me'
import { Footer } from './Components/footer'
import  VideoComparisonSlider  from './Components/videoComparisonSlider'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Navbar />

      {/* Breathing background orb */}

      
      {/* Main content */}
      <main className="relative z-10">
        <Hero /> 
        <div className="relative">
         
        <Image
      src="https://res.cloudinary.com/dm3vmtten/image/upload/v1737031867/Pngtree_simple_black_abstract_symmetrical_technology_7180929_ubabzr.png"
      alt="Tech Stack Background"
      layout="fill"
      objectFit="cover"
      className="absolute -z-10 rounded-full opacity-15 mix-blend-darken transform blur-sm -translate-y-1/2 mx-auto w-full max-w-[620px] h-auto hidden md:block"
    />
        <Projects />
        
        <VideoComparisonSlider 
          leftVideoSrc="https://res.cloudinary.com/dm3vmtten/video/upload/v1738674468/backend_aky0c6.mp4"
          rightVideoSrc="https://res.cloudinary.com/dm3vmtten/video/upload/v1738676633/frontend_tjsaxu.mp4"
        />
        <h1 className="text-3xl text-center md:text-5xl block md:hidden font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">I have a Node vs Deno project active as a side project!</h1>
        <p className='text-center pt-2'>Check It out on <a href='https://github.com/MhatteBoi/runTimeTester' className='bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text '>Github.</a></p>
        <AboutMe />
        </div>
        <Footer />
      </main>
      
    </div>
  )
}

