'use client'

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

export default function ChatBubble() {
  return (
    <div className="relative min-h-[300px] md:flex opacity-80  items-start justify-start p-4 hidden ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 0.8 }}
        className="relative max-w-md"
      >
        <div className="absolute top-[52px] left-[433px] hidden lg:block w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-200 transform rotate-45" />
        <div className="relative bg-gradient-to-br from-purple-600 to-indigo-900 text-white p-6 rounded-3xl shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-5 h-5" />
            <span className="font-semibold">Tech stack & beyond</span>
          </div>
          <p className="mb-4">
          Here&apos;s my main tech stack
          </p>

          <div className="mt-3 text-purple-200 text-sm">
            Always excited to explore new technologies and jump right in to new frameworks! 🚀 <br></br>
            <small>By the way... press the screen if you want more particles!</small>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
