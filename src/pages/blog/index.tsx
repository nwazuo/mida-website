import { InferGetStaticPropsType } from "next"
import Darkheader from "~/components/common/Darkheader"
import Footer from "~/components/common/Footer"
import Header from "~/components/common/Header"
import { SEO } from "~/components/seo"
import { getPageMetaBySlug, getSiteSettings } from "~/lib/sanity.queries"


export default function Blog(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { pageData, siteSettings, pageMeta } = props


  return (
    <div>
      <SEO
        {...pageMeta}
        {...siteSettings.defaultMeta}
      />
      <Header variant="dark" />
      <Darkheader
        label="Our Blogs"
        header="News & Articles 📰"
        paragraph="Stay in the loop with the latest trends and insights in the digital world"
      />
      <section className="c-container pt-12 md:pt-16 lg:pt-40 pb-16 md:pb-20 lg:pb-52">
      </section>
      <Footer {...siteSettings} />
    </div>
  )
}

export async function getStaticProps() {
  const siteSettings = await getSiteSettings()
  const pageMeta = await getPageMetaBySlug('blog')

  const pageData = {}

  return {
    props: {
      pageData,
      siteSettings,
      pageMeta
    },
  }
}
