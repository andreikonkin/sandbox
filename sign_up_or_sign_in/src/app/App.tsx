import { lazy, memo, Suspense, useState } from 'react'
import Block from './common/components/Block'
import Button from './common/components/Button'
import Text from './common/components/Text'

const Registration = lazy(() => import('./common/components/Registration'))

function App() {
  const [openRegistrationForm, setOpenRegistrationForm] = useState(false)
  const [openAuthorizationForm, setOpenAuthorizationForm] = useState(false)

  const Authorization = lazy(() => import('./common/components/Authorization'))

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Block
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          gap: '16px',
        }}
      >
        <Button
          color="primary"
          size="large"
          onClick={() => setOpenAuthorizationForm(true)}
        >
          <Text>Sing In</Text>
        </Button>
        <Button
          size="large"
          color="secondary"
          onClick={() => setOpenRegistrationForm(true)}
        >
          <Text>Sign Up</Text>
        </Button>
      </Block>
      <Registration
        open={openRegistrationForm}
        setOpenRegistrationForm={setOpenRegistrationForm}
      />
      <Authorization
        open={openAuthorizationForm}
        setOpenAuthorizationForm={setOpenAuthorizationForm}
        setOpenRegistrationForm={setOpenRegistrationForm}
      />
    </Suspense>
  )
}

export default memo(App)
