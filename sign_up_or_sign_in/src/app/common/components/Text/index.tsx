import { memo } from 'react'
import { FONT_COLORS, FONT_SIZES } from './constants'
import { TextProps } from './types'

function Text(props: TextProps): JSX.Element {
  const {
    fontColor = 'primary',
    size,
    style,
    fontSize,
    children,
    textAlign,
    lineHeight,
  } = props

  const spanStyle: React.CSSProperties = {
    ...style,
    fontSize: size ? FONT_SIZES[size] : fontSize,
    color: FONT_COLORS[fontColor],
    textAlign,
    lineHeight,
  }

  return <span style={spanStyle}>{children}</span>
}

export default memo(Text)
