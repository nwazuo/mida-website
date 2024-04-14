import { Link } from "@chakra-ui/next-js"
import Image from "next/image"
import FadeInUp from "~/components/animation/FadeInUp"
import cn from "~/lib/cn"
import { urlForImage } from "~/lib/sanity.image"
import { Project } from "~/lib/sanity.queries"

interface Props {
  data: Project[]
}

export default function ProjectsLayout(props: Props) {
  const { data } = props

  return (
    <div className="flex gap-12 sm:gap-y-20 lg:gap-x-16 lg:gap-y-28 flex-wrap">
      {data.map((project, i) => {
        const isPortrait = project.cover.crop === "portrait"
        /* if current is portrait and previous is portrait, means they are side by side. uhmmm, nope. but, add margin to current */
        const addAltMargin = i > 0 && isPortrait && data[i - 1]?.cover.crop === "portrait"

        return (
          <Link key={i} href="#"
            className={cn(
              "no-underline",
              {
                "basis-[360px] md:basis-[45%] grow-0 shrink": isPortrait,
                "max-w-[1299px]": !isPortrait,
                "lg:mt-20": addAltMargin
              }
            )}
          >
            <FadeInUp>
              <Image
                src={urlForImage(project.cover.photo).url()}
                width={dimensionsByCrop[project.cover.crop].width}
                height={dimensionsByCrop[project.cover.crop].height}
                alt={project.title}
                className={cn("object-cover")}
                quality={100}
                placeholder="blur"
                blurDataURL={project.cover.photo.asset.metadata.lqip}
              />
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <p className="text-xl lg:text-4xl text-[#061433] font-bold mt-4 lg:mt-8">{project.title}</p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-black text-sm md:text-lg lg:text-2xl font-medium mt-1 lg:mt-4">{project.shortDescription}</p>
            </FadeInUp>
            <div className="flex gap-2 lg:gap-4 mt-2 lg:mt-6">
              {
                project.services.map((service, i) => (
                  <FadeInUp as="p" delay={0.05 * (i + 1)} key={i} className="w-fit text-black text-xs  lg:text-sm font-medium lg:font-semibold mt-1 rounded-full py-1.5 px-3 lg:py-3 lg:px-6 border border-black">
                    {service.title}
                  </FadeInUp>
                ))
              }
            </div>
          </Link>
        )
      })}
    </div>
  )
}

const dimensionsByCrop = {
  "landscape": {
    width: 1299,
    height: 628
  },
  "portrait": {
    width: 755,
    height: 617
  }
}