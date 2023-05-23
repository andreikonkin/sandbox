export type TextProps = {
  size?: TextSize
  fontColor?: FontColor
  children: React.ReactNode
  style?: React.CSSProperties
  textAlign?: React.CSSProperties['textAlign']
  lineHeight?: React.CSSProperties['lineHeight']
  fontSize?: React.CSSProperties['fontSize']
}

export type TextSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

type FontColor = 'primary' | 'secondary' | 'success' | 'alert'

export type FontSizeRecord = Readonly<
  Record<TextSize, React.CSSProperties['fontSize']>
>

export type FontColorRecord = Readonly<
  Record<FontColor, React.CSSProperties['color']>
>
