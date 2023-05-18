export type BlockProps = {
  paddingL?: PaddingMarginSize
  paddingR?: PaddingMarginSize
  paddingT?: PaddingMarginSize
  paddingB?: PaddingMarginSize
  paddingV?: PaddingMarginSize
  paddingH?: PaddingMarginSize
  paddingA?: PaddingMarginSize
  marginL?: PaddingMarginSize
  marginR?: PaddingMarginSize
  marginT?: PaddingMarginSize
  marginB?: PaddingMarginSize
  marginV?: PaddingMarginSize
  marginH?: PaddingMarginSize
  marginA?: PaddingMarginSize
  gap?: PaddingMarginSize
  display?: React.CSSProperties['display']
  flexDirection?: React.CSSProperties['flexDirection']
  justifyContent?: React.CSSProperties['justifyContent']
  alignItems?: React.CSSProperties['alignItems']
  style?: React.CSSProperties
  children?: React.ReactNode
}

type PaddingMarginSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'

export type PaddingMarginSizeToAppVar = Readonly<
  Record<PaddingMarginSize, string>
>
