import styles from './pricing.module.scss'

type Props = {
    title: string
    description: string
}

const PricingArticle = (props: Props) => {

    return (
        <article className={styles.article}>

            <h2 className={styles.articleTitle}>{props.title}</h2>

            <p className={styles.articleDescription}>{props.description}</p>

        </article>
    )
}

export default PricingArticle