import { memo } from 'react'
import Block from '../../Block'
import Button from '../../Button'
import { MailOutline } from '../../Icon'
import Text from '../../Text'
import TextField from '../../TextField'
import { ResetPasswordProps } from './types'

export const ResetPassword = memo((props: ResetPasswordProps) => {
  const { formik, errorMessage } = props
  const { values, errors, touched, handleBlur, handleChange, isSubmitting } =
    formik

  return (
    <>
      <Block
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginB="l"
      >
        <Text textAlign="center">
          Enrer the email associated with your account and we’ll send an email
          with instructions to reset your password
        </Text>
      </Block>
      <TextField
        id="email"
        value={values.email}
        type="email"
        placeholder="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!(touched.email && errors.email)}
        helperText={touched.email ? errors.email : ''}
        InputProps={{
          startAdornment: (
            <MailOutline sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          ),
        }}
        fullWidth
      />
      <Block
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginV="l"
      >
        <Button size="large" type="submit" disabled={isSubmitting}>
          <Text size="m" fontColor="white">
            Send instructions
          </Text>
        </Button>
      </Block>
      {errorMessage && (
        <Block
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          marginT="s"
          marginB="l"
        >
          <Text fontColor="alert" size="m" textAlign="center">
            {errorMessage}
          </Text>
        </Block>
      )}
    </>
  )
})

ResetPassword.displayName = 'SignIn'

export default ResetPassword
