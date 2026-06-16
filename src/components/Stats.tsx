'use client'
import CountUp from "react-countup"
import { useInView } from 'react-intersection-observer'

const stats = [
  { num: 3, suffix: "+", text: "Years of Experience" },
  { num: 5, suffix: "+", text: "Projects Built" },
  { num: 12, suffix: "+", text: "Technologies" },
  { num: 2, suffix: "", text: "AI Agents Built" },
]

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div ref={ref} className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((item, index) => (
          <div
            key={index}
            className="glass-card-hover p-3 xl:p-4 text-center group"
          >
            {inView && (
              <div className="font-display text-xl xl:text-2xl font-bold gradient-text mb-0.5">
                <CountUp end={item.num} duration={2.5} delay={index * 0.1} />
                <span>{item.suffix}</span>
              </div>
            )}
            <p className="text-xs xl:text-sm text-white/50 group-hover:text-white/70 transition-colors">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats