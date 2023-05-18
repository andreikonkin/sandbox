import { AuthorizationData, FormVariantSettings } from './types'

export const FORM_SETTINGS: FormVariantSettings = Object.freeze({
  'sign in': {
    label: 'Sign In',
  },
  'reset password': {
    label: 'Reset Password',
  },
})

export const EMPTY_AUTHORIZATION: AuthorizationData = Object.freeze({
  email: '',
  password: '',
})
