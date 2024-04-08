import { stagger, useAnimate, useInView, useIsomorphicLayoutEffect } from "framer-motion"
import { useId } from "react"
import SplitType from "split-type"

import cn from "~/lib/cn"

type Props = {
  as?: keyof JSX.IntrinsicElements;
  delay?: number
} & React.HTMLAttributes<HTMLDivElement>

/* TODO: Add in View */

export default function SplitTextAnim(props: Props) {
  const { as, className, delay, ...rest } = props
  const cname = useId().replaceAll(':', '')
  const [scope, animate] = useAnimate()

  const isInView = useInView(scope, { once: true }) 

  const Component = as || 'div'

  useIsomorphicLayoutEffect(() => {
    const text = SplitType.create(`.${cname}`, { tagName: 'span' })

    animate([[".line", { opacity: [0, 1], y: [20, 0], visibility: "visible" },
      { delay: stagger(0.1), ease: [0.61, 1, 0.88, 1], at: delay || undefined, duration: 0.6 }]]
    )[isInView ? 'play' : 'pause']()

  }, [cname, animate, isInView])

  return (
    <>
      {/* @ts-ignore */}
    <Component className={cn(cname, 'init-invisible', className)} {...rest} ref={scope} />
    </>
  )
}