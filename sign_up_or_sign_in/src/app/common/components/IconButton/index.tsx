import { IconButton as MuiIconButton, IconButtonProps } from '@mui/material'

function IconButton(props: IconButtonProps): JSX.Element {
  const { children, onClick } = props
  return <MuiIconButton onClick={onClick}>{children}</MuiIconButton>
}

export default IconButton
