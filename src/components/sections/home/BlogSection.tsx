import FadeInUp from "~/components/animation/FadeInUp"
import LeftBorderContainer from "~/components/animation/LeftBorderContainer"
import blogPosts from "~/data/blog"
import Image from 'next/image'
import Link from "next/link"
import SplitTextAnim from "~/components/animation/SplitTextAnim"
import MidaLink from "~/components/common/MidaLink"

interface Props {
  data: {
    heading: string
    posts: typeof blogPosts
    p: string
    cta: CTA
  }
}

export default function BlogSection(props: Props) {
  const { data } = props

  return (
    <div className="bg-[#f4f4f4] pt-10 pb-24 lg:pt-28 lg:pb-28">
      <div className="c-container">
        <LeftBorderContainer>
          <FadeInUp>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] text-black font-semibold">{data.heading}</h2>
          </FadeInUp>
        </LeftBorderContainer>

        <div className="mt-8 lg:mt-16 flex flex-col md:flex-row gap-8 gap-x-4 lg:gap-x-5">
          {data.posts.map((post, i) => (
            <div className="max-w-[340px] md:max-w-none" key={i}>
              <FadeInUp>
                <Image
                  src={post.cover}
                  width={520}
                  height={485}
                  alt=""
                  className="object-cover"
                />
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <Link href={data.cta.link} className="block w-fit text-xl lg:text-3xl font-bold mt-2 lg:mt-4">{data.cta.text}</Link>
              </FadeInUp>
              <div className="flex gap-2 lg:gap-4 mt-2 lg:mt-4">
                {
                  post.tags.map((service, i) => (
                    <FadeInUp as="p" delay={0.05 * (i + 1)} key={i} className="w-fit text-black text-xs  lg:text-sm font-medium lg:font-semibold mt-1 rounded-full py-1.5 px-3 lg:py-3 lg:px-6 border border-black">
                      {service}
                    </FadeInUp>
                  ))
                }
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[760px] mt-4 lg:mt-16">
          <SplitTextAnim className="text-sm sm:text-base lg:text-lg text-black font-medium  leading-loose lg:leading-loose">{data.p}</SplitTextAnim>
          <FadeInUp delay={0.1}>
            <MidaLink variant="dark" className="mt-6 lg:mt-8" href={data.cta.link}>{data.cta.text}</MidaLink>
          </FadeInUp>
        </div>
      </div>
    </div>
  )
}