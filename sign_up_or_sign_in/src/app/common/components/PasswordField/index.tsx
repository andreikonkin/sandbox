import { LockIcon, Visibility, VisibilityOff } from '../Icon'
import IconButton from '../IconButton'
import TextField from '../TextField'
import { PasswordFieldProps } from './types'

function PasswordField(props: PasswordFieldProps): JSX.Element {
  const {
    id,
    placeholder,
    showPassword,
    setShowPassword,
    value,
    onChange,
    onBlur,
    error,
    helperText,
  } = props

  return (
    <TextField
      id={id}
      placeholder={placeholder}
      type={showPassword ? 'text' : 'password'}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      InputProps={{
        startAdornment: (
          <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        ),
        endAdornment: (
          <IconButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        ),
      }}
      fullWidth
    />
  )
}

export default PasswordField
