import { useState, useCallback, useRef } from "react"

export const useSlider = (initialPosition = 50) => {
  const [position, setPosition] = useState(initialPosition)
  const isDragging = useRef(false)

  const handleMouseDown = useCallback(() => {
    isDragging.current = true
  }, [])

  const handleMouseUp = useCallback(() => {
    isDragging.current = false
  }, [])

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current) return

    const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect()
    const x = "touches" in event ? event.touches[0].clientX : event.clientX
    const newPosition = ((x - rect.left) / rect.width) * 100

    setPosition(Math.max(0, Math.min(100, newPosition)))
  }, [])

  return {
    position,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  }
}

