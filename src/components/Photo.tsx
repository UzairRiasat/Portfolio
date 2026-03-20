'use client'
import { motion } from 'framer-motion'

const Photo = () => {
  return (
    <div className="w-full h-full relative overflow-visible">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.1, duration: 0.4, ease: "easeOut" }
        }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: 1,
            y: -10,
            transition: { delay: 0.2, duration: 0.45, ease: "easeOut" }
          }}
          className={`
            w-[340px] h-[360px] xl:w-[480px] xl:h-[520px]
            absolute -top-10 xl:-top-32
            left-[-10%] -translate-x-1/2 xl:left-[-75%]
            bg-cover bg-center bg-no-repeat
            mix-blend-lighten
            [mask-image:linear-gradient(to_bottom,black_70%,rgba(0,0,0,0.2)_85%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]
          `}
          style={{
            backgroundImage: "url('/Assets/My_Photo.png')",
          }}
          aria-label="Uzair Riasat"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: ['0px', '-200px'],
            y: ['0px', '-52px'],
            transition: {
              delay: 0.2,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="relative"
        >
          <motion.svg
            className="w-[300px] xl:[w-2600px] h-[300px] xl:[h-2600px]"
            fill="transparent"
            viewBox="0 0 2200 2200"
            xmlns="http://www.w3.org/2000/svg"
          >
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo
