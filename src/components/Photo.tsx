'use client'
import { motion } from 'framer-motion'

const Photo = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-transparent to-violet-glow/20 blur-3xl scale-110 animate-pulse-soft" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {/*
          Photo size uses clamp so it scales proportionally with viewport width.
          On 1024px viewport: ~260px. On 1440px: ~340px. Never overflows.
        */}
        <div
          className="relative rounded-full p-[3px] bg-gradient-to-br from-accent/60 via-accent/20 to-violet-glow/40 shadow-glow animate-float"
          style={{ width: "clamp(200px, 22vw, 380px)", height: "clamp(200px, 22vw, 380px)" }}
        >
          <div
            className="relative w-full h-full rounded-full overflow-hidden bg-secondary bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Assets/My_Photo.png')" }}
            role="img"
            aria-label="Uzair Riasat"
          />
        </div>

        <div className="absolute -bottom-2 -right-2 glass-card px-3 py-2 rounded-xl shadow-card">
          <p className="font-primary text-[9px] uppercase tracking-widest text-accent/70">Focus</p>
          <p className="font-display text-xs font-semibold text-white">AI & Backend</p>
        </div>

        <div className="absolute -top-2 -left-4 glass-card px-3 py-2 rounded-xl shadow-card">
          <p className="font-display text-xl font-bold gradient-text">3+</p>
          <p className="font-primary text-[9px] uppercase tracking-widest text-white/50">Years Exp.</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Photo