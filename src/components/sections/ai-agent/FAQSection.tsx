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
    question: 'What is MIDA AI?',
    answer: (
      <>
        Mida AI is an advanced artificial intelligence platform designed to
        enhance productivity, automate workflows, and provide intelligent
        insights for businesses and individuals. It leverages state-of-the-art
        AI models to streamline tasks, improve efficiency, and drive innovation.
      </>
    ),
  },
  {
    question: 'How does MIDA AI work?',
    answer:
      'Mida AI uses machine learning and natural language processing to analyze data, automate tasks, and provide intelligent recommendations. It seamlessly integrates with your existing workflow, adapting to your needs in real time.',
  },
  {
    question: 'Who can use MIDA AI?',
    answer: (
      <>
        Mida AI is designed for businesses, professionals, and individuals
        looking to enhance efficiency through AI automation. Whether you're in
        marketing, finance, healthcare, or e-commerce, Mida AI can optimize your
        workflow.
      </>
    ),
  },
  {
    question: 'Can MIDA AI integrate with other tools?',
    answer:
      'Yes! Mida AI supports integration with popular tools like Slack, Notion, Google Workspace, and CRM platforms, allowing you to automate tasks across multiple applications.',
  },
  {
    question: 'Is my data secure with MIDA AI?',
    answer: (
      <>
        Absolutely. Mida AI prioritizes data security with end-to-end encryption
        and compliance with industry standards such as GDPR and SOC 2. Your data
        is private, and you have full control over it.
      </>
    ),
  },
  {
    question: 'What pricing plans does MIDA AI offer?',
    answer: (
      <>
        Mida AI offers flexible pricing plans, including a free tier for basic
        usage and premium plans for businesses with advanced AI automation
        needs.
      </>
    ),
  },
  {
    question: 'How can I get started?',
    answer: (
      <>
        Getting started is easy! Sign up for early access by joining our{' '}
        <Link style={{ textDecoration: 'underline' }} href="/waitlist">
          waitlist
        </Link>
        , and be among the first to experience the power of Mida AI.
      </>
    ),
  },
  {
    question: 'How do I contact MIDA AI for further inquiries?',
    answer: (
      <>
        You can reach out to our support team via{' '}
        <Link style={{ textDecoration: 'underline' }} href="/contact">
          our contact page
        </Link>{' '}
      </>
    ),
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function onClick(index: number) {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <div className="c-container pt-10 sm:pt-16 lg:pt-24 my-[163px]">
      <LeftBorderContainer>
        <FadeInUp>
          <div className="text-center">
            <h1 className="text-white font-bold text-[48px]">
              Frequently Asked Questions
            </h1>
            <p className="text-white font-medium text-[20px] leading-[36px]">
              Got Questions? We’ve Got Answers!
            </p>
          </div>
        </FadeInUp>
      </LeftBorderContainer>

      <div className="mt-6 sm:mt-10 lg:mt-14 flex flex-col py-4 gap-5">
        {subfaqs.map((faq, i) => {
          const isOpen = i === openIndex

          return (
            <div
              key={i}
              className={cn(
                'w-[688px] mx-auto py-4 lg:py-[14px] px-[32px] border rounded-[7px] border-[#EDEDED4D] bg-[#FFFFFF14]',
              )}
            >
              <FadeInUp
                delay={i * 0.05}
                className="flex flex-row gap-2 items-center justify-between"
                role="button"
                onClick={() => onClick(i)}
              >
                <h3 role="button" className="lg:text-[18px] font-medium">
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
