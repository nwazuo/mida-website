import { Link as LinkSource } from '@chakra-ui/next-js'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { IoMenuSharp } from 'react-icons/io5'

import navigationLinks from '~/data/navigationLinks'
import cn from '~/lib/cn'

import FadeInUp from '../animation/FadeInUp'

const Link = motion(LinkSource)

interface Props {
  variant?: 'dark' | 'light' | 'transparent-dark'
}
export default function Header(props: Readonly<Props>) {
  const { variant = 'light' } = props
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isDarkV = variant === 'dark'
  const isTransparentDark = variant === 'transparent-dark'
  const usesDarkText = isDarkV || isTransparentDark
  
  const pathname = usePathname()
  const logoSrc =
    pathname === '/ai-agents'
      ? '/images/mida-logo-white-short.svg'
      : usesDarkText
        ? '/images/mida-logo-white.svg'
        : '/images/mida-logo.svg'

  return (
    <div
      className={cn(
        'py-4 md:py-6 lg:py-10 relative z-50',
        isDarkV && 'bg-black',
        isTransparentDark && 'bg-transparent'
      )}
    >
      <div className="flex justify-between items-center c-container">
        <FadeInUp>
          <Link href="/">
            <Image
              src={logoSrc}
              width={119}
              height={39}
              alt="Mida logo"
              className="w-[60px] lg:w-[120px] max-w-[119px] max-h-[39px] object-contain"
            />
          </Link>
        </FadeInUp>
        {/* mobile menu */}
        <div className="lg:hidden">
          <IconButton
            icon={<IoMenuSharp />}
            aria-label="open drawer menu"
            className={cn(
              'lg:hidden min-w-[24px] text-[24px] text-black',
              usesDarkText && 'text-white',
            )}
            variant="unstyled"
            onClick={onOpen}
          />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg="black" className="pt-5">
              <DrawerCloseButton className="top-5 right-5 text-white text-[18px]" />
              <DrawerBody>
                {isOpen && (
                  <motion.div
                    className="flex flex-col gap-6 pt-36 items-center"
                    animate="visible"
                    variants={{
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 1,
                          staggerChildren: 0.3,
                          delay: 0.5,
                        },
                      },
                    }}
                  >
                    {navigationLinks.map((link, index) => (
                      <Link
                        key={link.text}
                        href={link.href}
                        className="text-white text-xl flex items-center"
                        animate={{
                          x: [-30, 0],
                          opacity: [0, 1],
                          visibility: 'visible',
                        }}
                        // @ts-ignore
                        transition={{
                          delay: index * 0.1,
                          duration: 0.3,
                        }}
                      >
                        <span>{link.text}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
        {/* desktop menu */}
        <div className="hidden lg:flex gap-8">
          {navigationLinks.map((link, i) => (
            <Link
              key={link.text}
              href={link.href}
              className={cn(
                'c-sick-hover-effect init-invisible text-xl flex items-center text-black relative z-50',
                usesDarkText && 'text-white c-sick-hover-effect--white',
              )}
              animate={{
                y: [10, 0],
                opacity: [0, 1],
                visibility: 'visible',
              }}
              // @ts-ignore
              transition={{
                delay: i * 0.05,
                ease: 'easeInOut',
              }}
            >
              <span>{link.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}