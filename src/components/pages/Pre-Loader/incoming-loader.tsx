'use client'

import * as React from 'react'
import { GooeyText } from '@/components/ui/Pre-Landing-ui/gooey-text-morphing'
import { motion, AnimatePresence } from 'framer-motion'

export function GooeyTextDemo({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false) // triggers fade out
    }, 2300) // total loader time

    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="gooey-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex items-center justify-center fixed inset-0 z-[1000]"
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
