import { motion } from 'framer-motion'
import React, { FC } from 'react'

type Props = {
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  /* in seconds */
  delay?: number
}

const FadeInUp: FC<Props> = ({ children, as, delay = 0 }: Props) => {
  // const { children, as, delay = 0 } = props

  const MotionComponent = motion<React.HTMLAttributes<HTMLDivElement>>(
    as || 'div',
  )

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
      viewport={{ once: true }}
      className="init-invisible"
      transition={{
        delay,
        ease: [0.61, 1, 0.88, 1],
        duration: 0.6,
      }}
    >
      {children}
    </MotionComponent>
  )
}

export default FadeInUp
