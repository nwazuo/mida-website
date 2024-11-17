import { Link } from '@chakra-ui/next-js'
import { chakra } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { MdChevronLeft as MdChevron } from 'react-icons/md'
import Markdown from 'react-markdown'

import FadeInUp from '~/components/animation/FadeInUp'
import SplitTextAnim from '~/components/animation/SplitTextAnim'
import services from '~/data/services'
import cn from '~/lib/cn'
interface Props {
  data: typeof services
}

const StyledMarkdown = chakra(Markdown, {
  baseStyle: {
    p: {
      margin: 0,
      lineHeight: 1.6,
      fontSize: {
        base: '16px',
        lg: '18px',
      },
    },
    a: {
      textDecoration: 'underline',
    },
  },
})

export default function ServicesListCollapsibles(props: Props) {
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
    <div className="flex flex-col gap-6 lg:gap-12">
      {data.map((service, i) => {
        const isOpen = i === openIndex

        return (
          <div key={i} className="">
            <FadeInUp
              delay={i * 0.05}
              className="flex flex-row gap-2 items-center text-[#061433]"
              role="button"
              onClick={() => onClick(i)}
            >
              <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">
                {service.title}
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
                    <StyledMarkdown
                      components={{
                        a(props) {
                          //@ts-ignore
                          return <Link {...props} />
                        },
                      }}
                    >
                      {service.summary}
                    </StyledMarkdown>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeInUp>
          </div>
        )
      })}
    </div>
  )
}
