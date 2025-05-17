'use client'


import styles from './contact-modal.module.scss'

import { PiXBold } from 'react-icons/pi'

import { useTranslations } from 'next-intl'

const ContactModalArticle = ({ handleUnload }: { handleUnload: () => void }) => {

    const translation = useTranslations('Home.ContactModal')

    return (
        <article className={styles.article}>
            <h2 className={styles.articleTitle}>{translation('Title')}</h2>
            <button onClick={handleUnload} type="button" className={styles.articleButton}><PiXBold /></button>
        </article>
    )
}

export default ContactModalArticle