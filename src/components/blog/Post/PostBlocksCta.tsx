import styles from './post.module.scss'

import { ButtonPrimary } from '@/components/ui/Button'

import { useTranslations } from 'next-intl'

type Props = {
    data: {
        title?: string
        description?: string
    }
}

const PostBlocksCta = ({ data }: Props) => {
    
    const translation = useTranslations('Core.Cta')

    return (
        <div className={styles.blocksCta}>

            <div className={styles.blocksCtaTitle}>{data.title || translation('Title')}</div>

            <p className={styles.blocksCtaDescription}>{data.description || translation('Description')}</p>

            <ButtonPrimary action="contact">{translation('ButtonText')}</ButtonPrimary>
            
        </div>
    )
}

export default PostBlocksCta