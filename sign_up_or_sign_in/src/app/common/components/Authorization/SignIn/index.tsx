import { memo, useState } from 'react'
import Block from '../../Block'
import Button from '../../Button'
import { MailOutline } from '../../Icon'
import PasswordField from '../../PasswordField'
import Text from '../../Text'
import TextField from '../../TextField'
import { SignInProps } from './types'

export const SignIn = memo((props: SignInProps) => {
  const {
    formik,
    errorMessage,
    setFormVariant,
    handleClose,
    setOpenRegistrationForm,
  } = props
  const { values, errors, touched, handleBlur, handleChange, isSubmitting } =
    formik
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
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
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <PasswordField
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          error={!!(touched.password && errors.password)}
          helperText={touched.password ? errors.password : ''}
        />
        <Button variant="text" onClick={() => setFormVariant('reset password')}>
          <Text size="xs">Forget password?</Text>
        </Button>
      </Block>
      <Block
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button size="large" type="submit" disabled={isSubmitting}>
          <Text size="m">Sign In</Text>
        </Button>
      </Block>
      {errorMessage && (
        <Block
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          marginT="l"
          marginB="s"
        >
          <Text fontColor="alert" size="m" textAlign="center">
            {errorMessage}
          </Text>
        </Block>
      )}
      <Block
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginT="l"
      >
        <Text textAlign="center" size="s">
          Have not account yet?
        </Text>
        <Button
          variant="text"
          onClick={() => {
            handleClose({}, 'escapeKeyDown')
            setOpenRegistrationForm(true)
          }}
        >
          <Text size="s">Sign Up</Text>
        </Button>
      </Block>
    </>
  )
})

SignIn.displayName = 'SignIn'

export default SignIn
