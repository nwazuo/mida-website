import { Link as LinkSource } from '@chakra-ui/next-js'
import {
  interpolate,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

const Link = motion(LinkSource)

const scrollToDeg = interpolate([0, 1], [0, 360])

const GetInTouchBadge = () => {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const rotateSpring = useSpring(rotate)

  return (
    <div className="c-container flex absolute">
      <Link href="#" className="-translate-y-1/2 relative">
        <motion.img
          src="/images/get-in-touch-badge.svg"
          width={221}
          height={221}
          alt=""
          className="w-[221px] h-[221px]"
          style={{ rotate: rotateSpring }}
        />
        <ArrowIcon />
      </Link>
    </div>
  )
}

export default GetInTouchBadge

const ArrowIcon = () => {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25017 19.3399L0.1875 17.2772L14.3315 3.13319H1.66083V0.186523H19.3408V17.8665H16.3942V5.19586L2.25017 19.3399Z"
        fill="white"
      />
    </svg>
  )
}
