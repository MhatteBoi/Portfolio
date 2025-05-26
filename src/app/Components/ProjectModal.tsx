'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useState } from 'react'

interface ProjectModalProps {
  title: string;
  process?: string;
  learned?: string;
  improvements?: string;
  images?: string[];
}

export function ProjectModal({ title, process, learned, improvements, images }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!process && !learned && !improvements) return null;
  
  const nextImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const previousImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-purple-600 hover:bg-purple-700 text-white">
          Project Details
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-800 text-white border-gray-700 max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">{title}</DialogTitle>
        </DialogHeader>
        
        {images && images.length > 0 && (
          <div className="relative w-full h-[300px] mb-6">
            <Image
              src={images[currentImageIndex]}
              alt={`${title} screenshot ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
            {images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={previousImage}
                  className="ml-2 bg-black/50 hover:bg-black/70"
                >
                  ←
                </Button>
                <Button
                  variant="outline"
                  onClick={nextImage}
                  className="mr-2 bg-black/50 hover:bg-black/70"
                >
                  →
                </Button>
              </div>
            )}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-6">
          {process && (
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Thought Process</h3>
              <p className="text-gray-300">{process}</p>
            </div>
          )}
          
          {learned && (
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-teal-400">What I Learned</h3>
              <p className="text-gray-300">{learned}</p>
            </div>
          )}
          
          {improvements && (
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-amber-400">Features</h3>
              <p className="text-gray-300">{improvements}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}