import React from 'react'
import FadeInUp from '~/components/animation/FadeInUp'
import Darkheader from '~/components/common/Darkheader'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import ServicesCard from '~/components/common/ServicesCard'
import cn from '~/lib/cn'

const Services = () => {
  const SERVICE_DATA = [
    {
      title: 'Strategy',
      paragraph:
        'Usually a free service for our waterfall clients. We open our doors to strategy discussion with actionable follow up plans for scale, market acquisition and step up ideas over competitors.',
      bullet: [
        'Research',
        'UI/UX Audit',
        'Stakeholder Workshop',
        'Product Strategy',
        'Innovation Consulting',
      ],
    },
    {
      title: 'Design',
      paragraph:
        'MIDA is a web design agency first; it is our main expertise. Our work process helps us to create products that will cover all the business needs of our clients. If our client wants to have a custom solution and implement it in web design, we will be happy to help. Our digital experience, awards, and badges will also be a plus for each type of project.',
      bullet: [
        'UI/UX Design',
        'Website and Mobile App',
        'Visual Design',
        'Prototyping And Testing',
      ],
    },
    {
      title: 'Development',
      paragraph:
        'Web development is one tool that could help each business and solve a massive list of business goals. At the web development stage, we help our client realize all their need, and at the same time, follow all necessary steps and rules. Our web development agency uses best practices and already made solutions if such fits well to the project and the requirements. If our client wants to be with us at all stages of the development of PM and account, managers will be happy to help with it. ',
      bullet: [
        'HTML/CSS/JS',
        'React/Angular',
        'Backend/API Integrations',
        'IOS/Android Native Apps',
        'Rapid Prototyping',
        'Wordpress',
      ],
    },
    {
      title: 'Blockchain',
      paragraph:
        'We are completely immersed in the development and design of tokens, NFT marketplaces, Dapps and Dexes to meet the demands of our clients who are full scale or transiting to blockchain.',
      bullet: [
        'Tokens',
        'Dapps/Dexes',
        'NFTs',
        'Solidity/Rust/Go',
        'Javascript/Ruby/Erlang',
      ],
    },
    {
      title: 'Seeder',
      paragraph:
        'This is the beginning or discovery stage of a brand. Our team could add any services to the pack and more; it helps us fit our clients’ expectations and make the best commercial proposal with the next recommendations. At this stage, the team and the services could be absolutely flexible, so we try to communicate with our client and his team in the closest way. This is the only service that comes with branding.',
      bullet: [
        'Full Branding',
        'Strategy',
        'Web Design',
        'Web Development',
        'Ad Management',
        'Social Media Design',
        'Logo Animation',
        'Pitch Deck',
      ],
    },
  ]
  return (
    <div>
      <Header variant="dark" />
      <Darkheader
        label="Our services"
        header="Crafting Digital Transformations."
        paragraph="We offer a comprehensive suite of services tailored to propel your brand to new heights in the digital landscape."
      />

      <section className="c-container">
        <h5 className="mt-4 font-[700] w-full md:w-[95%] py-20 text-[32px]">
          We offer a comprehensive suite of services tailored to propel your
          brand to new heights in the digital landscape. Our expertise goes
          beyond mere web development – we are architects of digital
          transformation.
        </h5>

        {SERVICE_DATA.map((s, i) => (
          <ServiceCard index={i} key={i} {...s} />
        ))}
      </section>

      <section className="c-container bg-black">
        <div className="mt-5 pt-10">
          <FadeInUp delay={0.1}>
            <h5
              className="pl-3 mt-4 text-[48px] text-white mb-10"
              style={{ borderLeft: '1px solid #fff' }}
            >
              Industries
            </h5>
          </FadeInUp>

          {[1, 2, 3, 4, 5, 6].map((s, i) => (
            <div
              key={i}
              style={{ marginTop: '80px', paddingBottom: '50px' }}
              className="w-full"
            >
              {/* <ServicesCard index={i} /> */}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

const ServiceCard = ({ index, title, paragraph, bullet }) => {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row items-start justify-between my-20 gap-6',
        {
          'md:flex-row-reverse': (index + 1) % 2 === 0,
        },
      )}
    >
      <div className="w-full md:w-[45%]">
        <FadeInUp delay={0.1 * index}>
          <h4 className="text-[40px] font-[700]">{title}</h4>
        </FadeInUp>
        <FadeInUp delay={0.15 * index}>
          <p style={{ lineHeight: '40px' }} className="my-2 font-[600]">
            {paragraph}
          </p>
        </FadeInUp>
        <ul className="pl-2 my-8">
          {bullet.map((s, i) => (
            <FadeInUp delay={0.3 * i} key={i}>
              <li className="my-8" key={i}>
                {s}
              </li>
            </FadeInUp>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-[50%]">
        <FadeInUp delay={0.19 * index}>
          <img src="/images/dummy-service-rectangle.png" />
        </FadeInUp>
      </div>
    </div>
  )
}

export default Services
