'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faReact } from '@fortawesome/free-brands-svg-icons'


const techStack = [
  { name: 'Angular', icon: <FontAwesomeIcon icon={faAngular} style={{ fontSize: '50px', color: "#b30000" }} /> },
  { name: 'React', icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: '50px', color: "#0a74ff" }} /> },
  {
    name: 'NextJs', icon: <svg
      viewBox="0 0 24 24"
      width={50}
      height={50}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      className='bg-white rounded-full p-1'>
      <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 
    12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/></svg>
  },
  {
    name: '.NET', icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      fill="#ffffff"
      className='rounded-full p-1 bg-violet-900'
      viewBox="0 0 24 24">
      <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 
        7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708
        0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965
        6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829
        0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z"/></svg>
  },
  {
    name: 'Firebase', icon: <Image
      src="/Logomark_Full Color.svg"
      alt="Firebase Icon"
      width={50}
      height={50}
    />
  },
   {
    name: 'Supabase', icon: <Image
      src="/Supabase Icon.svg"
      alt="Supabase Icon"
      width={50}
      height={50}
    />
  },
     {
    name: 'Svelte', icon: <Image
      src="/svelte.svg"
      alt="Supabase Icon"
      width={50}
      height={50}
    />
  },
       {
    name: 'Wordpress', icon: <Image
      src="/wordpress.png"
      alt="Wordpress Icon"
      width={50}
      height={50}
    />
  },
  {
    name: 'Blazor', icon: <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#512BD4"
      width={50}
      height={50}>
      <path d="M23.8337 8.1013a13.9123 13.9123 0 0 1-13.6424 11.72 10.1053 10.1053 0 0 1-1.994-.121 6.111
        6.111 0 0 1-5.0824-5.7607 5.9344 5.9344 0 0 1 11.867-.0838c.025.9835-.4011 1.8464-1.277 1.8713-.9356
        0-1.3742-.6677-1.3742-1.5674v-2.5001a1.5313 1.5313 0 0 0-1.5196-1.5328H8.7152a3.6481 3.6481 0 1 0 2.6948
        6.0794l.0733-.1093.0734.1213a2.5807 2.5807 0 0 0 2.2007 1.0479 2.9088 2.9088 0 0 0 2.6947-3.0406 7.912
        7.912 0 0 0-.217-1.9324 7.4043 7.4043 0 0 0-14.6395 1.6033 7.4971 7.4971 0 0 0 7.307 7.4043s.549.05
        1.1677.0357a15.8029 15.8029 0 0 0 8.4747-2.5283c.036-.025.0719.025.048.0614a12.4392 12.4392 0 0 1-9.6901
        3.9625A8.7442 8.7442 0 0 1 .003 13.8603a9.049 9.049 0 0 1 3.6349-7.2471 8.8634 8.8634 0 0 1 5.229-1.7262h2.813a7.9145
        7.9145 0 0 0 5.8386-2.5777.1093.1093 0 0 1 .0594-.034.1115.1115 0 0 1 .1195.0522.113.113 0 0 1 .0155.0672 7.9345
        7.9345 0 0 1-1.2274 3.5493.1075.1075 0 0 0-.0132.0609.1098.1098 0 0 0 .0724.0945.109.109 0 0 0 .0619.0033 8.5054
        8.5054 0 0 0 5.9134-4.876.1554.1554 0 0 1 .0546-.0527.1497.1497 0 0 1 .147 0 .1535.1535 0 0 1 .0546.0527 10.779
        10.779 0 0 1 1.0575 6.8746zm-14.9383 3.527a2.188 2.188 0 1 0 2.1877 2.1878v-2.0425a.1577.1577 0 0 0-.1497-.1497Z"/></svg>
  },
  
]

export function FloatingTechStack() {
  return (
    <div className="w-full  py-12">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-200">
          Technologies & Tools
        </h3>          
        <div className="relative overflow-hidden bg-transparent rounded-full ">
          {/* Gradient Fade Left */}
                    <div 
            className="flex overflow-hidden relative"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          > 
          
          {/* Main scrolling container */}
          <div className="flex overflow-hidden relative">
            {/* First set of logos */}
            <div className="flex gap-20 animate-loop-scroll py-8 px-4">
              {techStack.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="inline-flex flex-col items-center group flex-shrink-0"
                >
                  <div className="w-24 h-24 flex items-center justify-center border-b border-purple-500/20 transition-all duration-300 group-hover:border-purple-500/50">
                    {tech.icon}
                  </div>
                  <span className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </span>
                </div>            
              ))}
            </div>

            {/* Second set of logos (duplicate) */}
            <div className="flex gap-20 animate-loop-scroll py-8 px-4">
              {techStack.map((tech, index) => (
                <div
                  key={`${tech.name}-clone-${index}`}
                  className="inline-flex flex-col items-center group flex-shrink-0"
                >
                  <div className="w-24 h-24 flex items-center justify-center border-b border-purple-500/20 transition-all duration-300 group-hover:border-purple-500/50">
                    {tech.icon}
                  </div>
                  <span className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </span>
                </div>            
              ))}
            </div>
          </div>

          {/* Gradient Fade Right */}
          </div>
        </div>
      </div>
    </div>
  );
}
