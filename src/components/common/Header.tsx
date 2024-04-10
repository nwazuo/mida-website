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
import { IoMenuSharp } from 'react-icons/io5'

import navigationLinks from '~/data/navigationLinks'

import FadeInUp from '../animation/FadeInUp'
import { FC } from 'react'
import cn from '~/lib/cn'

const Link = motion(LinkSource)

interface IProps {
  variant?: string
}

const Header: FC<IProps> = ({ variant = 'dark' }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div
      className={cn('py-4 md:py-6 lg:py-10', {
        'bg-black': variant === 'white',
        'bg-white': variant === 'dark',
      })}
    >
      <div
        className={cn('flex justify-between items-center c-container', {
          'bg-black': variant === 'white',
          'bg-white': variant === 'dark',
        })}
      >
        <FadeInUp>
          <Link href="/">
            <Image
              src={
                variant === 'dark'
                  ? '/images/mida-logo.svg'
                  : '/images/mida-logo-white.svg'
              }
              width={119}
              height={39}
              alt="Mida logo"
              className="w-[60px] lg:w-[120px]"
            />
          </Link>
        </FadeInUp>
        {/* mobile menu */}
        <div className="lg:hidden">
          <IconButton
            icon={<IoMenuSharp />}
            aria-label="open drawer menu"
            className={cn('lg:hidden min-w-[24px] text-[24px]', {
              'text-black': variant === 'dark',
              'text-white': variant === 'white',
            })}
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
                    // initial="hidden"
                    animate="visible"
                    variants={{
                      // hidden: { opacity: 0, x: -30 },
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
                'c-sick-hover-effect init-invisible text-xl flex items-center ',
                {
                  'text-black': variant === 'dark',
                  'text-white': variant === 'white',
                },
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
              <span className={cn({ 'text-white': variant === 'white' })}>
                {link.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
