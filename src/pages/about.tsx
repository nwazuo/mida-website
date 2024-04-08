import React from 'react'
import Header from '~/components/common/Header'

import Image from 'next/image'
import FadeInUp from '~/components/animation/FadeInUp'
import SplitTextAnim from '~/components/animation/SplitTextAnim'
import Footer from '~/components/common/Footer'

import { motion } from 'framer-motion'

const About = () => {
  const NextImage = motion(Image)
  return (
    <div>
      <Header variant="white" />
      <div
        style={{ color: 'white !important' }}
        className="flex flex-col text-white text-center items-center justify-center px-40 lg:c-container bg-black h-[60vh] mb-[-100px]"
      >
        <FadeInUp delay={0.11}>
          <h5 className="text-[#1EA1F6]">About us</h5>
        </FadeInUp>
        <FadeInUp delay={0.02}>
          <h3 className="text-[21px] lg:text-[60px] font-[600]">
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
            width={1600}
            height={933}
            alt="about-section"
            className="rounded-[16px]"
          />
        </div>
      </FadeInUp>

      <div className="bg-white text-[#222222] z-10 pt-[40px] c-container">
        <p className="text-[32px] font-[600]">
          We're a digital product and UX agency in Lagos Nigeria. We major in
          strategy, design, blockchain and development across all platforms. We
          are more than just a digital product and UX agency; we are the
          architects of strategic brilliance, the artists of cutting-edge
          design, and the pioneers of blockchain and development across diverse
          platforms.
        </p>
      </div>

      <div className="bg-[#F4F4F4] c-container flex items-center justify-between py-8 mt-8">
        <div>{renderBox('10+', 'Team Members')}</div>
        <div>{renderBox('4+', 'Years in Business')}</div>
        <div>{renderBox('40+', 'Projects Completed')}</div>
      </div>
      <Footer />
    </div>
  )
}

const renderBox = (header: string, subtitle: string) => {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-[80px] font-[700]">{header}</h1>
      <p className="text-[32px] font-[600]">{subtitle}</p>
    </div>
  )
}

export default About
