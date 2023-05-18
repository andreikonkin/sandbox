import MuiButton, { ButtonProps } from '@mui/material/Button'

function Button(props: ButtonProps): JSX.Element {
  const {
    size = 'small',
    variant = 'contained',
    children,
    ...muiButtonProps
  } = props

  return (
    <MuiButton {...muiButtonProps} size={size} variant={variant}>
      {children}
    </MuiButton>
  )
}

export default Button
