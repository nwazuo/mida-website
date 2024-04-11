export const isDev = process.env.NODE_ENV === 'development';
export const isClient = typeof document !== "undefined";

export const siteURL = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mida.comingsoon.com')

export const siteOrigin = siteURL.origin

export const defaultMeta = {
  ogImage: `${siteOrigin}/images/logo-colored.jpg`,
  twitter: {
    site: siteURL.origin
  }
}

export const defaultEase = [0.61, 1, 0.88, 1]


