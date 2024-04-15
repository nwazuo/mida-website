import React, { useEffect, useRef, useState } from 'react'
import Header from '~/components/common/Header'

import Image from 'next/image'
import FadeInUp from '~/components/animation/FadeInUp'
import Footer from '~/components/common/Footer'

import { motion } from 'framer-motion'
import ValuesCard from '~/components/common/ValuesCard'
import ServicesCard from '~/components/common/ServicesCard'
import AboutCarousel from '~/components/sections/about/AboutCarousel'
import Darkheader from '~/components/common/Darkheader'
import SplitTextAnim from '~/components/animation/SplitTextAnim'

import { useMotionValue, useMotionValueEvent, useInView, useAnimate } from 'framer-motion'
import { getPageMetaBySlug, getSiteSettings } from '~/lib/sanity.queries'
import { InferGetStaticPropsType } from 'next'
import { SEO } from '~/components/seo'


const NextImage = motion(Image)

  const innerVariant = {
    hidden: {
      rotateY: -90,
    },
    visible: {
      rotateY: 0,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.8,
        delay: 0.4,
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

  const VALUES_DATA = [
    {
      header: 'Diversity',
      paragraph:
        'MIDA expands beyond employee’s ethnic background, we encourage a diverse culture that celebrate differences and uniqueness.',
    },
    {
      header: 'Impact ',
      paragraph:
        'We have built our company culture around finding meaning and making an impact through our work. We also engage our clients on how their work can make positive impact. ',
    },
    {
      header: 'Integrity',
      paragraph:
        'Our business is saturated with confidential information, hence our commitment to trust amongst employees and customers as this is essential to the company’s success.',
    },
  ]

  const SERVICES_DATA = [
    {
      img: '/images/branding-img.png',
      header: 'Branding',
      paragraph:
        'We understand the power of a strong brand identity in todays competitive landscape. Our branding services are designed to help you stand out from the crowd, connect with your audience on a deeper level, and drive long-term success for your business',
      chips: [
        'Brand Strategy',
        'Brand Architecture',
        'Visual Identity',
        'Brand Experiences',
      ],
    },
    {
      img: '/images/ui-img.png',
      header: 'UI/UX Design',
      paragraph:
        'Make a lasting impression with stunning UI/UX design that delights users and enhances usability. Our designers combine creativity with usability principles to craft intuitive interfaces that leave a lasting impression.',
      chips: [
        'UX Research',
        'UX Audit',
        'UI Design',
        'Prototyping and Testing',
        'Motion Design',
        'Web Design',
      ],
    },
    {
      img: '/images/webdev-img.png',
      header: 'Web Development',
      paragraph:
        'Elevate your online presence with custom web development solutions tailored to your unique requirements. Whether you need a simple brochure website or a complex web application, we have the expertise to bring your vision to life.',
      chips: [
        'Maintenance And Support',
        'React/Angular',
        'HTML/CSS/JS',
        'IOS/Android Native Apps',
        'Wordpress',
        'Backend/API Integrations',
      ],
    },
    {
      img: '/images/cms-img.png',
      header: 'Content Management Systems (CMS)',
      paragraph:
        'Take control of your online content with our custom CMS solutions. Whether youre looking for a WordPress, Drupal, or custom-built CMS, well help you manage and update your website with ease.',
      chips: ['CMS', 'Wordpress', 'Webflow'],
    },
    {
      img: '/images/blockchain-img.png',
      header: 'Blockchain',
      paragraph:
        'We are completely immersed in the development and design of tokens, NFT marketplaces, Dapps and Dexes to meet the demands of our clients who are full scale or transiting to blockchain.',
      chips: [
        'Tokens',
        'Dapp/Daxes',
        'NFTs',
        'Solidity/Rust/Go',
        'Javascript/Ruby/Python/Go',
      ],
    },
    {
      img: '/images/seo-img.png',
      header: 'SEO And Digital Marketing',
      paragraph:
        'Increase your online visibility and drive qualified traffic to your website with our SEO and digital marketing services. From keyword research to content optimization, well help you climb the search engine rankings and attract more customers.',
      chips: [
        'Brand Strategy',
        'Brand Architecture',
        'Visual Identity',
        'Brand Experiences',
      ],
    },
  ]

const About = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  const { pageData, siteSettings, pageMeta } = props

  return (
    <div>
      <SEO
        {...pageMeta}
        {...siteSettings.defaultMeta}
      />
      <Header variant="dark" />
      <Darkheader
        parentClassName="mb-[-50px]"
        label="About us"
        header={
          <>
            {' '}
            Hey <span className="wave">👋</span>, we're MIDA
          </>
        }
        paragraph="We enhance brands by creating elevated digital experiences."
      />

      <FadeInUp delay={0.03}>
        <div className="c-container mt-[-30px]">
          <NextImage
            src="/images/about-section-image.png"
            key="image-animation"
            variants={innerVariant}
            exit="leave"
            initial="hidden"
            animate="visible"
            width={1600}
            height={933}
            alt="about-section"
            className="rounded-[16px]"
          />
        </div>
      </FadeInUp>

      <div className="bg-white text-[#222222] z-10 pt-[40px] c-container">
        <SplitTextAnim className="text-[21px] md:text-[32px] p-8 font-[600]">
          We're a digital product and UX agency in Lagos Nigeria. We major in
          strategy, design, blockchain and development across all platforms. We
          are more than just a digital product and UX agency; we are the
          architects of strategic brilliance, the artists of cutting-edge
          design, and the pioneers of blockchain and development across diverse
          platforms.
        </SplitTextAnim>
      </div>

      <FadeInUp>
        <div className="bg-[#F4F4F4] c-container flex flex-col md:flex-row items-center justify-between py-12 mt-8">
          <div>
            <CountUpAnimation
              value={10}
              text="Team Members"
            />
          </div>
          <div>
            <CountUpAnimation
              value={4}
              text="Years in Business"
            />
          </div>
          <div>
            <CountUpAnimation
              value={40}
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
          {VALUES_DATA.map((data, i) => (
            <ValuesCard index={i} key={i} {...data} />
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

          {SERVICES_DATA.map((data, i) => (
            <div
              key={i}
              style={{ marginTop: '80px', paddingBottom: '50px' }}
              className="w-full"
            >
              <ServicesCard index={i} {...data} />
            </div>
          ))}
        </div>
      </section>

      <section className="c-container mt-6 pb-6">
        <AboutCarousel />
      </section>

      <Footer {...siteSettings} />
    </div>
  )
}

const CountUpAnimation = ({ value, text }) => {
  const [count, setCount] = useState(0);
  const motionCount = useMotionValue(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 1 })
  const [_, animate] = useAnimate()

  useEffect(() => {
    if (inView) {
      animate(motionCount, value, { duration: 1, ease: 'easeOut' })
    }
  }, [value, motionCount, inView, animate])

  useMotionValueEvent(motionCount, "change", (latest) => {
    setCount(Math.round(latest))
  })

  return (
    <div className="flex flex-col text-center" ref={ref}>
      <span className="text-[80px] font-[700]">{count}+</span>
      <span className="text-[21px] md:text-[32px] font-[600]">{text}</span>
    </div>
  )
}

export default About

export async function getStaticProps() {
  const siteSettings = await getSiteSettings()
  const pageMeta = await getPageMetaBySlug('about')

  const pageData = {}

  return {
    props: {
      pageData,
      siteSettings,
      pageMeta
    },
  }
}
