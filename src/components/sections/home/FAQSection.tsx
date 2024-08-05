import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { MdChevronLeft as MdChevron } from 'react-icons/md'

import FadeInUp from '~/components/animation/FadeInUp'
import LeftBorderContainer from '~/components/animation/LeftBorderContainer'
import faqs from '~/data/faqs'
import cn from '~/lib/cn'

type Props = {
  data: {
    heading: string
    faqs: typeof faqs
  }
}

const subfaqs = [
  {
    question: 'What does your web development agency specialize in?',
    answer:
      'Midadigitals specializes in digital strategy, Web design, Web development and Blockchain. Overall, we ensure that your idea is brought out in an excellent manner.',
  },
  {
    question: 'What makes Mida different from other web development agencies?',
    answer:
      'We care deeply for our customers and ensure that their goal is achieved through alterations to suit their initial idea. ',
  },
  {
    question: 'How do you handle project management for web development?',
    answer: (
      <>
        Yes, we do. View our Service{' '}
        <Link
          style={{ textDecoration: 'underline' }}
          href="/services#service-package"
        >
          Packages
        </Link>
      </>
    ),
  },
  {
    question: 'What is your process for creating a new website?',
    answer: (
      <>
        We start with filling in this{' '}
        <a
          href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSdIAZTBkJslZkWUU-gm2JyXTKJCRnYdfJQAGOe5nePqDLBjwg/viewform?usp=send_form"
          target="_blank"
          style={{
            textDecoration: 'underline',
          }}
        >
          form
        </a>
      </>
    ),
  },
  {
    question: 'How long does it take to deliver a new website?',
    answer: 'It depends on your deliverables.',
  },
  {
    question: 'What is your process for updating an existing website?',
    answer: 'Depends on the established contract.',
  },
]

export default function FAQSection(props: Props) {
  const { data } = props
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function onClick(index: number) {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <div className="c-container pt-10 pb-24 sm:pt-16 lg:pt-24 lg:pb-28">
      <LeftBorderContainer>
        <FadeInUp>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] text-black font-semibold">
            {data.heading}
          </h2>
        </FadeInUp>
      </LeftBorderContainer>

      <div className="mt-6 sm:mt-10 lg:mt-14 flex flex-col py-4 gap-5">
        {subfaqs.map((faq, i) => {
          const isOpen = i === openIndex

          return (
            <div
              key={i}
              className={cn('py-4 lg:py-8 border-b border-b-[#EFEFEF]')}
            >
              <FadeInUp
                delay={i * 0.05}
                className="flex flex-row gap-2 items-center justify-between"
                role="button"
                onClick={() => onClick(i)}
              >
                <h3
                  role="button"
                  className=" text-lg md:text-xl lg:text-2xl font-bold"
                >
                  {faq.question}
                </h3>
                <span className="relative lg:top-1">
                  <MdChevron
                    className={cn('-rotate-90 md:text-lg lg:text-xl', {
                      'rotate-90': isOpen,
                    })}
                  />
                </span>
              </FadeInUp>
              <FadeInUp className="mt-4">
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {/* <p className="lg:text-lg text-black lg:w-[80%]"> */}
                      {faq.answer}
                      {/* </p> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeInUp>
            </div>
          )
        })}
      </div>
    </div>
  )
}
