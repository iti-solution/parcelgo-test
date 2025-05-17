import styles from './posts.module.scss'

import { useTranslations } from 'next-intl'

const PostsArticle = () => {

    const translation = useTranslations('Posts.General')

    return (
        <div className={styles.article}>

            <h1 className={styles.articleTitle}>{translation('Title')}</h1>

        </div>
    )
}

export default PostsArticle