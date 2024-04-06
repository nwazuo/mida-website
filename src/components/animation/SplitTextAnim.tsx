import { stagger, useAnimate, useIsomorphicLayoutEffect } from "framer-motion"
import { useId } from "react"
import SplitType from "split-type"

import cn from "~/lib/cn"

type Props = {
  as?: keyof JSX.IntrinsicElements
} & React.HTMLAttributes<HTMLDivElement>

export default function SplitTextAnim(props: Props) {
  const { as, className, ...rest } = props
  const cname = useId().replaceAll(':', '')
  const [scope, animate] = useAnimate()

  const Component = as || 'div'

  useIsomorphicLayoutEffect(() => {
    const text = SplitType.create(`.${cname}`, { tagName: 'span' })

    animate(".line", { opacity: [0, 1], y: [10, 0], visibility: "visible" },
      { delay: stagger(0.1), ease: "easeOut" }
    )

  }, [cname, animate])

  return (
    <Component className={cn(cname, 'init-invisible', className)} {...rest} ref={scope} />
  )
}