/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Darkheader from '~/components/common/Darkheader'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import ContactForm from '~/components/sections/contact/ContactForm'

const Contact = () => {
  return (
    <div>
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
              { link: '', icons: '/icons/linkedin.png' },
              {
                link: '',
                icons: '/icons/x.png',
              },
              {
                link: '',
                icons: '/icons/facebook.png',
              },
              {
                link: '',
                icons: '/icons/dribble.png',
              },
              {
                link: '',
                icons: '/icons/instagram.png',
              },
            ].map((item) => (
              <a href={item.link} key={item.icons} className="mr-5">
                <img src={item.icons} alt="soc-icons" width={32} />
              </a>
            ))}
          </div>
        </div>
        <div className="md:w-[55%] mt-10 md:mt-0">
          <ContactForm />
        </div>
      </section>
      <Footer />
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
