interface CTA {
  text: string
  link: string
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
