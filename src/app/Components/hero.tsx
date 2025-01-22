"use client";

import { useState, useEffect, useMemo } from "react";
import { FloatingTechStack } from "./floating-tech-stack"
import ChatBubble from "./chat-bubble";

export function Hero() {
  const words = useMemo(() => ["the best", "Fast", "Fun", "Cool"], []); // Words to display
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // Text being typed
  const [isDeleting, setIsDeleting] = useState(false); // Whether we're deleting the text
  const typingSpeed = 100; // Typing speed in ms
  const deletingSpeed = 50; // Deleting speed in ms
  const pauseTime = 2000; // Pause time before deleting or typing a new word

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    

    if (!isDeleting && displayedText !== currentWord) {
      // Typing
      const nextChar = currentWord.slice(0, displayedText.length + 1);
      const timeout = setTimeout(() => {
        setDisplayedText(nextChar);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText !== "") {
      // Deleting
      const nextChar = displayedText.slice(0, displayedText.length - 1);
      const timeout = setTimeout(() => {
        setDisplayedText(nextChar);
      }, deletingSpeed);

      return () => clearTimeout(timeout);
    } else if (displayedText === currentWord && !isDeleting) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText === "") {
      // Move to next word
      const nextIndex = (currentWordIndex + 1) % words.length;
      setCurrentWordIndex(nextIndex);
      setIsDeleting(false);
    }
  }, [displayedText, isDeleting, currentWordIndex, words]);
  return (
    <div className="min-h-screen flex flex-col items-center md:flex-row px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full ">
        <div className="md:w-1/2 space-y-8 ">
          <div className="space-y-4  text-center md:text-left translate-y-32 md:translate-y-0">
            <div className="inline-block rounded-full px-4  py-1.5 bg-gray-800 bg-opacity-50 backdrop-blur-sm">
              <span className="text-sm  text-gray-300">
                Mhattias Roswall - Fullstack Developer
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-nowrap font-bold">
              <span className="text-white">Providing </span>
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                {displayedText}
                <span className="blink">|</span> {/* Cursor effect */}
              </span>
              <br />
              <span className="text-white">project experience</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              Im a Fullstack Software Engineer with experience in App, Website,
              and Software development. I love creating so check out my projects below.
            </p>
            <ChatBubble />
          </div>
          
          {/* <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-lg text-lg">
            Learn More!
          </Button> */}
          
          
        </div>
        
        <div className="md:w-1/2 -mt-16 md:-mt-0 -translate-x-12 md:-translate-x-0 flex justify-center items-center">
          <FloatingTechStack />
          
        </div>
      </div>
    </div>
  )
}

