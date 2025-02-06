"use client"

import { useRef, useEffect, useState } from "react"
import { useSlider } from "@/hooks/useSlider"
import type React from "react" // Added import for React

interface VideoComparisonSliderProps {
  leftVideoSrc: string
  rightVideoSrc: string
}

const VideoComparisonSlider: React.FC<VideoComparisonSliderProps> = ({ leftVideoSrc, rightVideoSrc }) => {
  const leftVideoRef = useRef<HTMLVideoElement>(null)
  const rightVideoRef = useRef<HTMLVideoElement>(null)
  const { position, handleMouseDown, handleMouseUp, handleMouseMove } = useSlider()
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const leftVideo = leftVideoRef.current
    const rightVideo = rightVideoRef.current

    if (leftVideo && rightVideo) {
      const handlePlay = () => {
        if (!isPlaying) {
          leftVideo.play()
          rightVideo.play()
          setIsPlaying(true)
        }
      }

      const handlePause = () => {
        if (isPlaying) {
          leftVideo.pause()
          rightVideo.pause()
          setIsPlaying(false)
        }
      }

      leftVideo.addEventListener("play", handlePlay)
      leftVideo.addEventListener("pause", handlePause)
      rightVideo.addEventListener("play", handlePlay)
      rightVideo.addEventListener("pause", handlePause)

      return () => {
        leftVideo.removeEventListener("play", handlePlay)
        leftVideo.removeEventListener("pause", handlePause)
        rightVideo.removeEventListener("play", handlePlay)
        rightVideo.removeEventListener("pause", handlePause)
      }
    }
  }, [isPlaying])

  const togglePlayPause = () => {
    if (leftVideoRef.current && rightVideoRef.current) {
      if (isPlaying) {
        leftVideoRef.current.pause()
        rightVideoRef.current.pause()
      } else {
        leftVideoRef.current.play()
        rightVideoRef.current.play()
      }
    }
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto  aspect-video hidden sm:block">
        <h1 className="text-3xl text-center md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Check out my current side project</h1>
        {/* <h3 className="text-3xl text-center md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Deno vs NodeJs comparison!</h3> */}
        <h3 className="text-xl text-center md:text-2xl max-w-3xl mx-auto  mb-6 bg-gradient-to-r from-purple-400 to-pink-100 text-transparent bg-clip-text">A work-in-progress benchmarking app comparing Deno and Node.js across different tests, including simple Fibonacci calc, network requests and file I/O. More soon!</h3>
        <h1 className="text-left">Frontend</h1>
        <h1 className="text-right">Backend</h1>
      <div
        className="relative w-full h-full mt-10"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleMouseMove}
      >
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={leftVideoRef}
            src={leftVideoSrc}
            className="absolute inset-0 w-full h-full object-fill"
            loop
            muted
            playsInline
            preload="auto" // Add a poster image if available
            disablePictureInPicture
            disableRemotePlayback
          />
        </div>
        <div
          className="absolute inset-0 w-full h-full overflow-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <video
            ref={rightVideoRef}
            src={rightVideoSrc}
            className="absolute inset-0 w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="auto" // Add a poster image if available
            disablePictureInPicture
            disableRemotePlayback
          />
        </div>
        <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `${position}%` }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-800"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M6 8L2 12L6 16" />
            </svg>
          </div>
        </div>
      </div>
      <button
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
        onClick={togglePlayPause}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  )
}

export default VideoComparisonSlider

