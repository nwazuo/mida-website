import '~/styles/global.css'

import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
import { lazy } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '~/styles/theme.chakra'


export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/common/PreviewProvider'))

const primaryFontFamily = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal']

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
          .init-invisible{visibility:hidden}
        `}
      </style>
      <ChakraProvider theme={theme}>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
      </ChakraProvider>
      <noscript>
        <style>{`.init-invisible{visibility:visible}`}</style>
      </noscript>
    </>
  )
}
