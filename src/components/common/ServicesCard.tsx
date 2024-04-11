import React from 'react'
import FadeInUp from '~/components/animation/FadeInUp'
import cn from '~/lib/cn'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const ServicesCard = ({ index, header, paragraph, chips, img }) => {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [-90, 90])

  const rotateSpring = useSpring(rotate)
  return (
    <div
      className={cn('flex flex-col md:flex-row items-center justify-between', {
        'md:flex-row-reverse': (index + 1) % 2 !== 0,
      })}
    >
      <div className="w-full md:w-[40%]">
        {/* <FadeInUp key={index} delay={(index + 1) * 0.3}> */}
        <motion.img src={img} style={{ rotate: rotateSpring }} />
        {/* </FadeInUp> */}
      </div>
      <div
        className={cn('flex flex-col text-white w-full md:w-[60%]', {
          // 'md:ml-[40%]': (index + 1) % 2 === 0,
        })}
      >
        <FadeInUp delay={0.1}>
          <h6 className="text-[40px] font-[700] mb-2">{header}</h6>
        </FadeInUp>
        <FadeInUp delay={0.215}>
          <p>{paragraph}</p>
        </FadeInUp>
        <div className="flex mt-4 w-full">
          {chips.map((s, i) => (
            <FadeInUp key={i} delay={(i + 1) * 0.3}>
              <div
                style={{ border: '1px solid #FFFFFF' }}
                className="py-1 px-1 rounded-[32px] mr-2 flex items-center justify-center text-center text-[8px] md:text-[11px]"
                key={i}
              >
                {s}
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesCard
