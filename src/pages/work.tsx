import { InferGetStaticPropsType } from 'next'
import React from 'react'
import Darkheader from '~/components/common/Darkheader'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import ProjectsLayout from '~/components/sections/common/ProjectsLayout'
import { getAllProjects } from '~/lib/sanity.queries'

export default function Projects(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { pageData } = props

  return (
    <div>
      <Header variant="dark" />
      <Darkheader
        label="Our Projects"
        header="Our Work Speaks Volume"
        paragraph="Embark on a journey of digital innovation with our web development expertise"
      />
      <section className="c-container pt-12 md:pt-16 lg:pt-40 pb-16 md:pb-20 lg:pb-52">
        <ProjectsLayout data={pageData.projects} />
      </section>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const projects = await getAllProjects()

  const pageData = {
    projects,
  }

  return {
    props: {
      pageData,
    },
  }
}
