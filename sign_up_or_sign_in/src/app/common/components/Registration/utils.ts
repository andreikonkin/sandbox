import { FormikErrors } from 'formik'
import { passwordRegex } from '../../utils'
import {
  MINIMUM_PASSWORD_LENGTH,
  MINIMUM_USERNAME_LENGTH,
  NOT_ALLOWED_PASSWORDS,
} from './constants'
import { RegistrationData } from './types'

export function getErrors(
  values: RegistrationData
): FormikErrors<RegistrationData> {
  const errors: ReturnType<typeof getErrors> = {}

  if (!values.username) {
    errors.username = 'Username is not filled'
  } else {
    if (values.username.length < MINIMUM_USERNAME_LENGTH) {
      errors.username = 'Username is too short'
    }
  }

  if (!values.firstName) {
    errors.firstName = 'First name is not filled'
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is not filled'
  }

  if (!values.email) {
    errors.email = 'Email is not filled'
  }

  if (!values.password) {
    errors.password = 'Password is not filled'
  } else {
    if (
      NOT_ALLOWED_PASSWORDS.includes(values.password) ||
      NOT_ALLOWED_PASSWORDS.includes(values.password.toUpperCase()) ||
      !passwordRegex(values.password)
    ) {
      errors.password = 'Password is too simple'
    }
    if (values.password.length < MINIMUM_PASSWORD_LENGTH) {
      errors.password = 'Password is too short'
    }
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = 'You need to repeat password'
  }

  if (values.password !== values.repeatPassword) {
    errors.repeatPassword = 'Passwords are not equal'
  }

  return errors
}
