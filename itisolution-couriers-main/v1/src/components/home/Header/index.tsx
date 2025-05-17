'use client'

import styles from './header.module.scss'

import Wrapper from '@/components/ui/Wrapper'

import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderActions from './HeaderActions'

import { cn } from '@/utils'
import { useSelectedLayoutSegments } from 'next/navigation'

const Header = () => {

    const segments = useSelectedLayoutSegments()

    const isActive = segments.some(segment => ['blog'].includes(segment)) ? styles.rootActive : ''

    return (
        <header className={cn(styles.root, isActive)} id="parcelgo-header-intersection">

            <Wrapper className={styles.rootWrapper}>

                <HeaderLogo />

                <HeaderNav />

                <HeaderActions />

                {/* <HeaderObserver /> */}

            </Wrapper>

        </header>
    )
}

export default Header