import FadeInUp from "~/components/animation/FadeInUp";
import LeftBorderContainer from "~/components/animation/LeftBorderContainer";
import MidaLink from "~/components/common/MidaLink";
import Image from 'next/image'
import SplitTextAnim from "~/components/animation/SplitTextAnim";

import Slider from "react-slick"

interface Props {
  data: {
    heading: string,
    p1: string,
    cta1: CTA,
    p2: string,
    cta2: CTA
  }
}

export default function TeamSection(props: Props) {
  const { data } = props

  const sliderSettings = {
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };

  return (
    <div className="bg-black w-full pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="c-container flex flex-col md:grid md:grid-cols-2 md:items-center lg:gap-24">
        <div className="md:">
          <LeftBorderContainer variant="light">
            <FadeInUp as='h4' className="text-white text-xl lg:text-3xl lg:leading-relaxed font-bold max-w-[250px] lg:max-w-[475px] ">
              {data.heading}
            </FadeInUp>
          </LeftBorderContainer>
          <SplitTextAnim delay={0.1} className="text-sm sm:text-base lg:text-lg text-white mt-4 lg:mt-6 leading-loose lg:leading-loose">{data.p1}</SplitTextAnim>
          <FadeInUp delay={0.2}>
            <MidaLink className="mt-7 lg:mt-10" variant="light" href={data.cta1.link}>{data.cta1.text}</MidaLink>
          </FadeInUp>
        </div>
        <FadeInUp delay={0.2} className="mt-4 max-w-[320px] md:max-w-none sm:mx-auto">
          <Image
            width={820}
            height={623}
            quality={100}
            src="/images/team-section-3d-image.png"
            alt=""
          />
        </FadeInUp>
      </div>

      <div className="mt-14 lg:mt-40 w-full overflow-hidden relative h-[140px] lg:h-[360px] cursor-move">
        <img src="/images/team-gallery-mask.png" width={1920} height={360} className="block absolute left-0 right-0 top-0 bottom-0 w-full h-[101%] z-10 pointer-events-none" />
        <Slider {...sliderSettings}>
          {Array(5).fill('mida-team-placeholder-image').map((item, i) => (
            <div
              key={i}
              className="w-[150px] lg:w-[380px] aspect-[380/391] overflow-hidden ml-2 lg:ml-4"
            >
              <Image
                src={`/images/${item}-${i + 1}.jpg`}
                width={380}
                height={391}
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="c-container max-w-[760px] mt-8 lg:mt-16">
        <SplitTextAnim className="text-sm sm:text-base lg:text-lg text-white   leading-loose lg:leading-loose">{data.p2}</SplitTextAnim>
        <FadeInUp delay={0.1}>
          <MidaLink className="mt-7 lg:mt-10" variant="light" href={data.cta2.link}>{data.cta2.text}</MidaLink>
        </FadeInUp>
      </div>
    </div>
  )
}