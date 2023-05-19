import { useFormik } from 'formik'
import { useCallback, useState } from 'react'
import Block from '../Block'
import Dialog, { HandleClose } from '../Dialog'
import { CloseIcon } from '../Icon'
import IconButton from '../IconButton'
import Text from '../Text'
import { EMPTY_AUTHORIZATION, FORM_SETTINGS } from './constants'
import ResetPassword from './ResetPassword'
import SignIn from './SignIn'
import { StyledAuthorization } from './styled'
import { AuthorizationData, AuthorizationProps, FormVariant } from './types'
import { getErrors } from './utils'

function Authorization(props: AuthorizationProps): JSX.Element {
  const { open, setOpenAuthorizationForm, setOpenRegistrationForm } = props

  const [errorMessage, setErrorMessage] = useState('')
  const [formVariant, setFormVariant] = useState<FormVariant>('sign in')

  const validate = useCallback(
    (values: AuthorizationData) => getErrors(values),
    []
  )

  const formik = useFormik<AuthorizationData>({
    initialValues: { ...EMPTY_AUTHORIZATION },
    validate,
    onSubmit: async (values: AuthorizationData, { resetForm }) => {
      setErrorMessage(`Authorization of ${values.email}`)
      resetForm({ values: { ...EMPTY_AUTHORIZATION } })
    },
  })

  const { handleSubmit, handleReset, resetForm } = formik

  const handleClose = useCallback<HandleClose>(
    (_, reason) => {
      if (reason === 'backdropClick') {
        return
      }
      setOpenAuthorizationForm(false)
      setTimeout(() => {
        setFormVariant('sign in')
        resetForm({ values: { ...EMPTY_AUTHORIZATION } })
      }, 500)
    },
    [setOpenAuthorizationForm, resetForm]
  )

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      keepMounted
      fullWidth
      PaperProps={{ style: { maxWidth: '400px' } }}
    >
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
      <StyledAuthorization onSubmit={handleSubmit} onReset={handleReset}>
        <Block
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          marginB="l"
        >
          <Text size="l">{FORM_SETTINGS[formVariant].label}</Text>
        </Block>
        {formVariant === 'sign in' ? (
          <SignIn
            setFormVariant={setFormVariant}
            errorMessage={errorMessage}
            formik={formik}
            setOpenAuthorizationForm={setOpenAuthorizationForm}
            setOpenRegistrationForm={setOpenRegistrationForm}
          />
        ) : (
          <ResetPassword errorMessage={errorMessage} formik={formik} />
        )}
      </StyledAuthorization>
    </Dialog>
  )
}

export default Authorization
