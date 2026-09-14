'use client'
import CountUp from "react-countup"
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion"

const stats = [
  { num: 3, suffix: "+", text: "Years of Experience" },
  { num: 5, suffix: "+", text: "Projects Built" },
  { num: 12, suffix: "+", text: "Technologies" },
  { num: 2, suffix: "", text: "AI Agents Built" },
]

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div ref={ref} className="w-full perspective-scene">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="glass-card p-3 xl:p-5 text-center group relative overflow-hidden"
            initial={{ opacity: 0, y: 20, rotateX: 12 }}
            animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            {inView && (
              <div className="relative font-display text-2xl xl:text-3xl font-bold gradient-text mb-1">
                <CountUp end={item.num} duration={2.5} delay={index * 0.1} />
                <span>{item.suffix}</span>
              </div>
            )}
            <p className="relative text-xs xl:text-sm text-white/50 group-hover:text-white/70 transition-colors">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Stats
