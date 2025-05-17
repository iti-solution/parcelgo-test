import styles from './contact.module.scss'

type Props = {
    title: string
    description: string
}

const ContactArticle = (props: Props) => {

    return (
        <article className={styles.article}>

            <h2 className={styles.articleTitle}>{props.title}</h2>

            <p className={styles.articleDescription}>{props.description}</p>


        </article>
    )
}

export default ContactArticle