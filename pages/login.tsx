import type { ReactElement } from 'react'
import LoginLayout from '../components/layouts/login'
import Login from '../components/auth/Login'

const LoginPage = () => {
  return (
    <Login />
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LoginLayout>
      {page}
    </LoginLayout>
  )
}

export default LoginPage