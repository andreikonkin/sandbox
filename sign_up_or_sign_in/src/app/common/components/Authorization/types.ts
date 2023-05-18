import { DialogProps } from '../Dialog'

export type AuthorizationProps = {
  open: DialogProps['open']
  setOpenAuthorizationForm: React.Dispatch<React.SetStateAction<boolean>>
  setOpenRegistrationForm: React.Dispatch<React.SetStateAction<boolean>>
}

export type AuthorizationData = {
  email: string
  password: string
}

export type FormVariant = 'sign in' | 'reset password'

type FormSetting = {
  label: string
}

export type FormVariantSettings = Readonly<Record<FormVariant, FormSetting>>
