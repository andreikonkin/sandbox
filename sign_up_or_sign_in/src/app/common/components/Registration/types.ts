import { DialogProps } from '../Dialog'

export type RegistrationData = {
  username: string
  email: string
  password: string
  repeatPassword: string
  firstName: string
  lastName: string
}

export type RegistrationState = Omit<
  RegistrationData,
  'password' | 'repeatPassword'
>

export type RegistrationProps = {
  open: DialogProps['open']
  setOpenRegistrationForm(value: boolean): void
}
