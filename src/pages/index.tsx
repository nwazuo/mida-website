import FadeInUp from "~/components/animation/FadeInUp";
import SplitTextAnim from "~/components/animation/SplitTextAnim";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import MidaLink from "~/components/MidaLink";
import homeData from "~/data/home";

export default function IndexPage(
) {

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="c-container pt-10 md:pt-16 lg:pt-24 ">
          <SplitTextAnim delay={0.3} as="h2" className="max-w-[1114px] text-[#050411] text-2xl lg:text-[56px] font-semibold leading-[1.42] lg:leading-[1.42]">{homeData.title}</SplitTextAnim>
          <FadeInUp delay={0.5}>
            <MidaLink href="#" className="w-fit text-xl lg:text-3xl text-black font-bold mt-6 lg:mt-10">Start a Project</MidaLink>
          </FadeInUp>
        </div>
      </main>
      <Footer />
    </>
  )
}
