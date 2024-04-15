import { InferGetStaticPropsType } from 'next'
import React from 'react'
import Darkheader from '~/components/common/Darkheader'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import ProjectsLayout from '~/components/sections/common/ProjectsLayout'
import { SEO } from '~/components/seo'
import { getAllProjects, getPageMetaBySlug, getSiteSettings } from '~/lib/sanity.queries'

export default function Projects(
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
        label="Our Projects"
        header="Our Work Speaks Volume"
        paragraph="Embark on a journey of digital innovation with our web development expertise"
      />
      <section className="c-container pt-12 md:pt-16 lg:pt-40 pb-16 md:pb-20 lg:pb-52">
        <ProjectsLayout data={pageData.projects} />
      </section>
      <Footer {...siteSettings} />
    </div>
  )
}

export async function getStaticProps() {
  const projects = await getAllProjects()
  const siteSettings = await getSiteSettings()
  const pageMeta = await getPageMetaBySlug('work')

  const pageData = {
    projects,
  }

  return {
    props: {
      pageData,
      siteSettings,
      pageMeta
    },
  }
}
