'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Stairs from './Stairs'

const StairTransition = () => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {/* Stairs overlay – covers entire viewport */}
        <div className="fixed inset-0 z-40 pointer-events-none flex">
          <Stairs />
        </div>

        {/* Fade overlay */}
        <motion.div
          className="fixed inset-0 bg-primary pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.005, duration: 0.04, ease: 'easeInOut' }}
        />
      </div>
    </AnimatePresence>
  )
}

export default StairTransition
