'use client'

import * as React from 'react'
import { GooeyText } from '@/components/ui/Pre-Landing-ui/gooey-text-morphing'
import { motion, AnimatePresence } from 'framer-motion'

export function GooeyTextDemo({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const today = new Date().toDateString()
    const lastSeen = localStorage.getItem('gooeyLastSeen')
    const sessionSeen = sessionStorage.getItem('gooeySeenThisSession')

    if (sessionSeen || lastSeen === today) {
      // Already seen today → skip loader
      onComplete?.()
      return
    }

    // Show loader for first time today
    setIsVisible(true)

    const timeout = setTimeout(() => {
      setIsVisible(false) // triggers fade out
    }, 2300) // total loader time before fade out

    return () => clearTimeout(timeout)
  }, [onComplete])

  const handleExitComplete = () => {
    if (!isVisible) {
      const today = new Date().toDateString()
      localStorage.setItem('gooeyLastSeen', today)
      sessionStorage.setItem('gooeySeenThisSession', 'true')
      onComplete?.()
    }
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="gooey-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex items-center justify-center fixed inset-0 z-[1000] bg-black"
        >
          <GooeyText
            texts={['OWASP', 'Society', 'Presents']}
            morphTime={1}
            cooldownTime={0.25}
            className="font-bold text-white text-4xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
