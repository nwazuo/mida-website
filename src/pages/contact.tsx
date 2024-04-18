import { InferGetStaticPropsType } from 'next'
import React from 'react'

import Darkheader from '~/components/common/Darkheader'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import ContactForm from '~/components/sections/contact/ContactForm'
import { SEO } from '~/components/seo'
import { getPageMetaBySlug, getSiteSettings } from '~/lib/sanity.queries'

const Contact = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { pageData, siteSettings, pageMeta } = props

  const socials = siteSettings.socials

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

      <section className="c-container flex flex-col md:flex-row items-center justify-between py-20">
        <div className="md:w-[35%]">
          <h5 className="text-[48px] font-[600]">Reach Us</h5>
          {renderContent({ label: 'Phone', title: '+234 902 123 4567' })}
          {renderContent({
            label: 'Email Address',
            title: 'Hello@midadigitals.com',
          })}
          {renderContent({
            label: 'Office',
            title:
              'House 11B Lekki Beach Rd, Lekki Penninsula II 105102, Lekki, Lagos Nigeria.',
          })}
          <div className="flex items-center">
            {[
              { link: socials.linkedin, icons: '/icons/linkedin.png' },
              {
                link: socials.twitter,
                icons: '/icons/x.png',
              },
              {
                link: socials.facebook,
                icons: '/icons/facebook.png',
              },
              {
                link: socials.dribbble,
                icons: '/icons/dribble.png',
              },
              {
                link: socials.instagram,
                icons: '/icons/instagram.png',
              },
            ].map((item) => (
              <a href={item.link} key={item.icons} className="mr-5">
                <img src={item.icons} alt="soc-icons" width={32} />
              </a>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[55%] mt-10 md:mt-0">
          <ContactForm />
        </div>
      </section>
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
