import { chakra } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import FadeInUp from '~/components/animation/FadeInUp'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import { SEO } from '~/components/seo'
import { FaArrowLeft, FaArrowLeftLong } from 'react-icons/fa6'
import { urlForImage } from '~/lib/sanity.image'

import {
  getPostBySlug,
  getPostSlugs,
  getSiteSettings,
} from '~/lib/sanity.queries'

export default function Post(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { postData, siteSettings } = props
  const router = useRouter()

  return (
    <>
      <Header />
      <SEO title={postData.title} {...siteSettings.defaultMeta} />
      <div className="c-container pt-16 pb-16 lg:pt-36 lg:pb-20">
        <FadeInUp delay={0.1}>
          <button
            onClick={router.back}
            className="flex items-center gap-2 text-[#062041] font-bold mb-6 border border-gray-200 rounded-[4px] px-3 py-3"
          >
            <FaArrowLeft />
            <span>Back to blog</span>
          </button>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h1 className="text-5xl lg:text-8xl leading-tight lg:leading-tight font-bold">
            {postData.title}
          </h1>
        </FadeInUp>
        <div className="flex gap-2 lg:gap-4 mt-4 lg:mt-6">
          {postData.tags.map((t, i) => (
            <FadeInUp
              as="p"
              delay={0.05 * (i + 1)}
              key={i}
              className="w-fit text-black text-xs  lg:text-sm font-medium lg:font-semibold mt-1 rounded-full py-1.5 px-3 lg:py-3 lg:px-6 border border-black"
            >
              {t}
            </FadeInUp>
          ))}
        </div>

        <FadeInUp as="article" delay={0.3} className="pt-12 lg:pt-24">
          <div className="prose prose-lg xl:prose-xl 2xl:prose-2xl">
            <PortableText
              value={postData.body}
              components={portableTextComponents as any}
            />
          </div>
        </FadeInUp>
      </div>

      <Footer {...siteSettings} />
    </>
  )
}

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative my-4">
          <Image
            src={urlForImage(value).width(1920).url()}
            alt={value.alt}
            className=""
            width={960}
            height={720}
          />
        </div>
      )
    },
  },
}

export async function getStaticPaths() {
  const postSlugs = await getPostSlugs()
  const paths = postSlugs.map((p) => ({
    params: { slug: p.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const siteSettings = await getSiteSettings()
  const postData = await getPostBySlug(params.slug)

  return {
    props: {
      siteSettings,
      postData,
    },
  }
}
