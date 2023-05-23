import { FormikErrors, FormikState, FormikTouched } from 'formik'
import { AuthorizationData } from '../types'

export type ResetPasswordProps = {
  formik: {
    values: AuthorizationData
    errors: FormikErrors<AuthorizationData>
    touched: FormikTouched<AuthorizationData>
    handleBlur: (e: React.FocusEvent<unknown>) => void
    handleChange: (e: React.ChangeEvent<unknown>) => void
    isSubmitting: FormikState<AuthorizationData>['isSubmitting']
  }
  errorMessage: string
}
