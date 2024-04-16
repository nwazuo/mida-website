import FadeInUp from '~/components/animation/FadeInUp'
import LeftBorderContainer from '~/components/animation/LeftBorderContainer'
import SplitTextAnim from '~/components/animation/SplitTextAnim'
import MidaLink from '~/components/common/MidaLink'
import { Post } from '~/lib/sanity.queries'
import BlogLayout from '../common/BlogLayout'

interface Props {
  data: {
    heading: string
    p: string
    cta: CTA
    posts: { items: Post[] }
  }
}

export default function BlogSection(props: Props) {
  const { data } = props

  return (
    <div className="bg-[#f4f4f4] pt-10 pb-24 lg:pt-28 lg:pb-28">
      <div className="c-container">
        <LeftBorderContainer>
          <FadeInUp>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] text-black font-semibold">
              {data.heading}
            </h2>
          </FadeInUp>
        </LeftBorderContainer>

        <section className="mt-8 lg:mt-16">
          <BlogLayout posts={data.posts.items} />
        </section>

        <div className="max-w-[760px] mt-4 lg:mt-16">
          <SplitTextAnim className="text-sm sm:text-base lg:text-lg text-black font-medium  leading-loose lg:leading-loose">
            {data.p}
          </SplitTextAnim>
          <FadeInUp delay={0.1}>
            <MidaLink
              variant="dark"
              className="mt-6 lg:mt-8"
              href={data.cta.link}
            >
              {data.cta.text}
            </MidaLink>
          </FadeInUp>
        </div>
      </div>
    </div>
  )
}
