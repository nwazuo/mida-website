import '~/styles/global.css'

import { ChakraProvider } from '@chakra-ui/react'
import ReactLenis from '@studio-freight/react-lenis'
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

import theme from '~/styles/theme.chakra'
import Head from 'next/head'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const primaryFontFamily = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
})

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const {} = pageProps
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-primary: ${primaryFontFamily.style.fontFamily};
          }
          .init-invisible {
            visibility: hidden;
          }
        `}
      </style>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <VercelAnalytics />
      <ReactLenis root>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ReactLenis>
      <noscript>
        <style>{`.init-invisible{visibility:visible}`}</style>
      </noscript>
    </>
  )
}
