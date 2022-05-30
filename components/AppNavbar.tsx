import Link from 'next/link'
import styles from '../assets/styles/Navbar.module.scss'
import { Logo } from '../utils/svg'

const AppNavbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </div>
  )
}

export default AppNavbar
