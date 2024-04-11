import React from 'react'
import FadeInUp from '~/components/animation/FadeInUp'
import cn from '~/lib/cn'

const ServicesCard = ({ index }) => {
  return (
    <div
      className={cn('flex flex-col text-white w-full md:w-[60%]', {
        'md:ml-[40%]': (index + 1) % 2 === 0,
      })}
    >
      <FadeInUp delay={0.1}>
        <h6 className="text-[40px] font-[700] mb-2">Branding</h6>
      </FadeInUp>
      <FadeInUp delay={0.215}>
        <p>
          We understand the power of a strong brand identity in today's
          competitive landscape. Our branding services are designed to help you
          stand out from the crowd, connect with your audience on a deeper
          level, and drive long-term success for your business.
        </p>
      </FadeInUp>
      <div className="flex mt-4 w-full">
        {[
          'Brand Strategy',
          'Brand Architecture',
          'Visual Identity',
          'Brand Experiences',
        ].map((s, i) => (
          <FadeInUp key={i} delay={(i + 1) * 0.3}>
            <div
              style={{ border: '1px solid #FFFFFF' }}
              className="p-2 rounded-[32px] mr-2 flex items-center justify-center text-center text-[8px] md:text-[11px]"
              key={i}
            >
              {s}
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  )
}

export default ServicesCard
