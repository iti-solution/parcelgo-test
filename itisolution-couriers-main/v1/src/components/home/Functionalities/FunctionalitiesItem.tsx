'use client'

import styles from './functionalities.module.scss'

import { motion } from 'framer-motion'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

import type { HomePage } from '@/payload-types'

type Props = NonNullable<HomePage['functionalities']['items']>[number] & { index: number }

const FunctionalitiesItem = (props: Props) => {

    const itemRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    const isEven = props.index % 2 === 0

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )

        if (itemRef.current) {
            observer.observe(itemRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <motion.div
            ref={itemRef}
            className={styles.item}
            initial={{ opacity: 0, x: isEven ? -100 : 100, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', bounce: 0.25 }}
        >
            <article className={styles.itemArticle} >
                <h2 className={styles.itemArticleTitle}>{props.title}</h2>
                <p className={styles.itemArticleDescription}>{props.description}</p>
            </article>
            <div className={styles.itemImage}>
                {typeof props.image === 'object' && props.image?.url && (
                    <Image src={props.image.url} alt={props.image.alt} sizes="(max-width: 768px) 100vw, 50vw" fill />
                )}
            </div>
        </motion.div>
    )
}

export default FunctionalitiesItem
