/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import { InferGetStaticPropsType } from 'next'
import React from 'react'

import FadeInUp from '~/components/animation/FadeInUp'
import SplitTextAnim from '~/components/animation/SplitTextAnim'
import Darkheader from '~/components/common/Darkheader'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import MidaLink from '~/components/common/MidaLink'
import { SEO } from '~/components/seo'
import { getPageMetaBySlug, getSiteSettings } from '~/lib/sanity.queries'

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

const PARTNERSHIP_DATA = [
  {
    img: '/images/expertise.png',
    header: 'Expertise and Innovation',
    paragraph:
      'With years of experience in web development, design, and digital strategy, we bring a wealth of expertise and innovation to the table.',
  },
  {
    img: '/images/collaborative.png',
    header: 'Collaborative Approach',
    paragraph:
      'We believe in working closely with our partners every step of the way. From initial consultation to project delivery and beyond',
  },
  {
    img: '/images/strategic.png',
    header: 'Strategic Support and Guidance',
    paragraph:
      'As your strategic partner, were committed to your long-term success. Well provide ongoing support and guidance to help you navigate the digital landscape.',
  },
]

const Partnership = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { pageData, siteSettings, pageMeta } = props

  return (
    <div>
      <SEO {...pageMeta} {...siteSettings.defaultMeta} />
      <Header variant="dark" />
      <Darkheader
        parentClassName="mb-[-50px]"
        label="Partnership"
        header="Partner in innovation🤝"
        paragraph="You gain access to a wealth of expertise, resources, and support to help you achieve your business goals."
      />
      <div className="c-container mx-auto mt-[-50px]">
        <motion.img
          style={{ display: 'visible' }}
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
          {PARTNERSHIP_DATA.map((s, index) => (
            <motion.div
              key={index}
              initial={{ visibility: 'visible' }}
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
              <PartnershipCard {...s} />
            </motion.div>
          ))}
        </div>
      </section>
      <div className="my-20 c-container flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-[70%]">
          <h4 className="text-[40px] font-[700]">
            Send us a mail to collaborate
          </h4>
          <SplitTextAnim className="text-[24px] text-[#222222] md:w-[60%]">
            Ready to take the next step? Contact us today to learn more about
            our partnership opportunities and how we can help you achieve your
            business objectives. We can't wait to embark on this journey with
            you.
          </SplitTextAnim>
          <FadeInUp delay={0.3}>
            <MidaLink
              href="/contact"
              className="w-fit text-xl lg:text-xl text-black font-bold mt-2 lg:mt-4"
            >
              Start a Project
            </MidaLink>
          </FadeInUp>
        </div>
        <div className="w-full md:w-[30%]">
          <img
            src="/images/contact-ball.png"
            alt="contact-ball"
            className="w-[80%] mx-auto md:w-full"
          />
        </div>
      </div>
      <Footer {...siteSettings} />
    </div>
  )
}

const PartnershipCard = ({ img, header, paragraph }) => {
  return (
    <div className="bg-[#F4F4F4] md:my-[80px] min-h-[50vh] rounded-[8px] overflow-hidden">
      <div className="w-full flex items-center justify-center">
        <img src={img} alt="Image-card" width="228px" />
      </div>
      <div className="p-4 bg-[#F4F4F4]">
        <h4 className="text-[24px] font-[700]">{header}</h4>
        <p className="text-[14px] font-[600]">{paragraph}</p>
      </div>
    </div>
  )
}

export default Partnership

export async function getStaticProps() {
  const siteSettings = await getSiteSettings()
  const pageMeta = await getPageMetaBySlug('partnerships')

  const pageData = {}

  return {
    props: {
      pageData,
      siteSettings,
      pageMeta,
    },
  }
}
