import React from 'react'
import FadeInUp from '~/components/animation/FadeInUp'

const Darkheader = ({ header, paragraph, label }) => {
  return (
    <div className="bg-black text-center text-white flex flex-col items-center justify-center c-container h-auto pb-8 md:min-h-[60vh]">
      <FadeInUp delay={0.01}>
        <h5 className="text-[32px] text-[#1EA1F6] mb-2">{label}</h5>
      </FadeInUp>
      <FadeInUp delay={0.215}>
        <h4 className="text-[48px] md:text-[80px] font-[600]">{header}</h4>
      </FadeInUp>
      <FadeInUp delay={0.42}>
        <p className="text-[#B3B3B3] text-[22px] md:text-[32px] md:w-[90%] mx-auto mt-3">
          {paragraph}
        </p>
      </FadeInUp>
    </div>
  )
}

export default Darkheader
