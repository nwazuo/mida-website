import { AnimatePresence, motion } from 'framer-motion'
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
    question: 'What is an MVP, and why do I need one?',
    answer:
      'An MVP (Minimum Viable Product) is a simplified version of your product with just enough features to test its value, attract early adopters, and secure investment. Instead of waiting for a perfect product, an MVP lets you launch, learn, and improve based on real feedback.',
  },
  {
    question: 'What’s included in MIDA’s MVP development services?',
    answer:
      'We build investor-ready MVPs that include functional web prototypes, UX/UI design, user flows, and integrations that align with your business goals. Our focus is on creating just enough to get you traction and funding.',
  },
  {
    question: 'How can AI Agents help my business?',
    answer:
      'AI Agents can automate customer service, data processing, lead generation, and various business tasks, helping you scale without hiring more staff. We customize AI tools to fit your specific needs.',
  },
  {
    question: 'What industries do you develop MVPs for?',
    answer:
      'We work across multiple industries, including fintech, e-commerce, education, logistics, and AI-driven startups.',
  },
  {
    question: 'Do I need a pitch deck to raise funding?',
    answer:
      'Yes! A strong pitch deck is essential for attracting investors. It highlights your problem, solution, business model, traction, and growth potential in a compelling way.',
  },
  {
    question: 'What is a data room, and why is it important?',
    answer:
      'A data room is a secure space where investors can access key business documents like financials, market research, and company information. Having a well-structured data room builds investor trust and speeds up fundraising.',
  },
  {
    question: 'What kind of websites do you build?',
    answer:
      'We specialize in business websites, startup landing pages, and fundraising-focused sites that help founders showcase their products and attract investors.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely! We offer website audits, UI/UX improvements, and full-scale redesigns to optimize your online presence.',
  },
  {
    question: 'Can AI Agents be customized for my specific business needs?',
    answer:
      'Yes! Our AI Agents are fully tailored to meet your business needs, whether it’s automating lead generation, managing workflows, or streamlining customer interactions.',
  },
  {
    question: 'How do I get started?',
    answer: (
      <>
        Book a free consultation with us today, and let’s map out your path to
        building, launching, and raising capital.{' '}
        <a
          href="https://calendly.com/midadigitals/30min?month=2025-03"
          target="_blank"
          style={{ textDecoration: 'underline' }}
        >
          🔗 Schedule a Call
        </a>
      </>
    ),
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
