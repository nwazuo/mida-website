import { InferGetStaticPropsType } from "next";
import FadeInUp from "~/components/animation/FadeInUp";
import LeftBorderContainer from "~/components/animation/LeftBorderContainer";
import SplitTextAnim from "~/components/animation/SplitTextAnim";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import MidaLink from "~/components/common/MidaLink";
import GetInTouchBadge from "~/components/sections/home/GetInTouchBadge";
import HeroVideo from "~/components/sections/home/HeroVideo";

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
            <MidaLink href="#" className="w-fit text-xl lg:text-3xl text-black font-bold mt-6 lg:mt-10">{pageData.cta}</MidaLink>
          </FadeInUp>
        </div>

        <div className="relative pb-16 lg:pb-48">
          <HeroVideo />
          <GetInTouchBadge />
        </div>

        <div className="c-container pt-10 pb-12 lg:pb-40">
          <LeftBorderContainer>
            <SplitTextAnim as="p" className="text-base md:text-xl lg:text-[28px] lg:leading-relaxed font-semibold text-black max-w-[480px] lg:max-w-[660px]">{pageData.section2QuotedText}</SplitTextAnim>
          </LeftBorderContainer>
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
    section2QuotedText: "We embrace technology's transformative power, simplifying complexities, enhancing experiences, and propelling businesses to new heights."
  }

  return {
    props: {
      pageData
    }
  }
}
