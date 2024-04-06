import {
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";

// shared theme values for use in tailwind or any other styling library we bring into the project
export const sharedThemeValues = {
  screens: {
    sm: `520px`,
    md: `900px`,
    lg: `1200px`,
    xl: `1580px`,
  },
  fontFamily: {
    primary: `var(--font-primary)`,
  }
}

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  breakpoints: sharedThemeValues.screens,
  global: {
    body: {
      fontFamily: sharedThemeValues.fontFamily.primary,
      fontSize: '32px'
    }
  },
  fonts: {
    body: sharedThemeValues.fontFamily.primary
  }
})

export default theme