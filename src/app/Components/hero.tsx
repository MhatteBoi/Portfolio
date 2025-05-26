"use client";

import { useState, useEffect, useMemo } from "react";
import { FloatingTechStack } from "./floating-tech-stack";

export function Hero() {
  const words = useMemo(
    () => ["innovative", "scalable", "responsive", "elegant"],
    []
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayedText !== currentWord) {
      const nextChar = currentWord.slice(0, displayedText.length + 1);
      const timeout = setTimeout(() => {
        setDisplayedText(nextChar);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText !== "") {
      const nextChar = displayedText.slice(0, displayedText.length - 1);
      const timeout = setTimeout(() => {
        setDisplayedText(nextChar);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    } else if (displayedText === currentWord && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText === "") {
      const nextIndex = (currentWordIndex + 1) % words.length;
      setCurrentWordIndex(nextIndex);
      setIsDeleting(false);
    }
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <div className="min-h-[95vh] flex flex-col items-center pt-24 justify-center">
      
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="inline-block rounded-full px-4 py-1.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20">
            <span className="text-md font-medium text-gray-200">
               Mhattias Roswall | Full-stack developer
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">Crafting </span>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
              {displayedText}
              <span className="blink">|</span>
            </span>
            <br />
            <span className="text-white">digital solutions</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I bring ideas to life through code, 
            always aiming to build something that feels real, has impact and serves a purpose.
          </p>
        </div>
      </div>

      <div className="w-full mt-20">
        <FloatingTechStack />
      </div>
    </div>
  );
}
