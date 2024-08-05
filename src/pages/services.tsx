/* eslint-disable @next/next/no-img-element */
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { InferGetStaticPropsType } from 'next'
import React from 'react'

import FadeInUp from '~/components/animation/FadeInUp'
import LeftBorderContainer from '~/components/animation/LeftBorderContainer'
import SplitTextAnim from '~/components/animation/SplitTextAnim'
import Darkheader from '~/components/common/Darkheader'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import MidaLink from '~/components/common/MidaLink'
import ServicesCard from '~/components/common/ServicesCard'
import { SEO } from '~/components/seo'
import cn from '~/lib/cn'
import {
  getAllProjects,
  getPageMetaBySlug,
  getSiteSettings,
} from '~/lib/sanity.queries'

const Services = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { pageData, siteSettings, pageMeta } = props

  return (
    <div>
      <SEO {...pageMeta} {...siteSettings.defaultMeta} />
      <Header variant="dark" />
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

        <div className="w-full mt-16">
          {SERVICE_DATA.map((s, i) => (
            <ServiceCard index={i} key={i} {...s} />
          ))}
        </div>
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

          {INDUSTRIES_DATA.map((s, i) => (
            <div
              key={i}
              style={{ marginTop: '80px', paddingBottom: '50px' }}
              className="w-full"
            >
              <ServicesCard index={i} {...s} />
            </div>
          ))}
        </div>
      </section>
      <section id="service-package" className="c-container py-6">
        <LeftBorderContainer>
          <SplitTextAnim
            as="p"
            className="my-14 text-[30px] lg:leading-relaxed font-semibold text-black max-w-[480px] lg:max-w-[660px]"
          >
            Our Service Packages
          </SplitTextAnim>
        </LeftBorderContainer>

        {SERVICE_PACKAGES.map((s, i) => (
          <ServicePackage {...s} index={i + 1} key={i} />
        ))}
      </section>
      <Footer {...siteSettings} />
    </div>
  )
}

const ServicePackage = ({ header, paragraph, img, linkTitle, index }) => {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [-90, 90])

  const rotateSpring = useSpring(rotate)
  return (
    <div
      className={cn(
        'flex flex-col-reverse md:flex-row items-center justify-between my-14',
        {
          'md:flex-row-reverse': index % 2 === 0,
        },
      )}
    >
      <div className="w-full md:w-[65%]">
        <FadeInUp delay={0.1}>
          <h4 className="text-[30px] font-[600] mb-2">{header}</h4>
        </FadeInUp>

        <SplitTextAnim delay={0.2} as="p" className="text-[24px] font-[400]">
          {paragraph}
        </SplitTextAnim>
        <MidaLink
          className="w-fit text-xl lg:text-3xl text-black font-bold mt-6 lg:mt-10"
          href="/contact"
        >
          {linkTitle}
        </MidaLink>
      </div>
      <div className="w-full md:w-[30%]">
        <motion.img
          src={img}
          alt="rolling stone"
          className="w-[60%] md:w-full mx-auto"
          style={{ rotate: rotateSpring }}
        />
      </div>
    </div>
  )
}

const ServiceCard = ({ index, title, paragraph, bullet, mainImg, iconImg }) => {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [-90, 90])

  const rotateSpring = useSpring(rotate)
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row items-start justify-between mb-[160px] gap-6',
        {
          'md:flex-row-reverse': (index + 1) % 2 === 0,
        },
      )}
    >
      <div className="w-full md:w-[45%]">
        <FadeInUp delay={0.1 * index}>
          <h4 className="text-[40px] font-[700]">{title}</h4>
        </FadeInUp>
        <FadeInUp delay={0.15 * index}>
          <p style={{ lineHeight: '40px' }} className="my-2 font-[600]">
            {paragraph}
          </p>
        </FadeInUp>
        <ul className="pl-2 my-8">
          {bullet.map((s, i) => (
            <FadeInUp delay={0.3 * i} key={i}>
              <li className="my-8" key={i}>
                {s}
              </li>
            </FadeInUp>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-[40%] relative">
        <motion.img
          src={iconImg}
          style={{
            zIndex: -1,
            rotate: rotateSpring,
          }}
          alt="icon-image"
          className="absolute w-[100px] md:w-[300px] left-[-20px] top-[-50px] md:left-[-130px] md:top-[-120px]"
        />
        <FadeInUp delay={0.19 * index}>
          <img src={mainImg} alt="main-im" width={757} height={767.57} />
        </FadeInUp>
      </div>
    </div>
  )
}

export default Services

const SERVICE_DATA = [
  {
    mainImg: '/images/services/strategy.png',
    iconImg: '/images/services/strategy-icon.png',
    title: 'Strategy',
    paragraph:
      'Usually a free service for our waterfall clients. We open our doors to strategy discussion with actionable follow up plans for scale, market acquisition and step up ideas over competitors.',
    bullet: [
      'Research',
      'UI/UX Audit',
      'Stakeholder Workshop',
      'Product Strategy',
      'Innovation Consulting',
    ],
  },
  {
    mainImg: '/images/services/design.png',
    iconImg: '/images/services/design-icon.png',
    title: 'Design',
    paragraph:
      'MIDA is a web design agency first; it is our main expertise. Our work process helps us to create products that will cover all the business needs of our clients. If our client wants to have a custom solution and implement it in web design, we will be happy to help. Our digital experience, awards, and badges will also be a plus for each type of project.',
    bullet: [
      'UI/UX Design',
      'Website and Mobile App',
      'Visual Design',
      'Prototyping And Testing',
    ],
  },
  {
    mainImg: '/images/services/development.png',
    iconImg: '/images/services/development-icon.png',
    title: 'Development',
    paragraph:
      'Web development is one tool that could help each business and solve a massive list of business goals. At the web development stage, we help our client realize all their need, and at the same time, follow all necessary steps and rules. Our web development agency uses best practices and already made solutions if such fits well to the project and the requirements. If our client wants to be with us at all stages of the development of PM and account, managers will be happy to help with it. ',
    bullet: [
      'HTML/CSS/JS',
      'React/Angular',
      'Backend/API Integrations',
      'IOS/Android Native Apps',
      'Rapid Prototyping',
      'Wordpress',
    ],
  },
  {
    mainImg: '/images/services/blockchain.png',
    iconImg: '/images/services/blockchain-icon.png',
    title: 'Blockchain',
    paragraph:
      'We are completely immersed in the development and design of tokens, NFT marketplaces, Dapps and Dexes to meet the demands of our clients who are full scale or transiting to blockchain.',
    bullet: [
      'Tokens',
      'Dapps/Dexes',
      'NFTs',
      'Solidity/Rust/Go',
      'Javascript/Ruby/Erlang',
    ],
  },
  {
    mainImg: '/images/services/seeder.png',
    iconImg: '/images/services/seeder-icon.png',
    title: 'Seeder',
    paragraph:
      'This is the beginning or discovery stage of a brand. Our team could add any services to the pack and more; it helps us fit our clients’ expectations and make the best commercial proposal with the next recommendations. At this stage, the team and the services could be absolutely flexible, so we try to communicate with our client and his team in the closest way. This is the only service that comes with branding.',
    bullet: [
      'Full Branding',
      'Strategy',
      'Web Design',
      'Web Development',
      'Ad Management',
      'Social Media Design',
      'Logo Animation',
      'Pitch Deck',
    ],
  },
]

const INDUSTRIES_DATA = [
  {
    img: '/images/branding-img.png',
    header: 'Fintech',
    paragraph:
      'We are proud to be at the forefront of this exciting industry, providing cutting-edge web development solutions that empower fintech companies to thrive in a digital-first world. Whether you are looking to streamline payments, enhance security, or improve user experience, Mida has the expertise and know-how to deliver tailored solutions that address your specific needs and drive business growth.',
    chips: [
      'UI/UX Design',
      'Web development',
      'Brand Identity',
      'Brand Experiences',
    ],
  },
  {
    img: '/images/ui-img.png',
    header: 'Healthcare',
    paragraph:
      'In the rapidly evolving landscape of healthcare, digital innovation is revolutionizing the way we deliver and access medical services. At Mida, we are committed to leveraging the power of technology to drive positive change in the healthcare industry, helping providers and patients alike to navigate the complexities of modern healthcare with ease and efficiency.',
    chips: [
      'UI/UX Design',
      'Web development',
      'Brand Identity',
      'Brand Experiences',
    ],
  },
  {
    img: '/images/webdev-img.png',
    header: 'E-Commerce',
    paragraph:
      'In todays digital marketplace, e-commerce has become the cornerstone of retail success. At Mida, we are dedicated to helping businesses thrive in the online space by providing comprehensive e-commerce solutions that drive sales, enhance customer experiences, and maximize ROI.',
    chips: [
      'UI/UX Design',
      'Web development',
      'Brand Identity',
      'Brand Experiences',
    ],
  },
  {
    img: '/images/cms-img.png',
    header: 'Real Estate',
    paragraph:
      'In the competitive world of real estate, having a strong online presence is essential for attracting buyers, showcasing properties, and closing deals. At Mida, we specialise in creating custom websites and digital solutions that empower real estate professionals to stand out in the market and achieve their business objectives.',
    chips: [
      'UI/UX Design',
      'Web development',
      'Brand Identity',
      'Brand Experiences',
    ],
  },
  {
    img: '/images/blockchain-img.png',
    header: 'Entertainment',
    paragraph:
      'In the dynamic world of entertainment, captivating audiences and delivering immersive experiences is essential for success. At Mida, we specialize in creating cutting-edge websites and digital solutions that engage fans, promote events, and showcase talent in the entertainment industry.',
    chips: [
      'UI/UX Design',
      'Web development',
      'Brand Identity',
      'Brand Experiences',
    ],
  },
  {
    img: '/images/seo-img.png',
    header: 'Food',
    paragraph:
      'In the food and beverage industry, making a memorable impression is essential for attracting customers and driving sales. At Mida, we specialize in creating mouthwatering websites and digital experiences that showcase food and beverage brands, promote menus, and entice customers to indulge in culinary delights.',
    chips: [
      'UI/UX Design',
      'Web development',
      'Brand Identity',
      'Brand Experiences',
    ],
  },
  {
    img: '/images/seo-img.png',
    header: 'Nonprofit',
    paragraph:
      'In the non-profit sector, making a meaningful impact and driving positive change is paramount. At Mida, we are dedicated to supporting non-profit organizations in their mission to create a better world by providing innovative web solutions that inspire action, foster engagement, and drive fundraising efforts.',
    chips: [
      'UI/UX Design',
      'Web development',
      'Brand Identity',
      'Brand Experiences',
    ],
  },
]

const SERVICE_PACKAGES = [
  {
    header: 'Rolling Stone',
    img: '/images/rolling-stone.png',
    paragraph:
      'This is a one-off service package. Which starts our 12-step Cycle on every contact. We complete the product at the end of the project timeline and transfer all client assets upon delivery. We keep a backup copy of the assets for 1 week free of charge, after which we close completely with deletion.',
    linkTitle: 'Start A Project',
  },
  {
    header: 'Waterfall',
    img: '/images/waterfall.png',
    paragraph:
      'Our waterfall / retainer-ship service package gets discounted with time. Our clients only go through the 12-step Cycle on first contact after which we assign a tech manager to their account, and provide free asset backup, free strategy and other paid on-demand services.',
    linkTitle: 'Start A Project',
  },
]

export async function getStaticProps() {
  const siteSettings = await getSiteSettings()
  const pageMeta = await getPageMetaBySlug('services')

  const pageData = {}

  return {
    props: {
      pageData,
      siteSettings,
      pageMeta,
    },
  }
}
