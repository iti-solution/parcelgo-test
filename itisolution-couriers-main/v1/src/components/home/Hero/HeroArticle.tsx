'use client'

import styles from './hero.module.scss'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ButtonPrimary } from '@/components/ui/Button'

import { useTranslations } from 'next-intl'

import type { HomePage } from '@/payload-types'

type Props = {
    title: string
    description: string
    phrases: NonNullable<HomePage['hero']['phrases']>
}

const HeroArticle = (props: Props) => {

    const [index, setIndex] = useState<number>(0)

    const translation = useTranslations('Core.Cta')

    useEffect(() => {
        
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % props.phrases.length)
        }, 3000)

        return () => clearInterval(interval)

    }, [props.phrases.length])

    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>
                {props?.title?.split('\n').map((item, key) => <span key={'heading-' + key}>{item}</span>)}
                <span>
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={props.phrases[index].id}
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: "0%", opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ duration: .75, ease: "easeInOut" }}
                        >
                            {props.phrases[index].phrase}
                        </motion.span>
                    </AnimatePresence>
                </span>
            </h1>

            <p className={styles.articleDescription}>{props.description}</p>

            <ButtonPrimary action="contact">{translation('ButtonText')}</ButtonPrimary>
        </article>
    )
}

export default HeroArticle