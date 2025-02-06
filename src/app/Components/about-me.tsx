'use client'

import { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import { Terminal, Code2, Rocket, Coffee, Heart } from 'lucide-react'

export default function AboutMe() {
  // Create refs for each animated section
  const headerRef = useRef(null)
  const leftColumnRef = useRef(null)
  const rightColumnRef = useRef(null)
  const statsRef = useRef(null)
  const footerRef = useRef(null)

  // Check if sections are in view
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })
  const leftColumnInView = useInView(leftColumnRef, { once: true, margin: "-100px" })
  const rightColumnInView = useInView(rightColumnRef, { once: true, margin: "-100px" })
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })
  const footerInView = useInView(footerRef, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative min-h-screen pt-28 text-white py-20 overflow-hidden">
      
      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          style={{
            transform: headerInView ? "none" : "translateY(20px)",
            opacity: headerInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            About me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          When I&apos;m not working on your big project, I&apos;m doing my best to prepare for your next one.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Info Cards */}
          <motion.div 
            ref={leftColumnRef}
            style={{
              transform: leftColumnInView ? "none" : "translateX(-50px)",
              opacity: leftColumnInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
            }}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/60 hover:shadow-[0px_0px_34px_0px_rgba(236,0,240,0.8)] duration-200 transition-all">
              <Terminal className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tech enthusiast</h3>
              <p className="text-gray-400">
              Skilled in React, Next.js, .NET, Angular, SQL, Firebase and Blazor. Currently learning Svelte, MongoDB, Docker, and more.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/60 hover:shadow-[0px_0px_34px_0px_rgba(236,0,240,0.8)] duration-200 transition-all">
              <Code2 className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Problem solver</h3>
              <p className="text-gray-400">
                Love tackling complex challenges and finding elegant solutions through creative thinking, and being stubborn.
              </p>
            </div>
          </motion.div>

          {/* Right Column - More Info Cards, Copy if you need more */}
          <motion.div 
            ref={rightColumnRef}
            style={{
              transform: rightColumnInView ? "none" : "translateX(50px)",
              opacity: rightColumnInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
            }}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/60 hover:shadow-[0px_0px_34px_0px_rgba(236,0,240,0.8)] duration-200 transition-all">
              <Rocket className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Always learning</h3>
              <p className="text-gray-400">
                Constantly expanding my knowledge through personal projects, online courses, and industry best practices.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/60 hover:shadow-[0px_0px_34px_0px_rgba(236,0,240,0.8)] duration-200 transition-all">
              <Coffee className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team player</h3>
              <p className="text-gray-400">
                Experienced in collaborative development, version control, agile methodologies, coffee enthusiast, preferably espresso.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Stats */}
        <motion.div 
          ref={statsRef}
          style={{
            transform: statsInView ? "none" : "translateY(50px)",
            opacity: statsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.1s"
          }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="bg-gray-900/30 p-6 rounded-lg hover:border-emerald-800 border transition-all ">
            <div className="text-3xl font-bold text-purple-400  ">3+</div>
            <div className="text-gray-400 ">Years experience</div>
          </div>
          <div className="bg-gray-900/30 p-6 rounded-lg hover:border-yellow-800 border transition-all">
            <div className="text-3xl font-bold text-purple-400">25+</div>
            <div className="text-gray-400">Projects</div>
          </div>
          <div className="bg-gray-900/30 p-6 rounded-lg hover:border-red-800 border transition-all">
            <div className="text-3xl font-bold text-purple-400">10+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="bg-gray-900/30 p-6 rounded-lg hover:border-blue-800 border transition-all">
            <div className="text-3xl font-bold text-purple-400">∞</div>
            <div className="text-gray-400">Coffee cups</div>
          </div>
        </motion.div>

        {/* Footer Quote */}
        <motion.div 
          ref={footerRef}
          style={{
            transform: footerInView ? "none" : "translateY(20px)",
            opacity: footerInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s"
          }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-pink-500" /> and lots of coffee (espresso) 
          </p>
        </motion.div>
      </div>
    </section>
  )
}

