import React from 'react'
import Darkheader from '~/components/common/Darkheader'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'

const Contact = () => {
  return (
    <div>
      <Header variant="white" />
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
      <Footer />
    </div>
  )
}

export default Contact
