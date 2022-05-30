import type { ReactElement } from 'react'
import DefaultLayout from '../components/layouts/default'

const HomePage = () => {
  return (
    <></>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export default HomePage