import { InferGetStaticPropsType } from 'next'

import FadeInUp from '~/components/animation/FadeInUp'
import LeftBorderContainer from '~/components/animation/LeftBorderContainer'
import SplitTextAnim from '~/components/animation/SplitTextAnim'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import MidaLink from '~/components/common/MidaLink'
import ProjectsLayout from '~/components/sections/common/ProjectsLayout'
import BlogSection from '~/components/sections/home/BlogSection'
import ClientsSection from '~/components/sections/home/ClientsSection'
import FAQSection from '~/components/sections/home/FAQSection'
import GetInTouchBadge from '~/components/sections/home/GetInTouchBadge'
import HeroVideo from '~/components/sections/home/HeroVideo'
import ServicesListCollapsibles from '~/components/sections/home/ServicesListSection'
import TeamSection from '~/components/sections/home/TeamSection'
import { SEO } from '~/components/seo'
import blogPosts from '~/data/blog'
import clients from '~/data/clients'
import faqs from '~/data/faqs'
import services from '~/data/services'
import {
  getPageMetaBySlug,
  getPostsByPageAndSize,
  getProjectsByPage,
  getSiteSettings,
} from '~/lib/sanity.queries'

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { pageData, siteSettings, pageMeta } = props

  return (
    <>
      <Header />
      <SEO {...pageMeta} {...siteSettings.defaultMeta} />
      <main className="min-h-screen">
        <div className="c-container pt-10 md:pt-16 lg:pt-24">
          <SplitTextAnim
            delay={0.1}
            as="h2"
            className="max-w-[1114px] text-[#050411] text-2xl lg:text-[56px] font-semibold leading-[1.42] lg:leading-[1.42]"
          >
            {pageData.title}
          </SplitTextAnim>
          <FadeInUp delay={0.3}>
            <MidaLink href="/contact" className="mt-6 lg:mt-10">
              {pageData.cta.text}
            </MidaLink>
          </FadeInUp>
        </div>

        <div className="relative pb-16 lg:pb-48">
          <HeroVideo />
          <GetInTouchBadge />
        </div>

        <div className="c-container items-start md:flex md:gap-32 justify-between pt-10 pb-12 lg:pb-40">
          <LeftBorderContainer>
            <SplitTextAnim
              as="p"
              className="text-base md:text-xl lg:text-[28px] lg:leading-relaxed font-semibold text-black max-w-[480px] lg:max-w-[660px]"
            >
              {pageData.section2QuotedText}
            </SplitTextAnim>
          </LeftBorderContainer>
          <div className="mt-8 md:mt-0 max-w-[595px] md:w-[40%] grow">
            <ServicesListCollapsibles data={pageData.services} />
          </div>
        </div>

        <ClientsSection data={pageData.clientsSection} />

        <div className="c-container pt-10 pb-32 lg:pt-24 lg:pb-40">
          <LeftBorderContainer>
            <FadeInUp>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] text-black font-semibold">
                {pageData.projectsSection.heading}
              </h2>
            </FadeInUp>
          </LeftBorderContainer>
          <div className="mt-8 md:mt-10 lg:mt-16">
            <ProjectsLayout data={pageData.projectsSection.projects} />
          </div>
          <FadeInUp>
            <MidaLink href="/work" className="mt-12 lg:mt-32 lg:mx-auto">
              View All Project
            </MidaLink>
          </FadeInUp>
        </div>

        <TeamSection data={pageData.teamSection} />

        <BlogSection data={pageData.blogSection} />

        <FAQSection data={pageData.faqSection} />
      </main>
      <Footer {...siteSettings} />
    </>
  )
}

export async function getStaticProps() {
  const projects = await getProjectsByPage(1, 6)
  const siteSettings = await getSiteSettings()
  const posts = await getPostsByPageAndSize(1, 3)
  const pageMeta = await getPageMetaBySlug('index')

  const pageData = {
    title:
      'Mida is a leading digital product agency, crafting MVP solutions that drive investor readiness and business growth.',
    cta: { text: 'Start A Project', link: '#' },
    section2QuotedText:
      'We use technology to make things simple, improve user experiences, and help businesses grow faster.',
    services,
    clientsSection: {
      clients,
      clientsSectionText:
        'We build digital solutions that help your business grow. Our focus is on creating MVPs that connect with your audience and attract investors. With a mix of smart design and practical features, we make sure your product stands out and delivers real results.',
      clientsSectionCTA: { text: 'View All Clients', link: '/work' },
    },
    projectsSection: {
      heading: 'Our Projects',
      projects,
    },
    teamSection: {
      heading: "Join us Let's Build the Future Together",
      p1: "Whether you're a startup looking to break into the market or a business ready for digital growth, Mida Digitals is your go-to partner. We help turn your ideas into MVPs, giving you the right tools to attract investors and confidently scale.",
      cta1: { text: 'Build With Us', link: '/partnerships' },
      p2: 'At Mida Digitals, innovation is driven by a team of dedicated experts. Our diverse professionals bring a wealth of experience, creativity, and a shared passion for technology. Together, we collaborate seamlessly to transform your ideas into MVP-ready software solutions. Meet the minds behind your success.',
      cta2: { text: 'Our Team', link: '#' },
    },
    blogSection: {
      heading: 'News and Articles',
      p: 'Stay tuned into our latest endeavors, insightful articles, and the industry trends. Fresh insights delivered weekly.',
      cta: {
        text: 'Read More',
        link: '/blog',
      },
      posts,
    },
    faqSection: {
      heading: 'Frequently Asked Questions',
      faqs,
    },
  }

  return {
    props: {
      pageData,
      siteSettings,
      pageMeta,
    },
  }
}
