'use client'

import styles from './faq.module.scss'

import { PiPlusBold } from 'react-icons/pi'

import { motion, AnimatePresence } from 'framer-motion'
import { useCallback, useState } from 'react'

import type { HomePage } from '@/payload-types'

type Props = NonNullable<HomePage['faq']['items']>[number]

const FaqContainerItem = (props: Props) => {

    const [expanded, setExpanded] = useState<boolean>(false)

    const handleClick = useCallback(() => {

        setExpanded(!expanded)

    }, [expanded])

    return (

        <AnimatePresence initial={false}>
            <motion.div
                exit={{ height: 80 }}
                animate={{ height: expanded ? 'auto' : 80 }}
                className={styles.containerItem}
            >

                <div
                    onClick={handleClick}
                    className={styles.containerItemQuestion}
                >
                    <h3>{props.question}</h3>

                    <button aria-label={expanded ? 'Zwiń pytanie' : 'Rozwiń pytanie'} type="button">
                        <motion.span animate={{ rotate: expanded ? '45deg' : '0deg' }}>
                            <PiPlusBold />
                        </motion.span>
                    </button>

                </div>


                <div
                    key="answer"
                    className={styles.containerItemAnswer}
                >
                    <p>{props.answer}</p>
                </div>


            </motion.div>
        </AnimatePresence>
    )
}

export default FaqContainerItem