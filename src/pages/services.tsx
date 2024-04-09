import React from 'react'
import FadeInUp from '~/components/animation/FadeInUp'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import cn from '~/lib/cn'

const Services = () => {
  return (
    <div>
      <Header variant="white" />
      <div className="bg-black text-center text-white flex flex-col items-center justify-center c-container h-auto pb-8 md:min-h-[60vh]">
        <h5 className="text-[32px] text-[#1EA1F6] mb-2">Our services</h5>
        <h4 className="text-5xl font-[500]">
          Crafting Digital Transformations.
        </h4>
        <p className="text-[#B3B3B3] text-[32px] w-[90%] mt-3">
          We offer a comprehensive suite of services tailored to propel your
          brand to new heights in the digital landscape.
        </p>
      </div>

      <section className="c-container">
        <h5 className="mt-4 font-[700] w-[95%] py-20 text-[32px]">
          We offer a comprehensive suite of services tailored to propel your
          brand to new heights in the digital landscape. Our expertise goes
          beyond mere web development – we are architects of digital
          transformation.
        </h5>

        {[1, 2, 3, 4, 5, 6].map((s, i) => (
          <ServiceCard index={i} />
        ))}
      </section>
      <Footer />
    </div>
  )
}

const ServiceCard = ({ index }) => {
  return (
    <div
      className={cn('flex items-start justify-between my-20 gap-6', {
        'flex-row-reverse': (index + 1) % 2 === 0,
      })}
    >
      <div className="w-[45%]">
        <FadeInUp delay={0.1 * index}>
          <h4 className="text-[40px] font-[700]">Branding</h4>
        </FadeInUp>
        <FadeInUp delay={0.15 * index}>
          <p className="my-2 font-[600]">
            Lorem ipsum dolor sit amet consectetur. Ut netus massa elementum
            donec ornare tincidunt diam non commodo. Fringilla purus mauris
            dignissim scelerisque eget imperdiet scelerisque ut. At tristique
            egestas integer sit lacus condimentum. Sollicitudin nisl sed nam
            enim facilisis egestas vel.
          </p>
        </FadeInUp>
        <ul className="pl-2 mt-3">
          {[
            'Brand Strategy',
            'Brand Architecture',
            'Brand Guidelines',
            'Brand Experiences',
            'Visual Identity',
          ].map((s, i) => (
            <FadeInUp delay={0.3 * i}>
              <li key={i}>{s}</li>
            </FadeInUp>
          ))}
        </ul>
      </div>
      <div className="w-[50%]">
        <FadeInUp delay={0.19 * index}>
          <img src="/images/dummy-service-rectangle.png" />
        </FadeInUp>
      </div>
    </div>
  )
}

export default Services
