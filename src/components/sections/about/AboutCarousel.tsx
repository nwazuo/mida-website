import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

const AboutCarousel = () => {
  const carouselAb = [
    {
      name: 'Christopher',
      title: 'Ceo, Fizzle Power Tech',
      body: '“Lorem ipsum dolor sit amet consectetur. Vulputate orci urna lectus leo ridiculus felis blandit fusce. Euismod dictumst venenatis integer eu sed et urna euismod massa. Facilisis sed sollicitudin ac turpis quam quam vel pulvinar eget. Nunc odio mi in ac tortor faucibus.”',
    },
    {
      name: 'Nyerishi',
      title: 'Ceo, Smartworks',
      body: '“Lorem ipsum dolor sit amet consectetur. Vulputate orci urna lectus leo ridiculus felis blandit fusce. Euismod dictumst venenatis integer eu sed et urna euismod massa. Facilisis sed sollicitudin ac turpis quam quam vel pulvinar eget. Nunc odio mi in ac tortor faucibus.”',
    },
    {
      name: 'Mida Christopher',
      title: 'Ceo, MIDA',
      body: '“Lorem ipsum dolor sit amet consectetur. Vulputate orci urna lectus leo ridiculus felis blandit fusce. Euismod dictumst venenatis integer eu sed et urna euismod massa. Facilisis sed sollicitudin ac turpis quam quam vel pulvinar eget. Nunc odio mi in ac tortor faucibus.”',
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
          <p className="text-[36px] font-[700]">{carouselAb[index].body}</p>
          <h5 className="text-[36px] mt-10 font-[700]">
            {carouselAb[index].name}
          </h5>
          <h6 className="text-[24px] font-[600]">{carouselAb[index].title}</h6>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-left md:items-center justify-start md:justify-between">
        <button
          disabled={index === 0}
          className="bg-black disabled:bg-gray-400 size-[80px] disabled:cursor-not-allowed flex items-center justify-center rounded-[50%] mx-4"
          onClick={() => {
            setIndex((prev) => prev - 1)
          }}
        >
          <img src="/icons/left-arrow.svg" />
        </button>
        <button
          disabled={index === 2}
          className="bg-black disabled:bg-gray-400 disabled:cursor-not-allowed size-[80px] flex items-center justify-center rounded-[50%]"
          onClick={() => {
            setIndex((prev) => prev + 1)
          }}
        >
          <img src="/icons/right-arrow.svg" />
        </button>
      </div>
    </div>
  )
}

export default AboutCarousel
