import React from 'react'
import Darkheader from '~/components/common/Darkheader'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'

export default function Projects() {
  return (
    <div>
      <Header variant="dark" />
      <Darkheader
        label="Our Projects"
        header="Our Work Speaks Volume"
        paragraph="Embark on a journey of digital innovation with our web development expertise"
      />
      <section className="h-[30vh]"></section>
      <Footer />
    </div>
  )
}

