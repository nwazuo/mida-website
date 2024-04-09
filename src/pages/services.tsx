import React from 'react'
import FadeInUp from '~/components/animation/FadeInUp'
import Darkheader from '~/components/common/Darkheader'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import ServicesCard from '~/components/common/ServicesCard'
import cn from '~/lib/cn'

const Services = () => {
  return (
    <div>
      <Header variant="white" />
      <Darkheader
        label="Our services"
        header="Crafting Digital Transformations."
        paragraph="We offer a comprehensive suite of services tailored to propel your brand to new heights in the digital landscape."
      />

      <section className="c-container">
        <h5 className="mt-4 font-[700] w-full md:w-[95%] py-20 text-[32px]">
          We offer a comprehensive suite of services tailored to propel your
          brand to new heights in the digital landscape. Our expertise goes
          beyond mere web development – we are architects of digital
          transformation.
        </h5>

        {[1, 2, 3, 4, 5, 6].map((s, i) => (
          <ServiceCard index={i} />
        ))}
      </section>

      <section className="c-container bg-black">
        <div className="mt-5 pt-10">
          <FadeInUp delay={0.1}>
            <h5
              className="pl-3 mt-4 text-[48px] text-white mb-10"
              style={{ borderLeft: '1px solid #fff' }}
            >
              Industries
            </h5>
          </FadeInUp>

          {[1, 2, 3, 4, 5, 6].map((s, i) => (
            <div
              key={i}
              style={{ marginTop: '80px', paddingBottom: '50px' }}
              className="w-full"
            >
              <ServicesCard index={i} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

const ServiceCard = ({ index }) => {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row items-start justify-between my-20 gap-6',
        {
          'md:flex-row-reverse': (index + 1) % 2 === 0,
        },
      )}
    >
      <div className="w-full md:w-[45%]">
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
      <div className="w-full md:w-[50%]">
        <FadeInUp delay={0.19 * index}>
          <img src="/images/dummy-service-rectangle.png" />
        </FadeInUp>
      </div>
    </div>
  )
}

export default Services
