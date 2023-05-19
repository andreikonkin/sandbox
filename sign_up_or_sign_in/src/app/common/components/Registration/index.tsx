import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { useFormik } from 'formik'
import { useCallback, useEffect, useState } from 'react'
import {
  lowercaseRegex,
  numberRegex,
  specialCharacterRegex,
  uppercaseRegex,
} from '../../utils'
import Block from '../Block'
import Button from '../Button'
import Dialog, { HandleClose } from '../Dialog'
import { CloseIcon, MailOutline } from '../Icon'
import IconButton from '../IconButton'
import PasswordField from '../PasswordField'
import Text from '../Text'
import { EMPTY_REGISTRATION } from './constants'
import PasswordHelper from './PasswordHelper'
import { StyledRegistrationForm, StyledRegistrationFormLine } from './styled'
import TextFieldRegistration from './TextFieldRegistration'
import { RegistrationData, RegistrationProps } from './types'
import { getErrors } from './utils'

function Registration(props: RegistrationProps): JSX.Element {
  const { open, setOpenRegistrationForm } = props

  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  const [passwordContainsLowercase, setPasswordContainLowercase] =
    useState(false)
  const [passwordContainsUppercase, setPasswordContainUppercase] =
    useState(false)
  const [passwordContainsNumber, setPasswordContainNumber] = useState(false)
  const [passwordContainsSpecialCharacter, setPasswordContainSpecialCharacter] =
    useState(false)

  const [errorMessage, setErrorMessage] = useState('')
  const validate = useCallback(
    (values: RegistrationData) => getErrors(values),
    []
  )

  const formik = useFormik<RegistrationData>({
    initialValues: { ...EMPTY_REGISTRATION },
    validate,
    onSubmit: async (values: RegistrationData, { resetForm }) => {
      setErrorMessage(`Registration of: username: ${values.username}`)
      resetForm({
        values: { ...EMPTY_REGISTRATION },
      })
    },
  })

  const {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleReset,
  } = formik

  const formikProps = {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  }

  const onKeyDown = useCallback(
    (event: Pick<KeyboardEvent, 'key' | 'preventDefault'>) => {
      if (event.key === 'Enter') {
        event.preventDefault()
      }
    },
    []
  )

  const handleClose = useCallback<HandleClose>(
    (_, reason) => {
      if (reason === 'backdropClick') {
        return
      }
      setOpenRegistrationForm(false)
      setTimeout(() => {
        setErrorMessage('')
      }, 500)
    },
    [setOpenRegistrationForm]
  )

  useEffect(() => {
    setPasswordContainNumber(numberRegex(values.password))
    setPasswordContainLowercase(lowercaseRegex(values.password))
    setPasswordContainUppercase(uppercaseRegex(values.password))
    setPasswordContainSpecialCharacter(specialCharacterRegex(values.password))
  }, [values])

  return (
    <Dialog open={open} onClose={handleClose} fullWidth keepMounted>
      <Block
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        marginR="s"
        marginT="s"
      >
        <IconButton onClick={() => handleClose({}, 'escapeKeyDown')}>
          <CloseIcon />
        </IconButton>
      </Block>
      <StyledRegistrationForm
        onSubmit={handleSubmit}
        onReset={handleReset}
        onKeyDown={onKeyDown}
      >
        <Block
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Text size="l">Welcome!</Text>
        </Block>
        <Block
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Text size="m">All fields below are required unless specified.</Text>
        </Block>
        <StyledRegistrationFormLine>
          <TextFieldRegistration
            id="username"
            placeholder="Username"
            type="text"
            InputProps={{
              startAdornment: (
                <AccountCircleOutlinedIcon
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                />
              ),
            }}
            {...formikProps}
          />
          <TextFieldRegistration
            id="email"
            placeholder="Email address"
            type="email"
            InputProps={{
              startAdornment: (
                <MailOutline sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              ),
            }}
            {...formikProps}
          />
        </StyledRegistrationFormLine>
        <StyledRegistrationFormLine>
          <TextFieldRegistration
            id="firstName"
            placeholder="First name"
            type="text"
            {...formikProps}
          />
          <TextFieldRegistration
            id="lastName"
            placeholder="Last name"
            type="text"
            {...formikProps}
          />
        </StyledRegistrationFormLine>
        <StyledRegistrationFormLine>
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
          <PasswordField
            id="repeatPassword"
            placeholder="Repeat password"
            value={values.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            showPassword={showRepeatPassword}
            setShowPassword={setShowRepeatPassword}
            error={!!(touched.repeatPassword && errors.repeatPassword)}
            helperText={touched.repeatPassword ? errors.repeatPassword : ''}
          />
        </StyledRegistrationFormLine>
        {errors.password && touched.password && (
          <PasswordHelper
            passwordContainsLowercase={passwordContainsLowercase}
            passwordContainsUppercase={passwordContainsUppercase}
            passwordContainsNumber={passwordContainsNumber}
            passwordContainsSpecialCharacter={passwordContainsSpecialCharacter}
          />
        )}

        <Block
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button size="large" type="submit" disabled={isSubmitting}>
            <Text size="m">Create an account</Text>
          </Button>
        </Block>
        {errorMessage && (
          <Block
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginV="s"
          >
            <Text fontColor="alert" size="m">
              {errorMessage}
            </Text>
          </Block>
        )}
      </StyledRegistrationForm>
    </Dialog>
  )
}

export default Registration
