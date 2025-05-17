import styles from './faq.module.scss'

type Props = {
    title: string
    description: string
}

const FaqArticle = (props: Props) => {

    return (
        <article className={styles.article}>
            <h2 className={styles.articleTitle}>{props.title}</h2>
            <p className={styles.articleDescription}>{props.description}</p>
        </article>
    )
}

export default FaqArticle