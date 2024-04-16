import { InferGetStaticPropsType } from 'next'
import React from 'react'

import Darkheader from '~/components/common/Darkheader'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import { SEO } from '~/components/seo'
import { getPageMetaBySlug, getSiteSettings } from '~/lib/sanity.queries'

const Contact = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { pageData, siteSettings, pageMeta } = props

  return (
    <div>
      <SEO {...pageMeta} {...siteSettings.defaultMeta} />
      <Header variant="dark" />
      <Darkheader
        label="Contact Us"
        header="Let’s get in touch"
        paragraph={
          <p>
            {' '}
            Thank you for your interest in MIDAS. Fill out form for free
            estimation or book a{' '}
            <span
              style={{
                color: '#1da1f5',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Strategy Session.
            </span>
              We’ll be ready to start within 24 hours
          </p>
        }
      />
      <Footer {...siteSettings} />
    </div>
  )
}

const renderContent = ({ label, title }) => {
  return (
    <div className="my-4">
      <p className="text-[20px] font-[600]">{label}</p>
      <h6 className="text-[24px] font-[600]">{title}</h6>
    </div>
  )
}

export default Contact

export async function getStaticProps() {
  const siteSettings = await getSiteSettings()
  const pageMeta = await getPageMetaBySlug('contact')

  const pageData = {}

  return {
    props: {
      pageData,
      siteSettings,
      pageMeta,
    },
  }
}
