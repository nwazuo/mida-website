/*
 * Custom link component with hover effect.
 * Use inplace of link for places where we have the main link style
 */

import { Link } from '@chakra-ui/next-js'
import { LinkOverlay, chakra } from '@chakra-ui/react'
import { ComponentProps } from 'react'
import cn from '~/lib/cn'

type Props = ComponentProps<typeof Link>

const StyledSpan = chakra('span', {
  baseStyle: {
    position: 'relative',
    whitespace: 'nowrap',
    background: 'transparent',
    border: 0,
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '7px 0',
    textDecoration: 'none',

    '&::before': {
      content: '" "',
      background: '#000',
      position: 'absolute',
      width: '100%',
      height: '1px',
      top: '100%',
      left: '0',
      pointerEvents: 'none',
    },

    '& .link__graphic': {
      position: 'absolute',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      fill: 'none',
      stroke: '#000',
      strokeWidth: '1px',
    },

    '& .link__graphic--slide': {
      top: '2px',
      strokeWidth: '2px',
      transition: 'transform 0.7s',
      transitionTimingFunction: 'cubic-bezier(0, 0.25, 0.5, 1)',
    },

    '&:hover .link__graphic--slide': {
      transform: 'translate3d(-66.6%, 0, 0)',
    },
  },
})

export default function MidaLink(props: Props) {
  return (
    <Link
      {...props}
      className={cn('no-underline flex items-center', props.className)}
    >
      <StyledSpan>
        <span>{props.children}</span>
        {/* line/wave */}
        <svg
          className="link__graphic link__graphic--slide"
          width="300%"
          height="100%"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
        </svg>
      </StyledSpan>
      {/* arrow */}
      <svg
        className="top-[2px] left-[6px] relative w-[12px] lg:w-[21px]"
        width="22"
        height="17"
        viewBox="0 0 22 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5418 16.9429L11.6618 14.9957L16.429 10.2286H0.113281V7.5429H16.429L11.6618 2.77576L13.5418 0.828613L21.599 8.88575L13.5418 16.9429Z"
          fill="#061433"
        />
      </svg>
    </Link>
  )
}
