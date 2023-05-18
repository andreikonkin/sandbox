import { PADDING_MARGIN_SIZES_VARS } from './constants'
import { BlockProps } from './types'

export function getDivStyle(props: BlockProps): React.CSSProperties {
  const style: React.CSSProperties = {}

  if (props.display) {
    style.display = props.display
  }

  if (props.flexDirection) {
    style.flexDirection = props.flexDirection
  }

  if (props.justifyContent) {
    style.justifyContent = props.justifyContent
  }

  if (props.alignItems) {
    style.alignItems = props.alignItems
  }

  if (props.marginA) {
    style.margin = PADDING_MARGIN_SIZES_VARS[props.marginA]
  }

  if (props.marginH) {
    style.marginLeft = PADDING_MARGIN_SIZES_VARS[props.marginH]
    style.marginRight = PADDING_MARGIN_SIZES_VARS[props.marginH]
  }

  if (props.marginV) {
    style.marginTop = PADDING_MARGIN_SIZES_VARS[props.marginV]
    style.marginBottom = PADDING_MARGIN_SIZES_VARS[props.marginV]
  }

  if (props.marginL) {
    style.marginLeft = PADDING_MARGIN_SIZES_VARS[props.marginL]
  }

  if (props.marginR) {
    style.marginRight = PADDING_MARGIN_SIZES_VARS[props.marginR]
  }

  if (props.marginT) {
    style.marginTop = PADDING_MARGIN_SIZES_VARS[props.marginT]
  }

  if (props.marginB) {
    style.marginBottom = PADDING_MARGIN_SIZES_VARS[props.marginB]
  }

  if (props.paddingA) {
    style.padding = PADDING_MARGIN_SIZES_VARS[props.paddingA]
  }

  if (props.paddingH) {
    style.paddingLeft = PADDING_MARGIN_SIZES_VARS[props.paddingH]
    style.paddingRight = PADDING_MARGIN_SIZES_VARS[props.paddingH]
  }

  if (props.paddingV) {
    style.paddingTop = PADDING_MARGIN_SIZES_VARS[props.paddingV]
    style.paddingBottom = PADDING_MARGIN_SIZES_VARS[props.paddingV]
  }

  if (props.paddingL) {
    style.paddingLeft = PADDING_MARGIN_SIZES_VARS[props.paddingL]
  }

  if (props.paddingR) {
    style.paddingRight = PADDING_MARGIN_SIZES_VARS[props.paddingR]
  }

  if (props.paddingT) {
    style.paddingTop = PADDING_MARGIN_SIZES_VARS[props.paddingT]
  }

  if (props.paddingB) {
    style.paddingBottom = PADDING_MARGIN_SIZES_VARS[props.paddingB]
  }

  if (props.gap) {
    style.gap = PADDING_MARGIN_SIZES_VARS[props.gap]
  }

  return style
}
