/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import { InferGetStaticPropsType } from 'next'

import FadeInUp from '~/components/animation/FadeInUp'
import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'
import FAQSection from '~/components/sections/ai-agent/FAQSection'
import { SEO } from '~/components/seo'
import { getPageMetaBySlug, getSiteSettings } from '~/lib/sanity.queries'

const innerVariant = {
  hidden: {
    rotateY: -90,
  },
  visible: {
    rotateY: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 1,
      delay: 0.6,
    },
  },
  leave: {
    rotateY: -90,
    transition: {
      type: 'tween',
      ease: 'easeIn',
      duration: 0.3,
      delay: 0.7,
    },
  },
}

const AIAgents = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { siteSettings, pageMeta } = props

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <SEO {...pageMeta} {...siteSettings.defaultMeta} />
      <Header variant="transparent-dark" />
      <div className="relative">
        <img
          src={'/images/Vector-1.svg'}
          alt="vector1"
          className="absolute bottom-0 right-0 z-0 pointer-events-none"
        />
        <img
          src={'/images/Vector-2.svg'}
          alt="vector2"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        />
        <img
          src={'images/Vector-section-mida.svg'}
          alt="vector3"
          className="absolute top-[60%] right-[5%] -translate-y-1/2  z-0 pointer-events-none"
        />
        <section className="c-container z-10 text-center py-12 md:py-16 relative">
          <FadeInUp delay={0.01}>
            <h1 className="text-[48px] md:text-[64px] font-semibold leading-tight">
              Empowering businesses with <br className="hidden md:block" />
              cutting-edge AI solutions
            </h1>
          </FadeInUp>{' '}
          <FadeInUp delay={0.215}>
            <p className="text-lg md:text-2xl mt-4 md:mt-5 mb-8 md:mb-[60px] text-[#D9D9D9]">
              Transform Your Business with Smart Automation
            </p>
          </FadeInUp>
          <FadeInUp delay={0.42}>
            <button className="py-3 md:py-4 px-6 md:px-10 bg-white text-black rounded-[4px] font-semibold text-lg md:text-xl">
              Get Started
            </button>
          </FadeInUp>
        </section>
      </div>
      <div className="c-container mx-auto">
        <motion.img
          style={{ display: 'visible' }}
          key="image-animation2"
          variants={innerVariant}
          exit="leave"
          initial="hidden"
          animate="visible"
          src="/images/ai-agent.png"
          className="rounded-sm mx-auto w-full max-w-[1384px] h-[500px] object-cover pointer-events-none"
          alt="parnership img"
        />
      </div>

      <section className="c-container my-16 md:my-[163px] px-4">
        <div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-[110px]">
          <FadeInUp delay={0.01}>
            <h1 className="font-bold text-[40px] md:text-[48px]">
              Get Unmatched Results!
            </h1>
          </FadeInUp>{' '}
          <FadeInUp delay={0.215}>
            <p className="font-medium text-lg md:text-xl leading-[30px] md:leading-[36px] tracking-wide">
              Simplify Management, Boost Efficiency, and Achieve Your{' '}
              <br className="hidden md:block" /> Goals Faster
            </p>
          </FadeInUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Vector Backgrounds */}
          <img
            src={'/images/vector-2-results.svg'}
            alt="vector2"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-0 pointer-events-none"
          />
          <img
            src={'/images/vector-1-results.svg'}
            alt="vector1"
            className="absolute top-1/2 right-[0] -translate-y-1/2  z-0 pointer-events-none"
          />
          {AI_RESULTS_DATA.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="z-10 relative bg-transparent backdrop-blur-md p-4 md:p-6 rounded-md flex flex-col gap-4"
            >
              <img
                src={agent.image}
                alt={agent.title}
                className="w-[51px] h-[51px] "
              />
              <div className="flex flex-col justify-center h-full text-white">
                <h3 className="text-[28px] md:text-[32px] font-bold">
                  {agent.title}
                </h3>
                <p className="mt-3 font-medium tracking-wide leading-[32px]">
                  {agent.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="relative">
        <img
          src="/images/vector-1-agents.svg"
          alt="vector left"
          className="absolute left-[10%] top-1/2 -translate-y-1/2 z-0 pointer-events-none"
        />
        <img
          src="/images/vector-2-agents.svg"
          alt="vector right"
          className="absolute right-[10%] top-1/2 -translate-y-1/2 z-0 pointer-events-none "
        />

        <section className="z-10 c-container my-[163px] md:mt-[264px] relative px-4">
          <div className="flex items-center justify-center flex-col gap-3 text-center mb-[110px]">
            <FadeInUp delay={0.01}>
              <h1 className="font-bold text-[40px] md:text-[48px]">
                Get Started With MIDA AI Agents
              </h1>
            </FadeInUp>{' '}
            <FadeInUp delay={0.215}>
              <p className="font-medium text-lg md:text-xl leading-[30px] md:leading-[36px] tracking-wide">
                Our AI-powered business assistant serves as a one-stop
                dashboard, providing real-time{' '}
                <br className="hidden md:block" /> insights and automated task
                management to streamline operations and boost efficiency.
              </p>
            </FadeInUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {AI_AGENTS_DATA.slice(0, 3).map((agent, index) => (
              <div className="md:col-span-6 lg:col-span-4" key={index}>
                <AIAgentsCard agent={agent} index={index} />
              </div>
            ))}
            {AI_AGENTS_DATA.slice(3, 5).map((agent, index) => (
              <div className="md:col-span-6" key={index + 3}>
                <AIAgentsCard agent={agent} index={index + 3} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="c-container my-[100px] md:my-[163px] px-4">
        <div className="flex flex-col md:flex-row items-start justify-center md:h-[558px] relative max-w-[1408px] mx-auto">
          {/* Left Section */}
          <div className="relative h-full pt-8 md:pt-[90px] px-8 sm:px-10 md:pl-[56px] pr-2 pb-4 w-full md:w-1/2">
            <img
              src="/images/vector-1-wl.svg"
              alt="vector bottom left"
              className="absolute bottom-0 left-0 h-[500px] w-full z-0 pointer-events-none"
            />
            <img
              src="/images/vector-mida-wl.svg"
              alt="vector mida bottom left"
              className="absolute bottom-0 left-0 z-0 pointer-events-none"
            />
            <img
              src="/images/vector-2-wl.svg"
              alt="vector top right"
              className="absolute top-0 right-0 z-0 pointer-events-none"
            />
            <div className="relative z-10 w-full">
              <h1 className="font-semibold text-[40px] md:text-[50px] text-white">
                Join Our Waitlist 🚀
              </h1>
              <p className="leading-[28px] text-gray-300 mt-4">
                Sign up now to be among the first to access Mida AI. Get
                exclusive updates, early access, and special offers.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 max-w-[846px] h-full flex flex-col pt-[50px] pb-[70px] px-8 md:px-10 md:rounded-tr-[14.36px] md:rounded-br-[14.36px] bg-[#FAFAFA0A] relative">
            {/* Vectors for Form Section */}
            <img
              src="/images/vector-1-wlform.svg"
              alt="vector bottom center"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-0 pointer-events-none"
            />
            <img
              src="/images/vector-2-wlform.svg"
              alt="vector top center"
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full z-0 pointer-events-none"
            />

            <form className="h-full flex flex-col justify-between relative z-10">
              {/* Full Name */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-[10px]">
                  <label
                    htmlFor="fullName"
                    className="text-white font-semibold text-[20px] leading-[28px]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="e.g John Doe"
                    className="w-full bg-[#FFFFFF14] border-[0.9px] border-[#EDEDED4D] rounded-md px-2 md:px-4 py-3 text-white placeholder-[#959595] placeholder:font-medium focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label
                    htmlFor="email"
                    className="text-white font-semibold text-[20px] leading-[28px]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className="w-full bg-[#FFFFFF14] border-[0.9px] border-[#EDEDED4D] rounded-md px-2 md:px-4 py-3 text-white placeholder-[#959595] placeholder:font-medium focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black font-semibold rounded-md py-3 mt-4 hover:bg-gray-200 transition"
              >
                Send a message
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="c-container my-[180px] md:my-[220px] px-6 max-w-[1408px] mx-auto">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-2 relative">
          <img
            src="/images/vector-1-solution.svg"
            alt="vector center left"
            className="absolute top-1/2 right-0 -translate-y-1/2 w-full h-[500px] z-0 pointer-events-none"
          />
          <img
            src="/images/vector-2-solution.svg"
            alt="vector center right"
            className="absolute top-1/2 right-0 -translate-y-1/2 h-[500px] z-0 pointer-events-none"
          />
          <div className="w-full md:max-w-[583px] relative z-10">
            <h1 className="font-bold text-[40px] md:text-[48px] leading-[64px] text-white capitalize gap-4">
              Need a custom solution?
            </h1>
            <p className="font-semibold text-base md:text-[20px] leading-[42px] mb-[60px]">
              {' '}
              AI-powered solutions not only enhance productivity but also
              provide valuable insights that help you make informed business
              decisions
            </p>

            <button className="bg-white py-4 px-10 rounded text-black">
              Get Started
            </button>
          </div>
          <div className="w-full relative flex items-center justify-center">
            <img
              src="/images/ai-agent-solution-logo.svg"
              alt="Mida Logo"
              className="z-10 md:mr-40"
            />
          </div>
        </div>
      </section>
      <section className="c-container relative">
        <FAQSection />
        <img
          src="/images/vector-2-faq.svg"
          alt="Vector Top Right"
          className="absolute top-0 right-0 z-0 pointer-events-none"
        />
        <img
          src="/images/vector-1-faq.svg"
          alt="Vector Bottom Right"
          className="absolute bottom-0 -right-10 z-0 pointer-events-none"
        />
      </section>
      <footer className="relative ">
        <Footer {...siteSettings} />
        <img
          src="/images/vector-3-footer.svg"
          alt="Vector Top Right"
          className="absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none"
        />
        <img
          src="/images/vector-4-footer.svg"
          alt="Vector Bottom Right"
          className="absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none"
        />
      </footer>
    </div>
  )
}

const AI_RESULTS_DATA = [
  {
    image: '/images/history-icon.svg',
    title: 'Saves time & enhances productivity',
    description:
      'Saving time is not only achievable but can be automated and enhanced to create seamless, efficient processes that free up time for more valuable work.',
  },
  {
    image: '/images/rebase-icon.svg',
    title: 'Automates repetitive business processes',
    description:
      'We specialize in AI-driven automation that handles repetitive business tasks, enabling your team to work smarter, not harder. Our AI solutions help businesses save time, reduce costs and enhance efficiency',
  },
  {
    image: '/images/history-icon.svg',
    title: 'Keeps business owners informed & in control',
    description:
      "AI tools that help business owners maintain a bird's-eye view of their operations, track progress, monitor key metrics, and take immediate action when needed—all in real-time.",
  },
]
const AI_AGENTS_DATA = [
  {
    icon: '/images/ai-frame-1.svg',
    title: 'Cross-Site Business Overview',
    description:
      'Our AI agent consolidates data from different departments, offering a holistic view of business performance at a glance. Business owners also get access to data all in one place.',
  },
  {
    icon: '/images/ai-frame-2.svg',
    title: 'Goal Setting & Task Management',
    description:
      'The AI agent kicks off the year by reviewing previous goals, summarizing achievements, and aligning new goals into quarterly and weekly tasks for teams.',
  },
  {
    icon: '/images/ai-frame-3.svg',
    title: 'Smart Recommendations & Automation',
    description:
      'Identifies skill gaps and suggests hiring needs, Automates marketing strategies based on set goals and budgets and Generate data-driven insights to improve decision-making.',
  },
  {
    icon: '/images/ai-frame-4.svg',
    title: 'Daily Task Overiew',
    description:
      'Each morning, business owners receive an AI-curated briefing of daily objectives. Real-time status updates help track pending, ongoing, and completed tasks, ensuring seamless workflow.  business owners receive an AI-curated briefing of daily objectives.',
  },
  {
    icon: '/images/ai-frame-5.svg',
    title: 'Progress and Performance Tracking',
    description:
      'The AI monitors key business metrics and assigns completion percentages for each goal. Owners receive actionable insights on their progress, helping them adjust strategies for optimal success.',
  },
]

export default AIAgents

const AIAgentsCard = ({ agent, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative p-4"
    >
      <img
        src={agent.icon}
        alt={agent.title}
        className="w-full h-[325px] object-cover rounded-lg"
      />
      <div className="flex flex-col justify-center text-white mt-5">
        <h3 className="text-[24px] font-bold capitalize">{agent.title}</h3>
        <p className="mt-3 font-medium tracking-wide leading-[28px] text-sm">
          {agent.description}
        </p>
      </div>
    </motion.div>
  )
}

export async function getStaticProps() {
  const siteSettings = await getSiteSettings()
  const pageMeta = await getPageMetaBySlug('ai-agents')

  return {
    props: {
      siteSettings,
      pageMeta,
    },
  }
}
