import Typography from "typography"
import theme from "typography-theme-ocean-beach"

theme.overrideThemeStyles = () => {
  return {
    "a": {
      'background-image': `none`,
      'text-shadow': 'none',
      'color':'#E1E1E1 !important'
    },
    "body": {
      'background-color': `#151515`,
      'color':'#E1E1E1 !important'
    }
  }
}

theme.googleFonts.push(
  {
    name: 'Noto+Sans+JP',
    styles: ['400'],
  }
)
theme.headerColor = '#E1E1E1'
theme.bodyFontFamily = ['Noto Sans JP', 'Roboto', 'serif']

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
