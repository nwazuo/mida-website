import React, { FC } from 'react'

import FadeInUp from '~/components/animation/FadeInUp'

interface IProps {
  header: string | React.ReactNode
  paragraph: string | React.ReactNode
  label: string
  parentClassName?: string
}

const Darkheader: FC<IProps> = ({
  header,
  paragraph,
  label,
  parentClassName,
}: IProps) => {
  return (
    <div className="bg-black">
      <div
        className={
          'c-container text-center text-white flex flex-col items-center justify-center h-auto pb-24 md:h-[90vh] w-full' +
          parentClassName
        }
      >
        <FadeInUp delay={0.01}>
          <h5 className="text-[32px] text-[#1EA1F6] pt-40 mb-2">{label}</h5>
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
    </div>
  )
}

export default Darkheader
