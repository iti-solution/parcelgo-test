import styles from './header.module.scss'

import { cn, scrollToSection } from '@/utils'

import { Link, usePathname, useRouter } from '@/i18n/routing'
import { useMemo, useEffect, useState, useCallback } from 'react'

type Props = {
    href: string
    title: string
    exact?: boolean
}

const HeaderNavItem = ({ href, title, exact = false }: Props) => {

    const router = useRouter()
    const pathname = usePathname()

    const [view, setView] = useState<boolean>(false)

    const handleClick = useCallback(async (event: React.MouseEvent<Element>, href: string) => {

        event.preventDefault()

        const sectionId = href.replace('/#', '')

        if (pathname !== '/') {
            router.push(href)
            return
        }

        scrollToSection(sectionId)

    }, [pathname, router])

    useEffect(() => {

        const handleScroll = () => {

            const section = document.querySelector(`#${href.substring(2)}`)

            if (section) {
                const rect = section.getBoundingClientRect()
                const isInView = rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3
                setView(isInView)
            } else {
                setView(false)
            }

        }

        if (href.startsWith('/#')) {

            window.addEventListener('scroll', handleScroll)

            handleScroll()

            return () => window.removeEventListener('scroll', handleScroll)

        } else {

            setView(exact ? pathname === href : pathname.startsWith(href))
        }

    }, [pathname, href, exact])

    const isActive = useMemo(() => view ? styles.navListItemActive : '', [view])

    return (
        <li className={cn(styles.navListItem, isActive)}>
            {href.startsWith('/#') ? <Link href={href} onClick={event => handleClick(event, href)}>{title}</Link> : <Link href={href}>{title}</Link>}
        </li>
    )
}

export default HeaderNavItem
