import SplitTextAnim from "~/components/animation/SplitTextAnim";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import homeData from "~/data/home";

export default function IndexPage(
) {

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="c-container pt-10 md:pt-16 lg:pt-24 ">
          <SplitTextAnim as="h2" className="max-w-[1114px] text-[#050411] text-2xl lg:text-[56px] font-semibold leading-[1.42] lg:leading-[1.42]">{homeData.title}</SplitTextAnim>
        </div>
      </main>
      <Footer />
    </>
  )
}
