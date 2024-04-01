import {
  Drawer,
  DrawerBody, DrawerCloseButton, DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  useDisclosure
} from "@chakra-ui/react"
import Image from "next/image";
import { Link as LinkSource } from '@chakra-ui/next-js'
import { IoMenuSharp } from "react-icons/io5"
import { LuChevronRight } from "react-icons/lu"
import { motion } from 'framer-motion'

import { navigationLinks } from "~/lib/constants";

const Link = motion(LinkSource)

export default function Header(
) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className='py-4 md:py-6 lg:py-10'>
      <div className="flex justify-between items-center c-container">
        <Link href="/"
          animate={{
            opacity: [0, 1],
            y: [10, 0],
          }}
          transition={{
            delay: 0.2,
            ease: "easeInOut",
          }}
        >
          <Image
            src='/images/mida-logo.svg'
            width={119}
            height={39}
            alt="Mida logo"
            className="w-[60px] lg:w-[120px]"
          />
        </Link>
        {/* mobile menu */}
        <div className="lg:hidden">
          <IconButton
            icon={<IoMenuSharp />}
            aria-label="open drawer menu"
            className="lg:hidden min-w-[24px] text-[24px] text-black"
            variant="unstyled"
            onClick={onOpen}
          />
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent
              bg="black"
              className="pt-5"
            >
              <DrawerCloseButton
                className="top-5 right-5 text-white text-[18px]"
              />
              <DrawerBody>
                {isOpen && <motion.div
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
                        delay: 0.5
                      },
                    },
                  }}
                >
                  {navigationLinks.map((link, index) => (
                    <Link
                      key={link.text}
                      href={link.href}
                      className="text-white text-xl flex items-center"
                      animate={{ x: [-30, 0], opacity: [0, 1] }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                      }}
                    >
                      <span>
                        {link.text}
                      </span>
                    </Link>
                  ))}
                </motion.div>}
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
              className="text-base flex items-center text-black"
              animate={{
                y: [10, 0],
                opacity: [0, 1],

              }}
              transition={{
                delay: i * 0.1,
                ease: "easeInOut",
                duration: 0.5
              }}
            >
              <span>
                {link.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}