import Link from 'next/link'
import { Linkedin,  Github, XIcon } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-30 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex items-center justify-start md:justify-evenly h-20">
          <div className="flex items-center justify-center">
           <a href="#">
          <img src='https://res.cloudinary.com/dm3vmtten/image/upload/v1737036035/signature2White1_hzioqv.png' className='max-w-[160px]' alt='logo'></img>
          </a>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-8">
              <Link href="#about" className="text-gray-300 hover:text-teal-400 hover:scale-105 text-pretty transition-all duration-500 text-lg">
                About me
              </Link>
              <Link href="#skills" className="text-gray-300 hover:text-red-700 hover:scale-105 transition-all text-pretty duration-500text-lg">
                Skills
              </Link>
              <Link href="#projects" className="text-gray-300 hover:text-indigo-500 hover:scale-105 transition-all text-pretty duration-500 text-lg">
                Projects
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">

            <Link href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://x.com/MhattiasR" className="text-gray-300 hover:text-teal-400 transition-colors">
              <XIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
              <Github className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

