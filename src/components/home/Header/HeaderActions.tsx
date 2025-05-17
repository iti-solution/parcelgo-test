'use client'

import styles from './header.module.scss'

import poland from '@/assets/images/poland.png'
import theUnitedKingdom from '@/assets/images/the-united-kingdom.png'

import { useTranslations } from 'next-intl'

import { BiGlobe, BiMoon, BiSun } from 'react-icons/bi'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { Squash as Hamburger } from 'hamburger-react'

import { ButtonPrimary } from '@/components/ui/Button'

import { useOutside, useHash } from '@/hooks'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { usePathname, useRouter } from '@/i18n/routing'
import { useCallback, useEffect, useState, useRef } from 'react'

const HeaderActions = () => {

    const hash = useHash()
    const params = useParams()
    const router = useRouter()
    const pathname = usePathname()

    const languageRef = useRef<HTMLDivElement>(null)

    const { theme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false)

    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)

    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

    const translation = useTranslations('Home.HeaderActions')

    const handleTheme = useCallback(() => {

        setTheme(theme === 'dark' ? 'light' : 'dark')

    }, [theme, setTheme])

    const toggleLanguageMenu = () => {

        setIsLanguageMenuOpen(true)

    }

    const handleLanguageChange = (lang: string) => {

        router.replace(
            // @ts-expect-error
            { pathname, params },
            { locale: lang }
        )

        setIsLanguageMenuOpen(false)
    }

    const handleHamburgerMenu = useCallback((isOpen: any) => {

        const navElement = document.querySelector<HTMLElement>('#parcelgo-nav-intersection')
        const heroElement = document.querySelector<HTMLElement>('#parcelgo-hero-intersection')
        const headerElement = document.querySelector<HTMLElement>('#parcelgo-header-intersection')

        if (isOpen) {

            setIsHamburgerMenuOpen(true)

            navElement?.classList.add(styles.navActive)

            headerElement?.classList.add(styles.rootActive)


        } else {

            setIsHamburgerMenuOpen(false)

            navElement?.classList.remove(styles.navActive)

            if (heroElement) {

                const heroRect = heroElement.getBoundingClientRect()
                const isIntersecting = heroRect.top >= 0 && heroRect.bottom <= window.innerHeight

                if (isIntersecting) {
                    headerElement?.classList.remove(styles.rootActive)
                }

            }

        }



    }, [])

    useEffect(() => {

        const navElement = document.querySelector<HTMLElement>('#parcelgo-nav-intersection')
        const heroElement = document.querySelector<HTMLElement>('#parcelgo-hero-intersection')
        const headerElement = document.querySelector<HTMLElement>('#parcelgo-header-intersection')

        const callback: IntersectionObserverCallback = ([entry]) => {

            if (!entry?.isIntersecting) {

                headerElement?.classList.add(styles.rootActive)

            } else {

                setIsHamburgerMenuOpen(false)

                navElement?.classList.remove(styles.navActive)

                headerElement?.classList.remove(styles.rootActive)
            }

        }

        const observer = new IntersectionObserver(callback, { threshold: 0 })

        if (heroElement) {
            observer.observe(heroElement)
        } else {
            headerElement?.classList.add(styles.rootActive)
        }

        return () => {
            if (heroElement) observer.unobserve(heroElement)
        }

    }, [pathname])


    useEffect(() => {

        const navElement = document.querySelector<HTMLElement>('#parcelgo-nav-intersection')

        setIsHamburgerMenuOpen(false)

        navElement?.classList.remove(styles.navActive)

    }, [hash, pathname])

    useEffect(() => { setMounted(true) }, [])

    useOutside(languageRef, () => setIsLanguageMenuOpen(false))

    return (
        <div className={styles.actions}>

            <ButtonPrimary action="contact">{translation('TryIt')}</ButtonPrimary>

            <motion.button
                type="button"
                onClick={handleTheme}
                aria-label={translation('Theme')}
                className={styles.actionsButton}
            >
                {mounted && (
                    <motion.div
                        key={theme}
                        initial={{ scale: 0.8, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0.8, rotate: 90 }}
                        transition={{ duration: 0.15 }}
                    >
                        {theme === 'dark' ? <BiMoon /> : <BiSun />}
                    </motion.div>
                )}
            </motion.button>

            <button
                type="button"
                aria-label={translation('Language')}
                className={styles.actionsButton}
                onClick={toggleLanguageMenu}
            >
                <BiGlobe />
            </button>

            {isLanguageMenuOpen && (
                <div ref={languageRef} className={styles.actionsLanguage}>

                    <button onClick={() => handleLanguageChange('pl')} className={styles.actionsLanguageItem}>
                        <Image src={poland} alt="pl" />
                        <span>{translation('Polish')}</span>
                    </button>

                    <button onClick={() => handleLanguageChange('en')} className={styles.actionsLanguageItem}>
                        <Image src={theUnitedKingdom} alt="en" />
                        <span>{translation('English')}</span>
                    </button>

                </div>
            )}

            <Hamburger size={24} toggled={isHamburgerMenuOpen} toggle={handleHamburgerMenu} />

        </div>
    )
}

export default HeaderActions
