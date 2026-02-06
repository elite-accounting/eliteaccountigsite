import { useEffect, useState, useRef } from 'react'

export const useNumberAnimation = (targetValue, duration = 2000, startOnVisible = true, isVisible = false) => {
  const [displayValue, setDisplayValue] = useState(0)
  const animationFrameRef = useRef(null)
  const startTimeRef = useRef(null)

  useEffect(() => {
    // Extract numeric value from strings like "20+", "500+", "99%"
    const extractNumber = (str) => {
      const numStr = str.replace(/[^0-9.]/g, '')
      return parseFloat(numStr) || 0
    }

    const numericTarget = extractNumber(targetValue)

    // Reset animation when visibility changes
    if (startOnVisible && !isVisible) {
      setDisplayValue(0)
      startTimeRef.current = null
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
      return
    }

    if (!startOnVisible || isVisible) {
      setDisplayValue(0)
      startTimeRef.current = null

      const animate = (currentTime) => {
        if (!startTimeRef.current) {
          startTimeRef.current = currentTime
        }

        const elapsed = currentTime - startTimeRef.current
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = numericTarget * easeOutQuart

        setDisplayValue(Math.floor(currentValue))

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate)
        } else {
          setDisplayValue(numericTarget)
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }
  }, [targetValue, duration, startOnVisible, isVisible])

  // Format the display value with suffix
  const formatValue = () => {
    if (typeof targetValue === 'string' && (targetValue.includes('+') || targetValue.includes('%'))) {
      return `${Math.floor(displayValue)}${targetValue.includes('+') ? '+' : '%'}`
    }
    return Math.floor(displayValue)
  }

  return formatValue()
}

