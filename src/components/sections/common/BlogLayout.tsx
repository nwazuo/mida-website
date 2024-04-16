import Link from 'next/link'
import FadeInUp from '~/components/animation/FadeInUp'
import { Post } from '~/lib/sanity.queries'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import { chakra } from '@chakra-ui/react'

interface Props {
  posts: Post[]
}

export const StyledPostsGrid = chakra('div', {
  baseStyle: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: {
      base: '40px 20px',
      sm: '60px 20px',
      lg: '100px 20px ',
    },
  },
})

export default function BlogLayout(props: Props) {
  const { posts } = props

  return (
    <StyledPostsGrid className="w-full">
      {posts.map((post, i) => (
        <div className="w-full max-w-[520px]" key={i}>
          <FadeInUp>
            <Link href={`/blog/${post.slug.current}`}>
              <Image
                src={urlForImage(post.cover).url()}
                width={520}
                height={485}
                alt=""
                className="object-cover"
                placeholder="blur"
                blurDataURL={post.cover.asset.metadata.lqip}
              />
            </Link>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <Link
              href={`/blog/${post.slug.current}`}
              className="block w-fit text-xl lg:text-3xl font-bold mt-2 lg:mt-4"
            >
              {post.title}
            </Link>
          </FadeInUp>
          <div className="flex gap-2 lg:gap-4 mt-2 lg:mt-4">
            {post.tags.map((service, i) => (
              <FadeInUp
                as="p"
                delay={0.05 * (i + 1)}
                key={i}
                className="w-fit text-black text-xs  lg:text-sm font-medium lg:font-semibold mt-1 rounded-full py-1.5 px-3 lg:py-3 lg:px-6 border border-black"
              >
                {service}
              </FadeInUp>
            ))}
          </div>
        </div>
      ))}
    </StyledPostsGrid>
  )
}
