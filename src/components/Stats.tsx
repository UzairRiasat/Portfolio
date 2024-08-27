'use client'
import CountUp from "react-countup"
import {useInView} from 'react-intersection-observer'

const stats = [
    {
        num: 2,
        text:"Years of Experience",
    },
    {
        num: 6,
        text:"Projects Completed",
    },
    {
        num: 4,
        text:"Technologies mastered ",
    },
    {
        num: 12,
        text:"Code Commits",
    },
]

const Stats = () => {
    const [ref, inview] = useInView({
        triggerOnce:true,
        threshold:0.5
    })
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 min-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item,index)=>{
                return(
                    <div ref={ref} className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                       {inview && (<CountUp 
                        end={item.num} 
                        duration={5} 
                        delay={0.2} 
                        className="text-4xl xl:text-6xl font-extrabold"
                       />)}
                       <p className={`${item.text.length < 15 ? "max-w-[100px]":"max-w-[150px]"}
                       leading-snug text-white/80`}>{item.text}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default Stats
