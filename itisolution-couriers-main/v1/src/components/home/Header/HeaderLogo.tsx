import styles from './header.module.scss'

import { Link } from '@/i18n/routing'

const HeaderLogo = () => {

    return (
        <div className={styles.logo}>

            <Link href="/">ParcelGo</Link>

        </div>
    )
}

export default HeaderLogo