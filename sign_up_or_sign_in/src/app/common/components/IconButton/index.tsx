import { IconButton as MuiIconButton, IconButtonProps } from '@mui/material'

function IconButton(props: IconButtonProps): JSX.Element {
  const { children, onClick, ...muiIconButtonProps } = props
  return (
    <MuiIconButton {...muiIconButtonProps} onClick={onClick}>
      {children}
    </MuiIconButton>
  )
}

export default IconButton
