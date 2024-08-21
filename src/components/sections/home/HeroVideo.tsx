import { Link } from '@chakra-ui/react'
import {
  motion,
  useIsomorphicLayoutEffect,
  useMotionValue,
} from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { IoPlaySharp } from 'react-icons/io5'

import FadeInUp from '~/components/animation/FadeInUp'

export default function HeroVideo() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)

  // const x = useMotionValue(0)
  // const y = useMotionValue(0)

  // const hideCursorForSection = (section: HTMLDivElement) => {
  //   section.addEventListener('mouseover', () => {
  //     document.body.style.cursor = 'none'
  //   })
  //   section.addEventListener('mouseout', () => {
  //     document.body.style.cursor = 'default'
  //   })
  // }

  // useIsomorphicLayoutEffect(() => {
  //   const section = sectionRef.current
  //   const btn = btnRef.current
  //   if (!section) return
  //   if (!btn) return

  //   hideCursorForSection(section)

  //   const limitX_1 = section.offsetLeft
  //   const limitX_2 = section.offsetWidth
  //   const limitY_1 = section.getBoundingClientRect().top + window.scrollY
  //   const limitY_2 = section.offsetHeight + limitY_1

  //   section.addEventListener('mousemove', (e) => {
  //     const tx = e.pageX - limitX_1
  //     const ty = e.pageY - limitY_1

  //     x.set(tx)
  //     y.set(ty)
  //   })

  //   section.addEventListener('mouseenter', () => {
  //     btn.classList.remove(
  //       'top-1/2',
  //       'left-1/2',
  //       '-translate-x-1/2',
  //       '-translate-y-1/2',
  //     )
  //     btn.classList.add('top-0', 'left-0')
  //   })

  //   section.addEventListener('mouseleave', () => {
  //     btn.classList.remove('top-0', 'left-0')
  //     btn.classList.add(
  //       'top-1/2',
  //       'left-1/2',
  //       '-translate-x-1/2',
  //       '-translate-y-1/2',
  //     )
  //   })
  // }, [])

  return (
    <motion.div
      className="mt-8 lg:mt-16 relative overflow-hidden"
      ref={sectionRef}
    >
      <video
        // controls
        autoPlay={true}
        muted
        loop={true}
        src="/mida-video.mp4"
        width="100%"
      />
      {/* <FadeInUp delay={0.5}>
        <Image
          width={1920}
          height={960}
          src="/images/hero-section-foreground.jpg"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQwIDE5MjAiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiM4N2I4YTMiIGQ9Ik0wIDBoMzg0MHYxOTIwSDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09Im1hdHJpeCgxNSAwIDAgMTUgNy41IDcuNSkiIGZpbGwtb3BhY2l0eT0iLjUiPjxlbGxpcHNlIGZpbGw9IiMyMjU4NGUiIGN4PSIxMjgiIGN5PSI2MyIgcng9IjM1IiByeT0iMjQiLz48ZWxsaXBzZSBmaWxsPSIjMzE2NTVhIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDQuNzczMTQgLTExLjMyNzIgMjQuODU0MTcgMTAuNDczMjQgNzEuNyAxMDkuOSkiLz48ZWxsaXBzZSBmaWxsPSIjYmFlNGM4IiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC03LjUzMzkzIDIzLjA1MjU1IC0xNjguNzcxNSAtNTUuMTU3MTQgMjM0LjggMTkuMikiLz48ZWxsaXBzZSBmaWxsPSIjYjllMWM5IiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0icm90YXRlKC02Ni42IDE1NSAtODQuMSkgc2NhbGUoNTQuNDU3NTMgMTguNjM3MDcpIi8+PHBhdGggZmlsbD0iI2NhZTNkMiIgZD0iTTc2IDY1bDUwIDUzLTg1LTQyeiIvPjxlbGxpcHNlIGZpbGw9IiMyYTVmNTgiIGN4PSI1OSIgY3k9IjUzIiByeD0iMTIiIHJ5PSIxMiIvPjxlbGxpcHNlIGZpbGw9IiNiOWRmYzkiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTUuODIzMTggLTcuMDg5MjYgMzcuODcwOTggLTMxLjEwNzU3IDEyNi4yIDIxLjYpIi8+PGVsbGlwc2UgZmlsbD0iIzZhYTM4ZiIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgzMi4wNjAxNyAzLjA4MDgzIC0xLjM0MTU4IDEzLjk2MDk2IDEyNC4yIDgzLjMpIi8+PC9nPjwvc3ZnPg=="
          alt=""
        />
        <motion.div
          className="w-6 h-6 md:w-12 md:h-12 lg:w-28 lg:h-28 flex items-center justify-center bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ref={btnRef}
          style={{ x, y }}
          transition={{
            ease: 'easeInOut',
          }}
        >
          <IoPlaySharp className="w-2 md:w-3 lg:w-4 text-black" />
        </motion.div>
      </FadeInUp> */}
    </motion.div>
  )
}
