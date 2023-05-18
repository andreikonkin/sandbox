import { RegistrationData } from './types'

export const MINIMUM_USERNAME_LENGTH = 5

export const MINIMUM_PASSWORD_LENGTH = 6

export const NOT_ALLOWED_PASSWORDS = [
  '12345',
  'qwerty',
  '54321',
  '11111',
  '22222',
]

export const EMPTY_REGISTRATION: RegistrationData = Object.freeze({
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
  firstName: '',
  lastName: '',
})
