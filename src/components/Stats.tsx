'use client'
import CountUp from "react-countup"
import { useInView } from 'react-intersection-observer'

const stats = [
  { num: 3, suffix: "+", text: "Years of Experience", icon: "🚀" },
  { num: 5, suffix: "+", text: "Projects Built", icon: "⚡" },
  { num: 12, suffix: "+", text: "Technologies", icon: "🛠" },
  { num: 2, suffix: "", text: "AI Agents Built", icon: "🤖" },
]

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="glass-card-hover p-6 text-center group"
          >
            <span className="text-2xl mb-3 block opacity-60 group-hover:opacity-100 transition-opacity">
              {item.icon}
            </span>
            {inView && (
              <div className="font-display text-3xl xl:text-4xl font-bold gradient-text mb-1">
                <CountUp end={item.num} duration={2.5} delay={index * 0.1} />
                <span>{item.suffix}</span>
              </div>
            )}
            <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
