import { InferGetStaticPropsType } from 'next'
import Darkheader from '~/components/common/Darkheader'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import Pagination from '~/components/common/Pagination'
import BlogLayout from '~/components/sections/common/BlogLayout'
import { SEO } from '~/components/seo'
import { POSTS_PER_PAGE } from '~/lib/constants'
import {
  getPageMetaBySlug,
  getPostsByPageAndSize,
  getSiteSettings,
} from '~/lib/sanity.queries'

export default function Blog(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { pageData, siteSettings, pageMeta } = props

  return (
    <div>
      <SEO {...pageMeta} {...siteSettings.defaultMeta} />
      <Header variant="dark" />
      <Darkheader
        label="Our Blogs"
        header="News & Articles 📰"
        paragraph="Stay in the loop with the latest trends and insights in the digital world"
      />
      <section className="c-container pt-12 md:pt-16 lg:pt-40 pb-16 md:pb-20 lg:pb-32">
        <BlogLayout posts={pageData.posts.items} />
        <div className="py-16 pt-24">
          <Pagination
            count={Math.ceil(pageData.posts.total / POSTS_PER_PAGE)}
            defaultPage={1}
            linkBasePath="/blog"
            siblingCount={0}
          />
        </div>
      </section>
      <Footer {...siteSettings} />
    </div>
  )
}

export async function getStaticProps() {
  const siteSettings = await getSiteSettings()
  const pageMeta = await getPageMetaBySlug('blog')
  const posts = await getPostsByPageAndSize(1, 6)

  const pageData = {
    posts,
  }

  return {
    props: {
      pageData,
      siteSettings,
      pageMeta,
    },
  }
}
