import { colors } from '@prols-ignite-ui/tokens'
import { createStitches } from '@stitches/react'
import { fontSizes } from './../../../tokens/src/font-sizes'
import { fontWeights } from './../../../tokens/src/font-weights'
import { fonts } from './../../../tokens/src/fonts'
import { lineHeights } from './../../../tokens/src/line-heights'
import { radii } from './../../../tokens/src/radii'
import { space } from './../../../tokens/src/space'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
