import Link from 'next/link'
import { Github, Linkedin, Mail, XIcon } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 opacity-90">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-col md:flex-row items-center">
            <Image
  src="https://res.cloudinary.com/dm3vmtten/image/upload/v1737036035/signature2White1_hzioqv.png"
  alt="logo"
  width={150} // Specify the width
  height={0}  // Use height=0 to allow `h-auto` styling
  className="h-auto"
/>
            <p className="text-sm">&copy; 2025 Mhattias Roswall. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <Link href="#about" className="hover:text-purple-400 transition-colors text-lg">
              About
            </Link>
            <Link href="#projects" className="hover:text-purple-400 transition-colors text-lg">
              Projects
            </Link>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/MhatteBoi" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Github className="w-8 h-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://x.com/MhattiasR" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <XIcon className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.linkedin.com/in/mhattias-roswall-b28785261/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Linkedin className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:mhattias.r@gmail.com" className="hover:text-purple-400 transition-colors">
              <Mail className="w-8 h-8" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}