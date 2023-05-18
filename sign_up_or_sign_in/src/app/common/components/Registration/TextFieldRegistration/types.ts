import { FormikErrors, FormikTouched } from 'formik'
import { TextFieldProps } from '../../TextField'
import { RegistrationData } from '../types'

export type TextFieldRegistrationProps = {
  id: keyof RegistrationData
  placeholder: TextFieldProps['placeholder']
  type?: TextFieldProps['type']
  InputProps?: TextFieldProps['InputProps']
  values: RegistrationData
  handleBlur: (e: React.FocusEvent<unknown>) => void
  handleChange: (e: React.ChangeEvent<unknown>) => void
  touched: FormikTouched<RegistrationData>
  errors: FormikErrors<RegistrationData>
  helperText?: TextFieldProps['helperText']
}
