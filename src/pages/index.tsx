import { InferGetStaticPropsType } from "next";
import FadeInUp from "~/components/animation/FadeInUp";
import LeftBorderContainer from "~/components/animation/LeftBorderContainer";
import SplitTextAnim from "~/components/animation/SplitTextAnim";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import MidaLink from "~/components/common/MidaLink";
import ProjectsLayout from "~/components/sections/common/ProjectsLayout";
import ClientsSection from "~/components/sections/home/ClientsSection";
import GetInTouchBadge from "~/components/sections/home/GetInTouchBadge";
import HeroVideo from "~/components/sections/home/HeroVideo";
import ServicesListCollapsibles from "~/components/sections/home/ServicesListSection";
import clients from "~/data/clients";
import projects from "~/data/projects";
import services from "~/data/services";

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { pageData } = props

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="c-container pt-10 md:pt-16 lg:pt-24">
          <SplitTextAnim delay={0.1} as="h2" className="max-w-[1114px] text-[#050411] text-2xl lg:text-[56px] font-semibold leading-[1.42] lg:leading-[1.42]">{pageData.title}</SplitTextAnim>
          <FadeInUp delay={0.3}>
            <MidaLink href="#" className="mt-6 lg:mt-10">{pageData.cta}</MidaLink>
          </FadeInUp>
        </div>

        <div className="relative pb-16 lg:pb-48">
          <HeroVideo />
          <GetInTouchBadge />
        </div>

        <div className="c-container items-start md:flex md:gap-32 justify-between pt-10 pb-12 lg:pb-40">
          <LeftBorderContainer>
            <SplitTextAnim as="p" className="text-base md:text-xl lg:text-[28px] lg:leading-relaxed font-semibold text-black max-w-[480px] lg:max-w-[660px]">{pageData.section2QuotedText}</SplitTextAnim>
          </LeftBorderContainer>
          <div className="mt-8 md:mt-0 max-w-[595px] md:w-[40%] grow">
            <ServicesListCollapsibles data={pageData.services} />
          </div>
        </div>

        <ClientsSection data={pageData.clientsSection} />

        <div className="c-container pt-10 pb-32 lg:pt-24 lg:pb-40">
          <LeftBorderContainer>
            <FadeInUp>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] text-black font-semibold">{pageData.projectsSection.heading}</h2>
            </FadeInUp>
          </LeftBorderContainer>
          <div className="mt-8 md:mt-10 lg:mt-16">
            <ProjectsLayout data={pageData.projectsSection.projects} />
          </div>

          <FadeInUp>
            <MidaLink href="#" className="mt-12 lg:mt-32 lg:mx-auto">View All Project</MidaLink>
          </FadeInUp>
        </div>

      </main>
      <Footer />
    </>
  )
}

export function getStaticProps() {
  const pageData = {
    title: "Mida is a leading software development agency dedicated to delivering cutting-edge solutions.",
    cta: "Start A Project",
    section2QuotedText: "We embrace technology's transformative power, simplifying complexities, enhancing experiences, and propelling businesses to new heights.",
    services,
    clientsSection: {
      clients,
      clientsSectionText: "We engineer digital experiences that elevate your brand. Our passion lies in crafting custom solutions that resonate with your audience and drive meaningful results. As your dedicated web development partner, we blend innovation with functionality to ensure your online presence is not just seen but remembered.",
      clientsSectionCTA: "View All Clients"
    },
    projectsSection: {
      heading: 'Our Projects',
      projects
    }
  }

  return {
    props: {
      pageData
    }
  }
}
