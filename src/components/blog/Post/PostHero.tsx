import styles from './post.module.scss'

import Image from 'next/image'

import type { Media, Category, Author } from '@/payload-types'
import { useLocale } from 'next-intl'

type Props = {
    title: string
    description: string
    image: Media | number
    categories: Category[] | any[]
    author: Author | number
    createdAt: string
    updatedAt: string
}

const PostHero = (props: Props) => {

    const locale = useLocale()

    return (
        <div className={styles.hero}>

            <div className={styles.heroContent}>

                <div className={styles.heroContentCategories}>
                    {props.categories.map(item => typeof item !== 'number' && (<div key={'category-' + item.id} className={styles.heroContentCategoriesItem}>{item.name}</div>))}
                </div>

                <h1 className={styles.heroContentTitle}>{props.title}</h1>

                {typeof props.author !== 'number' && <div className={styles.heroContentAuthor}>

                    <div className={styles.heroContentAuthorAvatar}>

                        {typeof props.author.avatar !== 'number' && props.author.avatar?.url && (<Image src={props.author.avatar.url} alt={props.author.avatar.alt} height={100} width={100} />)}

                    </div>

                    <div className={styles.heroContentAuthorDetails}>
                        
                        <div className={styles.heroContentAuthorDetailsName}>{props.author.fullName}</div>

                        <div className={styles.heroContentAuthorDetailsRole}>{props.author.role}</div>

                    </div>


                    <div className={styles.heroContentAuthorDate}>{new Date(props.createdAt).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</div>

                </div>}

            </div>

            <div className={styles.heroThumbnail}>

                {typeof props.image !== 'number' && props.image?.url && (<Image src={props.image.url} alt={props.image.alt} fill />)}

            </div>

        </div>
    )
}

export default PostHero