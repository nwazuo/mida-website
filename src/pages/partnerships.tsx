import React from 'react'
import FadeInUp from '~/components/animation/FadeInUp'
import SplitTextAnim from '~/components/animation/SplitTextAnim'
import Darkheader from '~/components/common/Darkheader'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import MidaLink from '~/components/common/MidaLink'

import { motion } from 'framer-motion'

const innerVariant = {
  hidden: {
    rotateY: -90,
  },
  visible: {
    rotateY: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 1,
      delay: 0.6,
    },
  },
  leave: {
    rotateY: -90,
    transition: {
      type: 'tween',
      ease: 'easeIn',
      duration: 0.3,
      delay: 0.7,
    },
  },
}

const Partnership = () => {
  return (
    <div>
      <Header variant="white" />
      <Darkheader
        parentClassName="mb-[-50px]"
        label="Partnership"
        header="Partner in innovation🤝"
        paragraph="You gain access to a wealth of expertise, resources, and support to help you achieve your business goals."
      />
      <div className="c-container mx-auto mt-[-50px]">
        <motion.img
          key="image-animation2"
          variants={innerVariant}
          exit="leave"
          initial="hidden"
          animate="visible"
          src="/images/partnership.png"
          className="rounded-sm"
          alt="parnership img"
        />
      </div>

      <section className="c-container">
        <SplitTextAnim
          delay={0.5}
          className="text-[22px] md:text-[32px] text-[#1C272B] md:w-[80%] font-[600] py-12"
        >
          At MIDAS, we believe that collaboration is the key to success in
          today's digital landscape. That's why we're dedicated to forging
          strong partnerships with businesses like yours to drive mutual growth
          and success. Our dedication to collaboration extends far beyond mere
          business transactions. We view each partnership as an opportunity to
          create something truly transformative—to combine our expertise,
          resources, and creative energies to achieve remarkable results
          together.{' '}
        </SplitTextAnim>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((s, index) => (
            <motion.div
              whileInView={{
                x: [30, 0],
                y: [50, 0],
                opacity: [0, 1],
                visibility: 'visible',
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
            >
              <PartnershipCard />
            </motion.div>
          ))}
        </div>
      </section>
      <div className="my-48 c-container">
        <h4 className="text-[40px] font-[700]">
          Send us a mail to collaborate
        </h4>
        <p className="text-[24px] text-[#222222] md:w-[60%]">
          Ready to take the next step? Contact us today to learn more about our
          partnership opportunities and how we can help you achieve your
          business objectives. We can't wait to embark on this journey with you.
        </p>
        <FadeInUp delay={0.3}>
          <MidaLink
            href="#"
            className="w-fit text-xl lg:text-xl text-black font-bold mt-2 lg:mt-4"
          >
            Start a Project
          </MidaLink>
        </FadeInUp>
      </div>
      <Footer />
    </div>
  )
}

const PartnershipCard = () => {
  return (
    <div className="bg-[#F4F4F4] my-[80px] rounded-[8px]">
      <div className="h-[90%] w-full flex items-center justify-center text-[#F4F4F4]">
        HI
      </div>
      <div className="p-4 bg-[#F4F4F4]">
        <h4 className="text-[30px] font-[700]">Expertise and Innovation</h4>
        <p className="text-[18px] font-[600]">
          With years of experience in web development, design, and digital
          strategy, we bring a wealth of expertise and innovation to the table.
        </p>
      </div>
    </div>
  )
}

export default Partnership
