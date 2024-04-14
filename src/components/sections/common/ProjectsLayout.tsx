import { Link as LinkSource } from '@chakra-ui/next-js'
import { motion } from 'framer-motion'
import Image from 'next/image'
import FadeInUp from '~/components/animation/FadeInUp'
import cn from '~/lib/cn'
import { urlForImage } from '~/lib/sanity.image'
import { Project } from '~/lib/sanity.queries'

interface Props {
  data: Project[]
}

const Link = motion(LinkSource)

export default function ProjectsLayout(props: Props) {
  const { data } = props

  return (
    <div className="flex gap-12 sm:gap-y-20 lg:gap-x-16 lg:gap-y-28 flex-wrap">
      {data.map((project, i) => {
        const isPortrait = project.cover.crop === 'portrait'
        /* if current is portrait and previous is portrait, means they are side by side. uhmmm, nope. but, add margin to current */
        const addAltMargin =
          i > 0 && isPortrait && data[i - 1]?.cover.crop === 'portrait'

        return (
          <div
            key={i}
            className={cn('no-underline', {
              'basis-[360px] md:basis-[45%] grow-0 shrink': isPortrait,
              'max-w-[1299px]': !isPortrait,
              'lg:mt-20': addAltMargin,
            })}
          >
            <FadeInUp>
              <Link href={project.liveLink} className="relative">
                <Image
                  src={urlForImage(project.cover.photo).url()}
                  width={dimensionsByCrop[project.cover.crop].width}
                  height={dimensionsByCrop[project.cover.crop].height}
                  alt={project.title}
                  className={cn('object-cover')}
                  quality={100}
                  placeholder="blur"
                  blurDataURL={project.cover.photo.asset.metadata.lqip}
                />
                <motion.div
                  className="absolute top-0 bottom-0 left-0 right-0 text-white text-4xl font-semibold flex justify-center items-center bg-black/30"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.5, ease: 'easeIn' },
                  }}
                >
                  Visit site
                </motion.div>
              </Link>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <Link href={project.liveLink}>
                <p className="text-xl lg:text-4xl text-[#061433] font-bold mt-4 lg:mt-8">
                  {project.title}
                </p>
              </Link>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-black text-sm md:text-lg lg:text-2xl font-medium mt-1 lg:mt-4">
                {project.shortDescription}
              </p>
            </FadeInUp>
            <div className="flex gap-2 lg:gap-4 mt-2 lg:mt-6">
              {project.services.map((service, i) => (
                <FadeInUp
                  as="p"
                  delay={0.05 * (i + 1)}
                  key={i}
                  className="w-fit text-black text-xs  lg:text-sm font-medium lg:font-semibold mt-1 rounded-full py-1.5 px-3 lg:py-3 lg:px-6 border border-black"
                >
                  {service.title}
                </FadeInUp>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const dimensionsByCrop = {
  landscape: {
    width: 1299,
    height: 628,
  },
  portrait: {
    width: 755,
    height: 617,
  },
}
