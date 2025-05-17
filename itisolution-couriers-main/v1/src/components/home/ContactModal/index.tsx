'use client'

import styles from './contact-modal.module.scss'

import ContactModalArticle from './ContactModalArticle'
import ContactModalForm from './ContactModalForm'

import { useOutside } from '@/hooks'
import { useCallback, useEffect, useRef, useState } from 'react'

const ContactModal = () => {

    const [email, setEmail] = useState<string | undefined>(undefined)

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

        setEmail(undefined)

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

            if (target.dataset.action === 'contact') {

                setVisible(true)

                const parent = target.parentElement

                if (parent) {

                    const input = parent.querySelector('input[type="email"]') as HTMLInputElement

                    if (input) setEmail(input?.value?.length ? input.value : undefined)

                }
            }

        }


    }, [])

    useEffect(() => {

        const rootElement = document.documentElement as HTMLElement

        rootElement.addEventListener('click', handleVisible)

        return () => {
            rootElement.removeEventListener('click', handleVisible)
        }

    }, [handleVisible])

    useEffect(() => {

        if (!visible) return

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = `${scrollbarWidth}px`

        return () => {
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }

    }, [visible])

    useOutside(rootWrapperRef, handleUnload)

    if (visible) return (
        <div ref={rootRef} className={styles.root}>

            <div ref={rootWrapperRef} className={styles.rootWrapper}>

                <ContactModalArticle handleUnload={handleUnload} />

                <ContactModalForm email={email} />

            </div>

        </div>
    )
}

export default ContactModal
