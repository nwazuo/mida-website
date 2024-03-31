export const isDev = process.env.NODE_ENV === 'development';
export const isClient = typeof document !== "undefined";


export const navigationLinks = [
  {
    "text": "About",
    "href": "/about"
  },
  {
    "text": "Services",
    "href": "/services"
  },
  {
    "text": "Store",
    "href": "/store"
  },
  {
    "text": "Work",
    "href": "/work"
  },
  {
    "text": "Partnerships",
    "href": "/partnerships"
  },
  {
    "text": "Contact",
    "href": "/contact"
  }
]

export const siteURL = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mida.comingsoon.com')

export const siteOrigin = siteURL.origin

export const defaultMeta = {
  ogImage: `${siteOrigin}/images/logo-colored.jpg`,
  twitter: {
    site: siteURL.origin
  }
}


