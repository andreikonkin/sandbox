import { memo } from 'react'
import TextField from '../../TextField'
import { TextFieldRegistrationProps } from './types'

export const TextFieldRegistration = memo(
  (props: TextFieldRegistrationProps) => {
    const {
      id,
      placeholder,
      values,
      handleChange,
      handleBlur,
      touched,
      errors,
      InputProps,
      type = 'text',
      helperText,
    } = props

    return (
      <TextField
        id={id}
        placeholder={placeholder}
        type={type}
        value={values[id]}
        onChange={handleChange}
        error={!!(touched[id] && errors[id])}
        helperText={touched[id] ? errors[id] : helperText}
        onBlur={handleBlur}
        InputProps={InputProps}
        fullWidth
      />
    )
  }
)

TextFieldRegistration.displayName = 'TextFieldRegistration'

export default TextFieldRegistration
