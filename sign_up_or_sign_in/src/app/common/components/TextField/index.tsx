import { TextField as MuiTextField, TextFieldProps } from '@mui/material'

function TextField(props: TextFieldProps): JSX.Element {
  const { variant = 'outlined', size = 'small', ...muiTextFieldProps } = props
  return <MuiTextField {...muiTextFieldProps} variant={variant} size={size} />
}

export default TextField

export type { TextFieldProps }
