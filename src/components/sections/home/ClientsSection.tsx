import Image from "next/image"
import FadeInUp from "~/components/animation/FadeInUp";
import SplitTextAnim from "~/components/animation/SplitTextAnim";
import MidaLink from "~/components/common/MidaLink";
import clientsData from "~/data/clients"

type Clients = typeof clientsData

interface Props {
  data: {
    clients: Clients;
    clientsSectionText: string;
    clientsSectionCTA: CTA
  }
}

export default function ClientsSection(props: Props) {
  const { data } = props

  return (
    <div className="bg-black w-full pt-12 pb-20 lg:pt-40 lg:pb-40">
      <div className="c-container flex flex-col md:grid grid-cols-2 md:flex-row gap-8 lg:gap-24 max-w-[420px] md:max-w-none">
        <div className="grid gap-x-2 gap-y-5 lg:gap-x-5 lg:gap-y-14 grid-cols-3">
          {data.clients.map((client, i) => (
            <FadeInUp delay={i * 0.05} key={i}>
              <Image
                width={227.45}
                height={88.56}
                quality={100}
                src={client.logoDefault}
                alt={client.name}
              />
            </FadeInUp>
          ))}
        </div>
        <div>
          <SplitTextAnim as="p" className="text-white text-xs lg:text-2xl lg:text-justify leading-loose lg:leading-loose">{data.clientsSectionText}</SplitTextAnim>
          <FadeInUp delay={0.2}>
            <MidaLink variant="light" href={data.clientsSectionCTA.link} className="mt-6 lg:mt-10">{data.clientsSectionCTA.text}</MidaLink>
          </FadeInUp>
        </div>
      </div>
    </div>
  )
}