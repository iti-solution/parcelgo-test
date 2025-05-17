import styles from './header.module.scss'

import HeaderNavItem from './HeaderNavItem'

import { useTranslations } from 'next-intl'

const HeaderNav = () => {

    const translation = useTranslations('Home.HeaderNav')

    return (
        <nav id="parcelgo-nav-intersection" className={styles.nav}>

            <ul className={styles.navList}>

                <HeaderNavItem
                    title={translation('Functionalities')}
                    href="/#functionalities"
                />

                <HeaderNavItem
                    title={translation('Pricing')}
                    href="/#pricing"
                />

                <HeaderNavItem
                    title={translation('Contact')}
                    href="/#contact"
                />

                <HeaderNavItem
                    title={translation('Blog')}
                    href="/blog"
                />

            </ul>

        </nav>
    )
}

export default HeaderNav
