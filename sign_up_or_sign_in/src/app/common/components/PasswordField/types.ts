import { TextFieldProps } from '../TextField'

export type PasswordFieldProps = {
  id: TextFieldProps['id']
  placeholder: TextFieldProps['placeholder']
  value: TextFieldProps['value']
  onChange: TextFieldProps['onChange']
  onBlur: TextFieldProps['onBlur']
  error: TextFieldProps['error']
  helperText: TextFieldProps['helperText']
  showPassword: boolean
  setShowPassword(value: boolean): void
}
