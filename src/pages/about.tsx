import React, { useEffect, useState } from 'react'
import Header from '~/components/common/Header'

import Image from 'next/image'
import FadeInUp from '~/components/animation/FadeInUp'
import Footer from '~/components/common/Footer'

import { motion } from 'framer-motion'
import ValuesCard from '~/components/common/ValuesCard'
import ServicesCard from '~/components/common/ServicesCard'
import AboutCarousel from '~/components/sections/about/AboutCarousel'

const About = () => {
  const NextImage = motion(Image)
  return (
    <div>
      <Header variant="white" />
      <div
        style={{ color: 'white !important' }}
        className="flex flex-col text-white text-center items-center justify-center md:px-40 w-full c-container bg-black h-[60vh] mb-[-20px] md:mb-[-100px]"
      >
        <FadeInUp delay={0.11}>
          <h5 className="text-[#1EA1F6] text-[18px] md:text-[36px]">
            About us
          </h5>
        </FadeInUp>
        <FadeInUp delay={0.02}>
          <h3 className="text-[41px] lg:text-[60px] font-[600]">
            Hey <span className="wave">👋</span>, we're MIDA
          </h3>
        </FadeInUp>
        <FadeInUp delay={0.04}>
          <p className="text-[#B3B3B3]">
            We enhance brands by creating elevated digital experiences.
          </p>
        </FadeInUp>
      </div>

      <FadeInUp delay={0.03}>
        <div className="c-container">
          <NextImage
            src="/images/about-section-image.png"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              //   type: 'smooth',
              duration: 1,
            }}
            width={1600}
            height={933}
            alt="about-section"
            className="rounded-[16px]"
          />
        </div>
      </FadeInUp>

      <div className="bg-white text-[#222222] z-10 pt-[40px] c-container">
        <p className="text-[21px] md:text-[32px] p-8 font-[600]">
          We're a digital product and UX agency in Lagos Nigeria. We major in
          strategy, design, blockchain and development across all platforms. We
          are more than just a digital product and UX agency; we are the
          architects of strategic brilliance, the artists of cutting-edge
          design, and the pioneers of blockchain and development across diverse
          platforms.
        </p>
      </div>

      <FadeInUp>
        <div className="bg-[#F4F4F4] c-container flex flex-col md:flex-row items-center justify-between py-12 mt-8">
          <div>
            <CountUpAnimation
              initialValue={0}
              targetValue={10}
              text="Team Members"
            />
          </div>
          <div>
            <CountUpAnimation
              initialValue={0}
              targetValue={4}
              text="Years in Business"
            />
          </div>
          <div>
            <CountUpAnimation
              initialValue={0}
              targetValue={40}
              text="Projects Completed"
            />
          </div>
        </div>
      </FadeInUp>

      <section className="c-container mb-6">
        <h5
          className="pl-3 mt-14 text-[48px]"
          style={{ borderLeft: '1px solid #000' }}
        >
          Our values
        </h5>

        <div className="flex flex-col">
          {[1, 2, 3].map((_, i) => (
            <ValuesCard index={i} key={i} />
          ))}
        </div>
      </section>

      <section className="c-container flex flex-col-reverse md:flex-row items-start justify-between my-20">
        <div>
          <h4 className="text-[48px] font-[700] mt-8 md:mt-0">
            MIDA’s 12-step Cycle
          </h4>
          <p className="text-[#424242] text-[20px]">
            Our work process remains the same within each service. MIDA seeks to
            achieve the defined objective – make the delivery bring the maximum
            benefit to the customer. At this moment our process consists of 12
            simple steps to familiarise with the project and deliver
            excellently.
          </p>
        </div>
        <div>
          <img src="/images/mida-cycle.png" />
        </div>
      </section>

      <section className="c-container bg-black">
        <div className="mt-5 pt-10">
          <FadeInUp delay={0.1}>
            <h5
              className="pl-3 mt-4 text-[48px] text-white mb-10"
              style={{ borderLeft: '1px solid #fff' }}
            >
              Our values
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

      <section className="c-container mt-6 pb-6">
        <AboutCarousel />
      </section>

      <Footer />
    </div>
  )
}

const CountUpAnimation = ({ initialValue, targetValue, text }) => {
  const [count, setCount] = useState(initialValue)
  const duration = 1000 // 4 seconds

  useEffect(() => {
    let startValue = initialValue
    const interval = Math.floor(duration / (targetValue - initialValue))

    const counter = setInterval(() => {
      startValue += 1
      setCount(startValue)
      if (startValue >= targetValue) {
        clearInterval(counter)
      }
    }, interval)

    return () => {
      clearInterval(counter)
    }
  }, [targetValue, initialValue])

  return (
    <div className="flex flex-col text-center">
      <span className="text-[80px] font-[700]">{count}+</span>
      <span className="text-[21px] md:text-[32px] font-[600]">{text}</span>
    </div>
  )
}

export default About
