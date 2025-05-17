'use client'

import styles from './contact.module.scss'

import ContactArticle from './ContactArticle'
import ContactForm from './ContactForm'

import { useRouter } from 'next/navigation'

import { useOutside } from '@/hooks'
import { useCallback, useEffect, useRef, useState } from 'react'

const Contact = () => {

    const router = useRouter()

    const [visible, setVisible] = useState<boolean>(false)

    const rootRef = useRef<HTMLDivElement>(null)
    const rootWrapperRef = useRef<HTMLDivElement>(null)

    const onAnimationEnd = useCallback((event: AnimationEvent) => {

        const target = event.target as HTMLElement

        if (target) target.style.display = 'none'

        setVisible(false)

    }, [])

    const handleUnload = useCallback(() => {

        if (!rootRef.current || !rootWrapperRef.current) return

        const root = rootRef.current as HTMLElement
        const rootWrapper = rootWrapperRef.current as HTMLElement

        root.classList.add(styles.rootUnload)
        rootWrapper.classList.add(styles.rootWrapperUnload)

        root.addEventListener('animationend', onAnimationEnd, { once: true })

    }, [onAnimationEnd])


    useEffect(() => {

        const root = rootRef.current as HTMLElement

        return () => {
            if (root) root.removeEventListener('animationend', onAnimationEnd)
        }

    }, [rootWrapperRef, onAnimationEnd])

    const handleVisible = useCallback((event: MouseEvent) => {

        const target = event.target as HTMLElement

        if (target && target instanceof HTMLButtonElement) {

            console.log(target.dataset.action)

            if (target.dataset.action === 'contact') setVisible(true)

        }


    }, [])

    useEffect(() => {

        const rootElement = document.documentElement as HTMLElement

        rootElement.addEventListener('click', handleVisible)

        return () => {
            rootElement.removeEventListener('click', handleVisible)
        }

    }, [handleVisible])

    useOutside(rootWrapperRef, handleUnload)

    if (visible) return (
        <div ref={rootRef} className={styles.root}>

            <div ref={rootWrapperRef} className={styles.rootWrapper}>

                <ContactArticle />

                <ContactForm />

            </div>

        </div>
    )
}

export default Contact
