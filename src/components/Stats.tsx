'use client'
import CountUp from "react-countup"
import {useInView} from 'react-intersection-observer'

const stats = [
    { num: 3, suffix: "+", text: "Years of Experience" },
    { num: 5, suffix: "+", text: "Projects Built" },
    { num: 12, suffix: "+", text: "Technologies Used" },
    { num: 2, text: "AI Agents Built" },
]

const Stats = () => {
    const [ref, inview] = useInView({ triggerOnce: true, threshold: 0.5 })
    
    return (
        <section className="pb-18 xl:pt-0 xl:pb-0 md:mt-[-50px]">
            <div className="container mx-auto">
                <div className="bg-gray-950/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
                    {/* Stats container */}
                    <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:gap-6 w-full mx-auto xl:max-w-none">
                        {stats.map((item, index) => (
                            <div 
                                key={index}
                                ref={ref}
                                className="flex-1 flex flex-col items-center text-center md:flex-row md:items-center md:justify-center xl:justify-start md:text-left"
                            >
                                {inview && (
                                    <div className="text-3xl sm:text-4xl xl:text-5xl font-bold font-primary flex justify-center md:justify-start">
                                        <CountUp 
                                            end={item.num} 
                                            duration={5} 
                                            delay={0.2}
                                        />
                                        <span>{item.suffix}</span>
                                    </div>
                                )}
                                <p className={`
                                    text-sm sm:text-base text-white/80 mt-1 md:mt-0 md:ml-2
                                    ${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}
                                `}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats