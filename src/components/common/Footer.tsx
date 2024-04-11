import footerData from "~/data/footer"
import contactInfo from '~/data/contactInfo'
import FadeInUp from "../animation/FadeInUp"
import Link from "next/link"
import navigationLinks from "~/data/navigationLinks"

export default function Footer() {

  return (
    <div className="bg-black pt-14 md:pt-16 lg:pt-32 pb-24 md:pb-28 lg:pb-40">
      <div className="c-container">
        <FadeInUp>
          <h2 className="text-white text-3xl lg:text-5xl font-medium">{footerData.title}</h2>
        </FadeInUp>
        <div className="sm:flex sm:flex-row gap-20 lg:gap-96 mt-10 lg:mt-20">
          <ul className="flex flex-col gap-6 md:gap-8 lg:gap-14">
            {contactSectionData.map((item, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <li className="flex items-center gap-7">
                  <img src={item.iconSrc} alt="" className="w-4 lg:w-5" />
                  <div className="flex-col gap-1">
                    <p className="text-[#DCD7D7]">{item.title}</p>
                    {item.content}
                  </div>
                </li>
              </FadeInUp>
            ))}
          </ul>
          <ul className="flex flex-col mt-16 sm:mt-0 gap-4 lg:gap-8">
            {navigationLinks.map((item, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <li className="list-none text-white underline underline-offset-4 text-lg lg:text-xl">
                  <Link href={item.href}>{item.text}</Link>
                </li>
              </FadeInUp>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-10 mt-20 lg:mt-28">
          <FadeInUp>
            <Link href="/" className="">
              <img src="/images/mida-logo-white.svg" alt="mida digitals logo" />
            </Link>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-white">&copy; {footerData.copyright}</p>
          </FadeInUp>
        </div>
      </div>
    </div>
  )
}

const contactSectionData = [
  {
    title: 'Call us',
    iconSrc: '/icons/call-icon.svg',
    content: <p className="text-white font-medium">{contactInfo.phone}</p>
  },
  {
    title: 'Email Us',
    iconSrc: '/icons/message-icon.svg',
    content: <a href={`mailto:${contactInfo.email}`} className="text-[#1EA1F6] font-medium">{contactInfo.email}</a>
  },
  {
    title: 'Location',
    iconSrc: '/icons/location-pin-icon.svg',
    content: <p className="text-white font-medium">{contactInfo.address}</p>
  },
  {
    title: 'Discover MIDA',
    iconSrc: '/icons/wifi-find-icon.svg',
    content: (<ul className="flex gap-6 mt-2">
      <li className="list-none"><Link target="_blank" href={contactInfo.instagram}><img src="/icons/instagram-icon.svg" className="w-4" alt="" /></Link></li>
      <li className="list-none"><Link target="_blank" href={contactInfo.twitter}><img src="/icons/twitter-icon.svg" className="w-4" alt="" /></Link></li>
      <li className="list-none"><Link target="_blank" href={contactInfo.linkedin}><img src="/icons/linkedin-icon.svg" className="w-4" alt="" /></Link></li>
    </ul>)
  },

]