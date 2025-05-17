import styles from './action.module.scss'

import { ButtonPrimary } from '@/components/ui/Button'

import { useTranslations } from 'next-intl'

const ActionArticle = () => {

    const translation = useTranslations('Core.Cta')

    return (
        <article className={styles.article}>

            <h2 className={styles.articleTitle}>{translation('Title')}</h2>

            <p className={styles.articleDescription}>{translation('Description')}</p>

            <ButtonPrimary action="contact">{translation('ButtonText')}</ButtonPrimary>

        </article>
    )
}

export default ActionArticle