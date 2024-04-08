import { motion } from 'framer-motion'
import React, { useMemo } from 'react';
import { defaultEase } from '~/lib/constants';

type Props = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  /* in seconds */
  delay?: number;
}

const FadeInUp = (props: Props) => {
  const { children, as, delay = 0 } = props

  const MotionComponent = useMemo(() => {
    return motion<React.HTMLAttributes<HTMLDivElement>>(as || 'div')
  }, [as])

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, visibility: "visible" }}
      viewport={{ once: true }}
      className="init-invisible"
      transition={{
        delay,
        ease: defaultEase,
        duration: 0.6
      }}
    >
      {children}
    </MotionComponent>
  )
}





export default FadeInUp