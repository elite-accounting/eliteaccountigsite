import { useState, useEffect } from 'react'

export const useTypingAnimation = (text, speed = 50, startDelay = 0, startOnVisible = true, isVisible = false) => {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (startOnVisible && !isVisible) {
      setDisplayText('')
      setIsTyping(false)
      return
    }

    if (!startOnVisible || isVisible) {
      setDisplayText('')
      setIsTyping(false)

      const timeout = setTimeout(() => {
        setIsTyping(true)
        let currentIndex = 0

        const type = () => {
          if (currentIndex < text.length) {
            setDisplayText(text.slice(0, currentIndex + 1))
            currentIndex++
            setTimeout(type, speed)
          } else {
            setIsTyping(false)
          }
        }

        type()
      }, startDelay)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [text, speed, startDelay, startOnVisible, isVisible])

  return { displayText, isTyping }
}

