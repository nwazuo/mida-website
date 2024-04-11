import React from 'react'
import FadeInUp from '~/components/animation/FadeInUp'
import cn from '~/lib/cn'
import SplitTextAnim from '../animation/SplitTextAnim'

const ValuesCard = ({ index }) => {

  return (
    <div
      className={cn(
        'flex flex-col md:flex-row items-center justify-between my-8',
        {
          'md:flex-row-reverse': index % 2 !== 0,
        },
      )}
    >
      <div className="w-full md:w-[50%]">
        <FadeInUp delay={0.1}>
          <img src="/images/dummy-rectangle.jpg" alt="image" />
        </FadeInUp>
      </div>
      <div className="w-full md:w-[45%]">
        <FadeInUp delay={0.04}>
          <h5 className="text-[48px] font-[700]">Diversity</h5>
        </FadeInUp>
        <SplitTextAnim as='p' delay={0.1} className="w-[100%] text-[22px] text-[#424242]">
            MIDA expands beyond employee’s ethnic background, we encourage a
            diverse culture that celebrate differences and uniqueness.
        </SplitTextAnim>
      </div>
    </div>
  )
}

export default ValuesCard
