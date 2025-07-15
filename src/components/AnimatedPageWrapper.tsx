"use client"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function AnimatedPageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // changes when route changes
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
