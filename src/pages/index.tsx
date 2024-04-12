import { InferGetStaticPropsType } from "next";
import FadeInUp from "~/components/animation/FadeInUp";
import LeftBorderContainer from "~/components/animation/LeftBorderContainer";
import SplitTextAnim from "~/components/animation/SplitTextAnim";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import MidaLink from "~/components/common/MidaLink";
import ClientsSection from "~/components/sections/home/ClientsSection";
import GetInTouchBadge from "~/components/sections/home/GetInTouchBadge";
import HeroVideo from "~/components/sections/home/HeroVideo";
import ServicesListSection from "~/components/sections/home/ServicesListSection";
import clients from "~/data/clients";
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
            <ServicesListSection data={pageData.services} />
          </div>
        </div>

        <div className="">
          <ClientsSection data={pageData.clientsSection} />
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
    }
  }

  return {
    props: {
      pageData
    }
  }
}
