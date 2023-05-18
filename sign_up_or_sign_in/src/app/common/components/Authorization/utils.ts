import { FormikErrors } from 'formik'
import { AuthorizationData } from './types'

export function getErrors(
  values: AuthorizationData
): FormikErrors<AuthorizationData> {
  const errors: ReturnType<typeof getErrors> = {}

  if (!values.email) {
    errors.email = 'Email is not filled'
  }
  if (!values.password) {
    errors.password = 'Password is not filled'
  }

  return errors
}
