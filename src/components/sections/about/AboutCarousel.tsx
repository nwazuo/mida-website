import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

const AboutCarousel = () => {
  const carouselAb = [
    {
      name: 'Nzubechi Chinedu',
      title: '',
      body: "Excellent work, on time delivery and wonderful customer care service. They worked on my company's business rebranding and we couldn't ask for more. They are just awesome.",
    },
    {
      name: 'Filly Studios',
      title: '',
      body: "MIDA is one very reliable company to work with. We are glad to have crossed paths with them. You can't go wrong with MIDA.",
    },
    {
      name: 'Tunde Ekpe',
      title: '',
      body: 'The MIDA staff were extremely courteous and patient whilst my web page was being built, as they had virtually no information to work with but made something good out of so little!  I was even more impressed when they helped me navigate the process of editing the website .  but they did apologise and it did not affect their service quality overall. 🙂',
    },
  ]
  const [index, setIndex] = useState(0)

  return (
    <div className="md:p-14 flex flex-col md:flex-row items-center justify-between">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: -200, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.6,
          }}
          exit={{ opacity: 0, x: 500 }}
          key={index}
          className="w-[100%] md:w-[75%] p-8"
        >
          <p className="text-[25px] md:text-[36px] font-[700]">
            {carouselAb[index].body}
          </p>
          <h5 className="text-[36px] mt-10 font-[700]">
            {carouselAb[index].name}
          </h5>
          <h6 className="text-[24px] font-[600]">{carouselAb[index].title}</h6>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-left md:items-center w-full md:w-auto justify-start md:justify-between">
        <motion.button
          disabled={index === 0}
          whileHover={{ scale: 1.2 }}
          className="bg-black disabled:bg-gray-400 size-[40px] md:size-[80px] disabled:cursor-not-allowed flex items-center justify-center rounded-[50%] mx-4"
          onClick={() => {
            setIndex((prev) => prev - 1)
          }}
        >
          <img src="/icons/left-arrow.svg" className="w-[20px] md:w-auto" />
        </motion.button>
        <motion.button
          disabled={index === 2}
          whileHover={{ scale: 1.2 }}
          className="bg-black disabled:bg-gray-400 disabled:cursor-not-allowed size-[40px] md:size-[80px] flex items-center justify-center rounded-[50%]"
          onClick={() => {
            setIndex((prev) => prev + 1)
          }}
        >
          <img src="/icons/right-arrow.svg" className="w-[20px] md:w-auto" />
        </motion.button>
      </div>
    </div>
  )
}

export default AboutCarousel
