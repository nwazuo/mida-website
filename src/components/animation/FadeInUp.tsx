import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

import cn from '~/lib/cn'
import { defaultEase } from '~/lib/constants'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  /* in seconds */
  delay?: number
}

const FadeInUp = (props: Props) => {
  const { children, as, delay = 0, className, ...rest } = props

  const MotionComponent = useMemo(() => {
    return motion<React.HTMLAttributes<HTMLDivElement>>(as || 'div')
  }, [as])

  return (
    // @ts-ignore - shame on me
    <MotionComponent
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
      viewport={{ once: true }}
      className={cn('init-invisible', className)}
      transition={{
        delay,
        ease: defaultEase,
        duration: 0.6,
      }}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}

export default FadeInUp
