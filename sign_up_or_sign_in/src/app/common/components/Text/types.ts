export type TextProps = {
  size?: TextSize
  fontColor?: FontColor
  children: React.ReactNode
  textAlign?: React.CSSProperties['textAlign']
}

export type TextSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

type FontColor = 'primary' | 'secondary' | 'success' | 'alert' | 'white'

export type FontSizeRecord = Readonly<
  Record<TextSize, React.CSSProperties['fontSize']>
>

export type FontColorRecord = Readonly<
  Record<FontColor, React.CSSProperties['color']>
>
