import { memo } from 'react'
import { FONT_COLORS, FONT_SIZES } from './constants'
import { TextProps } from './types'

function Text(props: TextProps): JSX.Element {
  const { size = 'm', fontColor = 'primary', children, textAlign } = props

  const style: React.CSSProperties = {
    fontSize: FONT_SIZES[size],
    color: FONT_COLORS[fontColor],
  }
  if (textAlign) {
    Object.assign(style, { textAlign })
  }
  return <span style={style}>{children}</span>
}

export default memo(Text)
