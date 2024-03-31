/* Returns value that indicates if the screen currently satisfies a media query.
   Useful for fine-tuning things to work better on specific screen sizes (if need be)
*/
import * as React from 'react'

export const useMedia = (mediaQuery: string, initialValue?: boolean) => {
  const [isVerified, setIsVerified] = React.useState<boolean | undefined>(
    initialValue
  )

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery)
    const changeHandler = () => setIsVerified(!!mediaQueryList.matches)

    changeHandler()
    if (typeof mediaQueryList.addEventListener === 'function') {
      mediaQueryList.addEventListener('change', changeHandler)
      return () => {
        mediaQueryList.removeEventListener('change', changeHandler)
      }
    } else if (typeof mediaQueryList.addListener === 'function') {
      mediaQueryList.addListener(changeHandler)
      return () => {
        mediaQueryList.removeListener(changeHandler)
      }
    }
  }, [mediaQuery])

  return isVerified
}
