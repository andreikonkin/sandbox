import { FormikErrors, FormikTouched } from 'formik'
import { HandleClose } from '../../Dialog'
import { AuthorizationData, FormVariant } from '../types'

export type SignInProps = {
  formik: {
    values: AuthorizationData
    errors: FormikErrors<AuthorizationData>
    touched: FormikTouched<AuthorizationData>
    handleBlur: (e: React.FocusEvent<unknown>) => void
    handleChange: (e: React.ChangeEvent<unknown>) => void
    isSubmitting: boolean
  }
  setFormVariant: React.Dispatch<React.SetStateAction<FormVariant>>
  errorMessage: string
  handleClose: HandleClose
  setOpenRegistrationForm(value: boolean): void
}
