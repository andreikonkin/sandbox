import { memo } from 'react'
import { BlockProps } from './types'
import { getDivStyle } from './utils'

function Block(props: BlockProps): JSX.Element {
  const { children, style } = props

  return (
    <div style={Object.assign({ ...style }, getDivStyle(props))}>
      {children}
    </div>
  )
}

export default memo(Block)
