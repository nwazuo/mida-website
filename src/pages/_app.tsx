import '~/styles/global.css'

import { ChakraProvider } from '@chakra-ui/react'
import ReactLenis from '@studio-freight/react-lenis'
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
import { lazy } from 'react'

import theme from '~/styles/theme.chakra'
import Script from 'next/script'
import Head from 'next/head';

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(
  () => import('~/components/common/PreviewProvider'),
)

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
  const { draftMode, token } = pageProps
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
      <ReactLenis root>
        <ChakraProvider theme={theme}>
          {draftMode ? (
            <PreviewProvider token={token}>
              <Component {...pageProps} />
            </PreviewProvider>
          ) : (
            <Component {...pageProps} />
          )}
        </ChakraProvider>
      </ReactLenis>
      {/* <Script>
        {`  (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:4937444,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script> */}
      <noscript>
        <style>{`.init-invisible{visibility:visible}`}</style>
      </noscript>
    </>
  )
}
