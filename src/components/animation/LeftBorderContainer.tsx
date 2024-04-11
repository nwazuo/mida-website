import { motion } from 'framer-motion'

interface Props {
  variant?: "dark" | "light"
  children: React.ReactNode
}

const LeftBorderContainer = (props: Props) => {
  const { variant, children } = props

  return (
    <div className="relative pl-2 lg:pl-3">
      <motion.div
        className="absolute top-0 left-0 w-0.5 lg:w-1 bg-black"
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.9, ease: [0, 0.55, 0.45, 1] }}
      >
      </motion.div>
      {children}
    </div>
  )
}

export default LeftBorderContainer