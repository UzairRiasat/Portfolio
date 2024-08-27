'use client'

import Image from "next/image"
import {delay, motion} from 'framer-motion'
import { reverse } from "dns"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div 
            initial={{opacity:0}}
            animate={{
              opacity: 1,
              transition:{delay:2, duration:0.4, ease:"easeOut"}
            }}
        >
        {/* image */}
        <motion.div
           initial={{opacity:0}}
          animate={{
            x: ["0%","-59%"],
            y: ["0%","-20%"],
          opacity: 1,
          transition:{delay:2.4, duration:0.4, ease:"easeOut"}
        }}
        
        className="w-[428px] h-[398px] xl:w-[598px] xl:h-[585px] mix-blend-lighten 
        absolute "
        >
          
        <Image 
            src="/Assets/photo4.png" 
            priority quality={100} 
            fill 
            alt=""
            className="object-contain "
        />
       </motion.div>
       {/* cirle */}
       <motion.div
        initial={{ opacity: 0}}
        animate={{
          opacity: 1,
          x: ['0px', '-200px'],
          y: ['0px', '-52px'],  
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
        className="relative"
       >
       <motion.svg className="w-[300px] xl:[w-2600px] h-[300px] xl:[h-2600px]" 
           fill="transparent"
           viewBox="0 0 2200 2200"
           xmlns="http://www.w3.org/2000/svg"
        >
        <motion.circle 
           cx="1100" 
           cy="1100" 
           r="1100" 
           stroke="#00ff99" 
           strokeWidth="4"
           strokeLinecap="round"
           strokeLinejoin="round"
           initial={{strokeDasharray:"24 10 0 0"}}
           animate={{
            strokeDasharray:["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate:[120, 360],
           }}
           transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
           }}
        />
       </motion.svg>
       </motion.div>
     </motion.div>
    </div>
  )
}

export default Photo
